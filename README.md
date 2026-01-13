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

### UI
- Header with the title `To Do List Application`
- Input field and a button to add a task
- Table to view the data, update the task status, update and delete task button

### Commponents
- main
- App
- Add
- Navbar
- ViewData
- Home
- TaskContext
- useTaskContext

### Hooks
- useState
- useEffect
- useContext
- useReducer

### Challenges in front-end
- Async Data Handling
- Responsive Design
- Maintaining Clean Code
- Re-rendering of code
- Difficult to remember ID for updation and deletion of task as it is a mix of characters

## Backend

### Server

#### Routes and the endpoints
- /todos
  - GET: Get all the tasks entered by the user
  - POST: Create/Add new tasks 

- /todos/{id}
  - PUT: Update a task by its ID
  - DELETE: Delete a task by its ID

- /todos/status/{id}
  - PUT: Update task status by checkbox 

### Database 

#### Schema
- Description => Tasks entered by the user
- Status => Boolean value (Pending/Completed)

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

## Deployment
`https://todo-list-applico.netlify.app/`




