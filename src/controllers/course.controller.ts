import { Request, Response } from "express";
import { courseService } from "../services/course.service";

class CourseController {

  async createCourse(req: Request, res: Response) {
    try {
      const course = await courseService.createCourse(req.body);
      res.status(201).json(course);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllCourses(req: Request, res: Response) {
    try {

      const courses = await courseService.getAllCourses(req.query);
      res.status(200).json(courses);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getCourseById(req: Request, res: Response) {
    try {
      const course = await courseService.getCourseById(String(req.params.id));
      res.status(200).json(course);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async updateCourse(req: Request, res: Response) {
    try {
      const updated = await courseService.updateCourse(String(req.params.id), req.body);
      res.status(200).json(updated);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteCourse(req: Request, res: Response) {
    try {
      await courseService.deleteCourse(String(req.params.id));
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}

export const courseController = new CourseController();
