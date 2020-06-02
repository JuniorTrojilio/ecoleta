import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) =>{
    return response.json({message : 'hello world'});
})

app.listen(3333);