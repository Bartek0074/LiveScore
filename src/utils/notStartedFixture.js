export const notStartedFixture = {
	get: 'fixtures',
	parameters: {
		id: '880983',
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
				id: 880983,
				referee: 'T. Robinson',
				timezone: 'Europe/Warsaw',
				date: '2022-12-16T21:00:00+01:00',
				timestamp: 1671220800,
				periods: {
					first: null,
					second: null,
				},
				venue: {
					id: 12596,
					name: "St Andrew's Stadium",
					city: 'Birmingham',
				},
				status: {
					long: 'Not Started',
					short: 'NS',
					elapsed: null,
				},
			},
			league: {
				id: 40,
				name: 'Championship',
				country: 'England',
				logo: 'https://media-5.api-sports.io/football/leagues/40.png',
				flag: 'https://media-1.api-sports.io/flags/gb.svg',
				season: 2022,
				round: 'Regular Season - 23',
			},
			teams: {
				home: {
					id: 54,
					name: 'Birmingham',
					logo: 'https://media-5.api-sports.io/football/teams/54.png',
					winner: null,
				},
				away: {
					id: 53,
					name: 'Reading',
					logo: 'https://media-2.api-sports.io/football/teams/53.png',
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
