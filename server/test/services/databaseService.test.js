const databaseService = require('../../services/databaseService');
const Project = require('../../lib/database/models/project');

jest.mock('../../lib/database/models/project.js');

describe('Database Service', () => {
	it('Should return a project by id', async () => {
		let project = {
			title: 'project tile',
			description: 'project description'
		}
		Project.findById.mockReturnValue({ exec: jest.fn().mockReturnValueOnce(project) });
		let returns = await databaseService.getProjectById('projectId');
		expect(returns).toEqual(project);
	})
})