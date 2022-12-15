export const halfTimeFixture = {
	get: 'fixtures',
	parameters: {
		id: '927025',
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
				id: 927025,
				referee: 'Bo Yu, China',
				timezone: 'Europe/Warsaw',
				date: '2022-12-15T12:30:00+01:00',
				timestamp: 1671103800,
				periods: {
					first: 1671103800,
					second: null,
				},
				venue: {
					id: 354,
					name: 'Huzhou Olympic Sports Center',
					city: 'Huzhou',
				},
				status: {
					long: 'Halftime',
					short: 'HT',
					elapsed: 45,
				},
			},
			league: {
				id: 169,
				name: 'Super League',
				country: 'China',
				logo: 'https://media-5.api-sports.io/football/leagues/169.png',
				flag: 'https://media-2.api-sports.io/flags/cn.svg',
				season: 2022,
				round: 'Regular Season - 31',
			},
			teams: {
				home: {
					id: 848,
					name: 'Hangzhou Greentown',
					logo: 'https://media-2.api-sports.io/football/teams/848.png',
					winner: true,
				},
				away: {
					id: 5648,
					name: 'Chengdu Better City',
					logo: 'https://media-5.api-sports.io/football/teams/5648.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
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
						elapsed: 10,
						extra: null,
					},
					team: {
						id: 848,
						name: 'Hangzhou Greentown',
						logo: 'https://media-1.api-sports.io/football/teams/848.png',
					},
					player: {
						id: 12486,
						name: 'Gu Bin',
					},
					assist: {
						id: 12484,
						name: 'J. Cheng',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 30,
						extra: null,
					},
					team: {
						id: 848,
						name: 'Hangzhou Greentown',
						logo: 'https://media-5.api-sports.io/football/teams/848.png',
					},
					player: {
						id: 110183,
						name: 'N. Leung',
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
						elapsed: 32,
						extra: null,
					},
					team: {
						id: 5648,
						name: 'Chengdu Better City',
						logo: 'https://media-5.api-sports.io/football/teams/5648.png',
					},
					player: {
						id: 78879,
						name: 'J. Hu',
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
						elapsed: 33,
						extra: null,
					},
					team: {
						id: 5648,
						name: 'Chengdu Better City',
						logo: 'https://media-2.api-sports.io/football/teams/5648.png',
					},
					player: {
						id: 277569,
						name: 'T. Liu',
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
						elapsed: 42,
						extra: null,
					},
					team: {
						id: 5648,
						name: 'Chengdu Better City',
						logo: 'https://media-2.api-sports.io/football/teams/5648.png',
					},
					player: {
						id: 12772,
						name: 'Y. Zhang',
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
						elapsed: 43,
						extra: null,
					},
					team: {
						id: 5648,
						name: 'Chengdu Better City',
						logo: 'https://media-4.api-sports.io/football/teams/5648.png',
					},
					player: {
						id: 12713,
						name: 'R. Hu',
					},
					assist: {
						id: 15959,
						name: 'R. Windbichler',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 43,
						extra: null,
					},
					team: {
						id: 848,
						name: 'Hangzhou Greentown',
						logo: 'https://media-4.api-sports.io/football/teams/848.png',
					},
					player: {
						id: 110183,
						name: 'N. Leung',
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
						id: 848,
						name: 'Hangzhou Greentown',
						logo: 'https://media-1.api-sports.io/football/teams/848.png',
						colors: {
							player: {
								primary: '00795c',
								number: '877752',
								border: '00795c',
							},
							goalkeeper: {
								primary: '000000',
								number: 'ffffff',
								border: '000000',
							},
						},
					},
					formation: '4-1-4-1',
					startXI: [
						{
							player: {
								id: 12768,
								name: 'Chao Gu',
								number: 1,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 12473,
								name: 'Yu Dong',
								number: 19,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 110183,
								name: 'Nok Hang Leung',
								number: 2,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 41356,
								name: 'Lucas Possignolo',
								number: 36,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 12482,
								name: 'Yue Xin',
								number: 28,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 12907,
								name: 'Wei Long',
								number: 17,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 12435,
								name: 'Matheus',
								number: 10,
								pos: 'M',
								grid: '4:4',
							},
						},
						{
							player: {
								id: 8726,
								name: 'Franko Andrijašević',
								number: 11,
								pos: 'M',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 12484,
								name: 'Cheng Jin',
								number: 22,
								pos: 'M',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 368508,
								name: 'Abdusalam Ablikim',
								number: 18,
								pos: 'M',
								grid: '4:1',
							},
						},
						{
							player: {
								id: 13005,
								name: 'Nyasha Mushekwi',
								number: 30,
								pos: 'F',
								grid: '5:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 277826,
								name: 'Bo Zhao',
								number: 33,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 12469,
								name: 'Jinfeng Lai',
								number: 12,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 137150,
								name: 'Gao Tianyu',
								number: 26,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12476,
								name: "Sun Zheng'ao",
								number: 4,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 368506,
								name: 'Liu Haofan',
								number: 5,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 78809,
								name: 'Jiaqi Zhang',
								number: 29,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12479,
								name: 'Dongsheng Wang',
								number: 20,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 12490,
								name: 'Haoran Zhong',
								number: 8,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 80830,
								name: 'Junsheng Yao',
								number: 6,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 368509,
								name: 'Bao Shengxin',
								number: 16,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12486,
								name: 'Bin Gu',
								number: 31,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 312132,
								name: 'Kurban Eysajan',
								number: 21,
								pos: 'M',
								grid: null,
							},
						},
					],
					coach: {
						id: 1705,
						name: 'Jordi Vinyals',
						photo: 'https://media-2.api-sports.io/football/coachs/1705.png',
					},
				},
				{
					team: {
						id: 5648,
						name: 'Chengdu Better City',
						logo: 'https://media-4.api-sports.io/football/teams/5648.png',
						colors: {
							player: {
								primary: 'ff0000',
								number: 'ffffff',
								border: 'ff0000',
							},
							goalkeeper: {
								primary: 'ebfb09',
								number: 'ffffff',
								border: 'ebfb09',
							},
						},
					},
					formation: '3-4-3',
					startXI: [
						{
							player: {
								id: 12772,
								name: 'Yan Zhang',
								number: 33,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 78879,
								name: 'Jing Hu',
								number: 13,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 15959,
								name: 'Richard Windbichler',
								number: 40,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 277569,
								name: 'Tao Liu',
								number: 26,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 12445,
								name: 'Xin Tang',
								number: 3,
								pos: 'M',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 12876,
								name: 'Chao Gan',
								number: 39,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 12903,
								name: 'Tim Chow',
								number: 8,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 34548,
								name: 'Min-woo Kim',
								number: 11,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 34173,
								name: 'Rômulo',
								number: 10,
								pos: 'F',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 197059,
								name: 'Matheus Saldanha',
								number: 12,
								pos: 'F',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 368503,
								name: 'Hu Hetao',
								number: 2,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 78862,
								name: 'Xing Yu',
								number: 24,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 12713,
								name: 'Ruibao Hu',
								number: 5,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 12457,
								name: 'Ting Yang',
								number: 31,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 368504,
								name: 'Mutellip Iminqari',
								number: 29,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 277823,
								name: 'Wang Hanlin',
								number: 28,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 12451,
								name: 'Junlin Min',
								number: 18,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 266510,
								name: 'Hu Xingyu',
								number: 22,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12806,
								name: 'Bin Liu',
								number: 27,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 277574,
								name: 'Gan Rui',
								number: 17,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 78948,
								name: 'Guichao Wu',
								number: 15,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 279844,
								name: 'Meng Junjie',
								number: 21,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 78993,
								name: 'Xiang Baixu',
								number: 19,
								pos: 'F',
								grid: null,
							},
						},
					],
					coach: {
						id: 4197,
						name: 'Seo Jung-Won',
						photo: 'https://media-4.api-sports.io/football/coachs/4197.png',
					},
				},
			],
			statistics: [
				{
					team: {
						id: 848,
						name: 'Hangzhou Greentown',
						logo: 'https://media-1.api-sports.io/football/teams/848.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 5,
						},
						{
							type: 'Shots off Goal',
							value: null,
						},
						{
							type: 'Total Shots',
							value: 5,
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
							value: null,
						},
						{
							type: 'Fouls',
							value: 12,
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
							value: '51%',
						},
						{
							type: 'Yellow Cards',
							value: 1,
						},
						{
							type: 'Red Cards',
							value: null,
						},
						{
							type: 'Goalkeeper Saves',
							value: null,
						},
						{
							type: 'Total passes',
							value: 187,
						},
						{
							type: 'Passes accurate',
							value: 155,
						},
						{
							type: 'Passes %',
							value: '83%',
						},
					],
				},
				{
					team: {
						id: 5648,
						name: 'Chengdu Better City',
						logo: 'https://media-2.api-sports.io/football/teams/5648.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: null,
						},
						{
							type: 'Shots off Goal',
							value: 3,
						},
						{
							type: 'Total Shots',
							value: 5,
						},
						{
							type: 'Blocked Shots',
							value: 2,
						},
						{
							type: 'Shots insidebox',
							value: 1,
						},
						{
							type: 'Shots outsidebox',
							value: 4,
						},
						{
							type: 'Fouls',
							value: 10,
						},
						{
							type: 'Corner Kicks',
							value: 5,
						},
						{
							type: 'Offsides',
							value: 2,
						},
						{
							type: 'Ball Possession',
							value: '49%',
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
							value: 176,
						},
						{
							type: 'Passes accurate',
							value: 141,
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
						id: 848,
						name: 'Hangzhou Greentown',
						logo: 'https://media-2.api-sports.io/football/teams/848.png',
						update: '2022-12-15T12:30:40+00:00',
					},
					players: [
						{
							player: {
								id: 12768,
								name: 'Chao Gu',
								photo:
									'https://media-1.api-sports.io/football/players/12768.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 1,
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
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 9,
										key: null,
										accuracy: '7',
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
								id: 12473,
								name: 'Yu Dong',
								photo:
									'https://media-1.api-sports.io/football/players/12473.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 19,
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
										total: 25,
										key: null,
										accuracy: '15',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 4,
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
								id: 110183,
								name: 'Nok Hang Leung',
								photo:
									'https://media-2.api-sports.io/football/players/110183.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 2,
										position: 'D',
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
										total: 1,
										conceded: 0,
										assists: null,
										saves: null,
									},
									passes: {
										total: 29,
										key: null,
										accuracy: '27',
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
								id: 41356,
								name: 'Lucas Possignolo',
								photo:
									'https://media-4.api-sports.io/football/players/41356.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 36,
										position: 'D',
										rating: '6.6',
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
										total: 29,
										key: null,
										accuracy: '25',
									},
									tackles: {
										total: null,
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
								id: 12482,
								name: 'Yue Xin',
								photo:
									'https://media-2.api-sports.io/football/players/12482.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 28,
										position: 'D',
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
										total: 21,
										key: null,
										accuracy: '16',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: 2,
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
								id: 12907,
								name: 'Wei Long',
								photo:
									'https://media-4.api-sports.io/football/players/12907.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 17,
										position: 'M',
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
										total: 19,
										key: null,
										accuracy: '17',
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
										attempts: 4,
										success: 2,
										past: null,
									},
									fouls: {
										drawn: 2,
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
								id: 12435,
								name: 'Matheus',
								photo:
									'https://media-5.api-sports.io/football/players/12435.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 10,
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
										total: 9,
										key: 2,
										accuracy: '6',
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
								id: 8726,
								name: 'Franko Andrijašević',
								photo:
									'https://media-2.api-sports.io/football/players/8726.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 11,
										position: 'M',
										rating: '6.6',
										captain: true,
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
										total: 15,
										key: 1,
										accuracy: '13',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
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
								id: 12484,
								name: 'Cheng Jin',
								photo:
									'https://media-5.api-sports.io/football/players/12484.png',
							},
							statistics: [
								{
									games: {
										minutes: 10,
										number: 22,
										position: 'M',
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
								id: 368508,
								name: 'Abdusalam Ablikim',
								photo:
									'https://media-1.api-sports.io/football/players/368508.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 18,
										position: 'M',
										rating: '6.5',
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
										total: 2,
										key: null,
										accuracy: '2',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 6,
										won: 1,
									},
									dribbles: {
										attempts: 2,
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
								id: 13005,
								name: 'Nyasha Mushekwi',
								photo:
									'https://media-4.api-sports.io/football/players/13005.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 30,
										position: 'F',
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
										total: 5,
										key: null,
										accuracy: '4',
									},
									tackles: {
										total: null,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: 10,
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
								id: 277826,
								name: 'Bo Zhao',
								photo:
									'https://media-5.api-sports.io/football/players/277826.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 33,
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
								id: 12469,
								name: 'Jinfeng Lai',
								photo:
									'https://media-5.api-sports.io/football/players/12469.png',
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
								id: 137150,
								name: 'Gao Tianyu',
								photo:
									'https://media-1.api-sports.io/football/players/137150.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 26,
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
								id: 12476,
								name: "Sun Zheng'ao",
								photo:
									'https://media-5.api-sports.io/football/players/12476.png',
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
								id: 368506,
								name: 'Liu Haofan',
								photo:
									'https://media-5.api-sports.io/football/players/368506.png',
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
								id: 78809,
								name: 'Jiaqi Zhang',
								photo:
									'https://media-2.api-sports.io/football/players/78809.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 29,
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
								id: 12479,
								name: 'Dongsheng Wang',
								photo:
									'https://media-1.api-sports.io/football/players/12479.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 20,
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
								id: 12490,
								name: 'Haoran Zhong',
								photo:
									'https://media-2.api-sports.io/football/players/12490.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 8,
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
								id: 80830,
								name: 'Junsheng Yao',
								photo:
									'https://media-2.api-sports.io/football/players/80830.png',
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
								id: 368509,
								name: 'Bao Shengxin',
								photo:
									'https://media-2.api-sports.io/football/players/368509.png',
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
								id: 12486,
								name: 'Bin Gu',
								photo:
									'https://media-2.api-sports.io/football/players/12486.png',
							},
							statistics: [
								{
									games: {
										minutes: 39,
										number: 31,
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
										total: 22,
										key: null,
										accuracy: '21',
									},
									tackles: {
										total: null,
										blocks: 1,
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
								id: 312132,
								name: 'Kurban Eysajan',
								photo:
									'https://media-5.api-sports.io/football/players/312132.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 21,
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
					],
				},
				{
					team: {
						id: 5648,
						name: 'Chengdu Better City',
						logo: 'https://media-5.api-sports.io/football/teams/5648.png',
						update: '2022-12-15T12:30:40+00:00',
					},
					players: [
						{
							player: {
								id: 12772,
								name: 'Yan Zhang',
								photo:
									'https://media-1.api-sports.io/football/players/12772.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 33,
										position: 'G',
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
										conceded: 1,
										assists: null,
										saves: 4,
									},
									passes: {
										total: 10,
										key: null,
										accuracy: '2',
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
								id: 78879,
								name: 'Jing Hu',
								photo:
									'https://media-4.api-sports.io/football/players/78879.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 13,
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
										total: 18,
										key: null,
										accuracy: '13',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 5,
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
								id: 15959,
								name: 'Richard Windbichler',
								photo:
									'https://media-1.api-sports.io/football/players/15959.png',
							},
							statistics: [
								{
									games: {
										minutes: 43,
										number: 40,
										position: 'D',
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
										assists: null,
										saves: null,
									},
									passes: {
										total: 12,
										key: null,
										accuracy: '12',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
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
								id: 277569,
								name: 'Tao Liu',
								photo:
									'https://media-1.api-sports.io/football/players/277569.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 26,
										position: 'D',
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
										total: 21,
										key: null,
										accuracy: '19',
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
								id: 12445,
								name: 'Xin Tang',
								photo:
									'https://media-5.api-sports.io/football/players/12445.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 3,
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
										total: 15,
										key: null,
										accuracy: '15',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 4,
										won: 2,
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
								id: 12876,
								name: 'Chao Gan',
								photo:
									'https://media-1.api-sports.io/football/players/12876.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 39,
										position: 'M',
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
										total: 18,
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
								id: 12903,
								name: 'Tim Chow',
								photo:
									'https://media-4.api-sports.io/football/players/12903.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 8,
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
										total: 14,
										key: null,
										accuracy: '13',
									},
									tackles: {
										total: 4,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 8,
										won: 6,
									},
									dribbles: {
										attempts: 1,
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
								id: 34548,
								name: 'Min-woo Kim',
								photo:
									'https://media-4.api-sports.io/football/players/34548.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 11,
										position: 'M',
										rating: '6.6',
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
										total: 14,
										key: null,
										accuracy: '12',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 5,
										won: 3,
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
								id: 34173,
								name: 'Rômulo',
								photo:
									'https://media-4.api-sports.io/football/players/34173.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 10,
										position: 'F',
										rating: '6.6',
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
										total: 28,
										key: 1,
										accuracy: '20',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 10,
										won: 5,
									},
									dribbles: {
										attempts: 1,
										success: null,
										past: 2,
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
								id: 197059,
								name: 'Matheus Saldanha',
								photo:
									'https://media-1.api-sports.io/football/players/197059.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 12,
										position: 'F',
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
										total: 12,
										won: 7,
									},
									dribbles: {
										attempts: 3,
										success: 2,
										past: null,
									},
									fouls: {
										drawn: 5,
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
								id: 368503,
								name: 'Hu Hetao',
								photo:
									'https://media-2.api-sports.io/football/players/368503.png',
							},
							statistics: [
								{
									games: {
										minutes: 49,
										number: 2,
										position: 'F',
										rating: '6.6',
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
										total: 11,
										key: null,
										accuracy: '8',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 3,
										won: 3,
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
								id: 78862,
								name: 'Xing Yu',
								photo:
									'https://media-1.api-sports.io/football/players/78862.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 24,
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
								id: 12713,
								name: 'Ruibao Hu',
								photo:
									'https://media-1.api-sports.io/football/players/12713.png',
							},
							statistics: [
								{
									games: {
										minutes: 6,
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
										total: 3,
										key: null,
										accuracy: '2',
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
								id: 12457,
								name: 'Ting Yang',
								photo:
									'https://media-2.api-sports.io/football/players/12457.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 31,
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
								id: 368504,
								name: 'Mutellip Iminqari',
								photo:
									'https://media-2.api-sports.io/football/players/368504.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 29,
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
								id: 277823,
								name: 'Wang Hanlin',
								photo:
									'https://media-5.api-sports.io/football/players/277823.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 28,
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
								id: 12451,
								name: 'Junlin Min',
								photo:
									'https://media-1.api-sports.io/football/players/12451.png',
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
								id: 266510,
								name: 'Hu Xingyu',
								photo:
									'https://media-1.api-sports.io/football/players/266510.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 22,
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
								id: 12806,
								name: 'Bin Liu',
								photo:
									'https://media-2.api-sports.io/football/players/12806.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 27,
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
								id: 277574,
								name: 'Gan Rui',
								photo:
									'https://media-5.api-sports.io/football/players/277574.png',
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
								id: 78948,
								name: 'Guichao Wu',
								photo:
									'https://media-2.api-sports.io/football/players/78948.png',
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
								id: 279844,
								name: 'Meng Junjie',
								photo:
									'https://media-5.api-sports.io/football/players/279844.png',
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
								id: 78993,
								name: 'Xiang Baixu',
								photo:
									'https://media-2.api-sports.io/football/players/78993.png',
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
					],
				},
			],
		},
	],
};
