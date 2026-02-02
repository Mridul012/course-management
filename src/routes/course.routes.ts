import { Router } from "express";
import { courseController } from "../controllers/course.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();


router.post("/", authMiddleware, (req, res) => {
  courseController.createCourse(req, res);
});


router.get("/", (req, res) => {
  courseController.getAllCourses(req, res);
});


router.get("/:id", (req, res) => {
  courseController.getCourseById(req, res);
});


router.put("/:id", (req, res) => {
  courseController.updateCourse(req, res);
});


router.delete("/:id", (req, res) => {
  courseController.deleteCourse(req, res);
});

export default router;
