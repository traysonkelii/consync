let mongoose = require('mongoose');

let CommitmentSchema = mongoose.Schema(
	{
		description: {type: String, required},
		projectId: {type: mongoose.Schema.Types.ObjectId, required: [true, 'projectId is a required field'], ref: 'Project'},
		authorId: {type: mongoose.Schema.Types.ObjectId, required: 'authorId is a required field', ref: 'User'},
		assigneeUserId: {type: mongoose.Schema.Types.ObjectId, required: 'assigneeUserId is a required field', ref: 'User'},
		dateTimeResolved: {type: Date},
		dueDate: {type: Date},
		type: {type: String, enum: ['information', 'action'], default: 'information'},
		status: {type: String, enum: ['new', 'accepted', 'in progress', 'done', 'archived'], default: 'new'}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('Commitment', CommitmentSchema);
