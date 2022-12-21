export const TBDfixture = {
	get: 'fixtures',
	parameters: {
		id: '977280',
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
				id: 977280,
				referee: null,
				timezone: 'Europe/Warsaw',
				date: '2022-12-20T01:00:00+01:00',
				timestamp: 1671494400,
				periods: {
					first: null,
					second: null,
				},
				venue: {
					id: null,
					name: 'TBC',
					city: 'TBC',
				},
				status: {
					long: 'Time to be defined',
					short: 'TBD',
					elapsed: null,
				},
			},
			league: {
				id: 667,
				name: 'Friendlies Clubs',
				country: 'World',
				logo: 'https://media-6.api-sports.io/football/leagues/667.png',
				flag: null,
				season: 2022,
				round: 'Club Friendlies 3',
			},
			teams: {
				home: {
					id: 82,
					name: 'Montpellier',
					logo: 'https://media-4.api-sports.io/football/teams/82.png',
					winner: null,
				},
				away: {
					id: 96,
					name: 'Toulouse',
					logo: 'https://media-5.api-sports.io/football/teams/96.png',
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
