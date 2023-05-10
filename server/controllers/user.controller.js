import User from "../models/users.model.js";

export const getUsers = async (_req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error retrieving user" });
  }
};

export const getUser = async (req, res) => {
  try {
    const UserId = req.params.id;

    const post = await User.findById(userId);

    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error retrieving user" });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    const validatedNewUser = new User(newUser);

    const savedData = await validatedNewUser.save();

    res.json(savedData);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error retrieving user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;

    await User.findByIdAndUpdate(userId, updatedUserData);
    const updatedUser = await User.findById(userId);

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error retrieving user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    await User.findByIdAndDelete(userId);

    res.json({ message: "User deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error retrieving user" });
  }
};
