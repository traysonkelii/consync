let mongoose = require('mongoose');

let ThreadSchema = mongoose.Schema(
	{
		channelId: {type: String, required: 'channelId is a required field', ref: 'Channel'},
		messageId: {type: String, required: 'messageId is a required field', ref: 'Message'},
		members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
}
);

module.exports = mongoose.model('Thread', ThreadSchema);
