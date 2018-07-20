import mongoose from 'mongoose';

/** Cleans the mongoose object after each test */
export const cleanMongoose = () => {
    // Need to cast so typescript doesn't complain about modelSchemas line
    const mongooseCast = <any> mongoose;

    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {};
    mongooseCast.modelSchemas = {};
    mongoose.connection.close();
};



/** Cleans mongoose after each test */
after((done) => {
    cleanMongoose();
    done();
});


