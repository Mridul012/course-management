import { CourseModel } from "../models/course.model";

class CourseRepository {

  async create(data: any) {
    return await CourseModel.create(data);
  }

  async getAll() {
    return await CourseModel.find();
  }

  async getById(id: string) {
    return await CourseModel.findById(id);
  }

  async update(id: string, data: any) {
    return await CourseModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return await CourseModel.findByIdAndDelete(id);
  }
}

export const courseRepository = new CourseRepository();
