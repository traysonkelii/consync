let mongoose = require('mongoose');

let MessageSchema = mongoose.Schema(
	{
		authorId: {type: mongoose.Schema.Types.ObjectId, required: 'authorId is a required field'},
		threadId: {type: mongoose.Schema.Types.ObjectId, require: 'threadId is a required field'},
		projectId: {type: mongoose.Schema.Types.ObjectId, require: 'projectId is a required field'},
		channelId: {type: mongoose.Schema.Types.ObjectId, require: 'channelId is a required field'},
		body: {type: String, require: 'body is a required field'}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Message', MessageSchema);
