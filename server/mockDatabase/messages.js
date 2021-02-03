db.messages.insertMany([
	{
		_id: ObjectId("605fa8ee728fa724ffee7620"),
		authorId: ObjectId("600fa8ee728fa724ffee761f"),
		threadId: ObjectId('604fa8e6bc8001095fd45af9'),
		projectId: ObjectId('600fa8e6bc8001095fd45af9'),
		channelId: ObjectId("603fa8e6bc8001095fd45af9"),
		body: 'Josh Whisenant is number 1.'
	},
	{
		_id: ObjectId("605fa8ee728fa724ffee7621"),
		authorId: ObjectId("600fa8ee728fa724ffee7620"),
		threadId: ObjectId('604fa8e6bc8001095fd45af9'),
		projectId: ObjectId('600fa8e6bc8001095fd45af9'),
		channelId: ObjectId("603fa8e6bc8001095fd45af9"),
		body: 'Agreed!'
	},
	{
		_id: ObjectId("605fa8ee728fa724ffee7623"),
		authorId: ObjectId("600fa8ee728fa724ffee761f"),
		threadId: ObjectId('604fa8e6bc8001095fd45af9'),
		projectId: ObjectId('600fa8e6bc8001095fd45af9'),
		channelId: ObjectId("603fa8e6bc8001095fd45af9"),
		body: 'You\'re pretty cool too'
	},
	{
		_id: ObjectId("605fa8ee728fa724ffee7624"),
		authorId: ObjectId("600fa8ee728fa724ffee7620"),
		threadId: ObjectId('604fa8e6bc8001095fd45af9'),
		projectId: '600fa8e6bc8001095fd45af9',
		channelId: ObjectId("603fa8e6bc8001095fd45af9"),
		body: 'Right back at-cha!'
	}
]);
