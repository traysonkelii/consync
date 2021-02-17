const express = require('express');
const router = express.Router();
const companyController = require('./companyController');

router.route('/:id')
	.get(companyController.getCompanyById)
	.put(companyController.updateCompany)
	.delete(companyController.archiveCompany)

router.route('/:id/users')
	.get(companyController.getUsersByCompanyId)

router.route('/')
	.post(companyController.createCompany)
	.get(companyController.getAllCompanies);

module.exports = router;