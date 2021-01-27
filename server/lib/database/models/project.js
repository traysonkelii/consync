let mongoose = require('mongoose');

let ProjectSchema = mongoose.Schema(
	{
		title: String,
		description: String,
		users: Array,
		projectTeam: Array,
		channels: Array,
		creatorId: String,
		status: {type: String, enum: ['Open', 'Closed', 'Archived'], default: 'Open'}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Project', ProjectSchema);
