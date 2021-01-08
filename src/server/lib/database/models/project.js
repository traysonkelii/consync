let mongoose = require('mongoose');

let projectSchema = mongoose.Schema(
	{
		_id: String,
		title: String,
		description: String
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
}
);

module.exports = mongoose.model('Project', projectSchema);
