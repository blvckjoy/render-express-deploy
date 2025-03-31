const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// Root route
app.get("/", (req, res) => {
   res.send("Users' API");
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});
