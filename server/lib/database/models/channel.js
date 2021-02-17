let mongoose = require('mongoose');

let ChannelSchema = mongoose.Schema(
	{
		title: {type: String, required: [true, 'title is a required field']},
		description: {type: String},
		projectId: {type: mongoose.Schema.Types.ObjectId, required: [true, 'projectId is a required field'], ref: 'Project'},
		members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
		status: {type: String, enum: ['active', 'archived'], default: "active"}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Channel', ChannelSchema);
