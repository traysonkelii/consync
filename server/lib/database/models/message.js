let mongoose = require('mongoose');

let MessageSchema = mongoose.Schema(
	{
		authorId: {type: ObjectId, required: 'authorId is a required field'},
		threadId: {type: ObjectId, require: 'threadId is a required field'},
		projectId: {type: ObjectId, require: 'projectId is a required field'},
		channelId: {type: ObjectId, require: 'channelId is a required field'},
		body: {type: String, require: 'body is a required field'}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Message', MessageSchema);
