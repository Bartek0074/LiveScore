export const secondHalfFixture = {
	get: 'fixtures',
	parameters: {
		id: '927028',
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
				id: 927028,
				referee: 'Wei Zhen, China',
				timezone: 'Europe/Warsaw',
				date: '2022-12-15T12:00:00+01:00',
				timestamp: 1671102000,
				periods: {
					first: 1671102000,
					second: 1671105600,
				},
				venue: {
					id: null,
					name: 'Cangzhou Stadium',
					city: 'Cangzhou',
				},
				status: {
					long: 'Second Half',
					short: '2H',
					elapsed: 79,
				},
			},
			league: {
				id: 169,
				name: 'Super League',
				country: 'China',
				logo: 'https://media-5.api-sports.io/football/leagues/169.png',
				flag: 'https://media-5.api-sports.io/flags/cn.svg',
				season: 2022,
				round: 'Regular Season - 31',
			},
			teams: {
				home: {
					id: 849,
					name: 'Shijiazhuang Y. J.',
					logo: 'https://media-4.api-sports.io/football/teams/849.png',
					winner: false,
				},
				away: {
					id: 840,
					name: 'Henan Jianye',
					logo: 'https://media-4.api-sports.io/football/teams/840.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
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
						elapsed: 28,
						extra: null,
					},
					team: {
						id: 849,
						name: 'Shijiazhuang Y. J.',
						logo: 'https://media-1.api-sports.io/football/teams/849.png',
					},
					player: {
						id: 12882,
						name: 'Wang Peng',
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
						elapsed: 38,
						extra: null,
					},
					team: {
						id: 840,
						name: 'Henan Jianye',
						logo: 'https://media-4.api-sports.io/football/teams/840.png',
					},
					player: {
						id: 13104,
						name: 'Luo Xin',
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
						elapsed: 46,
						extra: null,
					},
					team: {
						id: 840,
						name: 'Henan Jianye',
						logo: 'https://media-5.api-sports.io/football/teams/840.png',
					},
					player: {
						id: 266710,
						name: 'Chen Keqiang',
					},
					assist: {
						id: 321979,
						name: 'H. Wang',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
				{
					time: {
						elapsed: 46,
						extra: null,
					},
					team: {
						id: 840,
						name: 'Henan Jianye',
						logo: 'https://media-5.api-sports.io/football/teams/840.png',
					},
					player: {
						id: 311704,
						name: 'Liu Jiahui',
					},
					assist: {
						id: 12893,
						name: 'Gu Cao',
					},
					type: 'subst',
					detail: 'Substitution 2',
					comments: null,
				},
				{
					time: {
						elapsed: 61,
						extra: null,
					},
					team: {
						id: 840,
						name: 'Henan Jianye',
						logo: 'https://media-4.api-sports.io/football/teams/840.png',
					},
					player: {
						id: 12910,
						name: 'Wang Shangyuan',
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
						elapsed: 65,
						extra: null,
					},
					team: {
						id: 849,
						name: 'Shijiazhuang Y. J.',
						logo: 'https://media-1.api-sports.io/football/teams/849.png',
					},
					player: {
						id: 12424,
						name: 'X. Liu',
					},
					assist: {
						id: 271715,
						name: 'D. Owusu-Sekyere',
					},
					type: 'subst',
					detail: 'Substitution 1',
					comments: null,
				},
			],
			lineups: [
				{
					team: {
						id: 849,
						name: 'Shijiazhuang Y. J.',
						logo: 'https://media-1.api-sports.io/football/teams/849.png',
						colors: {
							player: {
								primary: '3300ff',
								number: 'ffffff',
								border: '3300ff',
							},
							goalkeeper: {
								primary: '339900',
								number: '000000',
								border: '339900',
							},
						},
					},
					formation: '5-4-1',
					startXI: [
						{
							player: {
								id: 12408,
								name: 'Puliang Shao',
								number: 14,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 12416,
								name: 'Piao Shihao',
								number: 17,
								pos: 'D',
								grid: '2:5',
							},
						},
						{
							player: {
								id: 80920,
								name: 'Chen Zhongliu',
								number: 31,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 12436,
								name: 'Yang Yiming',
								number: 23,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 12882,
								name: 'Peng Wang',
								number: 35,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 126002,
								name: 'Zihao Yan',
								number: 5,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 12786,
								name: 'Fuyu Ma',
								number: 27,
								pos: 'M',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 12847,
								name: 'Hao Guo',
								number: 22,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 56085,
								name: 'Georgy Zhukov',
								number: 40,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 271715,
								name: 'Deabeas Owusu-Sekyere',
								number: 44,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 47234,
								name: 'José Kanté',
								number: 45,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 368494,
								name: 'Jianxiang Sun',
								number: 1,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 79010,
								name: 'Hong Li',
								number: 18,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 80922,
								name: 'Haiqing Cao',
								number: 3,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 45530,
								name: 'Yue Zhang',
								number: 25,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 266516,
								name: 'Guo Yunqi',
								number: 26,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12629,
								name: 'Sabit Abdusalam',
								number: 15,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12424,
								name: 'Xinyu Liu',
								number: 20,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12785,
								name: 'Luo Jing',
								number: 12,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12694,
								name: 'Chuangyi Lin',
								number: 8,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 12733,
								name: 'Bughrahan Iskandar',
								number: 11,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 368495,
								name: 'Youzu He',
								number: 24,
								pos: 'F',
								grid: null,
							},
						},
					],
					coach: {
						id: 1715,
						name: 'S. Šapurić',
						photo: 'https://media-4.api-sports.io/football/coachs/1715.png',
					},
				},
				{
					team: {
						id: 840,
						name: 'Henan Jianye',
						logo: 'https://media-5.api-sports.io/football/teams/840.png',
						colors: {
							player: {
								primary: 'd90000',
								number: 'ffffff',
								border: 'd90000',
							},
							goalkeeper: {
								primary: '00ff00',
								number: '000000',
								border: '00ff00',
							},
						},
					},
					formation: '5-4-1',
					startXI: [
						{
							player: {
								id: 12890,
								name: 'Gouming Wang',
								number: 19,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 12721,
								name: 'Boxuan Feng',
								number: 20,
								pos: 'D',
								grid: '2:5',
							},
						},
						{
							player: {
								id: 13104,
								name: 'Xin Luo',
								number: 4,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 12893,
								name: 'Cao Gu',
								number: 5,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 12812,
								name: 'Shuai Yang',
								number: 3,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 368497,
								name: 'Yixin Liu',
								number: 2,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 12910,
								name: 'Shangyuan Wang',
								number: 6,
								pos: 'M',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 321979,
								name: 'Wang Haoran',
								number: 22,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 12908,
								name: 'Xingyu Ma',
								number: 28,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 12818,
								name: 'Adrian Mierzejewski',
								number: 10,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 12731,
								name: 'Yihao Zhong',
								number: 29,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 266708,
								name: 'Shi Chenglong',
								number: 1,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 311703,
								name: 'Shilong Xu',
								number: 34,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 12527,
								name: 'Xiaotian Shi',
								number: 24,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 12913,
								name: 'Jinbao Zhong',
								number: 30,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 311704,
								name: 'Liu Jiahui',
								number: 26,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 266710,
								name: 'Chen Keqiang',
								number: 21,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 311705,
								name: 'Du Zhixuan',
								number: 15,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 322064,
								name: 'Zheng Junwei',
								number: 37,
								pos: 'F',
								grid: null,
							},
						},
					],
					coach: {
						id: 13083,
						name: 'Javier Pereira',
						photo: 'https://media-5.api-sports.io/football/coachs/13083.png',
					},
				},
			],
			statistics: [
				{
					team: {
						id: 849,
						name: 'Shijiazhuang Y. J.',
						logo: 'https://media-1.api-sports.io/football/teams/849.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 2,
						},
						{
							type: 'Shots off Goal',
							value: 2,
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
							value: 4,
						},
						{
							type: 'Shots outsidebox',
							value: 1,
						},
						{
							type: 'Fouls',
							value: 18,
						},
						{
							type: 'Corner Kicks',
							value: 2,
						},
						{
							type: 'Offsides',
							value: 1,
						},
						{
							type: 'Ball Possession',
							value: '45%',
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
							value: 1,
						},
						{
							type: 'Total passes',
							value: 324,
						},
						{
							type: 'Passes accurate',
							value: 268,
						},
						{
							type: 'Passes %',
							value: '83%',
						},
					],
				},
				{
					team: {
						id: 840,
						name: 'Henan Jianye',
						logo: 'https://media-2.api-sports.io/football/teams/840.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 2,
						},
						{
							type: 'Shots off Goal',
							value: 3,
						},
						{
							type: 'Total Shots',
							value: 7,
						},
						{
							type: 'Blocked Shots',
							value: 2,
						},
						{
							type: 'Shots insidebox',
							value: 6,
						},
						{
							type: 'Shots outsidebox',
							value: 1,
						},
						{
							type: 'Fouls',
							value: 10,
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
							value: '55%',
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
							value: 2,
						},
						{
							type: 'Total passes',
							value: 399,
						},
						{
							type: 'Passes accurate',
							value: 345,
						},
						{
							type: 'Passes %',
							value: '86%',
						},
					],
				},
			],
			players: [
				{
					team: {
						id: 849,
						name: 'Shijiazhuang Y. J.',
						logo: 'https://media-1.api-sports.io/football/teams/849.png',
						update: '2022-12-15T12:35:13+00:00',
					},
					players: [
						{
							player: {
								id: 12408,
								name: 'Puliang Shao',
								photo:
									'https://media-1.api-sports.io/football/players/12408.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 14,
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
										saves: 1,
									},
									passes: {
										total: 15,
										key: null,
										accuracy: '9',
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
								id: 12416,
								name: 'Piao Shihao',
								photo:
									'https://media-1.api-sports.io/football/players/12416.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
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
										assists: null,
										saves: null,
									},
									passes: {
										total: 30,
										key: null,
										accuracy: '18',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 4,
									},
									duels: {
										total: 4,
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
								id: 80920,
								name: 'Chen Zhongliu',
								photo:
									'https://media-4.api-sports.io/football/players/80920.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 31,
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
										total: 44,
										key: null,
										accuracy: '35',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 1,
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
										drawn: 1,
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
								id: 12436,
								name: 'Yang Yiming',
								photo:
									'https://media-2.api-sports.io/football/players/12436.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 23,
										position: 'D',
										rating: '6.7',
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
										total: 30,
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
								id: 12882,
								name: 'Peng Wang',
								photo:
									'https://media-5.api-sports.io/football/players/12882.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 35,
										position: 'D',
										rating: '6.5',
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
										key: null,
										accuracy: '33',
									},
									tackles: {
										total: 1,
										blocks: 1,
										interceptions: null,
									},
									duels: {
										total: 5,
										won: 1,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
									},
									fouls: {
										drawn: null,
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
								id: 126002,
								name: 'Zihao Yan',
								photo:
									'https://media-2.api-sports.io/football/players/126002.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 5,
										position: 'D',
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
										total: 28,
										key: null,
										accuracy: '25',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 1,
									},
									duels: {
										total: 8,
										won: 3,
									},
									dribbles: {
										attempts: 4,
										success: 2,
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
								id: 12786,
								name: 'Fuyu Ma',
								photo:
									'https://media-2.api-sports.io/football/players/12786.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 27,
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
										total: 11,
										key: null,
										accuracy: '10',
									},
									tackles: {
										total: 4,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 6,
										won: 5,
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
								id: 12847,
								name: 'Hao Guo',
								photo:
									'https://media-5.api-sports.io/football/players/12847.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 22,
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
										total: 34,
										key: null,
										accuracy: '31',
									},
									tackles: {
										total: 1,
										blocks: 1,
										interceptions: 1,
									},
									duels: {
										total: 7,
										won: 2,
									},
									dribbles: {
										attempts: null,
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
								id: 56085,
								name: 'Georgy Zhukov',
								photo:
									'https://media-1.api-sports.io/football/players/56085.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 40,
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
										total: 39,
										key: 2,
										accuracy: '33',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: 2,
									},
									duels: {
										total: 9,
										won: 3,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: 1,
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
								id: 271715,
								name: 'Deabeas Owusu-Sekyere',
								photo:
									'https://media-1.api-sports.io/football/players/271715.png',
							},
							statistics: [
								{
									games: {
										minutes: 65,
										number: 44,
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
										total: 16,
										key: 2,
										accuracy: '12',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 10,
										won: 6,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
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
								id: 47234,
								name: 'José Kanté',
								photo:
									'https://media-4.api-sports.io/football/players/47234.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 45,
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
										total: 25,
										key: null,
										accuracy: '21',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 7,
										won: 4,
									},
									dribbles: {
										attempts: 1,
										success: 1,
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
								id: 368494,
								name: 'Jianxiang Sun',
								photo:
									'https://media-4.api-sports.io/football/players/368494.png',
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
								id: 79010,
								name: 'Hong Li',
								photo:
									'https://media-1.api-sports.io/football/players/79010.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 18,
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
								id: 80922,
								name: 'Haiqing Cao',
								photo:
									'https://media-1.api-sports.io/football/players/80922.png',
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
								id: 45530,
								name: 'Yue Zhang',
								photo:
									'https://media-5.api-sports.io/football/players/45530.png',
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
								id: 266516,
								name: 'Guo Yunqi',
								photo:
									'https://media-2.api-sports.io/football/players/266516.png',
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
								id: 12629,
								name: 'Sabit Abdusalam',
								photo:
									'https://media-4.api-sports.io/football/players/12629.png',
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
								id: 12424,
								name: 'Xinyu Liu',
								photo:
									'https://media-2.api-sports.io/football/players/12424.png',
							},
							statistics: [
								{
									games: {
										minutes: 10,
										number: 20,
										position: 'M',
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
								id: 12785,
								name: 'Luo Jing',
								photo:
									'https://media-4.api-sports.io/football/players/12785.png',
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
								id: 12694,
								name: 'Chuangyi Lin',
								photo:
									'https://media-2.api-sports.io/football/players/12694.png',
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
								id: 12733,
								name: 'Bughrahan Iskandar',
								photo:
									'https://media-2.api-sports.io/football/players/12733.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 11,
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
								id: 368495,
								name: 'Youzu He',
								photo:
									'https://media-2.api-sports.io/football/players/368495.png',
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
						id: 840,
						name: 'Henan Jianye',
						logo: 'https://media-1.api-sports.io/football/teams/840.png',
						update: '2022-12-15T12:35:13+00:00',
					},
					players: [
						{
							player: {
								id: 12890,
								name: 'Gouming Wang',
								photo:
									'https://media-1.api-sports.io/football/players/12890.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 19,
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
										conceded: 0,
										assists: null,
										saves: 2,
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
								id: 12721,
								name: 'Boxuan Feng',
								photo:
									'https://media-4.api-sports.io/football/players/12721.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
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
										total: 21,
										key: 1,
										accuracy: '20',
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
								id: 13104,
								name: 'Xin Luo',
								photo:
									'https://media-5.api-sports.io/football/players/13104.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 4,
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
										total: 52,
										key: null,
										accuracy: '46',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 5,
										won: 1,
									},
									dribbles: {
										attempts: null,
										success: null,
										past: null,
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
								id: 12893,
								name: 'Cao Gu',
								photo:
									'https://media-5.api-sports.io/football/players/12893.png',
							},
							statistics: [
								{
									games: {
										minutes: 45,
										number: 5,
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
										total: 32,
										key: null,
										accuracy: '29',
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
								id: 12812,
								name: 'Shuai Yang',
								photo:
									'https://media-1.api-sports.io/football/players/12812.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
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
										total: 55,
										key: 1,
										accuracy: '43',
									},
									tackles: {
										total: null,
										blocks: 1,
										interceptions: 3,
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
								id: 368497,
								name: 'Yixin Liu',
								photo:
									'https://media-2.api-sports.io/football/players/368497.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 2,
										position: 'D',
										rating: '6.3',
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
										total: 26,
										key: null,
										accuracy: '21',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 8,
										won: 2,
									},
									dribbles: {
										attempts: 2,
										success: null,
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
								id: 12910,
								name: 'Shangyuan Wang',
								photo:
									'https://media-5.api-sports.io/football/players/12910.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 6,
										position: 'M',
										rating: '7.2',
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
										total: 36,
										key: 2,
										accuracy: '31',
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
										scored: 1,
										missed: 0,
										saved: null,
									},
								},
							],
						},
						{
							player: {
								id: 321979,
								name: 'Wang Haoran',
								photo:
									'https://media-5.api-sports.io/football/players/321979.png',
							},
							statistics: [
								{
									games: {
										minutes: 45,
										number: 22,
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
										total: 20,
										key: null,
										accuracy: '19',
									},
									tackles: {
										total: 1,
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
								id: 12908,
								name: 'Xingyu Ma',
								photo:
									'https://media-5.api-sports.io/football/players/12908.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 28,
										position: 'M',
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
										total: 48,
										key: null,
										accuracy: '43',
									},
									tackles: {
										total: 1,
										blocks: null,
										interceptions: 4,
									},
									duels: {
										total: 8,
										won: 1,
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
								id: 12818,
								name: 'Adrian Mierzejewski',
								photo:
									'https://media-1.api-sports.io/football/players/12818.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
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
										total: 39,
										key: null,
										accuracy: '32',
									},
									tackles: {
										total: 2,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 10,
										won: 7,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: null,
									},
									fouls: {
										drawn: 4,
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
								id: 12731,
								name: 'Yihao Zhong',
								photo:
									'https://media-2.api-sports.io/football/players/12731.png',
							},
							statistics: [
								{
									games: {
										minutes: 75,
										number: 29,
										position: 'F',
										rating: '7.3',
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
										key: 1,
										accuracy: '30',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 13,
										won: 9,
									},
									dribbles: {
										attempts: 1,
										success: 1,
										past: 1,
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
								id: 266708,
								name: 'Shi Chenglong',
								photo:
									'https://media-4.api-sports.io/football/players/266708.png',
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
								id: 311703,
								name: 'Shilong Xu',
								photo:
									'https://media-1.api-sports.io/football/players/311703.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 34,
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
								id: 12527,
								name: 'Xiaotian Shi',
								photo:
									'https://media-4.api-sports.io/football/players/12527.png',
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
								id: 12913,
								name: 'Jinbao Zhong',
								photo:
									'https://media-5.api-sports.io/football/players/12913.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 30,
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
								id: 311704,
								name: 'Liu Jiahui',
								photo:
									'https://media-5.api-sports.io/football/players/311704.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 26,
										position: 'D',
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
										total: 12,
										key: null,
										accuracy: '12',
									},
									tackles: {
										total: 2,
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
								id: 266710,
								name: 'Chen Keqiang',
								photo:
									'https://media-1.api-sports.io/football/players/266710.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 21,
										position: 'F',
										rating: '6.7',
										captain: false,
										substitute: true,
									},
									offsides: null,
									shots: {
										total: 3,
										on: 1,
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
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 3,
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
								id: 311705,
								name: 'Du Zhixuan',
								photo:
									'https://media-1.api-sports.io/football/players/311705.png',
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
								id: 322064,
								name: 'Zheng Junwei',
								photo:
									'https://media-4.api-sports.io/football/players/322064.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 37,
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
