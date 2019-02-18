import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.set('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
}));
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes


//Static Files

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});