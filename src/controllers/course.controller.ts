import { Request, Response } from "express";
import { courseService } from "../services/course.service";

class CourseController {

  createCourse(req: Request, res: Response) {
    try {
      const course = courseService.createCourse(req.body);
      res.status(201).json(course);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  getAllCourses(req: Request, res: Response) {
    try {
      const courses = courseService.getAllCourses(req.query);
      res.status(200).json(courses);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  getCourseById(req: Request, res: Response) {
    try {
      const course = courseService.getCourseById(String(req.params.id));
      res.status(200).json(course);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  updateCourse(req: Request, res: Response) {
    try {
      const updatedCourse = courseService.updateCourse(
        String(req.params.id),
        req.body
      );
      res.status(200).json(updatedCourse);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  deleteCourse(req: Request, res: Response) {
    try {
      courseService.deleteCourse(String(req.params.id));
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}

export const courseController = new CourseController();
