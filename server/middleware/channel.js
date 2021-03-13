const {getChannelsByItemId, getChannelById, updateChannel, createChannel} = require("../services/databaseService");

module.exports = {};

module.exports.getChannelsByItemId = async (req, res, next) => {
	let error;
	try {
		let itemId = req.params.itemId;
		console.log('itemId', itemId);
		let channels = await getChannelsByItemId(itemId);
		console.log(channels);
		if(req.result) {
			req.result.channels = channels;
		} else {
			req.result = {channels}
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.createMainChannel = async(req, res, next) => {
	let error;
	try {
		const itemId = req.result.item._id;
		const projectId = req.result.item.projectId;
		const members = req.result.item.members;
		const channelObj = {
			title: 'Main',
			type: 'main',
			itemId,
			projectId,
			members
		}
		let channel = await createChannel(channelObj);
		if(!req.result){
			req.result = {channel};
		} else {
			req.result.channel = channel
		}
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.getChannelById = async (req, res, next) => {
	let error;
	try {
		let channelId = req.params.channelId;
		console.log(channelId);
		let channel = await getChannelById(channelId);
		req.result = {channel};
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.updateChannel = async (req, res, next) => {
	let error;
	try {
		let channelId = req.params.channelId;
		let channelUpdates = req.body;
		let channel = await updateChannel(channelId, channelUpdates);
		req.result = channel;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.archiveChannel = async (req, res, next) => {
	let error;
	try {
		let channelId = req.params.channelId;
		let channelUpdates = {status: "archived"};
		let channel = await updateChannel(channelId, channelUpdates);
		req.result = channel;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}


module.exports.createChannel = async (req, res, next) => {
	let error;
	try {
		let channelObj = req.body;
		let channel = await createChannel(channelObj);
		req.result = channel;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}