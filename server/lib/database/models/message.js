let mongoose = require('mongoose');

let MessageSchema = mongoose.Schema(
	{
		authorId: {type: mongoose.Schema.Types.ObjectId, required: 'authorId is a required field', ref: 'User'},
		threadId: {type: mongoose.Schema.Types.ObjectId, required: 'threadId is a required field', ref: 'Thread'},
		projectId: {type: mongoose.Schema.Types.ObjectId, required: 'projectId is a required field', ref: 'Project'},
		channelId: {type: mongoose.Schema.Types.ObjectId, required: 'channelId is a required field', ref: 'Channel'},
		body: {type: String, required: 'body is a required field'}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Message', MessageSchema);
