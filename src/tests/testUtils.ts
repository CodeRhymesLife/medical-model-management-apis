import { InstanceType } from 'typegoose';
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
}

/** A collection of test meshes */
export interface TestMeshCollection {
    /** The first test mesh */
    one: TestMesh;

    /** The second test mesh */
    two: TestMesh;
}

/** A collection of test data used during tests */
export interface TestData {
    /** A collection of test users */
    users: TestUserCollection;

    /** A collectino of test meshes */
    meshes: TestMeshCollection;
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
        },

        two: {
            name: 'Test Mesh 2',
            shortDesc: undefined,
            longDesc: undefined,
        }
    },
};

/** Creates a test user based on the specified token values */
export const createUser = (testUser: TestUser): Promise<InstanceType<User>> => {
    return UserModel.createUser(testUser.auth.id, testUser.auth.name, testUser.auth.email);
};

/** Deleted a test user based on the specified token values */
export const deleteUser = async (testUser: TestUser): Promise<InstanceType<User>> => {
    return UserModel.remove({ 'google.id': testUser.auth.id}).exec();
};
