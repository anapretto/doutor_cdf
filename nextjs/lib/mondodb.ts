import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://root:example@localhost:27017/admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default connectDB;
