import express from "express";
import homeRoutes from "./routes/homeRoutes.js";

const app = express();

app.use("/", homeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
