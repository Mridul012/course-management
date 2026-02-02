import { courseRepository } from "../repositories/course.repository";

class CourseService {

  async createCourse(data: {
    title: string;
    instructor: string;
    category: string;
    level: string;
    duration: number;
    price: number;
  }) {

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

    return await courseRepository.create(data);
  }

  async getAllCourses(query: {
    search?: string;
    page?: number;
    limit?: number;
  }) {
    let courses = await courseRepository.getAll();

    if (query.search) {
      courses = courses.filter((course: any) =>
        course.title.toLowerCase().includes(query.search!.toLowerCase())
      );
    }

    const page = query.page ? Number(query.page) : 1;
    const limit = query.limit ? Number(query.limit) : 5;
    const startIndex = (page - 1) * limit;

    return courses.slice(startIndex, startIndex + limit);
  }

  async getCourseById(id: string) {
    const course = await courseRepository.getById(id);
    if (!course) throw new Error("Course not found");
    return course;
  }

  async updateCourse(id: string, data: any) {
    const updated = await courseRepository.update(id, data);
    if (!updated) throw new Error("Course not found");
    return updated;
  }

  async deleteCourse(id: string) {
    const deleted = await courseRepository.delete(id);
    if (!deleted) throw new Error("Course not found");
  }
}
export const courseService = new CourseService();

