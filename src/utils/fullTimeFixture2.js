export const fullTimeFixture2 = {
	get: 'fixtures',
	parameters: {
		id: '871293',
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
				id: 871293,
				referee: 'D. Schlager',
				timezone: 'UTC',
				date: '2022-11-12T14:30:00+00:00',
				timestamp: 1668263400,
				periods: {
					first: 1668263400,
					second: 1668267000,
				},
				venue: {
					id: 724,
					name: 'PreZero Arena',
					city: 'Sinsheim',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 78,
				name: 'Bundesliga',
				country: 'Germany',
				logo: 'https://media-4.api-sports.io/football/leagues/78.png',
				flag: 'https://media-6.api-sports.io/flags/de.svg',
				season: 2022,
				round: 'Regular Season - 15',
			},
			teams: {
				home: {
					id: 167,
					name: '1899 Hoffenheim',
					logo: 'https://media-2.api-sports.io/football/teams/167.png',
					winner: false,
				},
				away: {
					id: 161,
					name: 'VfL Wolfsburg',
					logo: 'https://media-4.api-sports.io/football/teams/161.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 1,
					away: 2,
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
						elapsed: 12,
						extra: null,
					},
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-5.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 81573,
						name: 'Omar Marmoush',
					},
					assist: {
						id: 30484,
						name: 'M. Svanberg',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 14,
						extra: null,
					},
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-1.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 1408,
						name: 'Sebastiaan Bornauw',
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
						elapsed: 42,
						extra: null,
					},
					team: {
						id: 167,
						name: '1899 Hoffenheim',
						logo: 'https://media-1.api-sports.io/football/teams/167.png',
					},
					player: {
						id: 715,
						name: 'C. Baumgartner',
					},
					assist: {
						id: 227,
						name: 'Angeliño',
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 45,
						extra: 4,
					},
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-4.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 26300,
						name: 'O. Kabak',
					},
					assist: {
						id: null,
						name: null,
					},
					type: 'Goal',
					detail: 'Own Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 49,
						extra: null,
					},
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-6.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 177618,
						name: 'Kilian Fischer',
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
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-5.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 152849,
						name: 'Micky van de Ven',
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
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-1.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 25917,
						name: 'R. Baku',
					},
					assist: {
						id: 637,
						name: 'F. Nmecha',
					},
					type: 'Goal',
					detail: 'Normal Goal',
					comments: null,
				},
				{
					time: {
						elapsed: 65,
						extra: null,
					},
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-5.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 40560,
						name: 'J. Kamiński',
					},
					assist: {
						id: 24,
						name: 'M. Philipp',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 65,
						extra: null,
					},
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-4.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 25400,
						name: 'Y. Gerhardt',
					},
					assist: {
						id: 25410,
						name: 'J. Guilavogui',
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
						id: 167,
						name: '1899 Hoffenheim',
						logo: 'https://media-4.api-sports.io/football/teams/167.png',
					},
					player: {
						id: 90590,
						name: 'G. Rutter',
					},
					assist: {
						id: 202501,
						name: 'F. Asllani',
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
						id: 167,
						name: '1899 Hoffenheim',
						logo: 'https://media-1.api-sports.io/football/teams/167.png',
					},
					player: {
						id: 726,
						name: 'A. Kramarić',
					},
					assist: {
						id: 22,
						name: 'J. Bruun Larsen',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 82,
						extra: null,
					},
					team: {
						id: 167,
						name: '1899 Hoffenheim',
						logo: 'https://media-4.api-sports.io/football/teams/167.png',
					},
					player: {
						id: 1298,
						name: 'R. Skov',
					},
					assist: {
						id: 709,
						name: 'P. Kadeřábek',
					},
					type: 'subst',
					detail: 'Substitution 3',
					comments: null,
				},
				{
					time: {
						elapsed: 89,
						extra: null,
					},
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-6.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 177618,
						name: 'K. Fischer',
					},
					assist: {
						id: 25404,
						name: 'J. Roussillon',
					},
					type: 'subst',
					detail: 'Substitution 4',
					comments: null,
				},
				{
					time: {
						elapsed: 90,
						extra: 3,
					},
					team: {
						id: 167,
						name: '1899 Hoffenheim',
						logo: 'https://media-5.api-sports.io/football/teams/167.png',
					},
					player: {
						id: 718,
						name: 'D. Geiger',
					},
					assist: {
						id: 334353,
						name: 'J. Quarshie',
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
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-6.api-sports.io/football/teams/161.png',
					},
					player: {
						id: 637,
						name: 'F. Nmecha',
					},
					assist: {
						id: 26260,
						name: 'L. Waldschmidt',
					},
					type: 'subst',
					detail: 'Substitution 5',
					comments: null,
				},
			],
			lineups: [
				{
					team: {
						id: 167,
						name: '1899 Hoffenheim',
						logo: 'https://media-4.api-sports.io/football/teams/167.png',
						colors: {
							player: {
								primary: '0000cc',
								number: 'ffffff',
								border: '0000cc',
							},
							goalkeeper: {
								primary: 'd90000',
								number: 'ffffff',
								border: 'd90000',
							},
						},
					},
					coach: {
						id: 3082,
						name: 'A. Breitenreiter',
						photo: 'https://media-5.api-sports.io/football/coachs/3082.png',
					},
					formation: '3-4-1-2',
					startXI: [
						{
							player: {
								id: 702,
								name: 'O. Baumann',
								number: 1,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 713,
								name: 'K. Vogt',
								number: 22,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 25366,
								name: 'K. Akpoguma',
								number: 25,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 227,
								name: 'Angeliño',
								number: 11,
								pos: 'M',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 26300,
								name: 'O. Kabak',
								number: 5,
								pos: 'D',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 718,
								name: 'D. Geiger',
								number: 8,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 715,
								name: 'C. Baumgartner',
								number: 14,
								pos: 'F',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 137210,
								name: 'A. Stiller',
								number: 13,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 726,
								name: 'A. Kramarić',
								number: 27,
								pos: 'F',
								grid: '4:1',
							},
						},
						{
							player: {
								id: 1298,
								name: 'R. Skov',
								number: 29,
								pos: 'M',
								grid: '5:2',
							},
						},
						{
							player: {
								id: 90590,
								name: 'G. Rutter',
								number: 33,
								pos: 'F',
								grid: '5:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 202501,
								name: 'F. Asllani',
								number: 44,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 22,
								name: 'J. Bruun Larsen',
								number: 7,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 709,
								name: 'P. Kadeřábek',
								number: 3,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 334353,
								name: 'J. Quarshie',
								number: 48,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 262845,
								name: 'Eduardo Quaresma',
								number: 26,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 24975,
								name: 'P. Pentke',
								number: 12,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 325975,
								name: 'T. Bischof',
								number: 39,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 328262,
								name: 'M. Damar',
								number: 35,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 24932,
								name: 'F. Becker',
								number: 20,
								pos: 'M',
								grid: null,
							},
						},
					],
				},
				{
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-4.api-sports.io/football/teams/161.png',
						colors: {
							player: {
								primary: 'ffffff',
								number: '0080ff',
								border: 'ffffff',
							},
							goalkeeper: {
								primary: 'ff0000',
								number: 'ffffff',
								border: 'ff0000',
							},
						},
					},
					coach: {
						id: 1528,
						name: 'N. Kovač',
						photo: 'https://media-6.api-sports.io/football/coachs/1528.png',
					},
					formation: '4-5-1',
					startXI: [
						{
							player: {
								id: 2918,
								name: 'K. Casteels',
								number: 1,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 25208,
								name: 'Paulo Otávio',
								number: 6,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 1408,
								name: 'S. Bornauw',
								number: 3,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 152849,
								name: 'M. van de Ven',
								number: 5,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 177618,
								name: 'K. Fischer',
								number: 2,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 25408,
								name: 'M. Arnold',
								number: 27,
								pos: 'M',
								grid: '3:5',
							},
						},
						{
							player: {
								id: 25400,
								name: 'Y. Gerhardt',
								number: 31,
								pos: 'M',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 25917,
								name: 'R. Baku',
								number: 20,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 637,
								name: 'F. Nmecha',
								number: 22,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 40560,
								name: 'J. Kamiński',
								number: 16,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 81573,
								name: 'Omar Marmoush',
								number: 33,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 30484,
								name: 'M. Svanberg',
								number: 32,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 24,
								name: 'M. Philipp',
								number: 17,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 25410,
								name: 'J. Guilavogui',
								number: 29,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 25404,
								name: 'J. Roussillon',
								number: 15,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 26260,
								name: 'L. Waldschmidt',
								number: 7,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 20995,
								name: 'M. Lacroix',
								number: 4,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 342188,
								name: 'D. Pejčinović',
								number: 18,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 261210,
								name: 'P. Schulze',
								number: 35,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 25396,
								name: 'P. Pervan',
								number: 12,
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
						id: 167,
						name: '1899 Hoffenheim',
						logo: 'https://media-6.api-sports.io/football/teams/167.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 8,
						},
						{
							type: 'Shots off Goal',
							value: 9,
						},
						{
							type: 'Total Shots',
							value: 22,
						},
						{
							type: 'Blocked Shots',
							value: 5,
						},
						{
							type: 'Shots insidebox',
							value: 13,
						},
						{
							type: 'Shots outsidebox',
							value: 9,
						},
						{
							type: 'Fouls',
							value: 15,
						},
						{
							type: 'Corner Kicks',
							value: 7,
						},
						{
							type: 'Offsides',
							value: 2,
						},
						{
							type: 'Ball Possession',
							value: '60%',
						},
						{
							type: 'Yellow Cards',
							value: null,
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
							value: 472,
						},
						{
							type: 'Passes accurate',
							value: 375,
						},
						{
							type: 'Passes %',
							value: '79%',
						},
					],
				},
				{
					team: {
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-2.api-sports.io/football/teams/161.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 3,
						},
						{
							type: 'Shots off Goal',
							value: 3,
						},
						{
							type: 'Total Shots',
							value: 6,
						},
						{
							type: 'Blocked Shots',
							value: null,
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
							value: 11,
						},
						{
							type: 'Corner Kicks',
							value: 1,
						},
						{
							type: 'Offsides',
							value: 2,
						},
						{
							type: 'Ball Possession',
							value: '40%',
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
							value: 7,
						},
						{
							type: 'Total passes',
							value: 314,
						},
						{
							type: 'Passes accurate',
							value: 207,
						},
						{
							type: 'Passes %',
							value: '66%',
						},
					],
				},
			],
			players: [
				{
					team: {
						id: 167,
						name: '1899 Hoffenheim',
						logo: 'https://media-4.api-sports.io/football/teams/167.png',
						update: '2022-11-15T04:20:31+00:00',
					},
					players: [
						{
							player: {
								id: 702,
								name: 'Oliver Baumann',
								photo: 'https://media-5.api-sports.io/football/players/702.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 1,
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
										conceded: 2,
										assists: null,
										saves: 2,
									},
									passes: {
										total: 37,
										key: null,
										accuracy: '35',
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
								id: 25366,
								name: 'Kevin Akpoguma',
								photo:
									'https://media-5.api-sports.io/football/players/25366.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 25,
										position: 'D',
										rating: '6.7',
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
										total: 36,
										key: 1,
										accuracy: '28',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 14,
										won: 6,
									},
									dribbles: {
										attempts: 2,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: null,
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
								id: 713,
								name: 'Kevin Vogt',
								photo: 'https://media-4.api-sports.io/football/players/713.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 22,
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
										total: 74,
										key: 1,
										accuracy: '61',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 7,
										won: 1,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: 1,
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
								id: 26300,
								name: 'Ozan Kabak',
								photo:
									'https://media-2.api-sports.io/football/players/26300.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 5,
										position: 'D',
										rating: '6.7',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 4,
										on: 1,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 61,
										key: null,
										accuracy: '48',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 3,
									},
									duels: {
										total: 10,
										won: 5,
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
								id: 1298,
								name: 'Robert Skov',
								photo:
									'https://media-5.api-sports.io/football/players/1298.png',
							},
							statistics: [
								{
									games: {
										minutes: 82,
										number: 29,
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
										total: 26,
										key: 2,
										accuracy: '20',
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
								id: 718,
								name: 'Dennis Geiger',
								photo: 'https://media-5.api-sports.io/football/players/718.png',
							},
							statistics: [
								{
									games: {
										minutes: 89,
										number: 8,
										position: 'M',
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
										total: 40,
										key: 1,
										accuracy: '35',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 7,
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
								id: 137210,
								name: 'Angelo Stiller',
								photo:
									'https://media-2.api-sports.io/football/players/137210.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 13,
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
										total: 40,
										key: null,
										accuracy: '30',
									},
									tackles: {
										total: 5,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 10,
										won: 7,
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
								id: 227,
								name: 'Angeliño',
								photo: 'https://media-4.api-sports.io/football/players/227.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 11,
										position: 'M',
										rating: '8.3',
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
										assists: 1,
										saves: null,
									},
									passes: {
										total: 60,
										key: 7,
										accuracy: '43',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 8,
										won: 4,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: 2,
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
								id: 726,
								name: 'Andrej Kramarić',
								photo: 'https://media-5.api-sports.io/football/players/726.png',
							},
							statistics: [
								{
									games: {
										minutes: 74,
										number: 27,
										position: 'F',
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
										total: 27,
										key: 1,
										accuracy: '26',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 2,
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
								id: 90590,
								name: 'Georginio Rutter',
								photo:
									'https://media-4.api-sports.io/football/players/90590.png',
							},
							statistics: [
								{
									games: {
										minutes: 74,
										number: 33,
										position: 'F',
										rating: '6.9',
										captain: false,
										substitute: false,
									},
									offsides: 1,
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
										total: 9,
										key: 1,
										accuracy: '6',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 14,
										won: 8,
									},
									dribbles: {
										attempts: 4,
										success: 2,
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
								id: 715,
								name: 'Christoph Baumgartner',
								photo: 'https://media-5.api-sports.io/football/players/715.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 14,
										position: 'F',
										rating: '7.9',
										captain: false,
										substitute: false,
									},
									offsides: null,
									shots: {
										total: 5,
										on: 3,
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
										accuracy: '31',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 14,
										won: 6,
									},
									dribbles: {
										attempts: 3,
										success: 1,
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
								id: 24975,
								name: 'Philipp Pentke',
								photo:
									'https://media-2.api-sports.io/football/players/24975.png',
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
								id: 709,
								name: 'Pavel Kadeřábek',
								photo: 'https://media-5.api-sports.io/football/players/709.png',
							},
							statistics: [
								{
									games: {
										minutes: 8,
										number: 3,
										position: 'D',
										rating: '6.7',
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
										total: 8,
										key: null,
										accuracy: '5',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 2,
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
								id: 334353,
								name: 'Joshua Quarshie',
								photo:
									'https://media-6.api-sports.io/football/players/334353.png',
							},
							statistics: [
								{
									games: {
										minutes: 1,
										number: 48,
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
								id: 262845,
								name: 'Eduardo Quaresma',
								photo:
									'https://media-6.api-sports.io/football/players/262845.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 26,
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
								id: 24932,
								name: 'Finn Ole Becker',
								photo:
									'https://media-6.api-sports.io/football/players/24932.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 20,
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
								id: 328262,
								name: 'Muhammed Damar',
								photo:
									'https://media-2.api-sports.io/football/players/328262.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 35,
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
								id: 325975,
								name: 'Tom Bischof',
								photo:
									'https://media-5.api-sports.io/football/players/325975.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 39,
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
								id: 22,
								name: 'Jacob Bruun Larsen',
								photo: 'https://media-2.api-sports.io/football/players/22.png',
							},
							statistics: [
								{
									games: {
										minutes: 16,
										number: 7,
										position: 'F',
										rating: '6.7',
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
										total: 6,
										key: null,
										accuracy: '5',
									},
									tackles: {
										total: 1,
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
								id: 202501,
								name: 'Fisnik Asllani',
								photo:
									'https://media-2.api-sports.io/football/players/202501.png',
							},
							statistics: [
								{
									games: {
										minutes: 16,
										number: 44,
										position: 'F',
										rating: '6.7',
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
										key: 1,
										accuracy: '2',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
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
						id: 161,
						name: 'VfL Wolfsburg',
						logo: 'https://media-1.api-sports.io/football/teams/161.png',
						update: '2022-11-15T04:20:32+00:00',
					},
					players: [
						{
							player: {
								id: 2918,
								name: 'Koen Casteels',
								photo:
									'https://media-5.api-sports.io/football/players/2918.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 1,
										position: 'G',
										rating: '7.9',
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
										saves: 7,
									},
									passes: {
										total: 45,
										key: null,
										accuracy: '19',
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
								id: 177618,
								name: 'Kilian Fischer',
								photo:
									'https://media-5.api-sports.io/football/players/177618.png',
							},
							statistics: [
								{
									games: {
										minutes: 89,
										number: 2,
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
										total: 36,
										key: null,
										accuracy: '27',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 9,
										won: 4,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: 1,
									},
									fouls: {
										drawn: 2,
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
								id: 1408,
								name: 'Sebastiaan Bornauw',
								photo:
									'https://media-6.api-sports.io/football/players/1408.png',
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
										on: 1,
									},
									goals: {
										total: null,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 32,
										key: 1,
										accuracy: '24',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
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
								id: 152849,
								name: 'Micky van de Ven',
								photo:
									'https://media-1.api-sports.io/football/players/152849.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 5,
										position: 'D',
										rating: '6.2',
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
										total: 4,
										won: 1,
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
								id: 25208,
								name: 'Paulo Otávio',
								photo:
									'https://media-5.api-sports.io/football/players/25208.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 6,
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
										total: 28,
										key: 1,
										accuracy: '21',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 8,
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
								id: 25917,
								name: 'Ridle Baku',
								photo:
									'https://media-6.api-sports.io/football/players/25917.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 20,
										position: 'M',
										rating: '7.6',
										captain: false,
										substitute: false,
									},
									offsides: 1,
									shots: {
										total: 2,
										on: 2,
									},
									goals: {
										total: 1,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 18,
										key: 1,
										accuracy: '11',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 11,
										won: 7,
									},
									dribbles: {
										attempts: 3,
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
								id: 637,
								name: 'Felix Nmecha',
								photo: 'https://media-4.api-sports.io/football/players/637.png',
							},
							statistics: [
								{
									games: {
										minutes: 89,
										number: 22,
										position: 'M',
										rating: '6.9',
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
										assists: 1,
										saves: null,
									},
									passes: {
										total: 27,
										key: 1,
										accuracy: '16',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 12,
										won: 8,
									},
									dribbles: {
										attempts: 1,
										success: null,
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
								id: 25408,
								name: 'Maximilian Arnold',
								photo:
									'https://media-1.api-sports.io/football/players/25408.png',
							},
							statistics: [
								{
									games: {
										minutes: 90,
										number: 27,
										position: 'M',
										rating: '7.5',
										captain: true,
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
										total: 36,
										key: 1,
										accuracy: '26',
									},
									tackles: {
										total: 3,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: 8,
										won: 3,
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
								id: 25400,
								name: 'Yannick Gerhardt',
								photo:
									'https://media-2.api-sports.io/football/players/25400.png',
							},
							statistics: [
								{
									games: {
										minutes: 65,
										number: 31,
										position: 'M',
										rating: '6.2',
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
										total: 21,
										key: null,
										accuracy: '12',
									},
									tackles: {
										total: 1,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: 7,
										won: 3,
									},
									dribbles: {
										attempts: 1,
										success: null,
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
								id: 40560,
								name: 'Jakub Kamiński',
								photo:
									'https://media-4.api-sports.io/football/players/40560.png',
							},
							statistics: [
								{
									games: {
										minutes: 65,
										number: 16,
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
										total: 15,
										key: null,
										accuracy: '12',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 3,
										won: 1,
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
								id: 81573,
								name: 'Omar Marmoush',
								photo:
									'https://media-2.api-sports.io/football/players/81573.png',
							},
							statistics: [
								{
									games: {
										minutes: 12,
										number: 33,
										position: 'F',
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
										total: 4,
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
								id: 261210,
								name: 'Philipp Schulze',
								photo:
									'https://media-1.api-sports.io/football/players/261210.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 35,
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
								id: 25396,
								name: 'Pavao Pervan',
								photo:
									'https://media-1.api-sports.io/football/players/25396.png',
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
								id: 20995,
								name: 'Maxence Lacroix',
								photo:
									'https://media-5.api-sports.io/football/players/20995.png',
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
								id: 25404,
								name: 'Jérôme Roussillon',
								photo:
									'https://media-2.api-sports.io/football/players/25404.png',
							},
							statistics: [
								{
									games: {
										minutes: 1,
										number: 15,
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
										accuracy: null,
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 4,
										won: 1,
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
								id: 25410,
								name: 'Josuha Guilavogui',
								photo:
									'https://media-5.api-sports.io/football/players/25410.png',
							},
							statistics: [
								{
									games: {
										minutes: 25,
										number: 29,
										position: 'M',
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
										total: 4,
										key: null,
										accuracy: '2',
									},
									tackles: {
										total: 1,
										blocks: 2,
										interceptions: null,
									},
									duels: {
										total: 4,
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
								id: 30484,
								name: 'Mattias Svanberg',
								photo:
									'https://media-2.api-sports.io/football/players/30484.png',
							},
							statistics: [
								{
									games: {
										minutes: 78,
										number: 32,
										position: 'M',
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
										total: 17,
										key: 1,
										accuracy: '11',
									},
									tackles: {
										total: 2,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: 12,
										won: 7,
									},
									dribbles: {
										attempts: 2,
										success: 1,
										past: 2,
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
								id: 342188,
								name: 'Dženan Pejčinović',
								photo:
									'https://media-2.api-sports.io/football/players/342188.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 18,
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
								id: 26260,
								name: 'Luca Waldschmidt',
								photo:
									'https://media-2.api-sports.io/football/players/26260.png',
							},
							statistics: [
								{
									games: {
										minutes: 1,
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
										total: 1,
										key: null,
										accuracy: null,
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
										attempts: 1,
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
								id: 24,
								name: 'Maximilian Philipp',
								photo: 'https://media-1.api-sports.io/football/players/24.png',
							},
							statistics: [
								{
									games: {
										minutes: 25,
										number: 17,
										position: 'F',
										rating: '6.7',
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
										accuracy: '1',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 5,
										won: 3,
									},
									dribbles: {
										attempts: 1,
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
					],
				},
			],
		},
	],
};
