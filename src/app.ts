import express from "express";
import courseRoutes from "./routes/course.routes";

const app = express();


app.use(express.json());


app.use("/courses", courseRoutes);

export default app;
