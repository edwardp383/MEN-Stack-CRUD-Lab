const express 			= require('express');
const app 				= express();
const bodyParser 		= require('body-parser');
const methodOverride	= require('method-override');

require('./db/db.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


const cakesController = require('./controllers/cakes.js');

app.use('/cakes', cakesController);



app.listen(3000, () => {
	console.log('app listening on 3000');
});
