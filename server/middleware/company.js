const {getCompanies, createCompany, getCompanyById, updateCompany, getUsersByCompanyId, archiveCompany} = require("../services/databaseService");

module.exports = {};

module.exports.getAllCompanies = async (req, res, next) => {
	let error;
	try {
		let companies = await getCompanies();
		
		if(!req.result){
			req.result = {companies};
		} else {
			req.result.companies = companies;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.getUsersByCompanyId = async (req, res, next) => {
	let error;
	try {
		const companyId = req.params.id;
		let company = await getUsersByCompanyId(companyId);
		if(!req.result){
			req.result = {company};
		} else {
			req.result.company = company;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.getCompanyById = async (req, res, next) => {
	let error;
	try {
		let companyId = req.params.id;
		let company = await getCompanyById(companyId);
		
		if(!req.result){
			req.result = {company};
		} else {
			req.result.company = company;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.createCompany = async (req, res, next) => {
	let error;
	try{
		let companyObj = req.body;
		let company = await createCompany(companyObj);
		req.result = company;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.updateCompany = async (req, res, next) => {
	let error;
	try{
		let companyId = req.params.id;
		let companyUpdates = req.body;
		let company = await updateCompany(companyId, companyUpdates);
		req.result = company;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.archiveCompany = async (req, res, next) => {
	let error;
	try{
		let companyId = req.params.id;
		let company = await archiveCompany(companyId);
		req.result = company;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}