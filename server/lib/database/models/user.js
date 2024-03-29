let mongoose = require('mongoose');

let UserSchema = mongoose.Schema(
	{
		companyID: mongoose.Schema.Types.ObjectId,
		cusomterID: mongoose.Schema.Types.ObjectId,
		username: { type: String, required: 'username is a required field', unique: true },
		email: { type: String, required: 'email is a required field', unique: true },
		firstName: String,
		lastName: String,
		userRoles: Array
	}, {
	timestamps: true,
	versionKey: false, // removing mongoose versionkey because it prevents updating the document when you don't provIde a new version
	minimize: false
}
);

UserSchema.methods.comparePassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
