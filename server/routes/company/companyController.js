const company = require('../../middleware/company');
const thread = require('../../middleware/thread');

module.exports.createCompany = [
	company.createCompany,
	company.return
]

module.exports.updateCompany = [
	company.updateCompany,
	company.return
]

module.exports.getCompanyById = [
	company.getCompanyById,
	company.return
]

module.exports.archiveCompany = [
	company.archiveCompany,
	company.return
]

module.exports.getAllCompanies = [
	company.getAllCompanies,
	company.return
]

module.exports.getUsersByCompanyId = [
	company.getUsersByCompanyId,
	company.return
]