import rootPath from 'app-root-path';
import fs from 'fs-extra';
import supertest from 'supertest';
import { InstanceType } from 'typegoose';

import { Mesh, MeshModel, ResourceStates } from '../routes/meshes/meshes.model';
import { FieldName, MeshStorage } from '../routes/meshes/meshes.storage';
import { GoogleAuthData } from '../routes/users/users.auth';
import { User, UserModel } from '../routes/users/users.model';

/** A test user */
export interface TestUser {
    /** The test user's fake auth data */
    auth: GoogleAuthData;

    /** The test user's id token, which is just a strigified version of the auth data */
    idToken: string;
}

/** A collection of test users */
export interface TestUserCollection {
    /** The first test user */
    one: TestUser;

    /** The second test user */
    two: TestUser;
}

/** Data for a mesh */
export interface TestMesh {
    /** The name of the mesh */
    name: string;

    /** A short description of the mesh */
    shortDesc: string;

    /** A long description of the mesh */
    longDesc: string;

    /** Path to test mesh files */
    files: Express.Multer.File[];
}

const rootCollateralDir = `${rootPath}/testCollateral`;

/** Shortcusts to files in the test collateral dir */
export class TestCollateral {
    public static BlenderImage = TestCollateral.createTestFile('blender.png', 'image/png');
    public static Cube_FBX = TestCollateral.createTestFile('cube.fbx', 'application/octet-stream');
    public static Cube_MTL = TestCollateral.createTestFile('cube.mtl', 'text/plain');
    public static Cube_OBJ = TestCollateral.createTestFile('cube.obj', 'text/plain');
    public static CubeWithTexture_FBX = TestCollateral.createTestFile('cube_with_img.fbx', 'application/octet-stream');

    /** Creates a test mesh file */
    public static createTestFile(filename: string, mimeType: string): Express.Multer.File {
        const path = `${rootPath}/testCollateral/${filename}`;
        return <Express.Multer.File><any>{
            buffer: fs.readFileSync(path),
            mimetype: mimeType,
            originalname: filename,
            path,
        };
    }
}

/** A collection of test meshes */
export interface TestMeshCollection {
    /** The first test mesh */
    one: TestMesh;

    /** The second test mesh */
    two: TestMesh;

    /** A mesh with textures */
    withTexture: TestMesh;

    /** An obj mesh */
    obj: TestMesh;
}

/** A collection of test data used during tests */
export interface TestData {
    /** A collection of test users */
    users: TestUserCollection;

    /** A collectino of test meshes */
    meshes: TestMeshCollection;

    /** An invalid database id */
    invalidId: string;
}

/** Auth data for the first test user */
const test1UserAuthData: GoogleAuthData = {
    idToken: 'abcdefg', // Fake id token
    id: '123456789', // Fake google id
    name: 'Test User 1', // user's name
    email: 'test1@test.com', // user's email
};

/** Auth data for the first test user */
const test2UserAuthData: GoogleAuthData = {
    idToken: 'hijklmnop', // Fake id token
    id: '987654321', // Fake google id
    name: 'Test User 2', // user's name
    email: 'test2@test.com', // user's email
};

/** A collection of test data for use in automation */
export const testData: TestData = {
    users: {
        one: {
            auth: test1UserAuthData,
            idToken: JSON.stringify(test1UserAuthData),
        },

        two: {
            auth: test2UserAuthData,
            idToken: JSON.stringify(test2UserAuthData),
        },
    },

    meshes: {
        one: {
            name: 'Test Mesh 1',
            shortDesc: 'This is a short description',
            longDesc: 'This is a really, really, really long description that\'s not actually all that long',
            files: [TestCollateral.Cube_FBX],
        },

        two: {
            name: 'Test Mesh 2',
            shortDesc: undefined,
            longDesc: undefined,
            files: [TestCollateral.Cube_FBX],
        },

        withTexture: {
            name: 'Test Mesh With Textures',
            shortDesc: undefined,
            longDesc: undefined,
            files: [
                TestCollateral.CubeWithTexture_FBX,
                TestCollateral.BlenderImage,
            ],
        },

        obj: {
            name: 'Test Mesh - obj file',
            shortDesc: undefined,
            longDesc: undefined,
            files: [TestCollateral.Cube_OBJ, TestCollateral.Cube_MTL],
        },
    },

    invalidId: '5b52594de29d171ae09642da',
};

// Create a super test  class override
// so we can add custom functions
export interface MedModeSuperTest extends supertest.Test {
    /** attaches a test mesh to the request */
    attachTestMesh(testMesh: TestMesh): MedModeSuperTest;
}

// Get the interface for requests so we can extend it
const requestClass = (<any>supertest).Test;

/** attaches a test mesh to the request */
requestClass.prototype.attachTestMesh = function (testMesh: TestMesh): MedModeSuperTest {
    if (testMesh.name != undefined && testMesh.name != undefined) {
        this.field('name', testMesh.name);
    }

    if (testMesh.shortDesc != undefined && testMesh.shortDesc != undefined) {
        this.field('shortDesc', testMesh.shortDesc);
    }

    if (testMesh.longDesc != undefined && testMesh.longDesc != undefined) {
        this.field('longDesc', testMesh.longDesc);
    }

    if (testMesh.files) {
        const self = this;
        testMesh.files.forEach((file: Express.Multer.File) => self.attach(FieldName, file.path));
    }

    return this;
};

/** Tests should import this reqesust to get extensions through intellidense */
export const request = (app: any): supertest.SuperTest<MedModeSuperTest> => {
    return <supertest.SuperTest<MedModeSuperTest>><any>supertest(app);
};

/** Creates a test user based on the specified token values */
export const createUser = (testUser: TestUser): Promise<InstanceType<User>> => {
    return UserModel.createUser(testUser.auth.id, testUser.auth.name, testUser.auth.email);
};

/** Creates a test mesh based on the specified data */
export const createMesh = async (owner: InstanceType<User>, testMesh: TestMesh, state?: ResourceStates): Promise<InstanceType<Mesh>> => {
    const mesh = await MeshModel.createMesh(
        owner,
        testMesh.name,
        testMesh.shortDesc,
        testMesh.longDesc,
        testMesh.files
    );

    // By default the mesh's state is processing
    // Update its state to the pased in value, if defined
    if (state != undefined) {
        await mesh.updateState(state);
    }

    return mesh;
};

