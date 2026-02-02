# Course Management Backend

This is a simple backend application for managing courses. It is built using Node.js, Express.js, and TypeScript. The project follows an Object-Oriented Programming (OOP) architecture and uses an organized folder structure. Data is stored in memory, and the app includes basic CRUD operations, search, pagination, and validation. A simple authentication middleware is also included.

## Features
- Create, Read, Update, and Delete (CRUD) operations for courses
- Search courses by title
- Pagination for listing courses
- Basic input validation
- Simple authentication middleware

## Folder Structure
```src/
├── controllers
├── services
├── repositories
├── models
├── routes
├── middlewares
├── utils
├── app.ts
└── server.ts
```


## API Endpoints
- **GET /courses** - Get all courses (supports pagination and search)
- **GET /courses/:id** - Get a single course by ID
- **POST /courses** - Create a new course
- **PUT /courses/:id** - Update an existing course
- **DELETE /courses/:id** - Delete a course


## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Mridul012/course-management.git
   cd course-management

Install dependencies:
```
npm install
```


Start the server:
```
npm run dev
```


Server will run on:
```
http://localhost:3000
```