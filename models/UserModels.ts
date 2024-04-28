import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profileImg: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Must provide a username."],
        unique: [true, "Username already exists."],
    },
    email: {
        type: String,
        required: [true, "Must provide an email."],
        unique: [true, "Email already exists."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
    profileImg: {
        type: String,
        required: [true, "Profile image is required."],
    }
},
{
    timestamps: true
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
