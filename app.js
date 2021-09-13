const express = require('express');
const Todo = require('./models/Todo');

require('./config/db.config');

const PORT = 5000

const app = express();

app.use(express.json());

app.get('/todos', async (request, response) => {
});

app.post('/todos', async (request, response) => {
    try {
        const newToDo = await Todo.create(request.body);
        response.status(201).json(newToDo);
    } catch (error) {
        response.status(500).json({ msg: 'Server Error', error })
    }
});

app.put('/todos/:id', async (request, response) => {
});

app.delete('/todos/:id', async (request, response) => {
});

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));


