let mongoose = require('mongoose');

let MessageSchema = mongoose.Schema(
	{
		authorId: {type: String, required: 'authorId is a required field'},
		threadId: {type: String, required: 'threadId is a required field'},
		body: {type: String, required: 'body is a required field'},
		assignees: Object
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Message', MessageSchema);
