let mongoose = require('mongoose');

let CompanySchema = mongoose.Schema(
	{
		title: {type: String, required: 'title is a required field'},
		domain: {type: String, required: 'domain is a required field'},
		description: {type: String},
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false,
	collection: 'companies'
}
);

module.exports = mongoose.model('Company', CompanySchema);
