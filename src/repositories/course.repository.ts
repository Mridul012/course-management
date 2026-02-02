import { Course } from "../models/course.model";

class CourseRepository {
  private courses: Course[] = [];

  create(course: Course): Course {
    this.courses.push(course);
    return course;
  }

  getAll(): Course[] {
    return this.courses;
  }

  getById(id: string): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  update(id: string, data: Partial<Course>): Course | null {
    const course = this.getById(id);
    if (!course) return null;

    if (data.title) course.title = data.title;
    if (data.instructor) course.instructor = data.instructor;
    if (data.category) course.category = data.category;
    if (data.level) course.level = data.level;
    if (data.duration) course.duration = data.duration;
    if (data.price) course.price = data.price;

    return course;
  }

  delete(id: string): boolean {
    const index = this.courses.findIndex(course => course.id === id);
    if (index === -1) return false;

    this.courses.splice(index, 1);
    return true;
  }
}

export const courseRepository = new CourseRepository();
