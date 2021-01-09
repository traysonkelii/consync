const project = require('../../middleware/project');
const databaseService = require('../../services/databaseService');

jest.mock('../../services/databaseService');

describe('middleware - project', () => {
	it('Should get project by id', async () => {
		let result = {
			title: 'test project',
			description: 'project description'
		}
		let req = { params: { projectId: '1' } }
		let res = {}
		databaseService.getProjectById.mockResolvedValueOnce(result);
		await new Promise(next => project.getProjectById(req, res, next));
		expect(req.result).toEqual(result);
	})
})