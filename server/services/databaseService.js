const Project = require('../lib/database/models/project');
const User = require('../lib/database/models/user');
const Role = require('../lib/database/models/role');
const Project = require('../lib/database/models/project');
const Channel = require('../lib/database/models/channel');
const Thread = require('../lib/database/models/thread');
const Message = require('../lib/database/models/message');
const Task = require('../lib/database/models/task');
const ObjectId = require('mongoose').Types.ObjectId;

let databaseService = {};

databaseService.getProjectById = async (projectId) => {
	let project = await Project.findById(projectId).exec();
	return project;
}

databaseService.getProjects = async (filters = {}) => {
	if(!filters.status){
		filters.status = {$ne: "archvied"};
	}
	let projects = await Project.find(filters).exec();
	return projects;
}

databaseService.createProject = async (projectObj) => {
	const project = new Project(projectObj);
	await project.save();
	return project;
}

databaseService.updateProjectById = async (projectId, projectUpdates) => {
	let project = await Project.findByIdAndUpdate(projectId, projectUpdates);
	return project;
}

databaseService.createUser = async (userObj) => {
	const user = new User(userObj);
	await user.save();
	return user;
}

databaseService.getUserById = async (userId) => {
	let user = await User.findById(userId).exec();
	return user;
}

databaseService.getUserByEmail = async (email) => {
	let user = await User.findOne({email}).exec();
	return user;
}

databaseService.getPermissionsForRoles = async (roles) => {
	roles = await Role.find({name: {$all: roles}}).exec();
	let permissions = new Set();
	roles.forEach(role => {
		role.permissions.forEach(permission => {
			permissions.add(permission);
		})
	});
	return Array.from(permissions);
}

databaseService.getUsers = async (filter = {}) => {
	let users = await User.find(filter).exec();
	return users;
}

databaseService.archiveProject = async (projectId) => {
	let project = await Project.findByIdAndUpdate(projectId, {status: 'Archived'}).exec();
	return project;
}

databaseService.addUserToProject = async (projectId, userIds) => {
	let project = await Project.findByIdAndUpdate(projectId, {$addToSet: {users: {$each: userIds}}})
	return project;
}

databaseService.updateProjectStatus = async (projectId, status) => {
	let project = await Project.findByIdAndUpdate(projectId, {status: status})
	return project;
}

databaseService.removeUserFromProject = async (projectId, userId) => {
	let project = await Project.findByIdAndUpdate(projectId, {$pull: {users: userId}});
	return project;
}

databaseService.updateProject = async (projectId, fieldsToUpdate) => {
	let project = await Project.findByIdAndUpdate(projectId, {$set: fieldsToUpdate});
	return project;
}

databaseService.getChannelById = async (channelId) => {
	let channel = await Channel.findById(channelId).populate('members');
	return channel;
}

databaseService.getChannelsByProjectId = async (projectId) => {
	let channels = await Channel.find({projectId: ObjectId(projectId)}).exec();
	return channels;
}

databaseService.createChannel = async (channelObj) => {
	let channel = new Channel(channelObj);
	await channel.save();
	return channel;
}

databaseService.updateChannelById = async (channelId, channelUpdates) => {
	let channel = await Channel.findByIdAndUpdate(channelId, channelUpdates);
	return channel;	
}

databaseService.getThreadsByChannelId = async (channelId) => {
	let threads = await Thread.find({channelId: ObjectId(channelId), status: {$ne: "archvied"}}).populate('members');
	return threads;
}

databaseService.getMessagesByThreadId = async (threadId) => {
	let messages = await Message.find({threadId: ObjectId(threadId), status: {$ne: "archvied"}}).populate('authorId');
	return messages;
}

databaseService.getTasksByMessageId = async (messageId) => {
	let tasks = await Task.find({messageId: ObjectId(messageId), status: {$ne: "archived" }})
		.populate('assigneeUserId')
		.populate('assignerUserId');
	return tasks;
}

databaseService.createTask = async (taskObj) => {
	const task = new Task(taskObj);
	await task.save();
	return task;
}

databaseService.updateTask = async (taskId, taskUpdates) => {
	let task = await Task.findByIdAndUpdate(taskId, taskUpdates);
	return task;
}

databaseService.getTaskById = async (taskId) => {
	let task = await Task.findById(taskId);
	return task;
}

databaseService.getThreadById = async (threadId) => {
	let thread = await Thread.findById(threadId);
	return thread;
}

databaseService.createThread = async (threadObj) => {
	const thread = new Thread(threadObj);
	await thread.save();
	return thread;
}

databaseService.updateThread = async (threadId, threadUpdates) => {
	let thread = await Thread.findByIdAndUpdate(threadId, threadUpdates);
	return thread;
}

databaseService.createMessage = async (messageObj) => {
	const message = new Message(messageObj);
	await message.save();
	return message;
}

databaseService.getMessageById = async (messageId) => {
	let message = await Message.findById(messageId);
	return message;
}

databaseService.updateMessage = async (messageId, messageUpdates) => {
	let message = await Message.findByIdAndUpdate(messageId, messageUpdates);
	return message;
}

databaseService.getTasksAssignedToUser = async (userId) => {
	let tasks = await Task.find({assigneeUserId: ObjectId(userId)})
	return tasks;
}

databaseService.getTasksCreatedByUser = async (userId) => {
	let tasks = await Task.find({assignerUserId: ObjectId(userId)})
	return tasks;
}

module.exports = databaseService;