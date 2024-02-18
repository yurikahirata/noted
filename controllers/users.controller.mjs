import usersModel from "../models/users.models.mjs";
import { validateUser } from "../util/userValidation.mjs";
import bcrypt from "bcrypt";
const saltRounds = 10;

const usersController = {
  getAll: async function (req, res) {
    let results = await usersModel.getAll();
    res.send(results).status(200);
  },

  signup: async function (req, res) {
    if (!validateUser(req.body))
      res.status(400).send("Invalid input");
    else {
      const user = { username: req.body["username"], hashedPassword: "" };
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user["hashedPassword"] = hashedPassword;

      const newUser = await usersModel.create(user);
      res.status(200).send(newUser);

    }
  }
}

export default usersController;