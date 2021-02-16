db.channels.insertMany([
	{
		_id: ObjectId("603fa8e6bc8001095fd45af9"),
		projectId: ObjectId('600fa8e6bc8001095fd45af9'),
		description: 'This is the description for channel 1.',
		title: 'Channel One',
		members: ['600fa8ee728fa724ffee7620', '600fa8ee728fa724ffee761f']
	},
	{
		_id: ObjectId("603fa8e6bc8001095fd45bf0"),
		projectId: ObjectId('600fa8e6bc8001095fd45af9'),
		description: 'second channel description.',
		title: 'Channel Two',
		members: ['600fa8ee728fa724ffee7620', '600fa8ee728fa724ffee761f']
	}
]);
