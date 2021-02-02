let mongoose = require('mongoose');

let ThreadSchema = mongoose.Schema(
	{
		channelId: {type: String, required: 'channelId is a required field'},
		messageId: {type: String, require: 'messageId is a required field'},
		members: {type: Array}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
}
);

module.exports = mongoose.model('Thread', ThreadSchema);
