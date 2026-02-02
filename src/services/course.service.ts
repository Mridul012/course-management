import { Course } from "../models/course.model";
import { courseRepository } from "../repositories/course.repository";

class CourseService {

  createCourse(data: {
    title: string;
    instructor: string;
    category: string;
    level: string;
    duration: number;
    price: number;
  }): Course {


    if (
      !data.title ||
      !data.instructor ||
      !data.category ||
      !data.level ||
      !data.duration ||
      !data.price
    ) {
      throw new Error("All fields are required");
    }

    const course = new Course(
      data.title,
      data.instructor,
      data.category,
      data.level,
      data.duration,
      data.price
    );

    return courseRepository.create(course);
  }

  getAllCourses(query: {
    search?: string;
    page?: number;
    limit?: number;
  }): Course[] {

    let courses = courseRepository.getAll();


    if (query.search) {
      courses = courses.filter((course: Course) =>
        course.title
          .toLowerCase()
          .includes(query.search!.toLowerCase())
      );
    }


    const page = query.page ? Number(query.page) : 1;
    const limit = query.limit ? Number(query.limit) : 5;
    const startIndex = (page - 1) * limit;

    return courses.slice(startIndex, startIndex + limit);
  }

  getCourseById(id: string): Course {
    const course = courseRepository.getById(id);

    if (!course) {
      throw new Error("Course not found");
    }

    return course;
  }

  updateCourse(id: string, data: Partial<Course>): Course {
    const updatedCourse = courseRepository.update(id, data);

    if (!updatedCourse) {
      throw new Error("Course not found");
    }

    return updatedCourse;
  }

  deleteCourse(id: string): void {
    const deleted = courseRepository.delete(id);

    if (!deleted) {
      throw new Error("Course not found");
    }
  }
}

export const courseService = new CourseService();
