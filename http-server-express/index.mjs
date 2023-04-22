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

    res.json(newTodo);
});

app.get('/todo', (req, res) => {
    res.json(db);
})



app.listen(8000, () => { 
    console.log('Server running at http://localhost:8000/');
});