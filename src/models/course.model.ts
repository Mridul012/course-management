export class Course {
    id: string;
    title: string;
    instructor: string;
    category: string;
    level: string;
    duration: number;
    price: number;
    createdAt: Date;
  
    constructor(
      title: string,
      instructor: string,
      category: string,
      level: string,
      duration: number,
      price: number
    ) {
      this.id = Date.now().toString();
      this.title = title;
      this.instructor = instructor;
      this.category = category;
      this.level = level;
      this.duration = duration;
      this.price = price;
      this.createdAt = new Date();
    }
  }
  