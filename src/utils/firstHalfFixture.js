export const firstHalfFixture = {
	get: 'fixtures',
	parameters: {
		id: '926924',
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
				id: 926924,
				referee: 'Gao Peng, China',
				timezone: 'Europe/Warsaw',
				date: '2022-12-15T13:00:00+01:00',
				timestamp: 1671105600,
				periods: {
					first: 1671105600,
					second: null,
				},
				venue: {
					id: null,
					name: 'Langfang Stadium',
					city: 'Langfang',
				},
				status: {
					long: 'First Half',
					short: '1H',
					elapsed: 33,
				},
			},
			league: {
				id: 169,
				name: 'Super League',
				country: 'China',
				logo: 'https://media-2.api-sports.io/football/leagues/169.png',
				flag: 'https://media-2.api-sports.io/flags/cn.svg',
				season: 2022,
				round: 'Regular Season - 31',
			},
			teams: {
				home: {
					id: 839,
					name: 'Hebei Zhongji',
					logo: 'https://media-2.api-sports.io/football/teams/839.png',
					winner: null,
				},
				away: {
					id: 1433,
					name: 'Shenzhen Ruby FC',
					logo: 'https://media-5.api-sports.io/football/teams/1433.png',
					winner: null,
				},
			},
			goals: {
				home: 0,
				away: 0,
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
			events: [],
			lineups: [
				{
					team: {
						id: 839,
						name: 'Hebei Zhongji',
						logo: 'https://media-2.api-sports.io/football/teams/839.png',
						colors: {
							player: {
								primary: 'ff0000',
								number: 'ffff00',
								border: 'ff0000',
							},
							goalkeeper: {
								primary: '33ff00',
								number: '000000',
								border: '33ff00',
							},
						},
					},
					formation: '4-1-4-1',
					startXI: [
						{
							player: {
								id: 289064,
								name: 'Pang Jiajun',
								number: 34,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 127597,
								name: 'Jing Liu',
								number: 16,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 378935,
								name: 'Haodong Luan',
								number: 3,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 13076,
								name: 'Junzhe Zhang',
								number: 6,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 322065,
								name: 'Song Xintao',
								number: 17,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 133937,
								name: 'Yu Zhang',
								number: 24,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 12517,
								name: 'Xuchen Yao',
								number: 11,
								pos: 'M',
								grid: '4:4',
							},
						},
						{
							player: {
								id: 368486,
								name: 'Gao Yunan',
								number: 42,
								pos: 'M',
								grid: '4:3',
							},
						},
						{
							player: {
								id: 378934,
								name: 'Wei Yuren',
								number: 19,
								pos: 'M',
								grid: '4:2',
							},
						},
						{
							player: {
								id: 266513,
								name: 'Liao Wei',
								number: 25,
								pos: 'M',
								grid: '4:1',
							},
						},
						{
							player: {
								id: 13091,
								name: 'Huaze  Gao',
								number: 20,
								pos: 'F',
								grid: '5:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 311734,
								name: 'Guo Hanru',
								number: 18,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 368481,
								name: 'Liu Runnan',
								number: 43,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 368484,
								name: 'Yang Chenyu',
								number: 29,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 12933,
								name: 'Haifeng Ding',
								number: 32,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 311735,
								name: 'Chen Yunhha',
								number: 14,
								pos: 'D',
								grid: null,
							},
						},
						{
							player: {
								id: 368492,
								name: 'Zhao Ziye',
								number: 45,
								pos: 'F',
								grid: null,
							},
						},
						{
							player: {
								id: 379880,
								name: 'Huang Yonghai',
								number: 26,
								pos: 'F',
								grid: null,
							},
						},
					],
					coach: {
						id: 2785,
						name: 'Kim Jong-Boo',
						photo: 'https://media-1.api-sports.io/football/coachs/2785.png',
					},
				},
				{
					team: {
						id: 1433,
						name: 'Shenzhen Ruby FC',
						logo: 'https://media-1.api-sports.io/football/teams/1433.png',
						colors: {
							player: {
								primary: 'f15812',
								number: 'ffffff',
								border: 'f15812',
							},
							goalkeeper: {
								primary: 'ffff00',
								number: '000000',
								border: 'ffff00',
							},
						},
					},
					formation: '4-5-1',
					startXI: [
						{
							player: {
								id: 13035,
								name: 'Chunyu Dong',
								number: 24,
								pos: 'G',
								grid: '1:1',
							},
						},
						{
							player: {
								id: 266506,
								name: 'Xu Haofeng',
								number: 13,
								pos: 'D',
								grid: '2:4',
							},
						},
						{
							player: {
								id: 12813,
								name: 'Mincheng Yuan',
								number: 26,
								pos: 'D',
								grid: '2:3',
							},
						},
						{
							player: {
								id: 378936,
								name: 'Wentao Lu',
								number: 35,
								pos: 'D',
								grid: '2:2',
							},
						},
						{
							player: {
								id: 80834,
								name: 'Haolun Mi',
								number: 25,
								pos: 'D',
								grid: '2:1',
							},
						},
						{
							player: {
								id: 289031,
								name: 'Chen Xiangyu',
								number: 18,
								pos: 'M',
								grid: '3:5',
							},
						},
						{
							player: {
								id: 12607,
								name: 'Yue Xu',
								number: 19,
								pos: 'M',
								grid: '3:4',
							},
						},
						{
							player: {
								id: 12877,
								name: 'Qiang Jin',
								number: 3,
								pos: 'M',
								grid: '3:3',
							},
						},
						{
							player: {
								id: 126010,
								name: 'Huang Ruifeng',
								number: 30,
								pos: 'M',
								grid: '3:2',
							},
						},
						{
							player: {
								id: 80835,
								name: 'Dalun Zheng',
								number: 16,
								pos: 'M',
								grid: '3:1',
							},
						},
						{
							player: {
								id: 368471,
								name: 'Du Yuezheng',
								number: 33,
								pos: 'F',
								grid: '4:1',
							},
						},
					],
					substitutes: [
						{
							player: {
								id: 311707,
								name: 'Wei Minzhe',
								number: 31,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 368470,
								name: 'Jiabao Ji',
								number: 32,
								pos: 'G',
								grid: null,
							},
						},
						{
							player: {
								id: 386754,
								name: 'Shahsat Hujahmat',
								number: 34,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 366280,
								name: 'Wu Xingyu',
								number: 23,
								pos: 'M',
								grid: null,
							},
						},
						{
							player: {
								id: 80871,
								name: 'Ke Sun',
								number: 38,
								pos: 'M',
								grid: null,
							},
						},
					],
					coach: {
						id: 12238,
						name: 'Zhang Xiaorui',
						photo: 'https://media-2.api-sports.io/football/coachs/12238.png',
					},
				},
			],
			statistics: [
				{
					team: {
						id: 839,
						name: 'Hebei Zhongji',
						logo: 'https://media-5.api-sports.io/football/teams/839.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: null,
						},
						{
							type: 'Shots off Goal',
							value: null,
						},
						{
							type: 'Total Shots',
							value: null,
						},
						{
							type: 'Blocked Shots',
							value: null,
						},
						{
							type: 'Shots insidebox',
							value: null,
						},
						{
							type: 'Shots outsidebox',
							value: null,
						},
						{
							type: 'Fouls',
							value: 5,
						},
						{
							type: 'Corner Kicks',
							value: null,
						},
						{
							type: 'Offsides',
							value: 1,
						},
						{
							type: 'Ball Possession',
							value: '42%',
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
							value: 1,
						},
						{
							type: 'Total passes',
							value: 146,
						},
						{
							type: 'Passes accurate',
							value: 120,
						},
						{
							type: 'Passes %',
							value: '82%',
						},
					],
				},
				{
					team: {
						id: 1433,
						name: 'Shenzhen Ruby FC',
						logo: 'https://media-1.api-sports.io/football/teams/1433.png',
					},
					statistics: [
						{
							type: 'Shots on Goal',
							value: 1,
						},
						{
							type: 'Shots off Goal',
							value: 1,
						},
						{
							type: 'Total Shots',
							value: 3,
						},
						{
							type: 'Blocked Shots',
							value: 1,
						},
						{
							type: 'Shots insidebox',
							value: 1,
						},
						{
							type: 'Shots outsidebox',
							value: 2,
						},
						{
							type: 'Fouls',
							value: 5,
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
							value: '58%',
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
							value: null,
						},
						{
							type: 'Total passes',
							value: 195,
						},
						{
							type: 'Passes accurate',
							value: 170,
						},
						{
							type: 'Passes %',
							value: '87%',
						},
					],
				},
			],
			players: [
				{
					team: {
						id: 839,
						name: 'Hebei Zhongji',
						logo: 'https://media-5.api-sports.io/football/teams/839.png',
						update: '2022-12-15T12:32:05+00:00',
					},
					players: [
						{
							player: {
								id: 289064,
								name: 'Pang Jiajun',
								photo:
									'https://media-5.api-sports.io/football/players/289064.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 34,
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
										conceded: 0,
										assists: null,
										saves: 1,
									},
									passes: {
										total: 6,
										key: null,
										accuracy: '5',
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
								id: 127597,
								name: 'Jing Liu',
								photo:
									'https://media-4.api-sports.io/football/players/127597.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 16,
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
										total: 11,
										key: null,
										accuracy: '8',
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
								id: 378935,
								name: 'Haodong Luan',
								photo:
									'https://media-1.api-sports.io/football/players/378935.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
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
										total: 25,
										key: null,
										accuracy: '23',
									},
									tackles: {
										total: null,
										blocks: 1,
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
						{
							player: {
								id: 13076,
								name: 'Junzhe Zhang',
								photo:
									'https://media-1.api-sports.io/football/players/13076.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 6,
										position: 'D',
										rating: '6.9',
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
										total: 24,
										key: null,
										accuracy: '21',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 2,
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
								id: 322065,
								name: 'Song Xintao',
								photo:
									'https://media-5.api-sports.io/football/players/322065.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 17,
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
										total: 19,
										key: null,
										accuracy: '15',
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
										past: 2,
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
								id: 133937,
								name: 'Yu Zhang',
								photo:
									'https://media-2.api-sports.io/football/players/133937.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 24,
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
										total: 16,
										key: null,
										accuracy: '13',
									},
									tackles: {
										total: 3,
										blocks: null,
										interceptions: 1,
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
								id: 12517,
								name: 'Xuchen Yao',
								photo:
									'https://media-5.api-sports.io/football/players/12517.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
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
										total: 3,
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
										won: 2,
									},
									dribbles: {
										attempts: 2,
										success: 2,
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
								id: 368486,
								name: 'Gao Yunan',
								photo:
									'https://media-2.api-sports.io/football/players/368486.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 42,
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
										total: 16,
										key: null,
										accuracy: '12',
									},
									tackles: {
										total: null,
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
								id: 378934,
								name: 'Wei Yuren',
								photo:
									'https://media-1.api-sports.io/football/players/378934.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 19,
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
										total: 12,
										key: null,
										accuracy: '10',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: 2,
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
								id: 266513,
								name: 'Liao Wei',
								photo:
									'https://media-1.api-sports.io/football/players/266513.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 25,
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
										total: 11,
										key: null,
										accuracy: '9',
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
								id: 13091,
								name: 'Huaze  Gao',
								photo:
									'https://media-2.api-sports.io/football/players/13091.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 20,
										position: 'F',
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
										total: 3,
										key: null,
										accuracy: '1',
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
								id: 311734,
								name: 'Guo Hanru',
								photo:
									'https://media-5.api-sports.io/football/players/311734.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 18,
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
								id: 368481,
								name: 'Liu Runnan',
								photo:
									'https://media-5.api-sports.io/football/players/368481.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 43,
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
								id: 368484,
								name: 'Yang Chenyu',
								photo:
									'https://media-1.api-sports.io/football/players/368484.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 29,
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
								id: 12933,
								name: 'Haifeng Ding',
								photo:
									'https://media-5.api-sports.io/football/players/12933.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 32,
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
								id: 311735,
								name: 'Chen Yunhha',
								photo:
									'https://media-1.api-sports.io/football/players/311735.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 14,
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
								id: 368492,
								name: 'Zhao Ziye',
								photo:
									'https://media-4.api-sports.io/football/players/368492.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 45,
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
								id: 379880,
								name: 'Huang Yonghai',
								photo:
									'https://media-1.api-sports.io/football/players/379880.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 26,
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
						id: 1433,
						name: 'Shenzhen Ruby FC',
						logo: 'https://media-5.api-sports.io/football/teams/1433.png',
						update: '2022-12-15T12:32:05+00:00',
					},
					players: [
						{
							player: {
								id: 13035,
								name: 'Chunyu Dong',
								photo:
									'https://media-2.api-sports.io/football/players/13035.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 24,
										position: 'G',
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
										total: 9,
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
								id: 266506,
								name: 'Xu Haofeng',
								photo:
									'https://media-4.api-sports.io/football/players/266506.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 13,
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
										total: 20,
										key: null,
										accuracy: '18',
									},
									tackles: {
										total: null,
										blocks: null,
										interceptions: null,
									},
									duels: {
										total: 5,
										won: 3,
									},
									dribbles: {
										attempts: 1,
										success: 1,
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
								id: 12813,
								name: 'Mincheng Yuan',
								photo:
									'https://media-2.api-sports.io/football/players/12813.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 26,
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
										accuracy: '28',
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
						{
							player: {
								id: 378936,
								name: 'Wentao Lu',
								photo:
									'https://media-5.api-sports.io/football/players/378936.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 35,
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
										total: 22,
										key: null,
										accuracy: '20',
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
								id: 80834,
								name: 'Haolun Mi',
								photo:
									'https://media-5.api-sports.io/football/players/80834.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 25,
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
										total: 23,
										key: null,
										accuracy: '18',
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
								id: 289031,
								name: 'Chen Xiangyu',
								photo:
									'https://media-5.api-sports.io/football/players/289031.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 18,
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
										total: 7,
										key: null,
										accuracy: '2',
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
								id: 12607,
								name: 'Yue Xu',
								photo:
									'https://media-1.api-sports.io/football/players/12607.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 19,
										position: 'M',
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
										total: 20,
										key: 1,
										accuracy: '18',
									},
									tackles: {
										total: 1,
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
								id: 12877,
								name: 'Qiang Jin',
								photo:
									'https://media-4.api-sports.io/football/players/12877.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 3,
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
										total: 28,
										key: null,
										accuracy: '25',
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
								id: 126010,
								name: 'Huang Ruifeng',
								photo:
									'https://media-5.api-sports.io/football/players/126010.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 30,
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
										total: 15,
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
								id: 80835,
								name: 'Dalun Zheng',
								photo:
									'https://media-4.api-sports.io/football/players/80835.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 16,
										position: 'M',
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
										total: 17,
										key: null,
										accuracy: '15',
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
								id: 368471,
								name: 'Du Yuezheng',
								photo:
									'https://media-4.api-sports.io/football/players/368471.png',
							},
							statistics: [
								{
									games: {
										minutes: 30,
										number: 33,
										position: 'F',
										rating: '6.7',
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
										total: 2,
										key: 1,
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
								id: 311707,
								name: 'Wei Minzhe',
								photo:
									'https://media-2.api-sports.io/football/players/311707.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 31,
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
								id: 368470,
								name: 'Jiabao Ji',
								photo:
									'https://media-1.api-sports.io/football/players/368470.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 32,
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
								id: 386754,
								name: 'Shahsat Hujahmat',
								photo:
									'https://media-4.api-sports.io/football/players/386754.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 34,
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
								id: 366280,
								name: 'Wu Xingyu',
								photo:
									'https://media-4.api-sports.io/football/players/366280.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 23,
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
								id: 80871,
								name: 'Ke Sun',
								photo:
									'https://media-2.api-sports.io/football/players/80871.png',
							},
							statistics: [
								{
									games: {
										minutes: null,
										number: 38,
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
			],
		},
	],
};
