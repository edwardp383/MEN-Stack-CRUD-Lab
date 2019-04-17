const express 			= require('express');
const app 				= express();
const bodyParser 		= require('body-parser');
const methodOverride	= require('method-override');
const Cake				= require('./models/cake.js')

require('./db/db.js')

const cakeController = require('./controllers/cakes.js')



app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.use('/cakes', cakeController)



app.listen(3000, () => {
	console.log('app listening on 3000');
});
