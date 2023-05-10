import User from "../models/users.model.js";

export const userExist = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const userExists = await User.findById(userId);

    if (!userExists) {
      res.status(404).json({ message: "User not found" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
