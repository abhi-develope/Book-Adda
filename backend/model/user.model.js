import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: Stringe,
        required: true,
    },
    sex: {
       type: String,
       possibleValues: [male, female],
       required: true,
    },
    email: {
        type: Stringe,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const User = mongoose.model("User", userSchema);
export default User