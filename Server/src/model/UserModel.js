import mongoose from "mongoose"

const UserSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String, required: true },
        location: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const UserModel = mongoose.model("users", UserSchema)

export default UserModel;


