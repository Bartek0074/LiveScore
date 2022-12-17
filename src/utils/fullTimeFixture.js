export const fullTimeFixture = {
	get: 'fixtures',
	parameters: {
		id: '924558',
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
				id: 924558,
				referee: 'Jonathan Barreiro, Australia',
				timezone: 'UTC',
				date: '2022-12-17T02:00:00+00:00',
				timestamp: 1671242400,
				periods: {
					first: 1671242400,
					second: 1671246000,
				},
				venue: {
					id: 130,
					name: 'Sky Stadium',
					city: 'Wellington',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 188,
				name: 'A-League',
				country: 'Australia',
				logo: 'https://media-6.api-sports.io/football/leagues/188.png',
				flag: 'https://media-4.api-sports.io/flags/au.svg',
				season: 2022,
				round: 'Regular Season - 8',
			},
			teams: {
				home: {
					id: 942,
					name: 'Wellington Phoenix',
					logo: 'https://media-5.api-sports.io/football/teams/942.png',
					winner: true,
				},
				away: {
					id: 948,
					name: 'Adelaide United',
					logo: 'https://media-4.api-sports.io/football/teams/948.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 1,
			},
			score: {
				halftime: {
					home: 2,
					away: 1,
				},
				fulltime: {
					home: 3,
					away: 1,
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
						elapsed: 2,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-2.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 40298,
						name: 'O. Zawada',
					},
					assist: {
						id: 94346,
						name: 'T. Payne',
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 12,
						extra: null,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-4.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 6888,
						name: 'C. Goodwin',
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
						elapsed: 26,
						extra: null,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-4.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 6880,
						name: 'B. Halloran',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Tripping',
				},
				{
					time: {
						elapsed: 37,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-6.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 15803,
						name: 'B. Kraev',
					},
					assist: {
						id: 6932,
						name: 'C. Elliot',
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 42,
						extra: null,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-5.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 337589,
						name: 'A. Popovic',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Tripping',
				},
				{
					time: {
						elapsed: 51,
						extra: null,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-6.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 6880,
						name: 'B. Halloran',
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
						elapsed: 51,
						extra: null,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-5.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 6880,
						name: 'B. Halloran',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Red Card',
					comments: 'Foul',
				},
				{
					time: {
						elapsed: 61,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-2.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 10570,
						name: 'Yan Sasse',
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
						elapsed: 62,
						extra: null,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-4.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 338014,
						name: 'N. Irankunda',
					},
					assist: {
						id: 338007,
						name: 'E. Alagich',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 65,
						extra: null,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-5.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 33145,
						name: 'H. Ibusuki',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Var',
					detail: 'Goal Disallowed - offside',
					comments: null,
				},
				{
					time: {
						elapsed: 73,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-6.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 6865,
						name: 'K. Barbarouses',
					},
					assist: {
						id: 20510,
						name: 'D. Ball',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 78,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-5.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 15803,
						name: 'B. Kraev',
					},
					assist: {
						id: 15803,
						name: 'B. Kraev',
					},
					type: 'Goal',
					detail: 'Missed Penalty',
					comments: null,
				},
				{
					time: {
						elapsed: 80,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-1.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 6938,
						name: 'B. Waine',
					},
					assist: {
						id: 40298,
						name: 'O. Zawada',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 80,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-2.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 179856,
						name: 'B. Old',
					},
					assist: {
						id: 10570,
						name: 'Yan Sasse',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
				{
					time: {
						elapsed: 80,
						extra: null,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-1.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 6887,
						name: 'G. Blackwood',
					},
					assist: {
						id: 33145,
						name: 'H. Ibusuki',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 81,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-2.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 20471,
						name: 'C. Lewis',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Holding',
				},
				{
					time: {
						elapsed: 85,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-5.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 20397,
						name: 'S. Wootton',
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
						elapsed: 90,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-2.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 6934,
						name: 'A. Rufer',
					},
					assist: {
						id: 20471,
						name: 'C. Lewis',
					},
					type: 'subst',
					detail: 'Substitution 4',
					comments: null,
				},
				{
					time: {
						elapsed: 90,
						extra: null,
					},
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-1.api-sports.io/football/teams/942.png',
					},
					player: {
						id: 56321,
						name: 'N. Pennington',
					},
					assist: {
						id: 6961,
						name: 'S. Ugarkovic',
					},
					type: 'subst',
					detail: 'Substitution 5',
					comments: null,
				},
				{
					time: {
						elapsed: 90,
						extra: 3,
					},
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-5.api-sports.io/football/teams/948.png',
					},
					player: {
						id: 338014,
						name: 'N. Irankunda',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Foul',
				},
			],
			lineups: [
				{
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-1.api-sports.io/football/teams/942.png',
						colors: {
							player: {
								primary: 'f6e552',
								number: '000000',
								border: 'f6e552',
							},
							goalkeeper: {
								primary: '3333ff',
								number: 'ffffff',
								border: '3333ff',
							},
						},
					},
					formation: '4-4-2',
					startXI: [
						{
							player: {
								id: 6922,
								name: 'Oliver Sail',
								number: 20,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 6932,
								name: 'Callan Elliot',
								number: 17,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 20397,
								name: 'Scott Wootton',
								number: 4,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 94346,
								name: 'Tim Payne',
								number: 6,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 266363,
								name: 'Lucas Mauragis',
								number: 12,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 10570,
								name: 'Yan Sasse',
								number: 31,
								pos: 'M',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 6961,
								name: 'Steven Ugarković',
								number: 5,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 20471,
								name: 'Clayton Lewis',
								number: 23,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 15803,
								name: 'Bozhidar Kraev',
								number: 11,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 20510,
								name: 'David Ball',
								number: 10,
								pos: 'F',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 40298,
								name: 'Oskar Zawada',
								number: 9,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 94360,
								name: 'Alex Paulsen',
								number: 40,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 178330,
								name: 'Joshua Laws',
								number: 21,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 6934,
								name: 'Alex Rufer',
								number: 14,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 179856,
								name: 'Benjamin Old',
								number: 8,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 6865,
								name: 'Kosta Barbarouses',
								number: 7,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 56321,
								name: 'Nicholas Pennington',
								number: 13,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 6938,
								name: 'Ben Waine',
								number: 18,
								pos: 'F',
								grid: null,
							},
						},
					],
					coach: {
						id: 1144,
						name: 'U. Talay',
						photo: 'https://media-6.api-sports.io/football/coachs/1144.png',
					},
				},
				{
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-2.api-sports.io/football/teams/948.png',
						colors: {
							player: {
								primary: 'af162d',
								number: 'ffffff',
								border: 'af162d',
							},
							goalkeeper: {
								primary: '3f837d',
								number: 'ffffff',
								border: '3f837d',
							},
						},
					},
					formation: '4-2-3-1',
					startXI: [
						{
							player: {
								id: 7029,
								name: 'Joe Gauci',
								number: 46,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 47333,
								name: 'Javi López',
								number: 21,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 87837,
								name: 'Lachlan Barr',
								number: 13,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 337589,
								name: 'Alexandar Popovic',
								number: 41,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 6881,
								name: 'Ryan Kitto',
								number: 7,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 6879,
								name: "Louis D'Arrigo",
								number: 6,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 6812,
								name: 'Juande Prados',
								number: 28,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 6880,
								name: 'Ben Halloran',
								number: 26,
								pos: 'M',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 338007,
								name: 'Ethan Alagich',
								number: 55,
								pos: 'M',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 6888,
								name: 'Craig Goodwin',
								number: 11,
								pos: 'M',
								grid: '4:1',
							},
						},
						{
							player: {
								id: 33145,
								name: 'Hiroshi Ibusuki',
								number: 9,
								pos: 'F',
								grid: '5:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 6895,
								name: 'James Delianov',
								number: 1,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 34338,
								name: 'Nick Ansell',
								number: 4,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 297968,
								name: 'Jonny Yull',
								number: 37,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 154860,
								name: 'Joshua Cavallo',
								number: 27,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 6887,
								name: 'George Blackwood',
								number: 14,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 376675,
								name: 'Panashe Madanha',
								number: 36,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 338014,
								name: 'Nestory Irankunda',
								number: 66,
								pos: 'F',
								grid: null,
							},
						},
					],
					coach: {
						id: 13537,
						name: 'C. Veart',
						photo: 'https://media-1.api-sports.io/football/coachs/13537.png',
					},
				},
			],
			statistics: [
				{
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-5.api-sports.io/football/teams/942.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 8,
						},
						{
							type: 'Shots off Goal',
							value: 3,
						},
						{
							type: 'Total Shots',
							value: 17,
						},
						{
							type: 'Blocked Shots',
							value: 6,
						},
						{
							type: 'Shots insidebox',
							value: 13,
						},
						{
							type: 'Shots outsidebox',
							value: 4,
						},
						{
							type: 'Fouls',
							value: 15,
						},
						{
							type: 'Corner Kicks',
							value: 16,
						},
						{
							type: 'Offsides',
							value: null,
						},
						{
							type: 'Ball Possession',
							value: '53%',
						},
						{
							type: 'Yellow Cards',
							value: 2,
						},
						{
							type: 'Red Cards',
							value: null,
						},
						{
							type: 'Goalkeeper Saves',
							value: 2,
						},
						{
							type: 'Total passes',
							value: 479,
						},
						{
							type: 'Passes accurate',
							value: 413,
						},
						{
							type: 'Passes %',
							value: '86%',
						},
					],
				},
				{
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-1.api-sports.io/football/teams/948.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 3,
						},
						{
							type: 'Shots off Goal',
							value: 1,
						},
						{
							type: 'Total Shots',
							value: 5,
						},
						{
							type: 'Blocked Shots',
							value: 1,
						},
						{
							type: 'Shots insidebox',
							value: 2,
						},
						{
							type: 'Shots outsidebox',
							value: 3,
						},
						{
							type: 'Fouls',
							value: 13,
						},
						{
							type: 'Corner Kicks',
							value: 1,
						},
						{
							type: 'Offsides',
							value: 1,
						},
						{
							type: 'Ball Possession',
							value: '47%',
						},
						{
							type: 'Yellow Cards',
							value: 4,
						},
						{
							type: 'Red Cards',
							value: 1,
						},
						{
							type: 'Goalkeeper Saves',
							value: 4,
						},
						{
							type: 'Total passes',
							value: 444,
						},
						{
							type: 'Passes accurate',
							value: 368,
						},
						{
							type: 'Passes %',
							value: '83%',
						},
					],
				},
			],
			players: [
				{
					team: {
						id: 942,
						name: 'Wellington Phoenix',
						logo: 'https://media-2.api-sports.io/football/teams/942.png',
						update: '2022-12-17T10:30:20+00:00',
					},
					players: [
						{
							player: {
								id: 6922,
								name: 'Oliver Sail',
								photo:
									'https://media-5.api-sports.io/football/players/6922.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 20,
										position: 'G',
										rating: '6.5',
										captain: true,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 1,
										assists: null,
										saves: 2,
									},
									passes: {
										total: 22,
										key: null,
										accuracy: '12',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: 0,
									},
								},
							],
						},
						{
							player: {
								id: 6932,
								name: 'Callan Elliot',
								photo:
									'https://media-4.api-sports.io/football/players/6932.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 17,
										position: 'D',
										rating: '6.9',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: 1,
										saves: null,
									},
									passes: {
										total: 31,
										key: 1,
										accuracy: '29',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 10,
										won: 4,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 1,
										committed: 2,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 20397,
								name: 'Scott Wootton',
								photo:
									'https://media-4.api-sports.io/football/players/20397.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 4,
										position: 'D',
										rating: '6.7',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 38,
										key: null,
										accuracy: '34',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 5,
										won: 2,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: 2,
									},
									cards: {
										yellow: 1,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 94346,
								name: 'Tim Payne',
								photo:
									'https://media-2.api-sports.io/football/players/94346.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 6,
										position: 'D',
										rating: '7.7',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: 1,
										saves: null,
									},
									passes: {
										total: 59,
										key: 1,
										accuracy: '55',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 5,
										won: 5,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: 1,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 266363,
								name: 'Lucas Mauragis',
								photo:
									'https://media-4.api-sports.io/football/players/266363.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 12,
										position: 'D',
										rating: '6.5',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 51,
										key: 1,
										accuracy: '45',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 14,
										won: 5,
									},
									dribbles: {
										attempts: 4,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: 3,
										committed: 2,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 10570,
								name: 'Yan Sasse',
								photo:
									'https://media-5.api-sports.io/football/players/10570.png',
							},
							statistics: [
								{
									games: {
										minutes: 80,
										number: 31,
										position: 'M',
										rating: '7.9',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 1,
										on: 1,
									},
									goals: {
										total: 1,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 33,
										key: 1,
										accuracy: '31',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 7,
										won: 6,
									},
									dribbles: {
										attempts: 4,
										success: 4,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6961,
								name: 'Steven Ugarković',
								photo:
									'https://media-2.api-sports.io/football/players/6961.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 5,
										position: 'M',
										rating: '7.2',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 66,
										key: 1,
										accuracy: '57',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 5,
										won: 4,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: 1,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 20471,
								name: 'Clayton Lewis',
								photo:
									'https://media-6.api-sports.io/football/players/20471.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 23,
										position: 'M',
										rating: '7.5',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 1,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 76,
										key: 1,
										accuracy: '68',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 6,
										won: 4,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 1,
										committed: 3,
									},
									cards: {
										yellow: 1,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 15803,
								name: 'Bozhidar Kraev',
								photo:
									'https://media-6.api-sports.io/football/players/15803.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 11,
										position: 'M',
										rating: '6.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 3,
										on: 2,
									},
									goals: {
										total: 1,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 43,
										key: 1,
										accuracy: '33',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 3,
									},
									duels: {
										total: 10,
										won: 3,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 1,
										committed: 2,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 1,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 20510,
								name: 'David Ball',
								photo:
									'https://media-5.api-sports.io/football/players/20510.png',
							},
							statistics: [
								{
									games: {
										minutes: 73,
										number: 10,
										position: 'F',
										rating: '6.6',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 2,
										on: 2,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 23,
										key: 1,
										accuracy: '19',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 6,
										won: 4,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: 2,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 40298,
								name: 'Oskar Zawada',
								photo:
									'https://media-1.api-sports.io/football/players/40298.png',
							},
							statistics: [
								{
									games: {
										minutes: 80,
										number: 9,
										position: 'F',
										rating: '7.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 2,
										on: 1,
									},
									goals: {
										total: 1,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 13,
										key: null,
										accuracy: '10',
									},
									tackles: {
										total: 1,
										blocks: 1,
										interceptions: 1,
									},
									duels: {
										total: 9,
										won: 2,
									},
									dribbles: {
										attempts: 1,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: 3,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 94360,
								name: 'Alex Paulsen',
								photo:
									'https://media-5.api-sports.io/football/players/94360.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 40,
										position: 'G',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: null,
										key: null,
										accuracy: null,
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 178330,
								name: 'Joshua Laws',
								photo:
									'https://media-4.api-sports.io/football/players/178330.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 21,
										position: 'D',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: null,
										key: null,
										accuracy: null,
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6934,
								name: 'Alex Rufer',
								photo:
									'https://media-5.api-sports.io/football/players/6934.png',
							},
							statistics: [
								{
									games: {
										minutes: 5,
										number: 14,
										position: 'M',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 2,
										key: null,
										accuracy: '2',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 2,
										won: 2,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 2,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 179856,
								name: 'Benjamin Old',
								photo:
									'https://media-1.api-sports.io/football/players/179856.png',
							},
							statistics: [
								{
									games: {
										minutes: 15,
										number: 8,
										position: 'M',
										rating: '6.9',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 7,
										key: 2,
										accuracy: '5',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 1,
										won: 1,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6865,
								name: 'Kosta Barbarouses',
								photo:
									'https://media-1.api-sports.io/football/players/6865.png',
							},
							statistics: [
								{
									games: {
										minutes: 22,
										number: 7,
										position: 'F',
										rating: '6',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: 2,
										on: 2,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 13,
										key: null,
										accuracy: '11',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 1,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: 1,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 56321,
								name: 'Nicholas Pennington',
								photo:
									'https://media-5.api-sports.io/football/players/56321.png',
							},
							statistics: [
								{
									games: {
										minutes: 5,
										number: 13,
										position: 'M',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 1,
										key: null,
										accuracy: '1',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6938,
								name: 'Ben Waine',
								photo:
									'https://media-2.api-sports.io/football/players/6938.png',
							},
							statistics: [
								{
									games: {
										minutes: 15,
										number: 18,
										position: 'F',
										rating: '6.3',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 1,
										key: null,
										accuracy: '1',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 2,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
					],
				},
				{
					team: {
						id: 948,
						name: 'Adelaide United',
						logo: 'https://media-5.api-sports.io/football/teams/948.png',
						update: '2022-12-17T10:30:20+00:00',
					},
					players: [
						{
							player: {
								id: 7029,
								name: 'Joe Gauci',
								photo:
									'https://media-6.api-sports.io/football/players/7029.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 46,
										position: 'G',
										rating: '7.2',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 3,
										assists: null,
										saves: 4,
									},
									passes: {
										total: 23,
										key: null,
										accuracy: '15',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 2,
										won: 2,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 1,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: 1,
									},
								},
							],
						},
						{
							player: {
								id: 47333,
								name: 'Javi López',
								photo:
									'https://media-5.api-sports.io/football/players/47333.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 21,
										position: 'D',
										rating: '6.7',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 47,
										key: 1,
										accuracy: '41',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 9,
										won: 6,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 2,
										committed: 2,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 87837,
								name: 'Lachlan Barr',
								photo:
									'https://media-1.api-sports.io/football/players/87837.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 13,
										position: 'D',
										rating: '6.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 60,
										key: null,
										accuracy: '50',
									},
									tackles: {
										total: 1,
										blocks: 2,
										interceptions: 2,
									},
									duels: {
										total: 2,
										won: 1,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: null,
										committed: 1,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: 1,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 337589,
								name: 'Alexandar Popovic',
								photo:
									'https://media-5.api-sports.io/football/players/337589.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 41,
										position: 'D',
										rating: '6.9',
										captain: false,
										substitute: false,
									},
									offsides: 1,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 73,
										key: null,
										accuracy: '65',
									},
									tackles: {
										total: 1,
										blocks: 2,
										interceptions: null,
									},
									duels: {
										total: 5,
										won: 3,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: null,
										committed: 1,
									},
									cards: {
										yellow: 1,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6881,
								name: 'Ryan Kitto',
								photo:
									'https://media-1.api-sports.io/football/players/6881.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 7,
										position: 'D',
										rating: '6.2',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 35,
										key: 1,
										accuracy: '27',
									},
									tackles: {
										total: 1,
										blocks: 1,
										interceptions: 1,
									},
									duels: {
										total: 9,
										won: 4,
									},
									dribbles: {
										attempts: 1,
										success: null,
										past: 2,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6879,
								name: "Louis D'Arrigo",
								photo:
									'https://media-4.api-sports.io/football/players/6879.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 6,
										position: 'M',
										rating: '7',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 45,
										key: null,
										accuracy: '40',
									},
									tackles: {
										total: 4,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 7,
										won: 5,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 1,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6812,
								name: 'Juande Prados',
								photo:
									'https://media-1.api-sports.io/football/players/6812.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 28,
										position: 'M',
										rating: '6.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 68,
										key: null,
										accuracy: '60',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 6,
										won: 3,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: 2,
										committed: 2,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6880,
								name: 'Ben Halloran',
								photo:
									'https://media-2.api-sports.io/football/players/6880.png',
							},
							statistics: [
								{
									games: {
										minutes: 51,
										number: 26,
										position: 'M',
										rating: '5',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 25,
										key: null,
										accuracy: '16',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 12,
										won: 3,
									},
									dribbles: {
										attempts: 1,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: 1,
										committed: 4,
									},
									cards: {
										yellow: 2,
										red: 1,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 338007,
								name: 'Ethan Alagich',
								photo:
									'https://media-4.api-sports.io/football/players/338007.png',
							},
							statistics: [
								{
									games: {
										minutes: 63,
										number: 55,
										position: 'M',
										rating: '6.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 14,
										key: null,
										accuracy: '9',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 8,
										won: 4,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: 3,
										committed: 1,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6888,
								name: 'Craig Goodwin',
								photo:
									'https://media-1.api-sports.io/football/players/6888.png',
							},
							statistics: [
								{
									games: {
										minutes: 95,
										number: 11,
										position: 'M',
										rating: '7.9',
										captain: true,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 1,
										on: 1,
									},
									goals: {
										total: 1,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 28,
										key: 1,
										accuracy: '25',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 8,
										won: 6,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 2,
										committed: 1,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 33145,
								name: 'Hiroshi Ibusuki',
								photo:
									'https://media-6.api-sports.io/football/players/33145.png',
							},
							statistics: [
								{
									games: {
										minutes: 80,
										number: 9,
										position: 'F',
										rating: '7',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 3,
										on: 2,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 14,
										key: null,
										accuracy: '10',
									},
									tackles: {
										total: null,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: 7,
										won: 2,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6895,
								name: 'James Delianov',
								photo:
									'https://media-6.api-sports.io/football/players/6895.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 1,
										position: 'G',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: null,
										key: null,
										accuracy: null,
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 34338,
								name: 'Nick Ansell',
								photo:
									'https://media-4.api-sports.io/football/players/34338.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 4,
										position: 'D',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: null,
										key: null,
										accuracy: null,
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 297968,
								name: 'Jonny Yull',
								photo:
									'https://media-2.api-sports.io/football/players/297968.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 37,
										position: 'M',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: null,
										key: null,
										accuracy: null,
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 154860,
								name: 'Joshua Cavallo',
								photo:
									'https://media-2.api-sports.io/football/players/154860.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 27,
										position: 'M',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: null,
										key: null,
										accuracy: null,
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6887,
								name: 'George Blackwood',
								photo:
									'https://media-2.api-sports.io/football/players/6887.png',
							},
							statistics: [
								{
									games: {
										minutes: 15,
										number: 14,
										position: 'F',
										rating: '6.6',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 3,
										key: null,
										accuracy: '2',
									},
									tackles: {
										total: null,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 376675,
								name: 'Panashe Madanha',
								photo:
									'https://media-5.api-sports.io/football/players/376675.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 36,
										position: 'F',
										rating: null,
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: null,
										key: null,
										accuracy: null,
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: null,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: null,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 338014,
								name: 'Nestory Irankunda',
								photo:
									'https://media-2.api-sports.io/football/players/338014.png',
							},
							statistics: [
								{
									games: {
										minutes: 32,
										number: 66,
										position: 'F',
										rating: '6.5',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: null,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 9,
										key: null,
										accuracy: '8',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 8,
										won: 3,
									},
									dribbles: {
										attempts: 1,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: 2,
										committed: 1,
									},
									cards: {
										yellow: 1,
										red: 0,
									},
									penalty: {
										won: null,
										commited: null,
										scored: 0,
										missed: 0,
										saved: null,
									},
								},
							],
						},
					],
				},
			],
		},
	],
};
