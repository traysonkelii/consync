let mongoose = require('mongoose');

let TaskSchema = mongoose.Schema(
	{
		messageId: {type: ObjectId, required: 'messageId is a required field'},
		assignerUserId: {type: ObjectId, required: 'assignerUserId is a required field'},
		assigneeUserId: {type: ObjectId, required: 'assigneeUserId is a required field'},
		datetimeFirstResponded: {type: Date},
		dateTimeResolved: {type: Date},
		status: {type: String, enum: ['new', 'seen', 'in progress', 'done', 'archived'], default: 'new'}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
}
);

module.exports = mongoose.model('Task', TaskSchema);
