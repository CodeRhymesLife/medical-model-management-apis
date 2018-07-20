import { InstanceType } from 'typegoose';
import { GoogleAuthData } from '../routes/users/users.auth';
import { User, UserModel } from '../routes/users/users.model';

/** A fake token used to authenticate requests */
export const fakeIdToken: GoogleAuthData = {
    idToken: 'abcdefg', // Fake id token
    id: '123456789', // Fake google id
    name: 'Test User', // user's name
    email: 'test@test.com', // user's email
};

/** A stringified version of the fake id token */
export const fakeIdTokenHeaderValue = JSON.stringify(fakeIdToken);

/** Creates a test user based on the specified token values */
export const createUser = (userData: GoogleAuthData = fakeIdToken): Promise<InstanceType<User>> => {
    return UserModel.createUser(userData.id, userData.name, userData.email);
};

/** Deleted a test user based on the specified token values */
export const deleteUser = async (userData: GoogleAuthData = fakeIdToken): Promise<InstanceType<User>> => {
    return UserModel.remove({ 'google.id': userData.id}).exec();
};
