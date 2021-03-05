const { model } = require("../lib/database/models/user");
const {getItemsByProjectId, createItem, getItemById, updateItemById, create} = require("../services/databaseService");

module.exports = {};

module.exports.createItem = async(req, res, next) => {
	let error;
	try {
		let item = await create('item', req.body);
		
		if(!req.result){
			req.result = {item};
		} else {
			req.result.item = item;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.getItemsByProjectId = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.id;
		let items = await getItemsByProjectId(projectId);
		
		if(!req.result){
			req.result = {items};
		} else {
			req.result.items = items;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.createItem = async (req, res, next) => {
	let error;
	try{
		let itemObj = req.body;
		let item = await createItem(itemObj);
		req.result = item;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.getItemById = async (req, res, next) => {
	let error;
	try {
		let itemId = req.params.id;
		let item = await getItemById(itemId);
		req.result = {item};
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.updateItemById = async (req, res, next) => {
	let error;
	try{
		let itemId = req.params.id;
		let itemUpdates = req.body;
		let item = await updateItemById(itemId, itemUpdates);
		req.result = item;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.archiveItem = async (req, res, next) => {
	let error;
	try{
		let itemId = req.params.id;
		let itemUpdates = {status: 'archived'};
		let item = await updateItemById(itemId, itemUpdates);
		req.result = item;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}