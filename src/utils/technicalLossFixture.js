export const technicalLossFixture = {
	get: 'fixtures',
	parameters: {
		id: '976627',
		timezone: 'Europe/Warsaw',
	},
	errors: [],
	results: 1,
	paging: {
		current: 1,
		total: 1,
	},
	response: [
		{
			fixture: {
				id: 976627,
				referee: null,
				timezone: 'Europe/Warsaw',
				date: '2022-12-18T08:30:00+01:00',
				timestamp: 1671348600,
				periods: {
					first: null,
					second: null,
				},
				venue: {
					id: 11560,
					name: 'Wuhan Sports Center Stadium',
					city: 'Wuhan',
				},
				status: {
					long: 'Technical loss',
					short: 'AWD',
					elapsed: null,
				},
			},
			league: {
				id: 171,
				name: 'FA Cup',
				country: 'China',
				logo: 'https://media-4.api-sports.io/football/leagues/171.png',
				flag: 'https://media-1.api-sports.io/flags/cn.svg',
				season: 2022,
				round: '3rd Round',
			},
			teams: {
				home: {
					id: 5695,
					name: 'Wuhan Three Towns',
					logo: 'https://media-5.api-sports.io/football/teams/5695.png',
					winner: true,
				},
				away: {
					id: 837,
					name: 'Tianjin Teda',
					logo: 'https://media-6.api-sports.io/football/teams/837.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 0,
			},
			score: {
				halftime: {
					home: null,
					away: null,
				},
				fulltime: {
					home: null,
					away: null,
				},
				extratime: {
					home: null,
					away: null,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
			events: [],
			lineups: [],
			statistics: [],
			players: [],
		},
	],
};
