import bp from 'body-parser';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan('dev'));

const db = [];

app.post('/todo', (req, res) => {
    const newTodo = {
        id: crypto.randomUUID(),
        text: req.body.text,
    }

    db.push(newTodo);

    res.status(201).json(newTodo);
});

app.get('/todo', (req, res) => {
    res.status(200).json(db);
})

app.get("/todo/:id", (req, res) => {
    const todo = db.find((todo) => todo.id === req.params.id);
    res.status(200).json(todo);
});

app.listen(8000, () => { 
    console.log('Server running at http://localhost:8000/');
});