const {getChannelsByProjectId, createChannel, getChannelById, updateChannelById} = require("../services/databaseService");

module.exports = {};

module.exports.getChannelsByProjectId = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.id;
		let channels = await getChannelsByProjectId(projectId);
		
		if(!req.result){
			req.result = {channels};
		} else {
			req.result.channels = channels;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.createChannel = async (req, res, next) => {
	let error;
	try{
		let channelObj = req.body;
		let channel = await createChannel(channelObj);
		req.result = channel;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.getChannelById = async (req, res, next) => {
	let error;
	try {
		let channelId = req.params.id;
		let channel = await getChannelById(channelId);
		req.result = {channel};
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.updateChannelById = async (req, res, next) => {
	let error;
	try{
		let channelId = req.params.id;
		let channelUpdates = req.body;
		let channel = await updateChannelById(channelId, channelUpdates);
		req.result = channel;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.archiveChannel = async (req, res, next) => {
	let error;
	try{
		let channelId = req.params.id;
		let channelUpdates = {status: 'archived'};
		let channel = await updateChannelById(channelId, channelUpdates);
		req.result = channel;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}