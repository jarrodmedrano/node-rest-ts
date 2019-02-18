import express from 'express';

//Initializations
const app = express();

//Settings
app.set('port', 3000);

//Middlewares

//Routes

//Static Files

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});