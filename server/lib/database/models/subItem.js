let mongoose = require('mongoose');

let SubItemSchema = mongoose.Schema(
	{
		title: {type: String, required: 'title is a required field'},
		itemId: {type: mongoose.Schema.Types.ObjectId, required: 'itemId is a required field', ref: 'Item'},
		projectId: {type: mongoose.Schema.Types.ObjectId, required: 'projectId is a required field', ref: 'Project'},
		members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
		type: {type: String, enum: ['main', 'default'], default: 'default'},
		status: {type: String, enum: ['active', 'archived'], default: "active"}
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
	}
);

module.exports = mongoose.model('SubItem', SubItemSchema);
