const express = require('express');
const Todo = require('./models/Todo');
const bcrypt = require('bcryptjs');
const { request, response } = require('express');
const User = require('./models/User');





require('./config/db.config');

const PORT = 5000

const app = express();

app.use(express.json());

app.get('/todos', async (request, response) => {
try {
    const todos = await Todo.find();
    response.status(200).json(todos); 
    } catch (error) {
   
        response.status(500).json({msg: 'Server error', error});
    
}
});

app.get('/user',async(request,response)=>{
    try {
        const users = await User.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json({msg: 'Deu ruim no Server', error});
        
    }
})



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
app.post('/user', async (request, response) => {
    const { username, email, password } = request.body
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashSenha = bcrypt.hashSync(password, salt)
        const user = {
            username,
            email,
            passwordHash: hashSenha

        }

        const newUser = await User.create(user);
        response.status(201).json({msg:'Created in success'});
    } catch (error) {
        response.status(500).json({msg:'Server error', error})
    }

})


app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));


