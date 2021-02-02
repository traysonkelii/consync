let mongoose = require('mongoose');

let CustomerSchema = mongoose.Schema(
	{
		name: {type: String, required: 'name is a required field'},
		description: {type: String, require: 'description is a required field'},
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
}
);

module.exports = mongoose.model('Customer', CustomerSchema);
