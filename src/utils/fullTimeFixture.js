export const fullTimeFixture = {
	get: 'fixtures',
	parameters: {
		id: '878080',
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
				id: 878080,
				referee: 'César Soto',
				timezone: 'Europe/Warsaw',
				date: '2022-11-10T21:30:00+01:00',
				timestamp: 1668112200,
				periods: {
					first: 1668112200,
					second: 1668115800,
				},
				venue: {
					id: 1456,
					name: 'Estadio Santiago Bernabéu',
					city: 'Madrid',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 140,
				name: 'La Liga',
				country: 'Spain',
				logo: 'https://media-5.api-sports.io/football/leagues/140.png',
				flag: 'https://media-4.api-sports.io/flags/es.svg',
				season: 2022,
				round: 'Regular Season - 14',
			},
			teams: {
				home: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-2.api-sports.io/football/teams/541.png',
					winner: true,
				},
				away: {
					id: 724,
					name: 'Cadiz',
					logo: 'https://media-2.api-sports.io/football/teams/724.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
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
						elapsed: 19,
						extra: null,
					},
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-4.api-sports.io/football/teams/541.png',
					},
					player: {
						id: 372,
						name: 'Éder Militão',
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
						elapsed: 28,
						extra: null,
					},
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-5.api-sports.io/football/teams/541.png',
					},
					player: {
						id: 762,
						name: 'Vinícius Júnior',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Argument',
				},
				{
					time: {
						elapsed: 28,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-2.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 47229,
						name: 'Fali',
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
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-4.api-sports.io/football/teams/541.png',
					},
					player: {
						id: 505,
						name: 'David Alaba',
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
						elapsed: 40,
						extra: null,
					},
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-4.api-sports.io/football/teams/541.png',
					},
					player: {
						id: 372,
						name: 'Éder Militão',
					},
					assist: {
						id: 752,
						name: 'T. Kroos',
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 44,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-1.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 937,
						name: 'Rubén Sobrino',
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
						elapsed: 55,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-2.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 46824,
						name: 'Iván Alejo',
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
						elapsed: 56,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-4.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 46824,
						name: 'Alejo',
					},
					assist: {
						id: 8627,
						name: 'T. Bongonda',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 56,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-1.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 47485,
						name: 'Rubén Alcaraz',
					},
					assist: {
						id: 51588,
						name: 'B. Ocampo',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 70,
						extra: null,
					},
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-4.api-sports.io/football/teams/541.png',
					},
					player: {
						id: 752,
						name: 'T. Kroos',
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
						elapsed: 72,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-1.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 47525,
						name: 'A. Lozano',
					},
					assist: {
						id: 18833,
						name: 'Lucas Pérez',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
				{
					time: {
						elapsed: 73,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-1.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 46998,
						name: 'Juan Cala',
					},
					assist: {
						id: 46772,
						name: 'José Mari',
					},
					type: 'subst',
					detail: 'Substitution 4',
					comments: null,
				},
				{
					time: {
						elapsed: 78,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-5.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 937,
						name: 'Sobrino',
					},
					assist: {
						id: 50502,
						name: 'Álvaro Negredo',
					},
					type: 'subst',
					detail: 'Substitution 5',
					comments: null,
				},
				{
					time: {
						elapsed: 81,
						extra: null,
					},
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-1.api-sports.io/football/teams/724.png',
					},
					player: {
						id: 18833,
						name: 'Lucas Pérez',
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
						elapsed: 82,
						extra: null,
					},
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-1.api-sports.io/football/teams/541.png',
					},
					player: {
						id: 10009,
						name: 'Rodrygo',
					},
					assist: {
						id: 748,
						name: 'Dani Ceballos',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 85,
						extra: null,
					},
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-2.api-sports.io/football/teams/541.png',
					},
					player: {
						id: 754,
						name: 'L. Modrić',
					},
					assist: {
						id: 2207,
						name: 'E. Camavinga',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 88,
						extra: null,
					},
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-4.api-sports.io/football/teams/541.png',
					},
					player: {
						id: 757,
						name: 'Lucas Vázquez',
					},
					assist: {
						id: 735,
						name: 'Nacho',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
			],
			lineups: [
				{
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-1.api-sports.io/football/teams/541.png',
						colors: {
							player: {
								primary: 'ffffff',
								number: '000000',
								border: 'ffffff',
							},
							goalkeeper: {
								primary: '000000',
								number: 'ffffff',
								border: '000000',
							},
						},
					},
					coach: {
						id: 2407,
						name: 'C. Ancelotti',
						photo: 'https://media-2.api-sports.io/football/coachs/2407.png',
					},
					formation: '4-3-3',
					startXI: [
						{
							player: {
								id: 730,
								name: 'T. Courtois',
								number: 1,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 505,
								name: 'D. Alaba',
								number: 4,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 653,
								name: 'F. Mendy',
								number: 23,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 372,
								name: 'Éder Militão',
								number: 3,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 754,
								name: 'L. Modrić',
								number: 10,
								pos: 'M',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 752,
								name: 'T. Kroos',
								number: 8,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 757,
								name: 'Lucas Vázquez',
								number: 17,
								pos: 'D',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 756,
								name: 'F. Valverde',
								number: 15,
								pos: 'F',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 1271,
								name: 'A. Tchouaméni',
								number: 18,
								pos: 'M',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 762,
								name: 'Vinícius Júnior',
								number: 20,
								pos: 'F',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 10009,
								name: 'Rodrygo',
								number: 21,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 748,
								name: 'Dani Ceballos',
								number: 19,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 2207,
								name: 'E. Camavinga',
								number: 12,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 735,
								name: 'Nacho',
								number: 6,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 746,
								name: 'Asensio',
								number: 11,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 47400,
								name: 'A. Lunin',
								number: 13,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 760,
								name: 'M. Díaz',
								number: 24,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 162529,
								name: 'Luis López',
								number: 26,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 737,
								name: 'Odriozola',
								number: 16,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 733,
								name: 'Daniel Carvajal',
								number: 2,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 2296,
								name: 'E. Hazard',
								number: 7,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 741,
								name: 'Vallejo',
								number: 5,
								pos: 'D',
								grid: null,
							},
						},
					],
				},
				{
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-1.api-sports.io/football/teams/724.png',
						colors: {
							player: {
								primary: 'ffff00',
								number: '000040',
								border: 'ffff00',
							},
							goalkeeper: {
								primary: 'ff3300',
								number: 'ffff00',
								border: 'ff3300',
							},
						},
					},
					coach: {
						id: 1600,
						name: 'Sergio',
						photo: 'https://media-2.api-sports.io/football/coachs/1600.png',
					},
					formation: '4-4-2',
					startXI: [
						{
							player: {
								id: 6492,
								name: 'J. Ledesma',
								number: 1,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 46998,
								name: 'Juan Cala',
								number: 16,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 47100,
								name: 'Isaac Carcelén',
								number: 20,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 47229,
								name: 'Fali Jiménez',
								number: 3,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 46759,
								name: 'A. Espino',
								number: 22,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 46769,
								name: 'Álex',
								number: 8,
								pos: 'F',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 47485,
								name: 'Rubén Alcaraz',
								number: 4,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 46824,
								name: 'Alejo',
								number: 11,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 46691,
								name: 'Fede',
								number: 24,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 47525,
								name: 'A. Lozano',
								number: 9,
								pos: 'F',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 937,
								name: 'Sobrino',
								number: 7,
								pos: 'M',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 8627,
								name: 'T. Bongonda',
								number: 10,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 51588,
								name: 'B. Ocampo',
								number: 14,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 18833,
								name: 'Lucas Pérez',
								number: 15,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 46772,
								name: 'José Mari',
								number: 6,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 50502,
								name: 'Álvaro Negredo',
								number: 18,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 11471,
								name: 'T. Alarcón',
								number: 12,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 46755,
								name: 'David Gil',
								number: 13,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 162686,
								name: 'Antonio Blanco',
								number: 36,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 2508,
								name: 'S. Arzamendia',
								number: 21,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 46931,
								name: 'Álvaro Giménez',
								number: 19,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 192024,
								name: 'L. Spatz',
								number: 37,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 2755,
								name: 'A. Mabil',
								number: 17,
								pos: 'M',
								grid: null,
							},
						},
					],
				},
			],
			statistics: [
				{
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-2.api-sports.io/football/teams/541.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 5,
						},
						{
							type: 'Shots off Goal',
							value: 10,
						},
						{
							type: 'Total Shots',
							value: 18,
						},
						{
							type: 'Blocked Shots',
							value: 3,
						},
						{
							type: 'Shots insidebox',
							value: 8,
						},
						{
							type: 'Shots outsidebox',
							value: 10,
						},
						{
							type: 'Fouls',
							value: 12,
						},
						{
							type: 'Corner Kicks',
							value: 7,
						},
						{
							type: 'Offsides',
							value: 3,
						},
						{
							type: 'Ball Possession',
							value: '67%',
						},
						{
							type: 'Yellow Cards',
							value: 3,
						},
						{
							type: 'Red Cards',
							value: null,
						},
						{
							type: 'Goalkeeper Saves',
							value: 4,
						},
						{
							type: 'Total passes',
							value: 672,
						},
						{
							type: 'Passes accurate',
							value: 602,
						},
						{
							type: 'Passes %',
							value: '90%',
						},
					],
				},
				{
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-2.api-sports.io/football/teams/724.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 5,
						},
						{
							type: 'Shots off Goal',
							value: 3,
						},
						{
							type: 'Total Shots',
							value: 10,
						},
						{
							type: 'Blocked Shots',
							value: 2,
						},
						{
							type: 'Shots insidebox',
							value: 5,
						},
						{
							type: 'Shots outsidebox',
							value: 5,
						},
						{
							type: 'Fouls',
							value: 16,
						},
						{
							type: 'Corner Kicks',
							value: 1,
						},
						{
							type: 'Offsides',
							value: null,
						},
						{
							type: 'Ball Possession',
							value: '33%',
						},
						{
							type: 'Yellow Cards',
							value: 3,
						},
						{
							type: 'Red Cards',
							value: null,
						},
						{
							type: 'Goalkeeper Saves',
							value: 3,
						},
						{
							type: 'Total passes',
							value: 338,
						},
						{
							type: 'Passes accurate',
							value: 269,
						},
						{
							type: 'Passes %',
							value: '80%',
						},
					],
				},
			],
			players: [
				{
					team: {
						id: 541,
						name: 'Real Madrid',
						logo: 'https://media-2.api-sports.io/football/teams/541.png',
						update: '2022-11-12T05:10:55+01:00',
					},
					players: [
						{
							player: {
								id: 730,
								name: 'Thibaut Courtois',
								photo: 'https://media-2.api-sports.io/football/players/730.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 1,
										position: 'G',
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
										conceded: 1,
										assists: null,
										saves: 4,
									},
									passes: {
										total: 27,
										key: null,
										accuracy: '22',
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
								id: 757,
								name: 'Lucas Vázquez',
								photo: 'https://media-4.api-sports.io/football/players/757.png',
							},
							statistics: [
								{
									games: {
										minutes: 88,
										number: 17,
										position: 'D',
										rating: '7.2',
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
										key: 3,
										accuracy: '64',
									},
									tackles: {
										total: 4,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 10,
										won: 5,
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
								id: 372,
								name: 'Éder Militão',
								photo: 'https://media-5.api-sports.io/football/players/372.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 3,
										position: 'D',
										rating: '8',
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
										total: 63,
										key: null,
										accuracy: '58',
									},
									tackles: {
										total: 2,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: 14,
										won: 12,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 4,
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
								id: 505,
								name: 'David Alaba',
								photo: 'https://media-5.api-sports.io/football/players/505.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 4,
										position: 'D',
										rating: '6.6',
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
										accuracy: '42',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 2,
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
								id: 653,
								name: 'Ferland Mendy',
								photo: 'https://media-1.api-sports.io/football/players/653.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 23,
										position: 'D',
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
										total: 54,
										key: 2,
										accuracy: '46',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 10,
										won: 10,
									},
									dribbles: {
										attempts: 4,
										success: 4,
										past: null,
									},
									fouls: {
										drawn: 4,
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
								id: 754,
								name: 'Luka Modrić',
								photo: 'https://media-2.api-sports.io/football/players/754.png',
							},
							statistics: [
								{
									games: {
										minutes: 85,
										number: 10,
										position: 'M',
										rating: '7.2',
										captain: true,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 2,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 89,
										key: 1,
										accuracy: '79',
									},
									tackles: {
										total: 3,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: 9,
										won: 6,
									},
									dribbles: {
										attempts: 2,
										success: 1,
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
								id: 1271,
								name: 'Aurélien Tchouaméni',
								photo:
									'https://media-2.api-sports.io/football/players/1271.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 18,
										position: 'M',
										rating: '7.5',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 2,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 74,
										key: 1,
										accuracy: '73',
									},
									tackles: {
										total: 5,
										blocks: null,
										interceptions: null,
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
								id: 752,
								name: 'Toni Kroos',
								photo: 'https://media-2.api-sports.io/football/players/752.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 8,
										position: 'M',
										rating: '9.5',
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
										assists: 1,
										saves: null,
									},
									passes: {
										total: 96,
										key: 4,
										accuracy: '89',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 5,
										won: 4,
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
								id: 756,
								name: 'Federico Valverde',
								photo: 'https://media-2.api-sports.io/football/players/756.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 15,
										position: 'F',
										rating: '7.7',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 2,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 72,
										key: 3,
										accuracy: '64',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 4,
										won: 4,
									},
									dribbles: {
										attempts: 3,
										success: 3,
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
								id: 10009,
								name: 'Rodrygo',
								photo:
									'https://media-2.api-sports.io/football/players/10009.png',
							},
							statistics: [
								{
									games: {
										minutes: 82,
										number: 21,
										position: 'F',
										rating: '6.9',
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
										total: 28,
										key: null,
										accuracy: '24',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 9,
										won: 4,
									},
									dribbles: {
										attempts: 3,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: null,
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
								id: 762,
								name: 'Vinícius Júnior',
								photo: 'https://media-5.api-sports.io/football/players/762.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 20,
										position: 'F',
										rating: '7.2',
										captain: false,
										substitute: false,
									},
									offsides: 2,
									shots: {
										total: 1,
										on: 1,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 35,
										key: 2,
										accuracy: '30',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 13,
										won: 9,
									},
									dribbles: {
										attempts: 6,
										success: 3,
										past: null,
									},
									fouls: {
										drawn: 5,
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
								id: 47400,
								name: 'Andriy Lunin',
								photo:
									'https://media-4.api-sports.io/football/players/47400.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 13,
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
								id: 162529,
								name: 'Luis López',
								photo:
									'https://media-1.api-sports.io/football/players/162529.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 26,
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
								id: 733,
								name: 'Daniel Carvajal',
								photo: 'https://media-1.api-sports.io/football/players/733.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 2,
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
								id: 735,
								name: 'Nacho Fernández',
								photo: 'https://media-4.api-sports.io/football/players/735.png',
							},
							statistics: [
								{
									games: {
										minutes: 2,
										number: 6,
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
								id: 741,
								name: 'Jesús Vallejo',
								photo: 'https://media-2.api-sports.io/football/players/741.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 5,
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
								id: 737,
								name: 'Álvaro Odriozola',
								photo: 'https://media-5.api-sports.io/football/players/737.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 16,
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
								id: 2207,
								name: 'Eduardo Camavinga',
								photo:
									'https://media-2.api-sports.io/football/players/2207.png',
							},
							statistics: [
								{
									games: {
										minutes: 10,
										number: 12,
										position: 'M',
										rating: '6.3',
										captain: false,
										substitute: true,
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
										total: 5,
										key: null,
										accuracy: '3',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 4,
										won: 3,
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
								id: 748,
								name: 'Dani Ceballos',
								photo: 'https://media-2.api-sports.io/football/players/748.png',
							},
							statistics: [
								{
									games: {
										minutes: 8,
										number: 19,
										position: 'M',
										rating: '6',
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
										key: null,
										accuracy: '7',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 5,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 2,
									},
									fouls: {
										drawn: null,
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
								id: 2296,
								name: 'Eden Hazard',
								photo:
									'https://media-5.api-sports.io/football/players/2296.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 7,
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
								id: 746,
								name: 'Marco Asensio',
								photo: 'https://media-5.api-sports.io/football/players/746.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 11,
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
								id: 760,
								name: 'Mariano Díaz',
								photo: 'https://media-2.api-sports.io/football/players/760.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 24,
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
					],
				},
				{
					team: {
						id: 724,
						name: 'Cadiz',
						logo: 'https://media-4.api-sports.io/football/teams/724.png',
						update: '2022-11-12T05:10:55+01:00',
					},
					players: [
						{
							player: {
								id: 6492,
								name: 'Jeremías Ledesma',
								photo:
									'https://media-4.api-sports.io/football/players/6492.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 1,
										position: 'G',
										rating: '6.6',
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
										conceded: 2,
										assists: null,
										saves: 3,
									},
									passes: {
										total: 34,
										key: null,
										accuracy: '20',
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
										saved: 0,
									},
								},
							],
						},
						{
							player: {
								id: 47100,
								name: 'Isaac Carcelén',
								photo:
									'https://media-5.api-sports.io/football/players/47100.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 20,
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
										assists: null,
										saves: null,
									},
									passes: {
										total: 25,
										key: null,
										accuracy: '23',
									},
									tackles: {
										total: 4,
										blocks: 2,
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
										drawn: null,
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
								id: 47229,
								name: 'Fali',
								photo:
									'https://media-4.api-sports.io/football/players/47229.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 3,
										position: 'D',
										rating: '6.3',
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
										total: 34,
										key: null,
										accuracy: '23',
									},
									tackles: {
										total: null,
										blocks: 1,
										interceptions: 1,
									},
									duels: {
										total: 2,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: null,
										committed: null,
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
								id: 46998,
								name: 'Juan Cala',
								photo:
									'https://media-5.api-sports.io/football/players/46998.png',
							},
							statistics: [
								{
									games: {
										minutes: 73,
										number: 16,
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
										total: 21,
										key: null,
										accuracy: '18',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 7,
										won: 3,
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
								id: 46759,
								name: 'Alfonso Espino',
								photo:
									'https://media-1.api-sports.io/football/players/46759.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 22,
										position: 'D',
										rating: '6.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 2,
										on: null,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 31,
										key: 2,
										accuracy: '24',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 10,
										won: 4,
									},
									dribbles: {
										attempts: 3,
										success: 1,
										past: 3,
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
								id: 46824,
								name: 'Iván Alejo',
								photo:
									'https://media-1.api-sports.io/football/players/46824.png',
							},
							statistics: [
								{
									games: {
										minutes: 56,
										number: 11,
										position: 'M',
										rating: '6',
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
										total: 6,
										key: 1,
										accuracy: '5',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 9,
										won: 1,
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
								id: 46691,
								name: 'Fede San Emeterio',
								photo:
									'https://media-1.api-sports.io/football/players/46691.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 24,
										position: 'M',
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
										total: 32,
										key: null,
										accuracy: '27',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 8,
										won: 2,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 2,
									},
									fouls: {
										drawn: 1,
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
								id: 47485,
								name: 'Rubén Alcaraz',
								photo:
									'https://media-4.api-sports.io/football/players/47485.png',
							},
							statistics: [
								{
									games: {
										minutes: 56,
										number: 4,
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
										total: 18,
										key: null,
										accuracy: '15',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 7,
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
								id: 937,
								name: 'Rubén Sobrino',
								photo: 'https://media-2.api-sports.io/football/players/937.png',
							},
							statistics: [
								{
									games: {
										minutes: 78,
										number: 7,
										position: 'M',
										rating: '6.2',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 1,
										on: 1,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 19,
										key: null,
										accuracy: '15',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 11,
										won: 5,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 2,
									},
									fouls: {
										drawn: 1,
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
								id: 46769,
								name: 'Álex Fernández',
								photo:
									'https://media-5.api-sports.io/football/players/46769.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 8,
										position: 'F',
										rating: '6.3',
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
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 41,
										key: 1,
										accuracy: '35',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 3,
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
								id: 47525,
								name: 'Anthony Lozano',
								photo:
									'https://media-4.api-sports.io/football/players/47525.png',
							},
							statistics: [
								{
									games: {
										minutes: 72,
										number: 9,
										position: 'F',
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
										total: 11,
										key: 1,
										accuracy: '7',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 9,
										won: 2,
									},
									dribbles: {
										attempts: 2,
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
								id: 46755,
								name: 'David Gil',
								photo:
									'https://media-5.api-sports.io/football/players/46755.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 13,
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
								id: 192024,
								name: 'Lautaro Spatz',
								photo:
									'https://media-5.api-sports.io/football/players/192024.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 37,
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
								id: 2508,
								name: 'Santiago Arzamendia',
								photo:
									'https://media-1.api-sports.io/football/players/2508.png',
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
								id: 46772,
								name: 'José Mari',
								photo:
									'https://media-2.api-sports.io/football/players/46772.png',
							},
							statistics: [
								{
									games: {
										minutes: 17,
										number: 6,
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
										total: 26,
										key: 1,
										accuracy: '24',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 3,
										won: 2,
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
								id: 162686,
								name: 'Antonio Blanco',
								photo:
									'https://media-4.api-sports.io/football/players/162686.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 36,
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
								id: 2755,
								name: 'Awer Mabil',
								photo:
									'https://media-2.api-sports.io/football/players/2755.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 17,
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
								id: 11471,
								name: 'Tomás Alarcón',
								photo:
									'https://media-1.api-sports.io/football/players/11471.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 12,
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
								id: 51588,
								name: 'Brian Ocampo',
								photo:
									'https://media-5.api-sports.io/football/players/51588.png',
							},
							statistics: [
								{
									games: {
										minutes: 34,
										number: 14,
										position: 'F',
										rating: '6.2',
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
										total: 12,
										key: null,
										accuracy: '10',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 6,
										won: null,
									},
									dribbles: {
										attempts: 1,
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
								id: 46931,
								name: 'Álvaro Giménez',
								photo:
									'https://media-4.api-sports.io/football/players/46931.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 19,
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
								id: 18833,
								name: 'Lucas Pérez',
								photo:
									'https://media-5.api-sports.io/football/players/18833.png',
							},
							statistics: [
								{
									games: {
										minutes: 18,
										number: 15,
										position: 'F',
										rating: '7.2',
										captain: false,
										substitute: true,
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
										total: 16,
										key: null,
										accuracy: '14',
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
								id: 50502,
								name: 'Álvaro Negredo',
								photo:
									'https://media-2.api-sports.io/football/players/50502.png',
							},
							statistics: [
								{
									games: {
										minutes: 12,
										number: 18,
										position: 'F',
										rating: '7',
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
										total: 5,
										key: 1,
										accuracy: '3',
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
								id: 8627,
								name: 'Theo Bongonda',
								photo:
									'https://media-1.api-sports.io/football/players/8627.png',
							},
							statistics: [
								{
									games: {
										minutes: 34,
										number: 10,
										position: 'F',
										rating: '6.2',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: 1,
										on: 1,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 7,
										key: null,
										accuracy: '6',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 4,
										won: null,
									},
									dribbles: {
										attempts: 2,
										success: null,
										past: 1,
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
			],
		},
	],
};
