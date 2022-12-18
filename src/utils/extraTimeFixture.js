export const extraTimeFixture = {
	get: 'fixtures',
	parameters: {
		id: '979139',
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
				id: 979139,
				referee: 'Szymon Marciniak, Poland',
				timezone: 'Europe/Warsaw',
				date: '2022-12-18T16:00:00+01:00',
				timestamp: 1671375600,
				periods: {
					first: 1671375600,
					second: 1671379200,
				},
				venue: {
					id: null,
					name: 'Lusail Iconic Stadium',
					city: 'Lusail',
				},
				status: {
					long: 'Extra Time',
					short: 'ET',
					elapsed: 93,
				},
			},
			league: {
				id: 1,
				name: 'World Cup',
				country: 'World',
				logo: 'https://media-4.api-sports.io/football/leagues/1.png',
				flag: null,
				season: 2022,
				round: 'Final',
			},
			teams: {
				home: {
					id: 26,
					name: 'Argentina',
					logo: 'https://media-6.api-sports.io/football/teams/26.png',
					winner: null,
				},
				away: {
					id: 2,
					name: 'France',
					logo: 'https://media-5.api-sports.io/football/teams/2.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 2,
				},
				extratime: {
					home: 0,
					away: 0,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
			events: [
				{
					time: {
						elapsed: 23,
						extra: null,
					},
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-2.api-sports.io/football/teams/26.png',
					},
					player: {
						id: 154,
						name: 'L. Messi',
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
						elapsed: 36,
						extra: null,
					},
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-4.api-sports.io/football/teams/26.png',
					},
					player: {
						id: 266,
						name: 'A. Di Maria',
					},
					assist: {
						id: 6716,
						name: 'A. Mac Allister',
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 41,
						extra: null,
					},
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-6.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 21509,
						name: 'M. Thuram',
					},
					assist: {
						id: 2295,
						name: 'O. Giroud',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 41,
						extra: null,
					},
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-6.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 21104,
						name: 'R. Kolo Muani',
					},
					assist: {
						id: 153,
						name: 'O. Dembele',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 45,
						extra: 7,
					},
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-6.api-sports.io/football/teams/26.png',
					},
					player: {
						id: 5996,
						name: 'E. Fernandez',
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
						id: 2,
						name: 'France',
						logo: 'https://media-4.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 272,
						name: 'A. Rabiot',
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
						elapsed: 64,
						extra: null,
					},
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-4.api-sports.io/football/teams/26.png',
					},
					player: {
						id: 1493,
						name: 'M. Acuna',
					},
					assist: {
						id: 266,
						name: 'A. Di Maria',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 71,
						extra: null,
					},
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-1.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 508,
						name: 'K. Coman',
					},
					assist: {
						id: 56,
						name: 'A. Griezmann',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
				{
					time: {
						elapsed: 71,
						extra: null,
					},
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-4.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 2207,
						name: 'E. Camavinga',
					},
					assist: {
						id: 47300,
						name: 'T. Hernandez',
					},
					type: 'subst',
					detail: 'Substitution 4',
					comments: null,
				},
				{
					time: {
						elapsed: 80,
						extra: null,
					},
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-4.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 278,
						name: 'K. Mbappe',
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
						elapsed: 81,
						extra: null,
					},
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-5.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 278,
						name: 'K. Mbappe',
					},
					assist: {
						id: 21509,
						name: 'M. Thuram',
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 87,
						extra: null,
					},
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-2.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 21509,
						name: 'M. Thuram',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Diving',
				},
				{
					time: {
						elapsed: 90,
						extra: 5,
					},
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-6.api-sports.io/football/teams/2.png',
					},
					player: {
						id: 2295,
						name: 'O. Giroud',
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
						elapsed: 90,
						extra: 8,
					},
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-1.api-sports.io/football/teams/26.png',
					},
					player: {
						id: 1493,
						name: 'M. Acuna',
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
						elapsed: 91,
						extra: null,
					},
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-4.api-sports.io/football/teams/26.png',
					},
					player: {
						id: 2468,
						name: 'G. Montiel',
					},
					assist: {
						id: 6503,
						name: 'N. Molina',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
			],
			lineups: [
				{
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-5.api-sports.io/football/teams/26.png',
						colors: {
							player: {
								primary: 'ffffff',
								number: '000000',
								border: 'ffffff',
							},
							goalkeeper: {
								primary: '80cb7a',
								number: 'ffffff',
								border: '80cb7a',
							},
						},
					},
					formation: '4-3-3',
					startXI: [
						{
							player: {
								id: 19599,
								name: 'Emiliano Martínez',
								number: 23,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 6503,
								name: 'Nahuel Molina',
								number: 26,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 30776,
								name: 'Cristian Romero',
								number: 13,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 624,
								name: 'Nicolás Otamendi',
								number: 19,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 529,
								name: 'Nicolás Tagliafico',
								number: 3,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 2472,
								name: 'Rodrigo de Paul',
								number: 7,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 5996,
								name: 'Enzo Fernández',
								number: 24,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 6716,
								name: 'Alexis Mac Allister',
								number: 20,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 154,
								name: 'Lionel Messi',
								number: 10,
								pos: 'F',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 6009,
								name: 'Julián Álvarez',
								number: 9,
								pos: 'F',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 266,
								name: 'Ángel Di María',
								number: 11,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 47296,
								name: 'Gerónimo Rulli',
								number: 12,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 2463,
								name: 'Franco Armani',
								number: 1,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 2469,
								name: 'Germán Pezzella',
								number: 6,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 2468,
								name: 'Gonzalo Montiel',
								number: 4,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 2467,
								name: 'Lisandro Martínez',
								number: 25,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 166,
								name: 'Juan Foyth',
								number: 2,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 1493,
								name: 'Marcos Acuña',
								number: 8,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 271,
								name: 'Leandro Paredes',
								number: 5,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 2476,
								name: 'Guido Rodríguez',
								number: 18,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 6002,
								name: 'Exequiel Palacios',
								number: 14,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 30433,
								name: 'Papu Gómez',
								number: 17,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 6067,
								name: 'Thiago Almada',
								number: 16,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 217,
								name: 'Lautaro Martínez',
								number: 22,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 875,
								name: 'Paulo Dybala',
								number: 21,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 53,
								name: 'Ángel Correa',
								number: 15,
								pos: 'F',
								grid: null,
							},
						},
					],
					coach: {
						id: 326,
						name: 'L. Scaloni',
						photo: 'https://media-4.api-sports.io/football/coachs/326.png',
					},
				},
				{
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-6.api-sports.io/football/teams/2.png',
						colors: {
							player: {
								primary: '232e4b',
								number: 'e4d7b9',
								border: '232e4b',
							},
							goalkeeper: {
								primary: 'f8a51e',
								number: '000000',
								border: 'f8a51e',
							},
						},
					},
					formation: '4-2-3-1',
					startXI: [
						{
							player: {
								id: 159,
								name: 'Hugo Lloris',
								number: 1,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 1257,
								name: 'Jules Koundé',
								number: 5,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 742,
								name: 'Raphaël Varane',
								number: 4,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 1149,
								name: 'Dayot Upamecano',
								number: 18,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 47300,
								name: 'Theo Hernández',
								number: 22,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 1271,
								name: 'Aurélien Tchouaméni',
								number: 8,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 272,
								name: 'Adrien Rabiot',
								number: 14,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 153,
								name: 'Ousmane Dembélé',
								number: 11,
								pos: 'M',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 56,
								name: 'Antoine Griezmann',
								number: 7,
								pos: 'M',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 278,
								name: 'Kylian Mbappé',
								number: 10,
								pos: 'M',
								grid: '4:1',
							},
						},
						{
							player: {
								id: 2295,
								name: 'Olivier Giroud',
								number: 9,
								pos: 'F',
								grid: '5:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 1897,
								name: 'Steve Mandanda',
								number: 16,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 253,
								name: 'Alphonse Aréola',
								number: 23,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 1145,
								name: 'Ibrahima Konaté',
								number: 24,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 2725,
								name: 'Benjamin Pavard',
								number: 2,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 21998,
								name: 'Axel Disasi',
								number: 3,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 22090,
								name: 'William Saliba',
								number: 17,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 1454,
								name: 'Mattéo Guendouzi',
								number: 6,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 22254,
								name: 'Youssouf Fofana',
								number: 13,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 30409,
								name: 'Jordan Veretout',
								number: 15,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 508,
								name: 'Kingsley Coman',
								number: 20,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 2207,
								name: 'Eduardo Camavinga',
								number: 25,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 21104,
								name: 'Randal Kolo Muani',
								number: 12,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 21509,
								name: 'Marcus Thuram',
								number: 26,
								pos: 'F',
								grid: null,
							},
						},
					],
					coach: {
						id: 180,
						name: 'D. Deschamps',
						photo: 'https://media-4.api-sports.io/football/coachs/180.png',
					},
				},
			],
			statistics: [
				{
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-2.api-sports.io/football/teams/26.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 7,
						},
						{
							type: 'Shots off Goal',
							value: 4,
						},
						{
							type: 'Total Shots',
							value: 12,
						},
						{
							type: 'Blocked Shots',
							value: 1,
						},
						{
							type: 'Shots insidebox',
							value: 6,
						},
						{
							type: 'Shots outsidebox',
							value: 6,
						},
						{
							type: 'Fouls',
							value: 20,
						},
						{
							type: 'Corner Kicks',
							value: 4,
						},
						{
							type: 'Offsides',
							value: 3,
						},
						{
							type: 'Ball Possession',
							value: '52%',
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
							value: 1,
						},
						{
							type: 'Total passes',
							value: 491,
						},
						{
							type: 'Passes accurate',
							value: 404,
						},
						{
							type: 'Passes %',
							value: '82%',
						},
					],
				},
				{
					team: {
						id: 2,
						name: 'France',
						logo: 'https://media-2.api-sports.io/football/teams/2.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 3,
						},
						{
							type: 'Shots off Goal',
							value: 2,
						},
						{
							type: 'Total Shots',
							value: 6,
						},
						{
							type: 'Blocked Shots',
							value: 1,
						},
						{
							type: 'Shots insidebox',
							value: 5,
						},
						{
							type: 'Shots outsidebox',
							value: 1,
						},
						{
							type: 'Fouls',
							value: 16,
						},
						{
							type: 'Corner Kicks',
							value: 3,
						},
						{
							type: 'Offsides',
							value: 2,
						},
						{
							type: 'Ball Possession',
							value: '48%',
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
							value: 5,
						},
						{
							type: 'Total passes',
							value: 446,
						},
						{
							type: 'Passes accurate',
							value: 351,
						},
						{
							type: 'Passes %',
							value: '79%',
						},
					],
				},
			],
			players: [
				{
					team: {
						id: 26,
						name: 'Argentina',
						logo: 'https://media-4.api-sports.io/football/teams/26.png',
						update: '2022-12-18T18:04:10+01:00',
					},
					players: [
						{
							player: {
								id: 19599,
								name: 'Emiliano Martínez',
								photo:
									'https://media-5.api-sports.io/football/players/19599.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 23,
										position: 'G',
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
										conceded: 2,
										assists: null,
										saves: 1,
									},
									passes: {
										total: 21,
										key: null,
										accuracy: '8',
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
								id: 6503,
								name: 'Nahuel Molina',
								photo:
									'https://media-2.api-sports.io/football/players/6503.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 26,
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
										total: 41,
										key: null,
										accuracy: '27',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 4,
										won: 1,
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
								id: 30776,
								name: 'Cristian Romero',
								photo:
									'https://media-2.api-sports.io/football/players/30776.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 13,
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
										total: 56,
										key: null,
										accuracy: '49',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 7,
										won: 3,
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
								id: 624,
								name: 'Nicolás Otamendi',
								photo: 'https://media-5.api-sports.io/football/players/624.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 19,
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
										total: 55,
										key: null,
										accuracy: '51',
									},
									tackles: {
										total: null,
										blocks: 1,
										interceptions: 2,
									},
									duels: {
										total: 5,
										won: null,
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
								id: 529,
								name: 'Nicolás Tagliafico',
								photo: 'https://media-6.api-sports.io/football/players/529.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 3,
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
										total: 37,
										key: 1,
										accuracy: '29',
									},
									tackles: {
										total: 4,
										blocks: null,
										interceptions: 4,
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
								id: 2472,
								name: 'Rodrigo de Paul',
								photo:
									'https://media-6.api-sports.io/football/players/2472.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 7,
										position: 'M',
										rating: '6.5',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 2,
										on: 1,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 60,
										key: 1,
										accuracy: '55',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 15,
										won: 6,
									},
									dribbles: {
										attempts: 3,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: 5,
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
								id: 5996,
								name: 'Enzo Fernández',
								photo:
									'https://media-5.api-sports.io/football/players/5996.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 24,
										position: 'M',
										rating: '6.9',
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
										total: 69,
										key: null,
										accuracy: '58',
									},
									tackles: {
										total: 7,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 13,
										won: 7,
									},
									dribbles: {
										attempts: 1,
										success: null,
										past: 3,
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
								id: 6716,
								name: 'Alexis Mac Allister',
								photo:
									'https://media-5.api-sports.io/football/players/6716.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 20,
										position: 'M',
										rating: '7.2',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 2,
										on: 1,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: 1,
										saves: null,
									},
									passes: {
										total: 38,
										key: 1,
										accuracy: '31',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 13,
										won: 6,
									},
									dribbles: {
										attempts: 2,
										success: 2,
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
								id: 154,
								name: 'Lionel Messi',
								photo: 'https://media-5.api-sports.io/football/players/154.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 10,
										position: 'F',
										rating: '7.3',
										captain: true,
										substitute: false,
									},
									offsides: 1,
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
										total: 45,
										key: 2,
										accuracy: '39',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 11,
										won: 4,
									},
									dribbles: {
										attempts: 1,
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
										scored: 1,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 6009,
								name: 'Julián Álvarez',
								photo:
									'https://media-1.api-sports.io/football/players/6009.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 9,
										position: 'F',
										rating: '6.9',
										captain: false,
										substitute: false,
									},
									offsides: 1,
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
										total: 31,
										key: 2,
										accuracy: '25',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 11,
										won: null,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: null,
										committed: 6,
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
								id: 266,
								name: 'Ángel Di María',
								photo: 'https://media-1.api-sports.io/football/players/266.png',
							},
							statistics: [
								{
									games: {
										minutes: 64,
										number: 11,
										position: 'F',
										rating: '8.2',
										captain: false,
										substitute: false,
									},
									offsides: 1,
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
										total: 27,
										key: 3,
										accuracy: '26',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 12,
										won: 7,
									},
									dribbles: {
										attempts: 6,
										success: 4,
										past: 2,
									},
									fouls: {
										drawn: 3,
										committed: null,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: 1,
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
								id: 47296,
								name: 'Gerónimo Rulli',
								photo:
									'https://media-6.api-sports.io/football/players/47296.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 12,
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
								id: 2463,
								name: 'Franco Armani',
								photo:
									'https://media-5.api-sports.io/football/players/2463.png',
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
								id: 2469,
								name: 'Germán Pezzella',
								photo:
									'https://media-5.api-sports.io/football/players/2469.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
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
								id: 2468,
								name: 'Gonzalo Montiel',
								photo:
									'https://media-6.api-sports.io/football/players/2468.png',
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
								id: 2467,
								name: 'Lisandro Martínez',
								photo:
									'https://media-5.api-sports.io/football/players/2467.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 25,
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
								id: 166,
								name: 'Juan Foyth',
								photo: 'https://media-5.api-sports.io/football/players/166.png',
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
								id: 1493,
								name: 'Marcos Acuña',
								photo:
									'https://media-4.api-sports.io/football/players/1493.png',
							},
							statistics: [
								{
									games: {
										minutes: 35,
										number: 8,
										position: 'D',
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
										total: 11,
										key: 1,
										accuracy: '7',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 6,
										won: 2,
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
								id: 271,
								name: 'Leandro Paredes',
								photo: 'https://media-6.api-sports.io/football/players/271.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 5,
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
								id: 2476,
								name: 'Guido Rodríguez',
								photo:
									'https://media-2.api-sports.io/football/players/2476.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 18,
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
								id: 6002,
								name: 'Exequiel Palacios',
								photo:
									'https://media-2.api-sports.io/football/players/6002.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
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
								id: 30433,
								name: 'Papu Gómez',
								photo:
									'https://media-5.api-sports.io/football/players/30433.png',
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
								id: 6067,
								name: 'Thiago Almada',
								photo:
									'https://media-6.api-sports.io/football/players/6067.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 16,
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
								id: 217,
								name: 'Lautaro Martínez',
								photo: 'https://media-6.api-sports.io/football/players/217.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 22,
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
								id: 875,
								name: 'Paulo Dybala',
								photo: 'https://media-4.api-sports.io/football/players/875.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 21,
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
								id: 53,
								name: 'Ángel Correa',
								photo: 'https://media-2.api-sports.io/football/players/53.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 15,
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
						id: 2,
						name: 'France',
						logo: 'https://media-2.api-sports.io/football/teams/2.png',
						update: '2022-12-18T18:04:10+01:00',
					},
					players: [
						{
							player: {
								id: 159,
								name: 'Hugo Lloris',
								photo: 'https://media-6.api-sports.io/football/players/159.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 1,
										position: 'G',
										rating: '7',
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
										conceded: 2,
										assists: null,
										saves: 5,
									},
									passes: {
										total: 25,
										key: null,
										accuracy: '15',
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
										saved: 0,
									},
								},
							],
						},
						{
							player: {
								id: 1257,
								name: 'Jules Koundé',
								photo:
									'https://media-2.api-sports.io/football/players/1257.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 5,
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
										total: 50,
										key: null,
										accuracy: '41',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 10,
										won: 4,
									},
									dribbles: {
										attempts: 1,
										success: 1,
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
								id: 742,
								name: 'Raphaël Varane',
								photo: 'https://media-4.api-sports.io/football/players/742.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 4,
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
										total: 54,
										key: null,
										accuracy: '48',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 1,
										won: 1,
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
								id: 1149,
								name: 'Dayot Upamecano',
								photo:
									'https://media-5.api-sports.io/football/players/1149.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 18,
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
										total: 58,
										key: null,
										accuracy: '47',
									},
									tackles: {
										total: 1,
										blocks: 1,
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
								id: 47300,
								name: 'Theo Hernández',
								photo:
									'https://media-2.api-sports.io/football/players/47300.png',
							},
							statistics: [
								{
									games: {
										minutes: 71,
										number: 22,
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
										total: 37,
										key: null,
										accuracy: '30',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 11,
										won: 8,
									},
									dribbles: {
										attempts: 1,
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
								id: 1271,
								name: 'Aurélien Tchouaméni',
								photo:
									'https://media-4.api-sports.io/football/players/1271.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 8,
										position: 'M',
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
										total: 59,
										key: null,
										accuracy: '46',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 8,
										won: 5,
									},
									dribbles: {
										attempts: 3,
										success: 2,
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
								id: 272,
								name: 'Adrien Rabiot',
								photo: 'https://media-4.api-sports.io/football/players/272.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 14,
										position: 'M',
										rating: '7',
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
										total: 49,
										key: null,
										accuracy: '39',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: 3,
									},
									duels: {
										total: 10,
										won: 7,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: 3,
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
								id: 153,
								name: 'Ousmane Dembélé',
								photo: 'https://media-1.api-sports.io/football/players/153.png',
							},
							statistics: [
								{
									games: {
										minutes: 41,
										number: 11,
										position: 'M',
										rating: '5.7',
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
										key: null,
										accuracy: '8',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 5,
										won: null,
									},
									dribbles: {
										attempts: 1,
										success: null,
										past: 2,
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
								id: 56,
								name: 'Antoine Griezmann',
								photo: 'https://media-4.api-sports.io/football/players/56.png',
							},
							statistics: [
								{
									games: {
										minutes: 71,
										number: 7,
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
										total: 26,
										key: 1,
										accuracy: '20',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 9,
										won: 6,
									},
									dribbles: {
										attempts: 3,
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
								id: 278,
								name: 'Kylian Mbappé',
								photo: 'https://media-6.api-sports.io/football/players/278.png',
							},
							statistics: [
								{
									games: {
										minutes: 99,
										number: 10,
										position: 'M',
										rating: '7.7',
										captain: false,
										substitute: false,
									},
									offsides: 1,
									shots: {
										total: 3,
										on: 2,
									},
									goals: {
										total: 2,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 20,
										key: null,
										accuracy: '15',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 6,
										won: 1,
									},
									dribbles: {
										attempts: 4,
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
										scored: 1,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 2295,
								name: 'Olivier Giroud',
								photo:
									'https://media-5.api-sports.io/football/players/2295.png',
							},
							statistics: [
								{
									games: {
										minutes: 41,
										number: 9,
										position: 'F',
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
										total: 9,
										key: null,
										accuracy: '5',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 7,
										won: 6,
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
								id: 1897,
								name: 'Steve Mandanda',
								photo:
									'https://media-6.api-sports.io/football/players/1897.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 16,
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
								id: 253,
								name: 'Alphonse Aréola',
								photo: 'https://media-4.api-sports.io/football/players/253.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 23,
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
								id: 1145,
								name: 'Ibrahima Konaté',
								photo:
									'https://media-6.api-sports.io/football/players/1145.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 24,
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
								id: 2725,
								name: 'Benjamin Pavard',
								photo:
									'https://media-6.api-sports.io/football/players/2725.png',
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
								id: 21998,
								name: 'Axel Disasi',
								photo:
									'https://media-2.api-sports.io/football/players/21998.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 3,
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
								id: 22090,
								name: 'William Saliba',
								photo:
									'https://media-5.api-sports.io/football/players/22090.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 17,
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
								id: 1454,
								name: 'Mattéo Guendouzi',
								photo:
									'https://media-1.api-sports.io/football/players/1454.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 6,
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
								id: 22254,
								name: 'Youssouf Fofana',
								photo:
									'https://media-5.api-sports.io/football/players/22254.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
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
								id: 30409,
								name: 'Jordan Veretout',
								photo:
									'https://media-4.api-sports.io/football/players/30409.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 15,
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
								id: 508,
								name: 'Kingsley Coman',
								photo: 'https://media-4.api-sports.io/football/players/508.png',
							},
							statistics: [
								{
									games: {
										minutes: 28,
										number: 20,
										position: 'F',
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
										total: 4,
										key: null,
										accuracy: '4',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 7,
										won: 4,
									},
									dribbles: {
										attempts: 2,
										success: 2,
										past: 1,
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
								id: 2207,
								name: 'Eduardo Camavinga',
								photo:
									'https://media-2.api-sports.io/football/players/2207.png',
							},
							statistics: [
								{
									games: {
										minutes: 28,
										number: 25,
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
										total: 11,
										key: 2,
										accuracy: '10',
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
								id: 21104,
								name: 'Randal Kolo Muani',
								photo:
									'https://media-4.api-sports.io/football/players/21104.png',
							},
							statistics: [
								{
									games: {
										minutes: 58,
										number: 12,
										position: 'F',
										rating: '7.3',
										captain: false,
										substitute: true,
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
										total: 17,
										key: null,
										accuracy: '10',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 17,
										won: 12,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
									},
									fouls: {
										drawn: 4,
										committed: 2,
									},
									cards: {
										yellow: 0,
										red: 0,
									},
									penalty: {
										won: 1,
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
								id: 21509,
								name: 'Marcus Thuram',
								photo:
									'https://media-6.api-sports.io/football/players/21509.png',
							},
							statistics: [
								{
									games: {
										minutes: 58,
										number: 26,
										position: 'F',
										rating: '6.9',
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
										assists: 1,
										saves: null,
									},
									passes: {
										total: 12,
										key: 1,
										accuracy: '9',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 8,
										won: 5,
									},
									dribbles: {
										attempts: 3,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: 1,
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
