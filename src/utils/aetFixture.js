export const aetFixture = {
	get: 'fixtures',
	parameters: {
		id: '590762',
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
				id: 590762,
				referee: 'Luis Godinho',
				timezone: 'UTC',
				date: '2020-08-26T14:30:00+00:00',
				timestamp: 1598452200,
				periods: {
					first: 1598452200,
					second: 1598455800,
				},
				venue: {
					id: 1119,
					name: 'AFAS Stadion',
					city: 'Alkmaar',
				},
				status: {
					long: 'Match Finished',
					short: 'AET',
					elapsed: 120,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-5.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2020,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 201,
					name: 'AZ Alkmaar',
					logo: 'https://media-5.api-sports.io/football/teams/201.png',
					winner: true,
				},
				away: {
					id: 567,
					name: 'Plzen',
					logo: 'https://media-2.api-sports.io/football/teams/567.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
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
					home: 2,
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
						elapsed: 51,
						extra: null,
					},
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-4.api-sports.io/football/teams/567.png',
					},
					player: {
						id: 800,
						name: 'Lukáš Hejda',
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
						elapsed: 64,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-2.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 36910,
						name: 'C. Stengs',
					},
					assist: {
						id: 2799,
						name: 'A. Guðmundsson',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 74,
						extra: null,
					},
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-5.api-sports.io/football/teams/567.png',
					},
					player: {
						id: 36909,
						name: 'O. Mihálik',
					},
					assist: {
						id: 66205,
						name: 'D. Ba Loua',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 76,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-1.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 36891,
						name: 'R. Vlaar',
					},
					assist: {
						id: 15849,
						name: 'R. Leeuwin',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 77,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-2.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 15849,
						name: 'Ramon Leeuwin',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Off the ball foul',
				},
				{
					time: {
						elapsed: 78,
						extra: null,
					},
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-5.api-sports.io/football/teams/567.png',
					},
					player: {
						id: 802,
						name: 'D. Limberský',
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
						elapsed: 80,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-4.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 37154,
						name: 'J. Clasie',
					},
					assist: {
						id: 37377,
						name: 'F. Druijf',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
				{
					time: {
						elapsed: 84,
						extra: null,
					},
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-4.api-sports.io/football/teams/567.png',
					},
					player: {
						id: 795,
						name: 'Aleš Hruška',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Time wasting',
				},
				{
					time: {
						elapsed: 87,
						extra: null,
					},
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-1.api-sports.io/football/teams/567.png',
					},
					player: {
						id: 810,
						name: 'J. Kopic',
					},
					assist: {
						id: 811,
						name: 'J. Kovařík',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 90,
						extra: 3,
					},
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-5.api-sports.io/football/teams/567.png',
					},
					player: {
						id: 817,
						name: 'J. Beauguel',
					},
					assist: {
						id: 803,
						name: 'L. Pernica',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
				{
					time: {
						elapsed: 90,
						extra: 5,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-1.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 36899,
						name: 'T. Koopmeiners',
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
						elapsed: 93,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-1.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 2723,
						name: 'O. Idrissi',
					},
					assist: {
						id: 32887,
						name: 'Y. Sugawara',
					},
					type: 'subst',
					detail: 'Substitution 4',
					comments: null,
				},
				{
					time: {
						elapsed: 98,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-5.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 2799,
						name: 'A. Guðmundsson',
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
						elapsed: 105,
						extra: null,
					},
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-6.api-sports.io/football/teams/567.png',
					},
					player: {
						id: 66278,
						name: 'L. Kalvach',
					},
					assist: {
						id: 61238,
						name: 'M. Káčer',
					},
					type: 'subst',
					detail: 'Substitution 4',
					comments: null,
				},
				{
					time: {
						elapsed: 106,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-6.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 37377,
						name: 'Ferdy Druijf',
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
						elapsed: 110,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-5.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 36907,
						name: 'Myron Boadu',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Card',
					detail: 'Yellow Card',
					comments: 'Persistent fouling',
				},
				{
					time: {
						elapsed: 112,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-6.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 36893,
						name: 'Owen Wijndal',
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
						elapsed: 118,
						extra: null,
					},
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-6.api-sports.io/football/teams/201.png',
					},
					player: {
						id: 2799,
						name: 'A. Guðmundsson',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
			],
			lineups: [
				{
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-1.api-sports.io/football/teams/201.png',
						colors: null,
					},
					coach: {
						id: 2006,
						name: 'A. Slot',
						photo: 'https://media-5.api-sports.io/football/coachs/2006.png',
					},
					formation: '4-2-3-1',
					startXI: [
						{
							player: {
								id: 36878,
								name: 'M. Bizot',
								number: 1,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 36891,
								name: 'R. Vlaar',
								number: 4,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 36889,
								name: 'J. Svensson',
								number: 2,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 36893,
								name: 'O.  Wijndal',
								number: 15,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 37154,
								name: 'J. Clasie',
								number: 20,
								pos: 'M',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 36901,
								name: 'F. Midtsjø',
								number: 6,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 539,
								name: 'D. de Wit',
								number: 10,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 36899,
								name: 'T. Koopmeiners',
								number: 8,
								pos: 'D',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 2723,
								name: 'O. Idrissi',
								number: 11,
								pos: 'M',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 36907,
								name: 'M. Boadu',
								number: 9,
								pos: 'F',
								grid: '4:1',
							},
						},
						{
							player: {
								id: 36910,
								name: 'C. Stengs',
								number: 7,
								pos: 'M',
								grid: '5:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 2799,
								name: 'A. Guðmundsson',
								number: 28,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 15849,
								name: 'R. Leeuwin',
								number: 27,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 37377,
								name: 'F. Druijf',
								number: 14,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 32887,
								name: 'Y. Sugawara',
								number: 26,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 36902,
								name: 'T. Reijnders',
								number: 24,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 37602,
								name: 'H. Verhulst',
								number: 16,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 36887,
								name: 'J. Kramer',
								number: 29,
								pos: 'D',
								grid: null,
							},
						},
					],
				},
				{
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-5.api-sports.io/football/teams/567.png',
						colors: null,
					},
					coach: {
						id: 5841,
						name: 'A. Guľa',
						photo: 'https://media-4.api-sports.io/football/coachs/5841.png',
					},
					formation: '4-2-3-1',
					startXI: [
						{
							player: {
								id: 795,
								name: 'A. Hruška',
								number: 16,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 802,
								name: 'D. Limberský',
								number: 8,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 798,
								name: 'J. Brabec',
								number: 22,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 800,
								name: 'L. Hejda',
								number: 2,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 799,
								name: 'M. Havel',
								number: 24,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 810,
								name: 'J. Kopic',
								number: 10,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 805,
								name: 'A. Čermák',
								number: 25,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 66278,
								name: 'L. Kalvach',
								number: 23,
								pos: 'M',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 36909,
								name: 'O. Mihálik',
								number: 17,
								pos: 'M',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 66249,
								name: 'P. Bucha',
								number: 20,
								pos: 'M',
								grid: '4:1',
							},
						},
						{
							player: {
								id: 817,
								name: 'J. Beauguel',
								number: 9,
								pos: 'F',
								grid: '5:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 66205,
								name: 'D. Ba Loua',
								number: 50,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 811,
								name: 'J. Kovařík',
								number: 19,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 803,
								name: 'L. Pernica',
								number: 44,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 61238,
								name: 'M. Káčer',
								number: 66,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 804,
								name: 'R. Řezník',
								number: 14,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 806,
								name: 'T. Hořava',
								number: 7,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 66347,
								name: 'J. Staněk',
								number: 36,
								pos: 'G',
								grid: null,
							},
						},
					],
				},
			],
			statistics: [
				{
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-2.api-sports.io/football/teams/201.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 6,
						},
						{
							type: 'Shots off Goal',
							value: 7,
						},
						{
							type: 'Total Shots',
							value: 15,
						},
						{
							type: 'Blocked Shots',
							value: 2,
						},
						{
							type: 'Shots insidebox',
							value: 14,
						},
						{
							type: 'Shots outsidebox',
							value: 1,
						},
						{
							type: 'Fouls',
							value: 21,
						},
						{
							type: 'Corner Kicks',
							value: 7,
						},
						{
							type: 'Offsides',
							value: 6,
						},
						{
							type: 'Ball Possession',
							value: '54%',
						},
						{
							type: 'Yellow Cards',
							value: 4,
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
							value: 642,
						},
						{
							type: 'Passes accurate',
							value: 502,
						},
						{
							type: 'Passes %',
							value: '78%',
						},
					],
				},
				{
					team: {
						id: 567,
						name: 'Plzen',
						logo: 'https://media-1.api-sports.io/football/teams/567.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 4,
						},
						{
							type: 'Shots off Goal',
							value: 2,
						},
						{
							type: 'Total Shots',
							value: 8,
						},
						{
							type: 'Blocked Shots',
							value: 2,
						},
						{
							type: 'Shots insidebox',
							value: 4,
						},
						{
							type: 'Shots outsidebox',
							value: 4,
						},
						{
							type: 'Fouls',
							value: 18,
						},
						{
							type: 'Corner Kicks',
							value: 6,
						},
						{
							type: 'Offsides',
							value: 2,
						},
						{
							type: 'Ball Possession',
							value: '46%',
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
							value: 3,
						},
						{
							type: 'Total passes',
							value: 523,
						},
						{
							type: 'Passes accurate',
							value: 365,
						},
						{
							type: 'Passes %',
							value: '70%',
						},
					],
				},
			],
			players: [
				{
					team: {
						id: 201,
						name: 'AZ Alkmaar',
						logo: 'https://media-4.api-sports.io/football/teams/201.png',
						update: '2021-05-17T16:30:06+00:00',
					},
					players: [
						{
							player: {
								id: 36878,
								name: 'Marco Bizot',
								photo:
									'https://media-6.api-sports.io/football/players/36878.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 1,
										position: 'G',
										rating: '6.9',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 1,
										assists: null,
										saves: 3,
									},
									passes: {
										total: 39,
										key: 0,
										accuracy: '72%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 0,
										won: 0,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: null,
									},
									fouls: {
										drawn: 0,
										committed: 0,
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
								id: 36889,
								name: 'Jonas Svensson',
								photo:
									'https://media-4.api-sports.io/football/players/36889.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 2,
										position: 'D',
										rating: '7.1',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
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
										accuracy: '81%',
									},
									tackles: {
										total: 1,
										blocks: 0,
										interceptions: 3,
									},
									duels: {
										total: 14,
										won: 6,
									},
									dribbles: {
										attempts: 3,
										success: 3,
										past: null,
									},
									fouls: {
										drawn: 0,
										committed: 4,
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
								id: 36891,
								name: 'Ron Vlaar',
								photo:
									'https://media-4.api-sports.io/football/players/36891.png',
							},
							statistics: [
								{
									games: {
										minutes: 76,
										number: 4,
										position: 'D',
										rating: '7.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 60,
										key: 0,
										accuracy: '87%',
									},
									tackles: {
										total: 3,
										blocks: 0,
										interceptions: 2,
									},
									duels: {
										total: 7,
										won: 5,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: 0,
										committed: 0,
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
								id: 36899,
								name: 'Teun Koopmeiners',
								photo:
									'https://media-5.api-sports.io/football/players/36899.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 8,
										position: 'D',
										rating: '8.2',
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
										total: 80,
										key: 1,
										accuracy: '84%',
									},
									tackles: {
										total: 2,
										blocks: 0,
										interceptions: 3,
									},
									duels: {
										total: 11,
										won: 5,
									},
									dribbles: {
										attempts: 0,
										success: 0,
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
										scored: 1,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 36893,
								name: 'Owen Wijndal',
								photo:
									'https://media-4.api-sports.io/football/players/36893.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 15,
										position: 'D',
										rating: '7.5',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 38,
										key: 3,
										accuracy: '77%',
									},
									tackles: {
										total: 3,
										blocks: 0,
										interceptions: 7,
									},
									duels: {
										total: 11,
										won: 8,
									},
									dribbles: {
										attempts: 2,
										success: 2,
										past: 1,
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
						{
							player: {
								id: 36901,
								name: 'Fredrik Midtsjø',
								photo:
									'https://media-5.api-sports.io/football/players/36901.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 6,
										position: 'M',
										rating: '7.4',
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
										assists: 1,
										saves: null,
									},
									passes: {
										total: 39,
										key: 1,
										accuracy: '66%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 3,
									},
									duels: {
										total: 12,
										won: 9,
									},
									dribbles: {
										attempts: 4,
										success: 2,
										past: null,
									},
									fouls: {
										drawn: 3,
										committed: 0,
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
								id: 37154,
								name: 'Jordy Clasie',
								photo:
									'https://media-4.api-sports.io/football/players/37154.png',
							},
							statistics: [
								{
									games: {
										minutes: 80,
										number: 20,
										position: 'M',
										rating: '6.5',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 38,
										key: 0,
										accuracy: '88%',
									},
									tackles: {
										total: 1,
										blocks: 0,
										interceptions: 2,
									},
									duels: {
										total: 3,
										won: 1,
									},
									dribbles: {
										attempts: 1,
										success: 0,
										past: 1,
									},
									fouls: {
										drawn: 0,
										committed: 0,
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
								id: 36910,
								name: 'Calvin Stengs',
								photo:
									'https://media-2.api-sports.io/football/players/36910.png',
							},
							statistics: [
								{
									games: {
										minutes: 64,
										number: 7,
										position: 'M',
										rating: '7.0',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 1,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 22,
										key: 0,
										accuracy: '71%',
									},
									tackles: {
										total: 1,
										blocks: 0,
										interceptions: 1,
									},
									duels: {
										total: 6,
										won: 3,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: 1,
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
								id: 539,
								name: 'Dani De Wit',
								photo: 'https://media-4.api-sports.io/football/players/539.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 10,
										position: 'M',
										rating: '6.8',
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
										total: 36,
										key: 0,
										accuracy: '80%',
									},
									tackles: {
										total: 1,
										blocks: 1,
										interceptions: 1,
									},
									duels: {
										total: 21,
										won: 9,
									},
									dribbles: {
										attempts: 2,
										success: 1,
										past: 1,
									},
									fouls: {
										drawn: 3,
										committed: 4,
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
								id: 2723,
								name: 'Oussama Idrissi',
								photo:
									'https://media-2.api-sports.io/football/players/2723.png',
							},
							statistics: [
								{
									games: {
										minutes: 93,
										number: 11,
										position: 'M',
										rating: '6.5',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 1,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 28,
										key: 1,
										accuracy: '75%',
									},
									tackles: {
										total: 1,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 17,
										won: 6,
									},
									dribbles: {
										attempts: 6,
										success: 4,
										past: 1,
									},
									fouls: {
										drawn: 0,
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
								id: 36907,
								name: 'Myron Boadu',
								photo:
									'https://media-2.api-sports.io/football/players/36907.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 9,
										position: 'F',
										rating: '7.3',
										captain: false,
										substitute: false,
									},
									offsides: 4,
									shots: {
										total: 4,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: 1,
										saves: null,
									},
									passes: {
										total: 19,
										key: 3,
										accuracy: '82%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 21,
										won: 10,
									},
									dribbles: {
										attempts: 3,
										success: 2,
										past: null,
									},
									fouls: {
										drawn: 6,
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
								id: 32887,
								name: 'Yukinari Sugawara',
								photo:
									'https://media-4.api-sports.io/football/players/32887.png',
							},
							statistics: [
								{
									games: {
										minutes: 27,
										number: 26,
										position: 'D',
										rating: '6.8',
										captain: false,
										substitute: true,
									},
									offsides: 1,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 3,
										key: 2,
										accuracy: '37%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 1,
										won: 0,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: null,
									},
									fouls: {
										drawn: 0,
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
								id: 15849,
								name: 'Ramon Leeuwin',
								photo:
									'https://media-6.api-sports.io/football/players/15849.png',
							},
							statistics: [
								{
									games: {
										minutes: 44,
										number: 27,
										position: 'D',
										rating: '6.4',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 25,
										key: 0,
										accuracy: '78%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 1,
									},
									duels: {
										total: 6,
										won: 3,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: null,
									},
									fouls: {
										drawn: 0,
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
								id: 2799,
								name: 'Albert Guðmundsson',
								photo:
									'https://media-5.api-sports.io/football/players/2799.png',
							},
							statistics: [
								{
									games: {
										minutes: 56,
										number: 28,
										position: 'F',
										rating: '8.3',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: 4,
										on: 2,
									},
									goals: {
										total: 2,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 11,
										key: 0,
										accuracy: '84%',
									},
									tackles: {
										total: 1,
										blocks: 0,
										interceptions: 1,
									},
									duels: {
										total: 8,
										won: 5,
									},
									dribbles: {
										attempts: 5,
										success: 3,
										past: null,
									},
									fouls: {
										drawn: 1,
										committed: 0,
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
								id: 37377,
								name: 'Ferdy Druijf',
								photo:
									'https://media-4.api-sports.io/football/players/37377.png',
							},
							statistics: [
								{
									games: {
										minutes: 40,
										number: 14,
										position: 'F',
										rating: '7.1',
										captain: false,
										substitute: true,
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
										total: 10,
										key: 0,
										accuracy: '55%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 9,
										won: 6,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
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
										won: 1,
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
						id: 567,
						name: 'Plzen',
						logo: 'https://media-4.api-sports.io/football/teams/567.png',
						update: '2021-05-17T16:30:06+00:00',
					},
					players: [
						{
							player: {
								id: 795,
								name: 'Aleš Hruška',
								photo: 'https://media-1.api-sports.io/football/players/795.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 16,
										position: 'G',
										rating: '5.9',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 3,
										assists: null,
										saves: 3,
									},
									passes: {
										total: 35,
										key: 0,
										accuracy: '70%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 5,
										won: 3,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: 1,
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
										saved: 0,
									},
								},
							],
						},
						{
							player: {
								id: 799,
								name: 'Milan Havel',
								photo: 'https://media-6.api-sports.io/football/players/799.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 24,
										position: 'D',
										rating: '6.1',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 1,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 30,
										key: 1,
										accuracy: '78%',
									},
									tackles: {
										total: 3,
										blocks: 0,
										interceptions: 1,
									},
									duels: {
										total: 13,
										won: 6,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: 3,
									},
									fouls: {
										drawn: 0,
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
								id: 800,
								name: 'Lukáš Hejda',
								photo: 'https://media-2.api-sports.io/football/players/800.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 2,
										position: 'D',
										rating: '6.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 45,
										key: 1,
										accuracy: '68%',
									},
									tackles: {
										total: 1,
										blocks: 1,
										interceptions: 1,
									},
									duels: {
										total: 16,
										won: 7,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: null,
									},
									fouls: {
										drawn: 0,
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
								id: 798,
								name: 'Jakub Brabec',
								photo: 'https://media-6.api-sports.io/football/players/798.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 22,
										position: 'D',
										rating: '6.5',
										captain: true,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 57,
										key: 0,
										accuracy: '69%',
									},
									tackles: {
										total: 1,
										blocks: 1,
										interceptions: 1,
									},
									duels: {
										total: 5,
										won: 2,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: null,
									},
									fouls: {
										drawn: 0,
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
								id: 802,
								name: 'David Limberský',
								photo: 'https://media-6.api-sports.io/football/players/802.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 8,
										position: 'D',
										rating: '6.8',
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
										total: 45,
										key: 0,
										accuracy: '66%',
									},
									tackles: {
										total: 1,
										blocks: 0,
										interceptions: 3,
									},
									duels: {
										total: 12,
										won: 6,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: 2,
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
								id: 66278,
								name: 'Lukáš Kalvach',
								photo:
									'https://media-6.api-sports.io/football/players/66278.png',
							},
							statistics: [
								{
									games: {
										minutes: 105,
										number: 23,
										position: 'M',
										rating: '7.4',
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
										total: 44,
										key: 1,
										accuracy: '77%',
									},
									tackles: {
										total: 4,
										blocks: 0,
										interceptions: 3,
									},
									duels: {
										total: 19,
										won: 13,
									},
									dribbles: {
										attempts: 3,
										success: 2,
										past: 4,
									},
									fouls: {
										drawn: 4,
										committed: 0,
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
								id: 66249,
								name: 'Pavel Bucha',
								photo:
									'https://media-5.api-sports.io/football/players/66249.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 20,
										position: 'M',
										rating: '6.2',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 31,
										key: 0,
										accuracy: '67%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 1,
									},
									duels: {
										total: 11,
										won: 4,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: 3,
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
								id: 810,
								name: 'Jan Kopic',
								photo: 'https://media-2.api-sports.io/football/players/810.png',
							},
							statistics: [
								{
									games: {
										minutes: 87,
										number: 10,
										position: 'M',
										rating: '6.8',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: 1,
										saves: null,
									},
									passes: {
										total: 16,
										key: 1,
										accuracy: '84%',
									},
									tackles: {
										total: 1,
										blocks: 0,
										interceptions: 1,
									},
									duels: {
										total: 6,
										won: 3,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: 1,
									},
									fouls: {
										drawn: 0,
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
								id: 805,
								name: 'Aleš Čermák',
								photo: 'https://media-1.api-sports.io/football/players/805.png',
							},
							statistics: [
								{
									games: {
										minutes: 120,
										number: 25,
										position: 'M',
										rating: '6.9',
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
										key: 0,
										accuracy: '76%',
									},
									tackles: {
										total: 1,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 14,
										won: 9,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: 1,
									},
									fouls: {
										drawn: 4,
										committed: 0,
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
								id: 36909,
								name: 'Ondrej Mihalik',
								photo:
									'https://media-4.api-sports.io/football/players/36909.png',
							},
							statistics: [
								{
									games: {
										minutes: 74,
										number: 17,
										position: 'M',
										rating: '6.6',
										captain: false,
										substitute: false,
									},
									offsides: 1,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 15,
										key: 1,
										accuracy: '65%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 2,
									},
									duels: {
										total: 6,
										won: 1,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: 3,
									},
									fouls: {
										drawn: 0,
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
								id: 817,
								name: 'Jean David Beauguel',
								photo: 'https://media-1.api-sports.io/football/players/817.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 9,
										position: 'F',
										rating: '6.4',
										captain: false,
										substitute: false,
									},
									offsides: 1,
									shots: {
										total: 1,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 11,
										key: 0,
										accuracy: '50%',
									},
									tackles: {
										total: 2,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 16,
										won: 6,
									},
									dribbles: {
										attempts: 1,
										success: 0,
										past: 1,
									},
									fouls: {
										drawn: 0,
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
								id: 803,
								name: 'Ludek Pernica',
								photo: 'https://media-4.api-sports.io/football/players/803.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 44,
										position: 'D',
										rating: '6.3',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 2,
										key: 0,
										accuracy: '20%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 6,
										won: 4,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: null,
									},
									fouls: {
										drawn: 0,
										committed: 0,
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
								id: 66205,
								name: "Adriel D'Avila Ba Loua",
								photo:
									'https://media-5.api-sports.io/football/players/66205.png',
							},
							statistics: [
								{
									games: {
										minutes: 46,
										number: 50,
										position: 'M',
										rating: '6.2',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 1,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 4,
										key: 0,
										accuracy: '100%',
									},
									tackles: {
										total: 3,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 12,
										won: 5,
									},
									dribbles: {
										attempts: 3,
										success: 0,
										past: 1,
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
								id: 61238,
								name: 'Miroslav Káčer',
								photo:
									'https://media-4.api-sports.io/football/players/61238.png',
							},
							statistics: [
								{
									games: {
										minutes: 15,
										number: 66,
										position: 'M',
										rating: '6.4',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 3,
										key: 0,
										accuracy: '75%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 1,
										won: 0,
									},
									dribbles: {
										attempts: 0,
										success: 0,
										past: null,
									},
									fouls: {
										drawn: 0,
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
								id: 811,
								name: 'Jan Kovařík',
								photo: 'https://media-2.api-sports.io/football/players/811.png',
							},
							statistics: [
								{
									games: {
										minutes: 33,
										number: 19,
										position: 'M',
										rating: '6.6',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 0,
										on: 0,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 4,
										key: 1,
										accuracy: '100%',
									},
									tackles: {
										total: null,
										blocks: 0,
										interceptions: 0,
									},
									duels: {
										total: 5,
										won: 2,
									},
									dribbles: {
										attempts: 0,
										success: 0,
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
					],
				},
			],
		},
	],
};
