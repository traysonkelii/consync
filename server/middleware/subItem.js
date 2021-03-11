const {getSubItemsByItemId, getSubItemById, updateSubItem, createSubItem} = require("../services/databaseService");

module.exports = {};

module.exports.getSubItemsByItemId = async (req, res, next) => {
	let error;
	try {
		let itemId = req.params.itemId;
		let subItems = await getSubItemsByItemId(itemId);
		if(req.result) {
			req.result.subItems = subItems;
		} else {
			req.result = {subItems}
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.createMainSubItem = async(req, res, next) => {
	let error;
	try {
		const itemId = req.result.item._id;
		const projectId = req.result.item.projectId;
		const members = req.result.item.members;
		const subItemObj = {
			title: 'Main',
			type: 'main',
			itemId,
			projectId,
			members
		}
		let subItem = await createSubItem(subItemObj);
		if(!req.result){
			req.result = {subItem};
		} else {
			req.result.subItem = subItem
		}
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.getSubItemById = async (req, res, next) => {
	let error;
	try {
		let subItemId = req.params.subItemId;
		let subItem = await getSubItemById(subItemId);
		req.result = {subItem};
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.updateSubItem = async (req, res, next) => {
	let error;
	try {
		let subItemId = req.params.subItemId;
		let subItemUpdates = req.body;
		let subItem = await updateSubItem(subItemId, subItemUpdates);
		req.result = subItem;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.archiveSubItem = async (req, res, next) => {
	let error;
	try {
		let subItemId = req.params.subItemId;
		let subItemUpdates = {status: "archived"};
		let subItem = await updateSubItem(subItemId, subItemUpdates);
		req.result = subItem;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}


module.exports.createSubItem = async (req, res, next) => {
	let error;
	try {
		let subItemObj = req.body;
		let subItem = await createSubItem(subItemObj);
		req.result = subItem;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}