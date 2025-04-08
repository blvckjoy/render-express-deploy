const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root route
app.get("/", (req, res) => {
   res.json({ message: "Welcome to the users' homepage" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});
