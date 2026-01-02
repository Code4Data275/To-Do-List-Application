const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./dbConnection');
const cors = require('cors');

const todosRouter = require('./Router/todo_routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors())
app.use('/todos',todosRouter);

dbConnection();

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});