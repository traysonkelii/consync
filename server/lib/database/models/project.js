let mongoose = require('mongoose');

let ProjectSchema = mongoose.Schema(
	{
		title: {type: String, required: 'title is a required field'},
		description: {type: String, required: 'description is a required field'},
		customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
		status: {type: String, enun: ['active', 'archived'], default: "active"}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Project', ProjectSchema);
