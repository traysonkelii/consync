const Project = require('../lib/database/models/project');
const User = require('../lib/database/models/user');
const Role = require('../lib/database/models/role');
const Project = require('../lib/database/models/project');
const project = require('../lib/database/models/project');

let databaseService = {};

databaseService.getProjectById = async (projectId) => {
	let project = await Project.findById(projectId).exec();
	return project;
}

databaseService.getProjects = async (filters = {}) => {
	let projects = await Project.find(filters).exec();
	return projects;
}

databaseService.createProject = async (projectObj) => {
	const project = new Project(projectObj);
	await project.save();
	return projectObj;
}

databaseService.createUser = async (userObj) => {
	const user = new User(userObj);
	await user.save();
	return userObj;
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

module.exports = databaseService;