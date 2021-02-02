let mongoose = require('mongoose');

let ChannelSchema = mongoose.Schema(
	{
		title: {type: String, required: 'title is a required field'},
		description: {type: String},
		projectId: {type: mongoose.Schema.Types.ObjectId, require: 'projectId is a required field'},
		members: {type: Array},
		status: {type: String, enun: ['active', 'archived'], default: "active"}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
}
);

module.exports = mongoose.model('Channel', ChannelSchema);
