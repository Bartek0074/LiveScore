export const penFixture = {
	get: 'fixtures',
	parameters: {
		id: '590772',
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
				id: 590772,
				referee: 'N. Kajtazović',
				timezone: 'UTC',
				date: '2020-08-19T16:30:00+00:00',
				timestamp: 1597854600,
				periods: {
					first: 1597854600,
					second: 1597858200,
				},
				venue: {
					id: 605,
					name: 'A. Le Coq Arena',
					city: 'Tallinn',
				},
				status: {
					long: 'Match Finished',
					short: 'PEN',
					elapsed: 120,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2020,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 687,
					name: 'Flora Tallinn',
					logo: 'https://media-5.api-sports.io/football/teams/687.png',
					winner: false,
				},
				away: {
					id: 612,
					name: 'Suduva Marijampole',
					logo: 'https://media-5.api-sports.io/football/teams/612.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 1,
				},
				extratime: {
					home: 0,
					away: 0,
				},
				penalty: {
					home: 2,
					away: 4,
				},
			},
			events: [
				{
					time: {
						elapsed: 31,
						extra: null,
					},
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-5.api-sports.io/football/teams/612.png',
					},
					player: {
						id: 69891,
						name: 'Ivan Hladik',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Foul',
				},
				{
					time: {
						elapsed: 37,
						extra: null,
					},
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-1.api-sports.io/football/teams/612.png',
					},
					player: {
						id: 69897,
						name: 'P. Leimonas',
					},
					assist: {
						id: 14314,
						name: 'D. Pušić',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 49,
						extra: null,
					},
					team: {
						id: 687,
						name: 'Flora Tallinn',
						logo: 'https://media-2.api-sports.io/football/teams/687.png',
					},
					player: {
						id: 37470,
						name: 'R. Sappinen',
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
						elapsed: 53,
						extra: null,
					},
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-2.api-sports.io/football/teams/612.png',
					},
					player: {
						id: 9079,
						name: 'Semir Kerla',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Foul',
				},
				{
					time: {
						elapsed: 61,
						extra: null,
					},
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-2.api-sports.io/football/teams/612.png',
					},
					player: {
						id: 69898,
						name: 'G. Matulevičius',
					},
					assist: {
						id: 69896,
						name: 'E. Jankauskas',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 62,
						extra: null,
					},
					team: {
						id: 687,
						name: 'Flora Tallinn',
						logo: 'https://media-5.api-sports.io/football/teams/687.png',
					},
					player: {
						id: 60613,
						name: 'M. Miller',
					},
					assist: {
						id: 60617,
						name: 'R. Alliku',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 72,
						extra: null,
					},
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-2.api-sports.io/football/teams/612.png',
					},
					player: {
						id: 63699,
						name: 'Y. Efremov',
					},
					assist: {
						id: 69892,
						name: 'A. Švrljuga',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
				{
					time: {
						elapsed: 77,
						extra: null,
					},
					team: {
						id: 687,
						name: 'Flora Tallinn',
						logo: 'https://media-4.api-sports.io/football/teams/687.png',
					},
					player: {
						id: 60611,
						name: 'Henrik Purg',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Foul',
				},
				{
					time: {
						elapsed: 78,
						extra: null,
					},
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-5.api-sports.io/football/teams/612.png',
					},
					player: {
						id: 69904,
						name: 'M. Topcagić',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Goal',
					detail: 'Penalty',
					comments: null,
				},
				{
					time: {
						elapsed: 84,
						extra: null,
					},
					team: {
						id: 687,
						name: 'Flora Tallinn',
						logo: 'https://media-5.api-sports.io/football/teams/687.png',
					},
					player: {
						id: 55914,
						name: 'Konstantin Vassiljev',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Foul',
				},
				{
					time: {
						elapsed: 84,
						extra: null,
					},
					team: {
						id: 687,
						name: 'Flora Tallinn',
						logo: 'https://media-2.api-sports.io/football/teams/687.png',
					},
					player: {
						id: 60616,
						name: 'V. Sinyavskiy',
					},
					assist: {
						id: 55915,
						name: 'F. Liivak',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 89,
						extra: null,
					},
					team: {
						id: 687,
						name: 'Flora Tallinn',
						logo: 'https://media-1.api-sports.io/football/teams/687.png',
					},
					player: {
						id: 60617,
						name: 'Rauno Alliku',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Foul',
				},
				{
					time: {
						elapsed: 105,
						extra: null,
					},
					team: {
						id: 687,
						name: 'Flora Tallinn',
						logo: 'https://media-1.api-sports.io/football/teams/687.png',
					},
					player: {
						id: 40197,
						name: 'K. Kallaste',
					},
					assist: {
						id: 60610,
						name: 'H. Järvelaid',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
				{
					time: {
						elapsed: 113,
						extra: null,
					},
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-1.api-sports.io/football/teams/612.png',
					},
					player: {
						id: 7448,
						name: 'Thomas Salamon',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: null,
				},
				{
					time: {
						elapsed: 120,
						extra: null,
					},
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-2.api-sports.io/football/teams/612.png',
					},
					player: {
						id: 7448,
						name: 'T. Salamon',
					},
					assist: {
						id: 40791,
						name: 'V. Šabala',
					},
					type: 'subst',
					detail: 'Substitution 4',
					comments: null,
				},
			],
			lineups: [
				{
					team: {
						id: 687,
						name: 'Flora Tallinn',
						logo: 'https://media-5.api-sports.io/football/teams/687.png',
						colors: null,
					},
					coach: {
						id: 2300,
						name: 'J. Henn',
						photo: 'https://media-2.api-sports.io/football/coachs/2300.png',
					},
					formation: '5-4-1',
					startXI: [
						{
							player: {
								id: 39302,
								name: 'M. Igonen',
								number: 32,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 40197,
								name: 'K. Kallaste',
								number: 25,
								pos: 'D',
								grid: '2:5',
							},
						},
						{
							player: {
								id: 55909,
								name: 'M. Kuusk',
								number: 2,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 60611,
								name: 'H. Pürg',
								number: 24,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 60350,
								name: 'M. Lilander',
								number: 27,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 55914,
								name: 'K. Vassiljev',
								number: 14,
								pos: 'M',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 60613,
								name: 'M. Miller',
								number: 10,
								pos: 'M',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 126756,
								name: 'M. Soomets',
								number: 28,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 60612,
								name: 'V. Kreida',
								number: 5,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 37470,
								name: 'R. Sappinen',
								number: 11,
								pos: 'F',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 60616,
								name: 'V. Sinyavskiy',
								number: 99,
								pos: 'M',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 60617,
								name: 'R. Alliku',
								number: 9,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 55915,
								name: 'F. Liivak',
								number: 7,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 60610,
								name: 'H. Järvelaid',
								number: 45,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 60353,
								name: 'M. Paskotši',
								number: 40,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 60370,
								name: 'M. Poom',
								number: 35,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 60653,
								name: 'H. Välja',
								number: 23,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 60348,
								name: 'I. Paplavskis',
								number: 1,
								pos: 'G',
								grid: null,
							},
						},
					],
				},
				{
					team: {
						id: 612,
						name: 'Suduva Marijampole',
						logo: 'https://media-6.api-sports.io/football/teams/612.png',
						colors: null,
					},
					coach: {
						id: 1395,
						name: 'S. Širmelis',
						photo: 'https://media-1.api-sports.io/football/coachs/1395.png',
					},
					formation: '5-3-2',
					startXI: [
						{
							player: {
								id: 69887,
								name: 'I. Kardum',
								number: 12,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 55896,
								name: 'V. Slavickas',
								number: 19,
								pos: 'D',
								grid: '2:5',
							},
						},
						{
							player: {
								id: 7448,
								name: 'T. Salamon',
								number: 18,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 69893,
								name: 'A. Živanović',
								number: 15,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 9079,
								name: 'S. Kerla',
								number: 10,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 69891,
								name: 'I. Hladík',
								number: 30,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 63699,
								name: 'Y. Efremov',
								number: 80,
								pos: 'D',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 69897,
								name: 'P. Leimonas',
								number: 6,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 69898,
								name: 'G. Matulevičius',
								number: 17,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 80197,
								name: 'J. Tadic',
								number: 77,
								pos: 'F',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 69904,
								name: 'M. Topcagić',
								number: 9,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 14314,
								name: 'D. Pušić',
								number: 25,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 69896,
								name: 'E. Jankauskas',
								number: 7,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 69892,
								name: 'A. Švrljuga',
								number: 11,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 40791,
								name: 'V. Šabala',
								number: 20,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 69888,
								name: 'I. Plūkas',
								number: 13,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 9214,
								name: 'Renan Oliveira',
								number: 8,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 72366,
								name: 'G. Kļuškins',
								number: 32,
								pos: 'M',
								grid: null,
							},
						},
					],
				},
			],
			statistics: [],
			players: [],
		},
	],
};
