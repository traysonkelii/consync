let mongoose = require('mongoose');

let ThreadSchema = mongoose.Schema(
	{
		projectId: {type: mongoose.Schema.Types.ObjectId, required: 'projectId is a required field', ref: 'Project'},
		itemId: {type: mongoose.Schema.Types.ObjectId, required: 'itemId is a required field', ref: 'Item'},
		subItemId: {type: mongoose.Schema.Types.ObjectId, ref: 'SubItem'},
		partricipants: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provide a new version
	minimize: false
	}
);

module.exports = mongoose.model('Thread', ThreadSchema);
