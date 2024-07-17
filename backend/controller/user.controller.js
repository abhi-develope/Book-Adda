import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password, sex } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const createUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
      // sex
    });
    await createUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
