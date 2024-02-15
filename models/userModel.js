import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: [true, "Please provide first name"]
    },
    l_name: {
        type: String,
        required: [true, "Please provide last name"]
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
    },
    phone: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zip: String,
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User