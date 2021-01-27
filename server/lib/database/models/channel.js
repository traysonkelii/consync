let mongoose = require('mongoose');

let ChannelSchema = mongoose.Schema(
	{
		name: {type: String, required: 'name is a required field'},
		projectId: {type: String, required: 'projectId is a required field'}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Channel', ChannelSchema);
