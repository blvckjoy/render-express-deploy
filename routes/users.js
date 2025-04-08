const express = require("express");
const router = express.Router();
const { users } = require("../data/users");
const { validateUser } = require("../validation/userValidation");

// Read all users
router.get("/", (req, res) => {
   res.json(users);
});

// Read single user
router.get("/:id", (req, res) => {
   const user = users.find((user) => user.id === parseInt(req.params.id));
   if (!user) return res.status(404).json({ message: "User not found" });
   res.status(200).json(user);
});

// Create User
router.post("/", (req, res) => {
   const { error } = validateUser(req.body);
   if (error) {
      return res.status(400).send(error.details[0].message);
   }
   const user = {
      name: req.body.name,
      id: users.length + 1,
   };
   users.push(user);
   res.status(201).json({ message: "User created successfully" });
});

// Update User
router.patch("/:id", (req, res) => {
   const user = users.find((user) => user.id === parseInt(req.params.id));
   if (!user) return res.status(404).json({ message: "User not found" });

   const { error } = validateUser(req.body);
   if (error) {
      return res.status(400).send(error.details[0].message);
   }

   const updatedUser = {
      name: req.body.name,
      id: parseInt(req.params.id),
   };

   const index = users.indexOf(user);
   users[index] = updatedUser;

   res.status(200).json(updatedUser);
});

// Delete User
router.delete("/:id", (req, res) => {
   const user = users.find((user) => user.id === parseInt(req.params.id));
   if (!user) return res.status(404).json({ message: "User not found" });

   const index = users.indexOf(user);
   users.splice(index, 1);

   res.status(200).json({ message: "User deleted successfully" });
});

module.exports = router;
