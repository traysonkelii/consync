const Project = require('../lib/database/models/project');
const User = require('../lib/database/models/user');
const Role = require('../lib/database/models/role');
const Item = require('../lib/database/models/item');
const Channel = require('../lib/database/models/channel');
const Message = require('../lib/database/models/message');
const Task = require('../lib/database/models/task');
const ObjectId = require('mongoose').Types.ObjectId;
const Company = require('../lib/database/models/company');
const Thread = require('../lib/database/models/thread');

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

databaseService.getItemById = async (itemId) => {
	let item = await Item.findById(itemId).populate('members');
	return item;
}

databaseService.getItemsByProjectId = async (projectId) => {
	let items = await Item.find({projectId: ObjectId(projectId)}).exec();
	return items;
}

databaseService.createItem = async (itemObj) => {
	let item = new Item(itemObj);
	await item.save();
	return item;
}

databaseService.updateItemById = async (itemId, itemUpdates) => {
	let item = await Item.findByIdAndUpdate(itemId, itemUpdates);
	return item;
}

databaseService.getChannelsByItemId = async (itemId) => {
	let channels = await Channel.find({itemId: ObjectId(itemId), status: {$ne: "archvied"}}).populate('members');
	return channels;
}

databaseService.getMessagesByChannelId = async (channelId) => {
	let messages = await Message.find({channelId: ObjectId(channelId), status: {$ne: "archvied"}}).populate('authorId');
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

databaseService.getChannelById = async (channelId) => {
	let channel = await Channel.findById(channelId);
	return channel;
}

databaseService.createChannel = async (channelObj) => {
	const channel = new Channel(channelObj);
	await channel.save();
	return channel;
}

databaseService.updateChannel = async (channelId, channelUpdates) => {
	let channel = await Channel.findByIdAndUpdate(channelId, channelUpdates);
	return channel;
}

databaseService.createMessage = async (messageObj) => {
	const message = new Message(messageObj);
	await message.save();
	return message;
}

databaseService.getMessageById = async (messageId) => {
	let message = await Message.findById(messageId).populate('authorId');
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

databaseService.getCompanyById = async (companyId) => {
	let company = await Company.findById(companyId);
	return company;
}

databaseService.getCompanies = async (filters) => {
	let companies = await Company.find(filters);
	return companies;
}

databaseService.getUsersByCompanyId = async(companyId) => {
	let users = await User.find({companyId: ObjectId(companyId)});
	return users;
}

databaseService.createCompany = async(companyObj) => {
	let company = new Company(companyObj);
	await company.save();
	return company;
}

databaseService.updateCompany = async (companyId, updateObj) => {
	let company = await Company.findByIdAndUpdate(companyId, updateObj);
	return company;
}

databaseService.archiveCompany = async (companyId) => {
	let company = await Company.findByIdAndUpdate(companyId, {status: 'archived'})
	return company;
}

databaseService.getMessagesByParentId = async (parentName, parentId) => {
	let messages = await Message.find({[parentName]: ObjectId(parentId)}).populate('authorId');
	return messages;
}

databaseService.getThreadsByParentId = async (parentName, parentId) => {
	let threads = await Thread.find({[parentName]: ObjectId(parentId)});
	return threads;
}

databaseService.getThreadById = async (threadId) => {
	let thread = await Thread.find({[parentName]: ObjectId(parentId)}).populate('authorId');
	return thread;
}

databaseService.createThread = async (threadObj) => {
	let thread = new Thread(threadObj);
	await thread.save();
	return thread;
}

databaseService.addParticipantsToThread = async (threadId, participants) => {
	let thread = await Thread.findByIdAndUpdate(threadId, {$addToSet: {$each: participants}});
	return thread;
}

module.exports = databaseService;