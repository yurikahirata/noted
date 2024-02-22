import usersModel from "../models/users.models.mjs";
import { validateUser } from "../util/userValidation.mjs";
import bcrypt from "bcrypt";
const saltRounds = 10;

const usersController = {

  signup: async function (req, res) {
    if (!validateUser(req.body))
      res.status(400).send("Invalid input");
    else {
      const user = { username: req.body["username"], hashedPassword: "" };
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user["hashedPassword"] = hashedPassword;

      try {
        const newUser = await usersModel.create(user);
        res.status(200).send(newUser);
      } catch {
        res.status(400).send("Username is taken");
      }

    }
  },

  login: async function (req, res) {
    if (!validateUser(req.body))
      res.status(400).send("Invalid input");
    else {
      const { username, password } = req.body;
      const existingUser = await usersModel.getByUsername(username);

      if (existingUser.length <= 0)
        res.status(400).send("Incorrect username");
      else {
        const hashedPassword = existingUser[0]["hashedPassword"];
        bcrypt.compare(password, hashedPassword, function (err, result) {
          if (err) {
            res.status(500).send("Error while comparing passwords");
            return;
          }

          if (result) {
            res.status(200).send("User authenticated");
          } else {
            res.status(401).send("Incorrect password");
          }
        });
      }
    }
  }
}

export default usersController;