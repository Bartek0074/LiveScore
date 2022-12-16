export const cancelledFixture = {
	get: 'fixtures',
	parameters: {
		id: '979686',
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
				id: 979686,
				referee: null,
				timezone: 'UTC',
				date: '2022-12-16T12:00:00+00:00',
				timestamp: 1671192000,
				periods: {
					first: null,
					second: null,
				},
				venue: {
					id: null,
					name: null,
					city: null,
				},
				status: {
					long: 'Match Cancelled',
					short: 'CANC',
					elapsed: null,
				},
			},
			league: {
				id: 667,
				name: 'Friendlies Clubs',
				country: 'World',
				logo: 'https://media-2.api-sports.io/football/leagues/667.png',
				flag: null,
				season: 2022,
				round: 'Club Friendlies 5',
			},
			teams: {
				home: {
					id: 177,
					name: 'Jahn Regensburg',
					logo: 'https://media-4.api-sports.io/football/teams/177.png',
					winner: null,
				},
				away: {
					id: 1028,
					name: 'Ried',
					logo: 'https://media-5.api-sports.io/football/teams/1028.png',
					winner: null,
				},
			},
			goals: {
				home: null,
				away: null,
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
