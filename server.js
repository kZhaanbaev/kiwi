const path = require('path');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, () => console.log('Now listening'));

