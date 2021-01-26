db.roles.insertMany([
	{
        name: 'Level 1',
        permissions: ['Remind Assignee']
    },
    {
        name: 'Level 2',
        permissions: ['Create User', 'Procore API', 'Remind Anyone', 'View All Conversations']
    },
    {
        name: 'Level 3',
        permissions: ['Create Project', 'Create User', 'Procore API', 'Remove Colaborator', 'Remind Anyone', 'View All Conversations']
    },
    {
        name: 'Company Admin',
        permissions: ['Create Project', 'Create User', 'Procore API', 'Remove Colaborator', 'Remind Anyone', 'View All Conversations']
	}
]);
