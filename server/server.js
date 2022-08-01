import express from "express";
import cors from "cors";

import homeRoutes from "./routes/homeRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", homeRoutes);
app.use("/lessons", lessonsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
