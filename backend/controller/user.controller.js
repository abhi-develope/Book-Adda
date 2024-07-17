import User from "../model/user.model.js";

export const signup = (req, res) => {
    try {
        const {fullname, email, password,sex} = req.body;
        const user = User.findOne({email});
        if(user) {
            return res.status(400).json({ message: "user already exists"});
        }

        const createUser = new User({
            fullname,
            email,
            password,
            sex
        });
        createUser.save();
        res.status(201).json({message: "user created successfully"});
    } catch (error) {
        console.log("Error" + error.message);
        res.status(500).json({message: "Internal server error"})
        
        
    }
}