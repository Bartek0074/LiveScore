export const matchAbandoned = {
	get: 'fixtures',
	parameters: {
		id: '889024',
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
				id: 889024,
				referee: 'S. Yılmaz',
				timezone: 'Europe/Warsaw',
				date: '2022-12-18T12:00:00+01:00',
				timestamp: 1671361200,
				periods: {
					first: 1671361200,
					second: 1671364800,
				},
				venue: {
					id: null,
					name: 'Batman Yeni Şehir Stadı',
					city: 'Batman',
				},
				status: {
					long: 'Match Abandoned',
					short: 'ABD',
					elapsed: null,
				},
			},
			league: {
				id: 205,
				name: '2. Lig',
				country: 'Turkey',
				logo: 'https://media-4.api-sports.io/football/leagues/205.png',
				flag: 'https://media-2.api-sports.io/flags/tr.svg',
				season: 2022,
				round: 'Beyaz - 19',
			},
			teams: {
				home: {
					id: 7395,
					name: 'Batman Petrolspor',
					logo: 'https://media-4.api-sports.io/football/teams/7395.png',
					winner: null,
				},
				away: {
					id: 3613,
					name: 'Şanlıurfaspor',
					logo: 'https://media-1.api-sports.io/football/teams/3613.png',
					winner: null,
				},
			},
			goals: {
				home: 0,
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
			events: [
				{
					time: {
						elapsed: 52,
						extra: null,
					},
					team: {
						id: 3613,
						name: 'Şanlıurfaspor',
						logo: 'https://media-2.api-sports.io/football/teams/3613.png',
					},
					player: {
						id: 49879,
						name: 'B. Aydin',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 73,
						extra: null,
					},
					team: {
						id: 3613,
						name: 'Şanlıurfaspor',
						logo: 'https://media-1.api-sports.io/football/teams/3613.png',
					},
					player: {
						id: 62451,
						name: 'S. Kurumus',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Goal',
					detail: 'Penalty',
					comments: null,
				},
			],
			lineups: [],
			statistics: [],
			players: [],
		},
	],
};
