let mongoose = require('mongoose');

let RoleSchema = mongoose.Schema(
	{
		name: String,
		description: String,
		permissions: Array
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Role', RoleSchema);
