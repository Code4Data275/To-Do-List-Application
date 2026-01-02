# To Do List Application 
  This application enables users to keep track of their daily tasks. In this application, 
  the user can add, delete, update their tasks. There is also a feature to view their tasks. I have created a frontend application using React+Vite for the users to enter their tasks, view their tasks, update, delete and check and update the task status. All this tasks are stored in the MongoDB database which is accessed by APIs created using ExpressJS. 

## Tech Stacks
- React+Vite
- Tailwind CSS
- ExpressJS
- MongoDB

## Frontend

### Features
- Add the task
- Update the task
- View the task 
- Delete the task
- Update the task status (Pending/Completed)
- Search for tasks

### UI
- Navigation bar with the title and links which routes to different features of this  application.
- There will be 4 links:
  - Add task => when user clicks this link, it routes to the page which contains input for user to enter the task and a dropdown to set the task status. 
  - Update task => when user clicks this link it routes to the page which contains input for ID and Task Description for the user to update a specific task 
  - Delete a task => when user clicks this link it routes to the page which contains input for ID for the user to delete the specific task.
- Below every page there is a table which displays the task, status along with its ID and it updates automatically when the user updates, adds or deletes any task.

### Components
- App 
- Add 
- Update
- Delete

### Hooks
- useState
- useEffect

### Challenges in front-end
- Async Data Handling
- Responsive Design
- Maintaining Clean Code
- Re-rendering of code

## Backend

### Server

#### Routes and the endpoints
- /todos
  - GET: Get all the tasks entered by the user
  - POST: Create/Add new tasks 

- /todos/{id}
  - PUT: Update a task by its ID
  - DELETE: Delete a task by its ID

#### Schema
- ID => Unique Identifier
- Description => Tasks entered by the user

### Database

### Database Connection
- MongoDB Atlas
- Created a new cluster
- Created a user and password
- Created an IP address `0.0.0.0/0`
- Connection string 
  `mongodb+srv://CodeAldous275:1ndia7491@cluster0.oziom.mongodb.net/todoListDB`

### Challenges in Back-end
- App crashes

## Commands
- npm init
- npm install express
- npm install nodemon
- npm install dotenv
- npm install mongoose
- npm install mongodb
- npm install tailwindcss @tailwindcss/vite
- npm run dev





