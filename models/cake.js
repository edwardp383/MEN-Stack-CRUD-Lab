const mongoose = require('mongoose');


const cakeSchema = new mongoose.Schema({
	name: {type: String, required: true},
	flavor: String,
});

const Cake = mongoose.model('Cake', cakeSchema);

module.exports = Cake;