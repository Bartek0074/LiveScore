export const fixtures3 = {
	get: 'fixtures',
	parameters: {
		league: '2',
		season: '2021',
	},
	errors: [],
	results: 218,
	paging: {
		current: 1,
		total: 1,
	},
	response: [
		{
			fixture: {
				id: 707026,
				referee: 'J. Hyytiä',
				timezone: 'UTC',
				date: '2021-06-22T18:00:00+00:00',
				timestamp: 1624384800,
				periods: {
					first: 1624384800,
					second: 1624388400,
				},
				venue: {
					id: 2,
					name: 'Elbasan Arena',
					city: 'Elbasan',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Preliminary round',
			},
			teams: {
				home: {
					id: 672,
					name: 'Folgore',
					logo: 'https://media-6.api-sports.io/football/teams/672.png',
					winner: false,
				},
				away: {
					id: 680,
					name: 'Prishtina',
					logo: 'https://media-6.api-sports.io/football/teams/680.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 707027,
				referee: 'J. Jaanovits',
				timezone: 'UTC',
				date: '2021-06-22T18:00:00+00:00',
				timestamp: 1624384800,
				periods: {
					first: 1624384800,
					second: 1624388400,
				},
				venue: {
					id: 2159,
					name: 'Stadiumi Niko Dovana',
					city: 'Durrës',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Preliminary round',
			},
			teams: {
				home: {
					id: 4133,
					name: 'HB',
					logo: 'https://media-6.api-sports.io/football/teams/4133.png',
					winner: false,
				},
				away: {
					id: 3342,
					name: "Inter Club d'Escaldes",
					logo: 'https://media-5.api-sports.io/football/teams/3342.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 708773,
				referee: 'S. Schärer',
				timezone: 'UTC',
				date: '2021-07-20T18:45:00+00:00',
				timestamp: 1626806700,
				periods: {
					first: 1626806700,
					second: 1626810300,
				},
				venue: {
					id: 1386,
					name: 'Celtic Park',
					city: 'Glasgow',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 247,
					name: 'Celtic',
					logo: 'https://media-1.api-sports.io/football/teams/247.png',
					winner: null,
				},
				away: {
					id: 397,
					name: 'FC Midtjylland',
					logo: 'https://media-6.api-sports.io/football/teams/397.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 708774,
				referee: 'B. Frankowski',
				timezone: 'UTC',
				date: '2021-07-28T17:45:00+00:00',
				timestamp: 1627494300,
				periods: {
					first: 1627494300,
					second: 1627497900,
				},
				venue: {
					id: 453,
					name: 'MCH Arena',
					city: 'Herning',
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
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 397,
					name: 'FC Midtjylland',
					logo: 'https://media-1.api-sports.io/football/teams/397.png',
					winner: true,
				},
				away: {
					id: 247,
					name: 'Celtic',
					logo: 'https://media-5.api-sports.io/football/teams/247.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
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
					home: 1,
					away: 0,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 708775,
				referee: 'S. Gözübüyük',
				timezone: 'UTC',
				date: '2021-07-20T18:30:00+00:00',
				timestamp: 1626805800,
				periods: {
					first: 1626805800,
					second: 1626809400,
				},
				venue: {
					id: 145,
					name: 'Allianz Stadion',
					city: 'Wien',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 781,
					name: 'Rapid Vienna',
					logo: 'https://media-6.api-sports.io/football/teams/781.png',
					winner: true,
				},
				away: {
					id: 628,
					name: 'Sparta Praha',
					logo: 'https://media-1.api-sports.io/football/teams/628.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
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
		},
		{
			fixture: {
				id: 708776,
				referee: 'B. Madden',
				timezone: 'UTC',
				date: '2021-07-28T18:30:00+00:00',
				timestamp: 1627497000,
				periods: {
					first: 1627497000,
					second: 1627500600,
				},
				venue: {
					id: 11601,
					name: 'Generali Česká pojišťovna Arena',
					city: 'Praha',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 628,
					name: 'Sparta Praha',
					logo: 'https://media-6.api-sports.io/football/teams/628.png',
					winner: true,
				},
				away: {
					id: 781,
					name: 'Rapid Vienna',
					logo: 'https://media-4.api-sports.io/football/teams/781.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 708777,
				referee: 'Alejandro Hernández',
				timezone: 'UTC',
				date: '2021-07-21T19:00:00+00:00',
				timestamp: 1626894000,
				periods: {
					first: 1626894000,
					second: 1626897600,
				},
				venue: {
					id: 1143,
					name: 'Philips Stadion',
					city: 'Eindhoven',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 197,
					name: 'PSV Eindhoven',
					logo: 'https://media-6.api-sports.io/football/teams/197.png',
					winner: true,
				},
				away: {
					id: 645,
					name: 'Galatasaray',
					logo: 'https://media-4.api-sports.io/football/teams/645.png',
					winner: false,
				},
			},
			goals: {
				home: 5,
				away: 1,
			},
			score: {
				halftime: {
					home: 2,
					away: 1,
				},
				fulltime: {
					home: 5,
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
		},
		{
			fixture: {
				id: 708778,
				referee: 'M. Irrati',
				timezone: 'UTC',
				date: '2021-07-28T18:00:00+00:00',
				timestamp: 1627495200,
				periods: {
					first: 1627495200,
					second: 1627498800,
				},
				venue: {
					id: 1584,
					name: 'Başakşehir Fatih Terim Stadyumu',
					city: 'İstanbul',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 645,
					name: 'Galatasaray',
					logo: 'https://media-1.api-sports.io/football/teams/645.png',
					winner: false,
				},
				away: {
					id: 197,
					name: 'PSV Eindhoven',
					logo: 'https://media-2.api-sports.io/football/teams/197.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 708779,
				referee: 'S. Gishamer',
				timezone: 'UTC',
				date: '2021-07-07T16:30:00+00:00',
				timestamp: 1625675400,
				periods: {
					first: 1625675400,
					second: 1625679000,
				},
				venue: {
					id: 11914,
					name: 'Štadión Tehelné pole',
					city: 'Bratislava',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 656,
					name: 'Slovan Bratislava',
					logo: 'https://media-2.api-sports.io/football/teams/656.png',
					winner: true,
				},
				away: {
					id: 652,
					name: 'Shamrock Rovers',
					logo: 'https://media-1.api-sports.io/football/teams/652.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 708780,
				referee: 'M. Zebec',
				timezone: 'UTC',
				date: '2021-07-13T19:00:00+00:00',
				timestamp: 1626202800,
				periods: {
					first: 1626202800,
					second: 1626206400,
				},
				venue: {
					id: 865,
					name: 'Tallaght Stadium',
					city: 'Dublin',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 652,
					name: 'Shamrock Rovers',
					logo: 'https://media-2.api-sports.io/football/teams/652.png',
					winner: true,
				},
				away: {
					id: 656,
					name: 'Slovan Bratislava',
					logo: 'https://media-2.api-sports.io/football/teams/656.png',
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
		},
		{
			fixture: {
				id: 708781,
				referee: 'K. Hämäläinen',
				timezone: 'UTC',
				date: '2021-07-07T17:00:00+00:00',
				timestamp: 1625677200,
				periods: {
					first: 1625677200,
					second: 1625680800,
				},
				venue: {
					id: 7998,
					name: 'Malmö Stadion',
					city: 'Malmö',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-4.api-sports.io/football/teams/375.png',
					winner: true,
				},
				away: {
					id: 10124,
					name: 'Riga',
					logo: 'https://media-4.api-sports.io/football/teams/10124.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 708782,
				referee: 'G. Bogár',
				timezone: 'UTC',
				date: '2021-07-13T16:00:00+00:00',
				timestamp: 1626192000,
				periods: {
					first: 1626192000,
					second: 1626195600,
				},
				venue: {
					id: null,
					name: 'Stadions Skonto',
					city: 'Riga',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 10124,
					name: 'Riga',
					logo: 'https://media-1.api-sports.io/football/teams/10124.png',
					winner: null,
				},
				away: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-4.api-sports.io/football/teams/375.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 708783,
				referee: 'J. Xhaja',
				timezone: 'UTC',
				date: '2021-07-07T16:00:00+00:00',
				timestamp: 1625673600,
				periods: {
					first: 1625673600,
					second: 1625677200,
				},
				venue: {
					id: 1175,
					name: 'Aspmyra Stadion',
					city: 'Bodø',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 327,
					name: 'Bodo/Glimt',
					logo: 'https://media-6.api-sports.io/football/teams/327.png',
					winner: false,
				},
				away: {
					id: 339,
					name: 'Legia Warszawa',
					logo: 'https://media-4.api-sports.io/football/teams/339.png',
					winner: true,
				},
			},
			goals: {
				home: 2,
				away: 3,
			},
			score: {
				halftime: {
					home: 1,
					away: 2,
				},
				fulltime: {
					home: 2,
					away: 3,
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
		},
		{
			fixture: {
				id: 708784,
				referee: 'A. Diamantopoulos',
				timezone: 'UTC',
				date: '2021-07-14T18:00:00+00:00',
				timestamp: 1626285600,
				periods: {
					first: 1626285600,
					second: 1626289200,
				},
				venue: {
					id: 1253,
					name: 'Stadion Miejski Legii Warszawa im. Marszałka Józefa Piłsudskiego',
					city: 'Warszawa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 339,
					name: 'Legia Warszawa',
					logo: 'https://media-4.api-sports.io/football/teams/339.png',
					winner: true,
				},
				away: {
					id: 327,
					name: 'Bodo/Glimt',
					logo: 'https://media-2.api-sports.io/football/teams/327.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 708785,
				referee: 'V. Demetriou',
				timezone: 'UTC',
				date: '2021-07-07T18:00:00+00:00',
				timestamp: 1625680800,
				periods: {
					first: 1625680800,
					second: 1625684400,
				},
				venue: {
					id: 1667,
					name: 'Park Avenue',
					city: 'Aberystwyth, Ceredigion',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 357,
					name: 'GAP Connah S Quay FC',
					logo: 'https://media-2.api-sports.io/football/teams/357.png',
					winner: null,
				},
				away: {
					id: 582,
					name: 'Alashkert',
					logo: 'https://media-5.api-sports.io/football/teams/582.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 2,
				},
				fulltime: {
					home: 2,
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
		},
		{
			fixture: {
				id: 708786,
				referee: 'O. Pechanec',
				timezone: 'UTC',
				date: '2021-07-14T15:00:00+00:00',
				timestamp: 1626274800,
				periods: {
					first: 1626274800,
					second: 1626278400,
				},
				venue: {
					id: 121,
					name: 'Vazgen Sargsyan anvan Hanrapetakan Marzadasht',
					city: 'Yerevan',
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
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 582,
					name: 'Alashkert',
					logo: 'https://media-5.api-sports.io/football/teams/582.png',
					winner: true,
				},
				away: {
					id: 357,
					name: 'GAP Connah S Quay FC',
					logo: 'https://media-1.api-sports.io/football/teams/357.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 0,
					away: 0,
				},
				extratime: {
					home: 1,
					away: 0,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 708787,
				referee: 'N. Laforge',
				timezone: 'UTC',
				date: '2021-07-06T16:00:00+00:00',
				timestamp: 1625587200,
				periods: {
					first: 1625587200,
					second: 1625590800,
				},
				venue: {
					id: 615,
					name: 'Bolt Arena',
					city: 'Helsinki',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 649,
					name: 'HJK helsinki',
					logo: 'https://media-1.api-sports.io/football/teams/649.png',
					winner: true,
				},
				away: {
					id: 579,
					name: 'Buducnost Podgorica',
					logo: 'https://media-1.api-sports.io/football/teams/579.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 1,
			},
			score: {
				halftime: {
					home: 3,
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
		},
		{
			fixture: {
				id: 708788,
				referee: 'D. Draganov',
				timezone: 'UTC',
				date: '2021-07-13T18:30:00+00:00',
				timestamp: 1626201000,
				periods: {
					first: 1626201000,
					second: 1626204600,
				},
				venue: {
					id: 1095,
					name: 'Stadion Pod Goricom',
					city: 'Podgorica',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 579,
					name: 'Buducnost Podgorica',
					logo: 'https://media-1.api-sports.io/football/teams/579.png',
					winner: false,
				},
				away: {
					id: 649,
					name: 'HJK helsinki',
					logo: 'https://media-5.api-sports.io/football/teams/649.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 4,
			},
			score: {
				halftime: {
					home: 0,
					away: 3,
				},
				fulltime: {
					home: 0,
					away: 4,
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
		},
		{
			fixture: {
				id: 708789,
				referee: 'J. Kamphuis',
				timezone: 'UTC',
				date: '2021-07-06T17:00:00+00:00',
				timestamp: 1625590800,
				periods: {
					first: 1625590800,
					second: 1625594400,
				},
				venue: {
					id: 1311,
					name: 'Stadionul Dr. Constantin Rădulescu',
					city: 'Cluj-Napoca',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 2246,
					name: 'CFR 1907 Cluj',
					logo: 'https://media-5.api-sports.io/football/teams/2246.png',
					winner: true,
				},
				away: {
					id: 3364,
					name: 'Borac Banja Luka',
					logo: 'https://media-2.api-sports.io/football/teams/3364.png',
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
		},
		{
			fixture: {
				id: 708790,
				referee: 'U. Schnyder',
				timezone: 'UTC',
				date: '2021-07-13T18:00:00+00:00',
				timestamp: 1626199200,
				periods: {
					first: 1626199200,
					second: 1626202800,
				},
				venue: {
					id: 2187,
					name: 'Gradski Stadion',
					city: 'Banja Luka',
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
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 3364,
					name: 'Borac Banja Luka',
					logo: 'https://media-6.api-sports.io/football/teams/3364.png',
					winner: true,
				},
				away: {
					id: 2246,
					name: 'CFR 1907 Cluj',
					logo: 'https://media-6.api-sports.io/football/teams/2246.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
				},
				extratime: {
					home: 0,
					away: 1,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 708791,
				referee: 'António Nobre',
				timezone: 'UTC',
				date: '2021-07-06T18:00:00+00:00',
				timestamp: 1625594400,
				periods: {
					first: 1625594400,
					second: 1625598000,
				},
				venue: {
					id: 1045,
					name: 'Toše Proeski Arena',
					city: 'Skopje',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 609,
					name: 'Shkendija',
					logo: 'https://media-5.api-sports.io/football/teams/609.png',
					winner: false,
				},
				away: {
					id: 4197,
					name: 'Mura',
					logo: 'https://media-2.api-sports.io/football/teams/4197.png',
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
					away: 1,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 708792,
				referee: 'M. Bîrsan',
				timezone: 'UTC',
				date: '2021-07-13T18:00:00+00:00',
				timestamp: 1626199200,
				periods: {
					first: 1626199200,
					second: 1626202800,
				},
				venue: {
					id: 3201,
					name: 'Mestni Štadion Fazanerija',
					city: 'Murska Sobota',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 4197,
					name: 'Mura',
					logo: 'https://media-6.api-sports.io/football/teams/4197.png',
					winner: true,
				},
				away: {
					id: 609,
					name: 'Shkendija',
					logo: 'https://media-2.api-sports.io/football/teams/609.png',
					winner: false,
				},
			},
			goals: {
				home: 5,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 5,
					away: 0,
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
		},
		{
			fixture: {
				id: 708793,
				referee: 'A. Kurgkheli',
				timezone: 'UTC',
				date: '2021-07-07T17:00:00+00:00',
				timestamp: 1625677200,
				periods: {
					first: 1625677200,
					second: 1625680800,
				},
				venue: {
					id: 2159,
					name: 'Stadiumi Niko Dovana',
					city: 'Durrës',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 3320,
					name: 'Teuta Durrës',
					logo: 'https://media-5.api-sports.io/football/teams/3320.png',
					winner: false,
				},
				away: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-6.api-sports.io/football/teams/568.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 4,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 0,
					away: 4,
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
		},
		{
			fixture: {
				id: 708794,
				referee: 'M. Krogh',
				timezone: 'UTC',
				date: '2021-07-13T17:00:00+00:00',
				timestamp: 1626195600,
				periods: {
					first: 1626195600,
					second: 1626199200,
				},
				venue: {
					id: 1093,
					name: 'Bolshaya Sportivnaya Arena',
					city: 'Tiraspol',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-6.api-sports.io/football/teams/568.png',
					winner: true,
				},
				away: {
					id: 3320,
					name: 'Teuta Durrës',
					logo: 'https://media-2.api-sports.io/football/teams/3320.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 708795,
				referee: 'D. Fuxman',
				timezone: 'UTC',
				date: '2021-07-07T16:00:00+00:00',
				timestamp: 1625673600,
				periods: {
					first: 1625673600,
					second: 1625677200,
				},
				venue: {
					id: 691,
					name: 'Boris Paichadze Dinamo Arena',
					city: 'Tbilisi',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 2262,
					name: 'Dinamo Tbilisi',
					logo: 'https://media-5.api-sports.io/football/teams/2262.png',
					winner: false,
				},
				away: {
					id: 2270,
					name: 'Neftchi Baku',
					logo: 'https://media-4.api-sports.io/football/teams/2270.png',
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
		},
		{
			fixture: {
				id: 708796,
				referee: 'D. Muntean',
				timezone: 'UTC',
				date: '2021-07-14T17:00:00+00:00',
				timestamp: 1626282000,
				periods: {
					first: 1626282000,
					second: 1626285600,
				},
				venue: {
					id: null,
					name: 'Bakcell Arena',
					city: 'Baku',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 2270,
					name: 'Neftchi Baku',
					logo: 'https://media-4.api-sports.io/football/teams/2270.png',
					winner: true,
				},
				away: {
					id: 2262,
					name: 'Dinamo Tbilisi',
					logo: 'https://media-6.api-sports.io/football/teams/2262.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 708797,
				referee: 'M. Milačić',
				timezone: 'UTC',
				date: '2021-07-07T17:00:00+00:00',
				timestamp: 1625677200,
				periods: {
					first: 1625677200,
					second: 1625680800,
				},
				venue: {
					id: 868,
					name: 'Sammy Ofer Stadium',
					city: 'Haifa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 4195,
					name: 'Maccabi Haifa',
					logo: 'https://media-1.api-sports.io/football/teams/4195.png',
					winner: null,
				},
				away: {
					id: 664,
					name: 'Kairat Almaty',
					logo: 'https://media-6.api-sports.io/football/teams/664.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 708798,
				referee: 'V. Kopievskiy',
				timezone: 'UTC',
				date: '2021-07-14T14:00:00+00:00',
				timestamp: 1626271200,
				periods: {
					first: 1626271200,
					second: 1626274800,
				},
				venue: {
					id: null,
					name: 'Ortalıq Stadion',
					city: 'Almaty',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 664,
					name: 'Kairat Almaty',
					logo: 'https://media-2.api-sports.io/football/teams/664.png',
					winner: true,
				},
				away: {
					id: 4195,
					name: 'Maccabi Haifa',
					logo: 'https://media-6.api-sports.io/football/teams/4195.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 708799,
				referee: 'R. Saggi',
				timezone: 'UTC',
				date: '2021-07-07T17:00:00+00:00',
				timestamp: 1625677200,
				periods: {
					first: 1625677200,
					second: 1625680800,
				},
				venue: {
					id: 10547,
					name: 'Huvepharma Arena',
					city: 'Razgrad',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 566,
					name: 'Ludogorets',
					logo: 'https://media-4.api-sports.io/football/teams/566.png',
					winner: true,
				},
				away: {
					id: 392,
					name: 'Shakhter Soligorsk',
					logo: 'https://media-4.api-sports.io/football/teams/392.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 708800,
				referee: 'A. Kardeşler',
				timezone: 'UTC',
				date: '2021-07-13T19:30:00+00:00',
				timestamp: 1626204600,
				periods: {
					first: 1626204600,
					second: 1626208200,
				},
				venue: {
					id: 1411,
					name: 'Stadion na Banovom brdu',
					city: 'Beograd',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 392,
					name: 'Shakhter Soligorsk',
					logo: 'https://media-1.api-sports.io/football/teams/392.png',
					winner: false,
				},
				away: {
					id: 566,
					name: 'Ludogorets',
					logo: 'https://media-1.api-sports.io/football/teams/566.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 708801,
				referee: 'A. Troleis',
				timezone: 'UTC',
				date: '2021-07-06T17:00:00+00:00',
				timestamp: 1625590800,
				periods: {
					first: 1625590800,
					second: 1625594400,
				},
				venue: {
					id: 1030,
					name: 'Vilniaus LFF stadionas',
					city: 'Vilnius',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 586,
					name: 'FK Zalgiris Vilnius',
					logo: 'https://media-6.api-sports.io/football/teams/586.png',
					winner: true,
				},
				away: {
					id: 583,
					name: 'Linfield',
					logo: 'https://media-4.api-sports.io/football/teams/583.png',
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
					away: 0,
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
		},
		{
			fixture: {
				id: 708802,
				referee: 'M. De Gabriele',
				timezone: 'UTC',
				date: '2021-07-13T18:45:00+00:00',
				timestamp: 1626201900,
				periods: {
					first: 1626201900,
					second: 1626205500,
				},
				venue: {
					id: 1971,
					name: 'Windsor Park',
					city: 'Belfast',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 583,
					name: 'Linfield',
					logo: 'https://media-1.api-sports.io/football/teams/583.png',
					winner: false,
				},
				away: {
					id: 586,
					name: 'FK Zalgiris Vilnius',
					logo: 'https://media-4.api-sports.io/football/teams/586.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
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
		},
		{
			fixture: {
				id: 708803,
				referee: 'L. Lukić',
				timezone: 'UTC',
				date: '2021-07-06T16:00:00+00:00',
				timestamp: 1625587200,
				periods: {
					first: 1625587200,
					second: 1625590800,
				},
				venue: {
					id: 605,
					name: 'A. Le Coq Arena',
					city: 'Tallinn',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 687,
					name: 'Flora Tallinn',
					logo: 'https://media-5.api-sports.io/football/teams/687.png',
					winner: true,
				},
				away: {
					id: 3884,
					name: 'Hibernians',
					logo: 'https://media-6.api-sports.io/football/teams/3884.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 708804,
				referee: 'M. Lukjančukas',
				timezone: 'UTC',
				date: '2021-07-13T16:00:00+00:00',
				timestamp: 1626192000,
				periods: {
					first: 1626192000,
					second: 1626195600,
				},
				venue: {
					id: 1067,
					name: 'MFA Centenary Stadium',
					city: "Ta'Qali",
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 3884,
					name: 'Hibernians',
					logo: 'https://media-2.api-sports.io/football/teams/3884.png',
					winner: false,
				},
				away: {
					id: 687,
					name: 'Flora Tallinn',
					logo: 'https://media-6.api-sports.io/football/teams/687.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 0,
					away: 3,
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
		},
		{
			fixture: {
				id: 708805,
				referee: 'G. Nuza',
				timezone: 'UTC',
				date: '2021-07-07T17:00:00+00:00',
				timestamp: 1625677200,
				periods: {
					first: 1625677200,
					second: 1625680800,
				},
				venue: {
					id: 412,
					name: 'Stadion Maksimir',
					city: 'Zagreb',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 620,
					name: 'Dinamo Zagreb',
					logo: 'https://media-4.api-sports.io/football/teams/620.png',
					winner: true,
				},
				away: {
					id: 274,
					name: 'Valur Reykjavik',
					logo: 'https://media-1.api-sports.io/football/teams/274.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 2,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 3,
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
		},
		{
			fixture: {
				id: 708806,
				referee: 'Z. Hovhannisyan',
				timezone: 'UTC',
				date: '2021-07-13T20:00:00+00:00',
				timestamp: 1626206400,
				periods: {
					first: 1626206400,
					second: 1626210000,
				},
				venue: {
					id: 830,
					name: 'Origovöllurinn',
					city: 'Reykjavík',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 274,
					name: 'Valur Reykjavik',
					logo: 'https://media-1.api-sports.io/football/teams/274.png',
					winner: false,
				},
				away: {
					id: 620,
					name: 'Dinamo Zagreb',
					logo: 'https://media-4.api-sports.io/football/teams/620.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 708807,
				referee: 'M. Očenáš',
				timezone: 'UTC',
				date: '2021-07-06T17:30:00+00:00',
				timestamp: 1625592600,
				periods: {
					first: 1625592600,
					second: 1625596200,
				},
				venue: {
					id: null,
					name: 'Stade Émile Mayrisch',
					city: 'Esch-sur-Alzette',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 626,
					name: 'Fola Esch',
					logo: 'https://media-5.api-sports.io/football/teams/626.png',
					winner: null,
				},
				away: {
					id: 667,
					name: 'Lincoln Red Imps FC',
					logo: 'https://media-4.api-sports.io/football/teams/667.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 2,
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
		},
		{
			fixture: {
				id: 708808,
				referee: 'I. McNabb',
				timezone: 'UTC',
				date: '2021-07-13T16:00:00+00:00',
				timestamp: 1626192000,
				periods: {
					first: 1626192000,
					second: 1626195600,
				},
				venue: {
					id: 760,
					name: 'Victoria Stadium',
					city: 'Gibraltar',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 667,
					name: 'Lincoln Red Imps FC',
					logo: 'https://media-5.api-sports.io/football/teams/667.png',
					winner: true,
				},
				away: {
					id: 626,
					name: 'Fola Esch',
					logo: 'https://media-5.api-sports.io/football/teams/626.png',
					winner: false,
				},
			},
			goals: {
				home: 5,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 5,
					away: 0,
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
		},
		{
			fixture: {
				id: 715238,
				referee: 'A. Ladebäck',
				timezone: 'UTC',
				date: '2021-06-25T18:00:00+00:00',
				timestamp: 1624644000,
				periods: {
					first: 1624644000,
					second: 1624647600,
				},
				venue: {
					id: 2,
					name: 'Elbasan Arena',
					city: 'Elbasan',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 680,
					name: 'Prishtina',
					logo: 'https://media-5.api-sports.io/football/teams/680.png',
					winner: true,
				},
				away: {
					id: 3342,
					name: "Inter Club d'Escaldes",
					logo: 'https://media-5.api-sports.io/football/teams/3342.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 718246,
				referee: 'D. Munro',
				timezone: 'UTC',
				date: '2021-07-06T16:00:00+00:00',
				timestamp: 1625587200,
				periods: {
					first: 1625587200,
					second: 1625590800,
				},
				venue: {
					id: 799,
					name: 'Groupama Aréna',
					city: 'Budapest',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 651,
					name: 'Ferencvarosi TC',
					logo: 'https://media-5.api-sports.io/football/teams/651.png',
					winner: true,
				},
				away: {
					id: 680,
					name: 'Prishtina',
					logo: 'https://media-6.api-sports.io/football/teams/680.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 3,
					away: 0,
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
		},
		{
			fixture: {
				id: 718247,
				referee: 'L. Kopriwa',
				timezone: 'UTC',
				date: '2021-07-13T18:00:00+00:00',
				timestamp: 1626199200,
				periods: {
					first: 1626199200,
					second: 1626202800,
				},
				venue: {
					id: null,
					name: 'Stadiumi Fadil Vokrri',
					city: 'Pristina',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '1st Qualifying Round',
			},
			teams: {
				home: {
					id: 680,
					name: 'Prishtina',
					logo: 'https://media-6.api-sports.io/football/teams/680.png',
					winner: false,
				},
				away: {
					id: 651,
					name: 'Ferencvarosi TC',
					logo: 'https://media-6.api-sports.io/football/teams/651.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 3,
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
		},
		{
			fixture: {
				id: 727924,
				referee: 'P. Gil',
				timezone: 'UTC',
				date: '2021-07-20T18:00:00+00:00',
				timestamp: 1626804000,
				periods: {
					first: 1626804000,
					second: 1626807600,
				},
				venue: {
					id: 412,
					name: 'Stadion Maksimir',
					city: 'Zagreb',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 620,
					name: 'Dinamo Zagreb',
					logo: 'https://media-5.api-sports.io/football/teams/620.png',
					winner: true,
				},
				away: {
					id: 3402,
					name: 'Omonia Nicosia',
					logo: 'https://media-5.api-sports.io/football/teams/3402.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 727925,
				referee: 'C. Kavanagh',
				timezone: 'UTC',
				date: '2021-07-21T18:30:00+00:00',
				timestamp: 1626892200,
				periods: {
					first: 1626892200,
					second: 1626895800,
				},
				venue: {
					id: 11914,
					name: 'Štadión Tehelné pole',
					city: 'Bratislava',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 656,
					name: 'Slovan Bratislava',
					logo: 'https://media-1.api-sports.io/football/teams/656.png',
					winner: null,
				},
				away: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-1.api-sports.io/football/teams/565.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 727926,
				referee: 'I. Peljto',
				timezone: 'UTC',
				date: '2021-07-28T18:15:00+00:00',
				timestamp: 1627496100,
				periods: {
					first: 1627496100,
					second: 1627499700,
				},
				venue: {
					id: 10500,
					name: 'Stadion Wankdorf',
					city: 'Bern',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-4.api-sports.io/football/teams/565.png',
					winner: true,
				},
				away: {
					id: 656,
					name: 'Slovan Bratislava',
					logo: 'https://media-5.api-sports.io/football/teams/656.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 2,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 3,
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
		},
		{
			fixture: {
				id: 727927,
				referee: 'W. Delajod',
				timezone: 'UTC',
				date: '2021-07-20T16:00:00+00:00',
				timestamp: 1626796800,
				periods: {
					first: 1626796800,
					second: 1626800400,
				},
				venue: {
					id: 760,
					name: 'Victoria Stadium',
					city: 'Gibraltar',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 667,
					name: 'Lincoln Red Imps FC',
					logo: 'https://media-4.api-sports.io/football/teams/667.png',
					winner: false,
				},
				away: {
					id: 2246,
					name: 'CFR 1907 Cluj',
					logo: 'https://media-5.api-sports.io/football/teams/2246.png',
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
					away: 0,
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
		},
		{
			fixture: {
				id: 727928,
				referee: 'I. Frid',
				timezone: 'UTC',
				date: '2021-07-28T17:30:00+00:00',
				timestamp: 1627493400,
				periods: {
					first: 1627493400,
					second: 1627497000,
				},
				venue: {
					id: 1311,
					name: 'Stadionul Dr. Constantin Rădulescu',
					city: 'Cluj-Napoca',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 2246,
					name: 'CFR 1907 Cluj',
					logo: 'https://media-5.api-sports.io/football/teams/2246.png',
					winner: true,
				},
				away: {
					id: 667,
					name: 'Lincoln Red Imps FC',
					logo: 'https://media-4.api-sports.io/football/teams/667.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 727929,
				referee: 'M. Balakin',
				timezone: 'UTC',
				date: '2021-07-21T17:00:00+00:00',
				timestamp: 1626886800,
				periods: {
					first: 1626886800,
					second: 1626890400,
				},
				venue: {
					id: 1518,
					name: 'Eleda Stadion',
					city: 'Malmö',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-6.api-sports.io/football/teams/375.png',
					winner: true,
				},
				away: {
					id: 649,
					name: 'HJK helsinki',
					logo: 'https://media-2.api-sports.io/football/teams/649.png',
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
		},
		{
			fixture: {
				id: 727930,
				referee: 'S. Attwell',
				timezone: 'UTC',
				date: '2021-07-27T16:00:00+00:00',
				timestamp: 1627401600,
				periods: {
					first: 1627401600,
					second: 1627405200,
				},
				venue: {
					id: 615,
					name: 'Bolt Arena',
					city: 'Helsinki',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 649,
					name: 'HJK helsinki',
					logo: 'https://media-1.api-sports.io/football/teams/649.png',
					winner: null,
				},
				away: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-6.api-sports.io/football/teams/375.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 2,
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
		},
		{
			fixture: {
				id: 727931,
				referee: 'G. Kruashvili',
				timezone: 'UTC',
				date: '2021-07-20T18:00:00+00:00',
				timestamp: 1626804000,
				periods: {
					first: 1626804000,
					second: 1626807600,
				},
				venue: {
					id: 799,
					name: 'Groupama Aréna',
					city: 'Budapest',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 651,
					name: 'Ferencvarosi TC',
					logo: 'https://media-6.api-sports.io/football/teams/651.png',
					winner: true,
				},
				away: {
					id: 586,
					name: 'FK Zalgiris Vilnius',
					logo: 'https://media-4.api-sports.io/football/teams/586.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 727932,
				referee: 'E. Lambrechts',
				timezone: 'UTC',
				date: '2021-07-27T17:00:00+00:00',
				timestamp: 1627405200,
				periods: {
					first: 1627405200,
					second: 1627408800,
				},
				venue: {
					id: 1030,
					name: 'Vilniaus LFF stadionas',
					city: 'Vilnius',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 586,
					name: 'FK Zalgiris Vilnius',
					logo: 'https://media-1.api-sports.io/football/teams/586.png',
					winner: false,
				},
				away: {
					id: 651,
					name: 'Ferencvarosi TC',
					logo: 'https://media-6.api-sports.io/football/teams/651.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 1,
					away: 3,
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
		},
		{
			fixture: {
				id: 727933,
				referee: 'H. Osmers',
				timezone: 'UTC',
				date: '2021-07-21T18:00:00+00:00',
				timestamp: 1626890400,
				periods: {
					first: 1626890400,
					second: 1626894000,
				},
				venue: {
					id: 3201,
					name: 'Mestni Štadion Fazanerija',
					city: 'Murska Sobota',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 4197,
					name: 'Mura',
					logo: 'https://media-2.api-sports.io/football/teams/4197.png',
					winner: null,
				},
				away: {
					id: 566,
					name: 'Ludogorets',
					logo: 'https://media-4.api-sports.io/football/teams/566.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 727934,
				referee: 'M. Di Bello',
				timezone: 'UTC',
				date: '2021-07-28T18:00:00+00:00',
				timestamp: 1627495200,
				periods: {
					first: 1627495200,
					second: 1627498800,
				},
				venue: {
					id: 10547,
					name: 'Huvepharma Arena',
					city: 'Razgrad',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 566,
					name: 'Ludogorets',
					logo: 'https://media-6.api-sports.io/football/teams/566.png',
					winner: true,
				},
				away: {
					id: 4197,
					name: 'Mura',
					logo: 'https://media-6.api-sports.io/football/teams/4197.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 728616,
				referee: 'G. Nyberg',
				timezone: 'UTC',
				date: '2021-07-27T16:00:00+00:00',
				timestamp: 1627401600,
				periods: {
					first: 1627401600,
					second: 1627405200,
				},
				venue: {
					id: null,
					name: 'Neo GSP',
					city: 'Levkosía',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 3402,
					name: 'Omonia Nicosia',
					logo: 'https://media-1.api-sports.io/football/teams/3402.png',
					winner: false,
				},
				away: {
					id: 620,
					name: 'Dinamo Zagreb',
					logo: 'https://media-4.api-sports.io/football/teams/620.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 728617,
				referee: 'V. Meshkov',
				timezone: 'UTC',
				date: '2021-07-21T19:00:00+00:00',
				timestamp: 1626894000,
				periods: {
					first: 1626894000,
					second: 1626897600,
				},
				venue: {
					id: 1253,
					name: 'Stadion Miejski Legii Warszawa im. Marszałka Józefa Piłsudskiego',
					city: 'Warszawa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 339,
					name: 'Legia Warszawa',
					logo: 'https://media-6.api-sports.io/football/teams/339.png',
					winner: true,
				},
				away: {
					id: 687,
					name: 'Flora Tallinn',
					logo: 'https://media-4.api-sports.io/football/teams/687.png',
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
		},
		{
			fixture: {
				id: 728618,
				referee: 'A. Papapetrou',
				timezone: 'UTC',
				date: '2021-07-27T16:00:00+00:00',
				timestamp: 1627401600,
				periods: {
					first: 1627401600,
					second: 1627405200,
				},
				venue: {
					id: 605,
					name: 'A. Le Coq Arena',
					city: 'Tallinn',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 687,
					name: 'Flora Tallinn',
					logo: 'https://media-1.api-sports.io/football/teams/687.png',
					winner: false,
				},
				away: {
					id: 339,
					name: 'Legia Warszawa',
					logo: 'https://media-4.api-sports.io/football/teams/339.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 728619,
				referee: 'R. Obrenović',
				timezone: 'UTC',
				date: '2021-07-20T15:00:00+00:00',
				timestamp: 1626793200,
				periods: {
					first: 1626793200,
					second: 1626796800,
				},
				venue: {
					id: 121,
					name: 'Vazgen Sargsyan anvan Hanrapetakan Marzadasht',
					city: 'Yerevan',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 582,
					name: 'Alashkert',
					logo: 'https://media-2.api-sports.io/football/teams/582.png',
					winner: false,
				},
				away: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-6.api-sports.io/football/teams/568.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 728620,
				referee: 'B. Pandzic',
				timezone: 'UTC',
				date: '2021-07-28T17:00:00+00:00',
				timestamp: 1627491600,
				periods: {
					first: 1627491600,
					second: 1627495200,
				},
				venue: {
					id: null,
					name: 'Malaya Sportivnaya Arena',
					city: 'Tiraspol',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-1.api-sports.io/football/teams/568.png',
					winner: true,
				},
				away: {
					id: 582,
					name: 'Alashkert',
					logo: 'https://media-5.api-sports.io/football/teams/582.png',
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
		},
		{
			fixture: {
				id: 728621,
				referee: 'H. Meler',
				timezone: 'UTC',
				date: '2021-07-21T14:00:00+00:00',
				timestamp: 1626876000,
				periods: {
					first: 1626876000,
					second: 1626879600,
				},
				venue: {
					id: null,
					name: 'Ortalıq Stadion',
					city: 'Almaty',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 664,
					name: 'Kairat Almaty',
					logo: 'https://media-1.api-sports.io/football/teams/664.png',
					winner: true,
				},
				away: {
					id: 598,
					name: 'FK Crvena Zvezda',
					logo: 'https://media-2.api-sports.io/football/teams/598.png',
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
		},
		{
			fixture: {
				id: 728622,
				referee: 'A. Treimanis',
				timezone: 'UTC',
				date: '2021-07-28T18:30:00+00:00',
				timestamp: 1627497000,
				periods: {
					first: 1627497000,
					second: 1627500600,
				},
				venue: {
					id: 1406,
					name: 'Stadion Rajko Mitić',
					city: 'Beograd',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 598,
					name: 'FK Crvena Zvezda',
					logo: 'https://media-2.api-sports.io/football/teams/598.png',
					winner: true,
				},
				away: {
					id: 664,
					name: 'Kairat Almaty',
					logo: 'https://media-2.api-sports.io/football/teams/664.png',
					winner: false,
				},
			},
			goals: {
				home: 5,
				away: 0,
			},
			score: {
				halftime: {
					home: 3,
					away: 0,
				},
				fulltime: {
					home: 5,
					away: 0,
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
		},
		{
			fixture: {
				id: 728623,
				referee: 'João Pedro Pinheiro',
				timezone: 'UTC',
				date: '2021-07-21T19:00:00+00:00',
				timestamp: 1626894000,
				periods: {
					first: 1626894000,
					second: 1626897600,
				},
				venue: {
					id: null,
					name: 'Stadio Georgios Karaiskáki',
					city: 'Piraeus',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 553,
					name: 'Olympiakos Piraeus',
					logo: 'https://media-4.api-sports.io/football/teams/553.png',
					winner: true,
				},
				away: {
					id: 2270,
					name: 'Neftchi Baku',
					logo: 'https://media-1.api-sports.io/football/teams/2270.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 728624,
				referee: 'Ricardo De Burgos',
				timezone: 'UTC',
				date: '2021-07-28T17:00:00+00:00',
				timestamp: 1627491600,
				periods: {
					first: 1627491600,
					second: 1627495200,
				},
				venue: {
					id: null,
					name: 'Bakcell Arena',
					city: 'Baku',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '2nd Qualifying Round',
			},
			teams: {
				home: {
					id: 2270,
					name: 'Neftchi Baku',
					logo: 'https://media-6.api-sports.io/football/teams/2270.png',
					winner: false,
				},
				away: {
					id: 553,
					name: 'Olympiakos Piraeus',
					logo: 'https://media-4.api-sports.io/football/teams/553.png',
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
					away: 1,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 739879,
				referee: 'S. Jovanović',
				timezone: 'UTC',
				date: '2021-08-04T17:00:00+00:00',
				timestamp: 1628096400,
				periods: {
					first: 1628096400,
					second: 1628100000,
				},
				venue: {
					id: 1352,
					name: 'Otkrytiye Arena',
					city: 'Moskva',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 558,
					name: 'Spartak Moscow',
					logo: 'https://media-2.api-sports.io/football/teams/558.png',
					winner: false,
				},
				away: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-1.api-sports.io/football/teams/211.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 739880,
				referee: 'A. Taylor',
				timezone: 'UTC',
				date: '2021-08-10T19:00:00+00:00',
				timestamp: 1628622000,
				periods: {
					first: 1628622000,
					second: 1628625600,
				},
				venue: {
					id: null,
					name: 'Estádio do Sport Lisboa e Benfica',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-6.api-sports.io/football/teams/211.png',
					winner: true,
				},
				away: {
					id: 558,
					name: 'Spartak Moscow',
					logo: 'https://media-2.api-sports.io/football/teams/558.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 739881,
				referee: 'A. Sidiropoulos',
				timezone: 'UTC',
				date: '2021-08-03T18:00:00+00:00',
				timestamp: 1628013600,
				periods: {
					first: 1628013600,
					second: 1628017200,
				},
				venue: {
					id: 179,
					name: 'Luminus Arena',
					city: 'Genk',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 742,
					name: 'Genk',
					logo: 'https://media-4.api-sports.io/football/teams/742.png',
					winner: false,
				},
				away: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-2.api-sports.io/football/teams/550.png',
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
					away: 0,
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
		},
		{
			fixture: {
				id: 739882,
				referee: 'I. Kovacs',
				timezone: 'UTC',
				date: '2021-08-10T17:30:00+00:00',
				timestamp: 1628616600,
				periods: {
					first: 1628616600,
					second: 1628620200,
				},
				venue: {
					id: null,
					name: "NSK Olimpijs'kyj",
					city: 'Kiev',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-6.api-sports.io/football/teams/550.png',
					winner: true,
				},
				away: {
					id: 742,
					name: 'Genk',
					logo: 'https://media-6.api-sports.io/football/teams/742.png',
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
		},
		{
			fixture: {
				id: 747937,
				referee: 'Antonio Mateu',
				timezone: 'UTC',
				date: '2021-08-04T18:00:00+00:00',
				timestamp: 1628100000,
				periods: {
					first: 1628100000,
					second: 1628103600,
				},
				venue: {
					id: 412,
					name: 'Stadion Maksimir',
					city: 'Zagreb',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 620,
					name: 'Dinamo Zagreb',
					logo: 'https://media-2.api-sports.io/football/teams/620.png',
					winner: null,
				},
				away: {
					id: 339,
					name: 'Legia Warszawa',
					logo: 'https://media-2.api-sports.io/football/teams/339.png',
					winner: null,
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
					home: null,
					away: null,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 747938,
				referee: 'B. Bastien',
				timezone: 'UTC',
				date: '2021-08-10T19:00:00+00:00',
				timestamp: 1628622000,
				periods: {
					first: 1628622000,
					second: 1628625600,
				},
				venue: {
					id: 1253,
					name: 'Stadion Miejski Legii Warszawa im. Marszałka Józefa Piłsudskiego',
					city: 'Warszawa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 339,
					name: 'Legia Warszawa',
					logo: 'https://media-6.api-sports.io/football/teams/339.png',
					winner: false,
				},
				away: {
					id: 620,
					name: 'Dinamo Zagreb',
					logo: 'https://media-4.api-sports.io/football/teams/620.png',
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
					away: 1,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 747939,
				referee: 'Jesús Gil',
				timezone: 'UTC',
				date: '2021-08-04T18:00:00+00:00',
				timestamp: 1628100000,
				periods: {
					first: 1628100000,
					second: 1628103600,
				},
				venue: {
					id: 799,
					name: 'Groupama Aréna',
					city: 'Budapest',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 651,
					name: 'Ferencvarosi TC',
					logo: 'https://media-5.api-sports.io/football/teams/651.png',
					winner: true,
				},
				away: {
					id: 560,
					name: 'Slavia Praha',
					logo: 'https://media-5.api-sports.io/football/teams/560.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 747940,
				referee: 'T. Stieler',
				timezone: 'UTC',
				date: '2021-08-10T17:00:00+00:00',
				timestamp: 1628614800,
				periods: {
					first: 1628614800,
					second: 1628618400,
				},
				venue: {
					id: 436,
					name: 'Sinobo Stadium',
					city: 'Praha',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 560,
					name: 'Slavia Praha',
					logo: 'https://media-6.api-sports.io/football/teams/560.png',
					winner: true,
				},
				away: {
					id: 651,
					name: 'Ferencvarosi TC',
					logo: 'https://media-4.api-sports.io/football/teams/651.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 747941,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2021-08-03T17:00:00+00:00',
				timestamp: 1628010000,
				periods: {
					first: 1628010000,
					second: 1628013600,
				},
				venue: {
					id: 1518,
					name: 'Eleda Stadion',
					city: 'Malmö',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-5.api-sports.io/football/teams/375.png',
					winner: true,
				},
				away: {
					id: 257,
					name: 'Rangers',
					logo: 'https://media-4.api-sports.io/football/teams/257.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 747942,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2021-08-10T19:00:00+00:00',
				timestamp: 1628622000,
				periods: {
					first: 1628622000,
					second: 1628625600,
				},
				venue: {
					id: 1401,
					name: 'Ibrox Stadium',
					city: 'Glasgow',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 257,
					name: 'Rangers',
					logo: 'https://media-2.api-sports.io/football/teams/257.png',
					winner: false,
				},
				away: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-2.api-sports.io/football/teams/375.png',
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
					away: 0,
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
		},
		{
			fixture: {
				id: 748123,
				referee: 'S. Karasev',
				timezone: 'UTC',
				date: '2021-08-03T18:00:00+00:00',
				timestamp: 1628013600,
				periods: {
					first: 1628013600,
					second: 1628017200,
				},
				venue: {
					id: 1143,
					name: 'Philips Stadion',
					city: 'Eindhoven',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 197,
					name: 'PSV Eindhoven',
					logo: 'https://media-6.api-sports.io/football/teams/197.png',
					winner: true,
				},
				away: {
					id: 397,
					name: 'FC Midtjylland',
					logo: 'https://media-2.api-sports.io/football/teams/397.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 0,
			},
			score: {
				halftime: {
					home: 3,
					away: 0,
				},
				fulltime: {
					home: 3,
					away: 0,
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
		},
		{
			fixture: {
				id: 748124,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2021-08-10T18:00:00+00:00',
				timestamp: 1628618400,
				periods: {
					first: 1628618400,
					second: 1628622000,
				},
				venue: {
					id: 453,
					name: 'MCH Arena',
					city: 'Herning',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 397,
					name: 'FC Midtjylland',
					logo: 'https://media-6.api-sports.io/football/teams/397.png',
					winner: false,
				},
				away: {
					id: 197,
					name: 'PSV Eindhoven',
					logo: 'https://media-2.api-sports.io/football/teams/197.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 748125,
				referee: 'M. Oliver',
				timezone: 'UTC',
				date: '2021-08-03T17:00:00+00:00',
				timestamp: 1628010000,
				periods: {
					first: 1628010000,
					second: 1628013600,
				},
				venue: {
					id: 11601,
					name: 'Generali Česká pojišťovna Arena',
					city: 'Praha',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 628,
					name: 'Sparta Praha',
					logo: 'https://media-4.api-sports.io/football/teams/628.png',
					winner: false,
				},
				away: {
					id: 91,
					name: 'Monaco',
					logo: 'https://media-5.api-sports.io/football/teams/91.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 748126,
				referee: 'D. Orsato',
				timezone: 'UTC',
				date: '2021-08-10T18:00:00+00:00',
				timestamp: 1628618400,
				periods: {
					first: 1628618400,
					second: 1628622000,
				},
				venue: {
					id: 659,
					name: 'Stade Louis II',
					city: 'Monaco',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 91,
					name: 'Monaco',
					logo: 'https://media-2.api-sports.io/football/teams/91.png',
					winner: true,
				},
				away: {
					id: 628,
					name: 'Sparta Praha',
					logo: 'https://media-1.api-sports.io/football/teams/628.png',
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
		},
		{
			fixture: {
				id: 748127,
				referee: 'D. Makkelie',
				timezone: 'UTC',
				date: '2021-08-03T18:00:00+00:00',
				timestamp: 1628013600,
				periods: {
					first: 1628013600,
					second: 1628017200,
				},
				venue: {
					id: 1311,
					name: 'Stadionul Dr. Constantin Rădulescu',
					city: 'Cluj-Napoca',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 2246,
					name: 'CFR 1907 Cluj',
					logo: 'https://media-1.api-sports.io/football/teams/2246.png',
					winner: null,
				},
				away: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-5.api-sports.io/football/teams/565.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 748128,
				referee: 'C. Çakιr',
				timezone: 'UTC',
				date: '2021-08-10T18:30:00+00:00',
				timestamp: 1628620200,
				periods: {
					first: 1628620200,
					second: 1628623800,
				},
				venue: {
					id: 10500,
					name: 'Stadion Wankdorf',
					city: 'Bern',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-2.api-sports.io/football/teams/565.png',
					winner: true,
				},
				away: {
					id: 2246,
					name: 'CFR 1907 Cluj',
					logo: 'https://media-1.api-sports.io/football/teams/2246.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 1,
			},
			score: {
				halftime: {
					home: 3,
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
		},
		{
			fixture: {
				id: 748129,
				referee: 'B. Madden',
				timezone: 'UTC',
				date: '2021-08-03T19:00:00+00:00',
				timestamp: 1628017200,
				periods: {
					first: 1628017200,
					second: 1628020800,
				},
				venue: {
					id: null,
					name: 'Stadio Georgios Karaiskáki',
					city: 'Piraeus',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 553,
					name: 'Olympiakos Piraeus',
					logo: 'https://media-4.api-sports.io/football/teams/553.png',
					winner: null,
				},
				away: {
					id: 566,
					name: 'Ludogorets',
					logo: 'https://media-5.api-sports.io/football/teams/566.png',
					winner: null,
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
					home: null,
					away: null,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 748130,
				referee: 'O. Grinfeeld',
				timezone: 'UTC',
				date: '2021-08-10T18:00:00+00:00',
				timestamp: 1628618400,
				periods: {
					first: 1628618400,
					second: 1628622000,
				},
				venue: {
					id: 10547,
					name: 'Huvepharma Arena',
					city: 'Razgrad',
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
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 566,
					name: 'Ludogorets',
					logo: 'https://media-1.api-sports.io/football/teams/566.png',
					winner: true,
				},
				away: {
					id: 553,
					name: 'Olympiakos Piraeus',
					logo: 'https://media-1.api-sports.io/football/teams/553.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
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
					home: 4,
					away: 1,
				},
			},
		},
		{
			fixture: {
				id: 748131,
				referee: 'O. Hațegan',
				timezone: 'UTC',
				date: '2021-08-03T19:00:00+00:00',
				timestamp: 1628017200,
				periods: {
					first: 1628017200,
					second: 1628020800,
				},
				venue: {
					id: 1406,
					name: 'Stadion Rajko Mitić',
					city: 'Beograd',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 598,
					name: 'FK Crvena Zvezda',
					logo: 'https://media-2.api-sports.io/football/teams/598.png',
					winner: null,
				},
				away: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-2.api-sports.io/football/teams/568.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 748132,
				referee: 'F. Zwayer',
				timezone: 'UTC',
				date: '2021-08-10T17:00:00+00:00',
				timestamp: 1628614800,
				periods: {
					first: 1628614800,
					second: 1628618400,
				},
				venue: {
					id: 1093,
					name: 'Bolshaya Sportivnaya Arena',
					city: 'Tiraspol',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: '3rd Qualifying Round',
			},
			teams: {
				home: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-6.api-sports.io/football/teams/568.png',
					winner: true,
				},
				away: {
					id: 598,
					name: 'FK Crvena Zvezda',
					logo: 'https://media-4.api-sports.io/football/teams/598.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 757727,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2021-08-17T19:00:00+00:00',
				timestamp: 1629226800,
				periods: {
					first: 1629226800,
					second: 1629230400,
				},
				venue: {
					id: 148,
					name: 'Red Bull Arena',
					city: 'Wals-Siezenheim',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-4.api-sports.io/football/teams/571.png',
					winner: true,
				},
				away: {
					id: 407,
					name: 'Brondby',
					logo: 'https://media-2.api-sports.io/football/teams/407.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
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
		},
		{
			fixture: {
				id: 757728,
				referee: 'Carlos del Cerro',
				timezone: 'UTC',
				date: '2021-08-25T19:00:00+00:00',
				timestamp: 1629918000,
				periods: {
					first: 1629918000,
					second: 1629921600,
				},
				venue: {
					id: 443,
					name: 'Brøndby Stadion',
					city: 'Brøndby',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 407,
					name: 'Brondby',
					logo: 'https://media-2.api-sports.io/football/teams/407.png',
					winner: false,
				},
				away: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-2.api-sports.io/football/teams/571.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
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
		},
		{
			fixture: {
				id: 765594,
				referee: 'W. Collum',
				timezone: 'UTC',
				date: '2021-08-18T19:00:00+00:00',
				timestamp: 1629313200,
				periods: {
					first: 1629313200,
					second: 1629316800,
				},
				venue: {
					id: 10500,
					name: 'Stadion Wankdorf',
					city: 'Bern',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-1.api-sports.io/football/teams/565.png',
					winner: true,
				},
				away: {
					id: 651,
					name: 'Ferencvarosi TC',
					logo: 'https://media-6.api-sports.io/football/teams/651.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 2,
			},
			score: {
				halftime: {
					home: 2,
					away: 1,
				},
				fulltime: {
					home: 3,
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
		},
		{
			fixture: {
				id: 765595,
				referee: 'S. Karasev',
				timezone: 'UTC',
				date: '2021-08-24T19:00:00+00:00',
				timestamp: 1629831600,
				periods: {
					first: 1629831600,
					second: 1629835200,
				},
				venue: {
					id: 799,
					name: 'Groupama Aréna',
					city: 'Budapest',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 651,
					name: 'Ferencvarosi TC',
					logo: 'https://media-4.api-sports.io/football/teams/651.png',
					winner: false,
				},
				away: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-4.api-sports.io/football/teams/565.png',
					winner: true,
				},
			},
			goals: {
				home: 2,
				away: 3,
			},
			score: {
				halftime: {
					home: 2,
					away: 1,
				},
				fulltime: {
					home: 2,
					away: 3,
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
		},
		{
			fixture: {
				id: 765596,
				referee: 'Antonio Mateu',
				timezone: 'UTC',
				date: '2021-08-18T19:00:00+00:00',
				timestamp: 1629313200,
				periods: {
					first: 1629313200,
					second: 1629316800,
				},
				venue: {
					id: 1518,
					name: 'Eleda Stadion',
					city: 'Malmö',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-6.api-sports.io/football/teams/375.png',
					winner: true,
				},
				away: {
					id: 566,
					name: 'Ludogorets',
					logo: 'https://media-2.api-sports.io/football/teams/566.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 765597,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2021-08-24T19:00:00+00:00',
				timestamp: 1629831600,
				periods: {
					first: 1629831600,
					second: 1629835200,
				},
				venue: {
					id: 10547,
					name: 'Huvepharma Arena',
					city: 'Razgrad',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 566,
					name: 'Ludogorets',
					logo: 'https://media-5.api-sports.io/football/teams/566.png',
					winner: true,
				},
				away: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-1.api-sports.io/football/teams/375.png',
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
					away: 1,
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
		},
		{
			fixture: {
				id: 765598,
				referee: 'C. Çakιr',
				timezone: 'UTC',
				date: '2021-08-17T19:00:00+00:00',
				timestamp: 1629226800,
				periods: {
					first: 1629226800,
					second: 1629230400,
				},
				venue: {
					id: 1093,
					name: 'Bolshaya Sportivnaya Arena',
					city: 'Tiraspol',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-1.api-sports.io/football/teams/568.png',
					winner: true,
				},
				away: {
					id: 620,
					name: 'Dinamo Zagreb',
					logo: 'https://media-6.api-sports.io/football/teams/620.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 3,
					away: 0,
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
		},
		{
			fixture: {
				id: 765599,
				referee: 'D. Orsato',
				timezone: 'UTC',
				date: '2021-08-25T19:00:00+00:00',
				timestamp: 1629918000,
				periods: {
					first: 1629918000,
					second: 1629921600,
				},
				venue: {
					id: 412,
					name: 'Stadion Maksimir',
					city: 'Zagreb',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 620,
					name: 'Dinamo Zagreb',
					logo: 'https://media-2.api-sports.io/football/teams/620.png',
					winner: null,
				},
				away: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-4.api-sports.io/football/teams/568.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 765600,
				referee: 'D. Makkelie',
				timezone: 'UTC',
				date: '2021-08-17T19:00:00+00:00',
				timestamp: 1629226800,
				periods: {
					first: 1629226800,
					second: 1629230400,
				},
				venue: {
					id: 659,
					name: 'Stade Louis II',
					city: 'Monaco',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 91,
					name: 'Monaco',
					logo: 'https://media-6.api-sports.io/football/teams/91.png',
					winner: false,
				},
				away: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-2.api-sports.io/football/teams/550.png',
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
					away: 1,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 765601,
				referee: 'A. Taylor',
				timezone: 'UTC',
				date: '2021-08-25T19:00:00+00:00',
				timestamp: 1629918000,
				periods: {
					first: 1629918000,
					second: 1629921600,
				},
				venue: {
					id: 1595,
					name: 'Oblasny SportKomplex Metalist',
					city: 'Kharkiv',
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
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-5.api-sports.io/football/teams/550.png',
					winner: null,
				},
				away: {
					id: 91,
					name: 'Monaco',
					logo: 'https://media-5.api-sports.io/football/teams/91.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 1,
					away: 2,
				},
				extratime: {
					home: 1,
					away: 0,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 765602,
				referee: 'F. Brych',
				timezone: 'UTC',
				date: '2021-08-18T19:00:00+00:00',
				timestamp: 1629313200,
				periods: {
					first: 1629313200,
					second: 1629316800,
				},
				venue: {
					id: null,
					name: 'Estádio do Sport Lisboa e Benfica',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-4.api-sports.io/football/teams/211.png',
					winner: true,
				},
				away: {
					id: 197,
					name: 'PSV Eindhoven',
					logo: 'https://media-4.api-sports.io/football/teams/197.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 2,
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
		},
		{
			fixture: {
				id: 765603,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2021-08-24T19:00:00+00:00',
				timestamp: 1629831600,
				periods: {
					first: 1629831600,
					second: 1629835200,
				},
				venue: {
					id: 1143,
					name: 'Philips Stadion',
					city: 'Eindhoven',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Play-offs',
			},
			teams: {
				home: {
					id: 197,
					name: 'PSV Eindhoven',
					logo: 'https://media-5.api-sports.io/football/teams/197.png',
					winner: null,
				},
				away: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-4.api-sports.io/football/teams/211.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 787560,
				referee: 'F. Letexier',
				timezone: 'UTC',
				date: '2021-09-14T16:45:00+00:00',
				timestamp: 1631637900,
				periods: {
					first: 1631637900,
					second: 1631641500,
				},
				venue: {
					id: 10500,
					name: 'Stadion Wankdorf',
					city: 'Bern',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-1.api-sports.io/football/teams/565.png',
					winner: true,
				},
				away: {
					id: 33,
					name: 'Manchester United',
					logo: 'https://media-1.api-sports.io/football/teams/33.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
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
		},
		{
			fixture: {
				id: 787561,
				referee: 'A. Kulbakov',
				timezone: 'UTC',
				date: '2021-09-14T16:45:00+00:00',
				timestamp: 1631637900,
				periods: {
					first: 1631637900,
					second: 1631641500,
				},
				venue: {
					id: 1494,
					name: 'Estadio Ramón Sánchez Pizjuán',
					city: 'Sevilla',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 536,
					name: 'Sevilla',
					logo: 'https://media-6.api-sports.io/football/teams/536.png',
					winner: null,
				},
				away: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-1.api-sports.io/football/teams/571.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 787562,
				referee: 'M. Oliver',
				timezone: 'UTC',
				date: '2021-09-14T19:00:00+00:00',
				timestamp: 1631646000,
				periods: {
					first: 1631646000,
					second: 1631649600,
				},
				venue: {
					id: 1462,
					name: 'Camp Nou',
					city: 'Barcelona',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 529,
					name: 'Barcelona',
					logo: 'https://media-5.api-sports.io/football/teams/529.png',
					winner: false,
				},
				away: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-1.api-sports.io/football/teams/157.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 0,
					away: 3,
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
		},
		{
			fixture: {
				id: 787563,
				referee: 'A. Taylor',
				timezone: 'UTC',
				date: '2021-09-14T19:00:00+00:00',
				timestamp: 1631646000,
				periods: {
					first: 1631646000,
					second: 1631649600,
				},
				venue: {
					id: null,
					name: "NSK Olimpijs'kyj",
					city: 'Kiev',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 572,
					name: 'Dynamo Kyiv',
					logo: 'https://media-4.api-sports.io/football/teams/572.png',
					winner: null,
				},
				away: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-1.api-sports.io/football/teams/211.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 787564,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2021-09-14T19:00:00+00:00',
				timestamp: 1631646000,
				periods: {
					first: 1631646000,
					second: 1631649600,
				},
				venue: {
					id: 1498,
					name: 'Estadio de la Cerámica',
					city: 'Villarreal',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-6.api-sports.io/football/teams/533.png',
					winner: null,
				},
				away: {
					id: 499,
					name: 'Atalanta',
					logo: 'https://media-6.api-sports.io/football/teams/499.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 2,
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
		},
		{
			fixture: {
				id: 787565,
				referee: 'D. Makkelie',
				timezone: 'UTC',
				date: '2021-09-14T19:00:00+00:00',
				timestamp: 1631646000,
				periods: {
					first: 1631646000,
					second: 1631649600,
				},
				venue: {
					id: 655,
					name: 'Stade Pierre-Mauroy',
					city: "Villeneuve d'Ascq",
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 79,
					name: 'Lille',
					logo: 'https://media-5.api-sports.io/football/teams/79.png',
					winner: null,
				},
				away: {
					id: 161,
					name: 'VfL Wolfsburg',
					logo: 'https://media-5.api-sports.io/football/teams/161.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 787566,
				referee: 'B. Frankowski',
				timezone: 'UTC',
				date: '2021-09-14T19:00:00+00:00',
				timestamp: 1631646000,
				periods: {
					first: 1631646000,
					second: 1631649600,
				},
				venue: {
					id: 519,
					name: 'Stamford Bridge',
					city: 'London',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-6.api-sports.io/football/teams/49.png',
					winner: true,
				},
				away: {
					id: 596,
					name: 'Zenit Saint Petersburg',
					logo: 'https://media-4.api-sports.io/football/teams/596.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787567,
				referee: 'Artur Soares Dias',
				timezone: 'UTC',
				date: '2021-09-14T19:00:00+00:00',
				timestamp: 1631646000,
				periods: {
					first: 1631646000,
					second: 1631649600,
				},
				venue: {
					id: 1518,
					name: 'Eleda Stadion',
					city: 'Malmö',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-1.api-sports.io/football/teams/375.png',
					winner: false,
				},
				away: {
					id: 496,
					name: 'Juventus',
					logo: 'https://media-1.api-sports.io/football/teams/496.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 3,
				},
				fulltime: {
					home: 0,
					away: 3,
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
		},
		{
			fixture: {
				id: 787568,
				referee: 'Antonio Mateu',
				timezone: 'UTC',
				date: '2021-09-15T16:45:00+00:00',
				timestamp: 1631724300,
				periods: {
					first: 1631724300,
					second: 1631727900,
				},
				venue: {
					id: 1578,
					name: 'Vodafone Park',
					city: 'İstanbul',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 549,
					name: 'Besiktas',
					logo: 'https://media-5.api-sports.io/football/teams/549.png',
					winner: false,
				},
				away: {
					id: 165,
					name: 'Borussia Dortmund',
					logo: 'https://media-1.api-sports.io/football/teams/165.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
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
		},
		{
			fixture: {
				id: 787569,
				referee: 'D. Aytekin',
				timezone: 'UTC',
				date: '2021-09-15T16:45:00+00:00',
				timestamp: 1631724300,
				periods: {
					first: 1631724300,
					second: 1631727900,
				},
				venue: {
					id: 1093,
					name: 'Bolshaya Sportivnaya Arena',
					city: 'Tiraspol',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-5.api-sports.io/football/teams/568.png',
					winner: true,
				},
				away: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-5.api-sports.io/football/teams/550.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787570,
				referee: 'S. Gözübüyük',
				timezone: 'UTC',
				date: '2021-09-15T19:00:00+00:00',
				timestamp: 1631732400,
				periods: {
					first: 1631732400,
					second: 1631736000,
				},
				venue: {
					id: 555,
					name: 'Etihad Stadium',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-4.api-sports.io/football/teams/50.png',
					winner: true,
				},
				away: {
					id: 173,
					name: 'RB Leipzig',
					logo: 'https://media-6.api-sports.io/football/teams/173.png',
					winner: false,
				},
			},
			goals: {
				home: 6,
				away: 3,
			},
			score: {
				halftime: {
					home: 3,
					away: 1,
				},
				fulltime: {
					home: 6,
					away: 3,
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
		},
		{
			fixture: {
				id: 787571,
				referee: 'S. Schärer',
				timezone: 'UTC',
				date: '2021-09-15T19:00:00+00:00',
				timestamp: 1631732400,
				periods: {
					first: 1631732400,
					second: 1631736000,
				},
				venue: {
					id: 176,
					name: 'Jan Breydelstadion',
					city: 'Brugge',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 569,
					name: 'Club Brugge KV',
					logo: 'https://media-2.api-sports.io/football/teams/569.png',
					winner: null,
				},
				away: {
					id: 85,
					name: 'Paris Saint Germain',
					logo: 'https://media-6.api-sports.io/football/teams/85.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 787572,
				referee: 'O. Hațegan',
				timezone: 'UTC',
				date: '2021-09-15T19:00:00+00:00',
				timestamp: 1631732400,
				periods: {
					first: 1631732400,
					second: 1631736000,
				},
				venue: {
					id: 1461,
					name: 'Estadio Wanda Metropolitano',
					city: 'Madrid',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-5.api-sports.io/football/teams/530.png',
					winner: null,
				},
				away: {
					id: 212,
					name: 'FC Porto',
					logo: 'https://media-2.api-sports.io/football/teams/212.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 787573,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2021-09-15T19:00:00+00:00',
				timestamp: 1631732400,
				periods: {
					first: 1631732400,
					second: 1631736000,
				},
				venue: {
					id: 550,
					name: 'Anfield',
					city: 'Liverpool',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-2.api-sports.io/football/teams/40.png',
					winner: true,
				},
				away: {
					id: 489,
					name: 'AC Milan',
					logo: 'https://media-5.api-sports.io/football/teams/489.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 2,
				},
				fulltime: {
					home: 3,
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
		},
		{
			fixture: {
				id: 787574,
				referee: 'José Sánchez',
				timezone: 'UTC',
				date: '2021-09-15T19:00:00+00:00',
				timestamp: 1631732400,
				periods: {
					first: 1631732400,
					second: 1631736000,
				},
				venue: {
					id: 1293,
					name: 'Estádio José Alvalade',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 228,
					name: 'Sporting CP',
					logo: 'https://media-1.api-sports.io/football/teams/228.png',
					winner: false,
				},
				away: {
					id: 194,
					name: 'Ajax',
					logo: 'https://media-5.api-sports.io/football/teams/194.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 5,
			},
			score: {
				halftime: {
					home: 1,
					away: 3,
				},
				fulltime: {
					home: 1,
					away: 5,
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
		},
		{
			fixture: {
				id: 787575,
				referee: 'D. Siebert',
				timezone: 'UTC',
				date: '2021-09-15T19:00:00+00:00',
				timestamp: 1631732400,
				periods: {
					first: 1631732400,
					second: 1631736000,
				},
				venue: {
					id: 907,
					name: 'Stadio Giuseppe Meazza',
					city: 'Milano',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 1',
			},
			teams: {
				home: {
					id: 505,
					name: 'Inter',
					logo: 'https://media-5.api-sports.io/football/teams/505.png',
					winner: false,
				},
				away: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-6.api-sports.io/football/teams/541.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 787576,
				referee: 'B. Bastien',
				timezone: 'UTC',
				date: '2021-09-28T16:45:00+00:00',
				timestamp: 1632847500,
				periods: {
					first: 1632847500,
					second: 1632851100,
				},
				venue: {
					id: 1117,
					name: 'Johan Cruijff Arena',
					city: 'Amsterdam',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 194,
					name: 'Ajax',
					logo: 'https://media-6.api-sports.io/football/teams/194.png',
					winner: true,
				},
				away: {
					id: 549,
					name: 'Besiktas',
					logo: 'https://media-2.api-sports.io/football/teams/549.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787577,
				referee: 'I. Kovacs',
				timezone: 'UTC',
				date: '2021-09-28T16:45:00+00:00',
				timestamp: 1632847500,
				periods: {
					first: 1632847500,
					second: 1632851100,
				},
				venue: {
					id: null,
					name: "NSK Olimpijs'kyj",
					city: 'Kiev',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-4.api-sports.io/football/teams/550.png',
					winner: null,
				},
				away: {
					id: 505,
					name: 'Inter',
					logo: 'https://media-4.api-sports.io/football/teams/505.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 787578,
				referee: 'Carlos del Cerro',
				timezone: 'UTC',
				date: '2021-09-28T19:00:00+00:00',
				timestamp: 1632855600,
				periods: {
					first: 1632855600,
					second: 1632859200,
				},
				venue: {
					id: 671,
					name: 'Parc des Princes',
					city: 'Paris',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 85,
					name: 'Paris Saint Germain',
					logo: 'https://media-6.api-sports.io/football/teams/85.png',
					winner: true,
				},
				away: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-5.api-sports.io/football/teams/50.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787579,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2021-09-28T19:00:00+00:00',
				timestamp: 1632855600,
				periods: {
					first: 1632855600,
					second: 1632859200,
				},
				venue: {
					id: 738,
					name: 'Red Bull Arena',
					city: 'Leipzig',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 173,
					name: 'RB Leipzig',
					logo: 'https://media-1.api-sports.io/football/teams/173.png',
					winner: false,
				},
				away: {
					id: 569,
					name: 'Club Brugge KV',
					logo: 'https://media-6.api-sports.io/football/teams/569.png',
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
					away: 2,
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
		},
		{
			fixture: {
				id: 787580,
				referee: 'S. Karasev',
				timezone: 'UTC',
				date: '2021-09-28T19:00:00+00:00',
				timestamp: 1632855600,
				periods: {
					first: 1632855600,
					second: 1632859200,
				},
				venue: {
					id: 1286,
					name: 'Estádio Do Dragão',
					city: 'Porto',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 212,
					name: 'FC Porto',
					logo: 'https://media-1.api-sports.io/football/teams/212.png',
					winner: false,
				},
				away: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-1.api-sports.io/football/teams/40.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 5,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 1,
					away: 5,
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
		},
		{
			fixture: {
				id: 787581,
				referee: 'C. Çakιr',
				timezone: 'UTC',
				date: '2021-09-28T19:00:00+00:00',
				timestamp: 1632855600,
				periods: {
					first: 1632855600,
					second: 1632859200,
				},
				venue: {
					id: 907,
					name: 'Stadio Giuseppe Meazza',
					city: 'Milano',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 489,
					name: 'AC Milan',
					logo: 'https://media-6.api-sports.io/football/teams/489.png',
					winner: false,
				},
				away: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-1.api-sports.io/football/teams/530.png',
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
					away: 0,
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
		},
		{
			fixture: {
				id: 787582,
				referee: 'S. Jovanović',
				timezone: 'UTC',
				date: '2021-09-28T19:00:00+00:00',
				timestamp: 1632855600,
				periods: {
					first: 1632855600,
					second: 1632859200,
				},
				venue: {
					id: 702,
					name: 'Signal-Iduna-Park',
					city: 'Dortmund',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 165,
					name: 'Borussia Dortmund',
					logo: 'https://media-2.api-sports.io/football/teams/165.png',
					winner: true,
				},
				away: {
					id: 228,
					name: 'Sporting CP',
					logo: 'https://media-2.api-sports.io/football/teams/228.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787583,
				referee: 'L. Visser',
				timezone: 'UTC',
				date: '2021-09-28T19:00:00+00:00',
				timestamp: 1632855600,
				periods: {
					first: 1632855600,
					second: 1632859200,
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
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-4.api-sports.io/football/teams/541.png',
					winner: false,
				},
				away: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-6.api-sports.io/football/teams/568.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 787584,
				referee: 'F. Brych',
				timezone: 'UTC',
				date: '2021-09-29T16:45:00+00:00',
				timestamp: 1632933900,
				periods: {
					first: 1632933900,
					second: 1632937500,
				},
				venue: {
					id: 879,
					name: 'Gewiss Stadium',
					city: 'Bergamo',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 499,
					name: 'Atalanta',
					logo: 'https://media-1.api-sports.io/football/teams/499.png',
					winner: true,
				},
				away: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-2.api-sports.io/football/teams/565.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787585,
				referee: 'A. Sidiropoulos',
				timezone: 'UTC',
				date: '2021-09-29T16:45:00+00:00',
				timestamp: 1632933900,
				periods: {
					first: 1632933900,
					second: 1632937500,
				},
				venue: {
					id: null,
					name: 'Saint-Petersburg Stadium',
					city: 'St. Petersburg',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 596,
					name: 'Zenit Saint Petersburg',
					logo: 'https://media-1.api-sports.io/football/teams/596.png',
					winner: true,
				},
				away: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-2.api-sports.io/football/teams/375.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 4,
					away: 0,
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
		},
		{
			fixture: {
				id: 787586,
				referee: 'M. Guida',
				timezone: 'UTC',
				date: '2021-09-29T19:00:00+00:00',
				timestamp: 1632942000,
				periods: {
					first: 1632942000,
					second: 1632945600,
				},
				venue: {
					id: 700,
					name: 'Allianz Arena',
					city: 'München',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-4.api-sports.io/football/teams/157.png',
					winner: true,
				},
				away: {
					id: 572,
					name: 'Dynamo Kyiv',
					logo: 'https://media-4.api-sports.io/football/teams/572.png',
					winner: false,
				},
			},
			goals: {
				home: 5,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 5,
					away: 0,
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
		},
		{
			fixture: {
				id: 787587,
				referee: 'D. Orsato',
				timezone: 'UTC',
				date: '2021-09-29T19:00:00+00:00',
				timestamp: 1632942000,
				periods: {
					first: 1632942000,
					second: 1632945600,
				},
				venue: {
					id: null,
					name: 'Estádio do Sport Lisboa e Benfica',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-6.api-sports.io/football/teams/211.png',
					winner: true,
				},
				away: {
					id: 529,
					name: 'Barcelona',
					logo: 'https://media-1.api-sports.io/football/teams/529.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 3,
					away: 0,
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
		},
		{
			fixture: {
				id: 787588,
				referee: 'F. Zwayer',
				timezone: 'UTC',
				date: '2021-09-29T19:00:00+00:00',
				timestamp: 1632942000,
				periods: {
					first: 1632942000,
					second: 1632945600,
				},
				venue: {
					id: 556,
					name: 'Old Trafford',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 33,
					name: 'Manchester United',
					logo: 'https://media-4.api-sports.io/football/teams/33.png',
					winner: true,
				},
				away: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-1.api-sports.io/football/teams/533.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 787589,
				referee: 'H. Meler',
				timezone: 'UTC',
				date: '2021-09-29T19:00:00+00:00',
				timestamp: 1632942000,
				periods: {
					first: 1632942000,
					second: 1632945600,
				},
				venue: {
					id: 148,
					name: 'Red Bull Arena',
					city: 'Wals-Siezenheim',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-4.api-sports.io/football/teams/571.png',
					winner: true,
				},
				away: {
					id: 79,
					name: 'Lille',
					logo: 'https://media-2.api-sports.io/football/teams/79.png',
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
		},
		{
			fixture: {
				id: 787590,
				referee: 'G. Kabakov',
				timezone: 'UTC',
				date: '2021-09-29T19:00:00+00:00',
				timestamp: 1632942000,
				periods: {
					first: 1632942000,
					second: 1632945600,
				},
				venue: {
					id: 752,
					name: 'VOLKSWAGEN ARENA',
					city: 'Wolfsburg',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 161,
					name: 'VfL Wolfsburg',
					logo: 'https://media-1.api-sports.io/football/teams/161.png',
					winner: null,
				},
				away: {
					id: 536,
					name: 'Sevilla',
					logo: 'https://media-1.api-sports.io/football/teams/536.png',
					winner: null,
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
					home: null,
					away: null,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 787591,
				referee: 'Jesús Gil',
				timezone: 'UTC',
				date: '2021-09-29T19:00:00+00:00',
				timestamp: 1632942000,
				periods: {
					first: 1632942000,
					second: 1632945600,
				},
				venue: {
					id: 909,
					name: 'Allianz Stadium',
					city: 'Torino',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 2',
			},
			teams: {
				home: {
					id: 496,
					name: 'Juventus',
					logo: 'https://media-4.api-sports.io/football/teams/496.png',
					winner: true,
				},
				away: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-4.api-sports.io/football/teams/49.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787592,
				referee: 'I. Kovacs',
				timezone: 'UTC',
				date: '2021-10-19T16:45:00+00:00',
				timestamp: 1634661900,
				periods: {
					first: 1634661900,
					second: 1634665500,
				},
				venue: {
					id: 176,
					name: 'Jan Breydelstadion',
					city: 'Brugge',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 569,
					name: 'Club Brugge KV',
					logo: 'https://media-4.api-sports.io/football/teams/569.png',
					winner: false,
				},
				away: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-1.api-sports.io/football/teams/50.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 5,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 1,
					away: 5,
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
		},
		{
			fixture: {
				id: 787593,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2021-10-19T16:45:00+00:00',
				timestamp: 1634661900,
				periods: {
					first: 1634661900,
					second: 1634665500,
				},
				venue: {
					id: 1578,
					name: 'Vodafone Park',
					city: 'İstanbul',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 549,
					name: 'Besiktas',
					logo: 'https://media-1.api-sports.io/football/teams/549.png',
					winner: false,
				},
				away: {
					id: 228,
					name: 'Sporting CP',
					logo: 'https://media-4.api-sports.io/football/teams/228.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 4,
			},
			score: {
				halftime: {
					home: 1,
					away: 3,
				},
				fulltime: {
					home: 1,
					away: 4,
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
		},
		{
			fixture: {
				id: 787594,
				referee: 'M. Guida',
				timezone: 'UTC',
				date: '2021-10-19T19:00:00+00:00',
				timestamp: 1634670000,
				periods: {
					first: 1634670000,
					second: 1634673600,
				},
				venue: {
					id: 671,
					name: 'Parc des Princes',
					city: 'Paris',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 85,
					name: 'Paris Saint Germain',
					logo: 'https://media-6.api-sports.io/football/teams/85.png',
					winner: true,
				},
				away: {
					id: 173,
					name: 'RB Leipzig',
					logo: 'https://media-6.api-sports.io/football/teams/173.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 3,
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
		},
		{
			fixture: {
				id: 787595,
				referee: 'D. Siebert',
				timezone: 'UTC',
				date: '2021-10-19T19:00:00+00:00',
				timestamp: 1634670000,
				periods: {
					first: 1634670000,
					second: 1634673600,
				},
				venue: {
					id: 1461,
					name: 'Estadio Wanda Metropolitano',
					city: 'Madrid',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-4.api-sports.io/football/teams/530.png',
					winner: false,
				},
				away: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-1.api-sports.io/football/teams/40.png',
					winner: true,
				},
			},
			goals: {
				home: 2,
				away: 3,
			},
			score: {
				halftime: {
					home: 2,
					away: 2,
				},
				fulltime: {
					home: 2,
					away: 3,
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
		},
		{
			fixture: {
				id: 787596,
				referee: 'F. Brych',
				timezone: 'UTC',
				date: '2021-10-19T19:00:00+00:00',
				timestamp: 1634670000,
				periods: {
					first: 1634670000,
					second: 1634673600,
				},
				venue: {
					id: 1286,
					name: 'Estádio Do Dragão',
					city: 'Porto',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 212,
					name: 'FC Porto',
					logo: 'https://media-4.api-sports.io/football/teams/212.png',
					winner: true,
				},
				away: {
					id: 489,
					name: 'AC Milan',
					logo: 'https://media-1.api-sports.io/football/teams/489.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787597,
				referee: 'Jesús Gil',
				timezone: 'UTC',
				date: '2021-10-19T19:00:00+00:00',
				timestamp: 1634670000,
				periods: {
					first: 1634670000,
					second: 1634673600,
				},
				venue: {
					id: 1117,
					name: 'Johan Cruijff Arena',
					city: 'Amsterdam',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 194,
					name: 'Ajax',
					logo: 'https://media-5.api-sports.io/football/teams/194.png',
					winner: true,
				},
				away: {
					id: 165,
					name: 'Borussia Dortmund',
					logo: 'https://media-5.api-sports.io/football/teams/165.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 4,
					away: 0,
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
		},
		{
			fixture: {
				id: 787598,
				referee: 'S. Jovanović',
				timezone: 'UTC',
				date: '2021-10-19T19:00:00+00:00',
				timestamp: 1634670000,
				periods: {
					first: 1634670000,
					second: 1634673600,
				},
				venue: {
					id: null,
					name: "NSK Olimpijs'kyj",
					city: 'Kiev',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-6.api-sports.io/football/teams/550.png',
					winner: false,
				},
				away: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-5.api-sports.io/football/teams/541.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 5,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 0,
					away: 5,
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
		},
		{
			fixture: {
				id: 787599,
				referee: 'D. Makkelie',
				timezone: 'UTC',
				date: '2021-10-19T19:00:00+00:00',
				timestamp: 1634670000,
				periods: {
					first: 1634670000,
					second: 1634673600,
				},
				venue: {
					id: 907,
					name: 'Stadio Giuseppe Meazza',
					city: 'Milano',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 505,
					name: 'Inter',
					logo: 'https://media-4.api-sports.io/football/teams/505.png',
					winner: true,
				},
				away: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-1.api-sports.io/football/teams/568.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787600,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2021-10-20T16:45:00+00:00',
				timestamp: 1634748300,
				periods: {
					first: 1634748300,
					second: 1634751900,
				},
				venue: {
					id: 1462,
					name: 'Camp Nou',
					city: 'Barcelona',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 529,
					name: 'Barcelona',
					logo: 'https://media-5.api-sports.io/football/teams/529.png',
					winner: true,
				},
				away: {
					id: 572,
					name: 'Dynamo Kyiv',
					logo: 'https://media-4.api-sports.io/football/teams/572.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787601,
				referee: 'D. Orsato',
				timezone: 'UTC',
				date: '2021-10-20T16:45:00+00:00',
				timestamp: 1634748300,
				periods: {
					first: 1634748300,
					second: 1634751900,
				},
				venue: {
					id: 148,
					name: 'Red Bull Arena',
					city: 'Wals-Siezenheim',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-4.api-sports.io/football/teams/571.png',
					winner: true,
				},
				away: {
					id: 161,
					name: 'VfL Wolfsburg',
					logo: 'https://media-5.api-sports.io/football/teams/161.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 787602,
				referee: 'O. Hațegan',
				timezone: 'UTC',
				date: '2021-10-20T19:00:00+00:00',
				timestamp: 1634756400,
				periods: {
					first: 1634756400,
					second: 1634760000,
				},
				venue: {
					id: null,
					name: 'Estádio do Sport Lisboa e Benfica',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-5.api-sports.io/football/teams/211.png',
					winner: false,
				},
				away: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-4.api-sports.io/football/teams/157.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 4,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 0,
					away: 4,
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
		},
		{
			fixture: {
				id: 787603,
				referee: 'S. Karasev',
				timezone: 'UTC',
				date: '2021-10-20T19:00:00+00:00',
				timestamp: 1634756400,
				periods: {
					first: 1634756400,
					second: 1634760000,
				},
				venue: {
					id: 10500,
					name: 'Stadion Wankdorf',
					city: 'Bern',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-1.api-sports.io/football/teams/565.png',
					winner: false,
				},
				away: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-5.api-sports.io/football/teams/533.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 4,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 1,
					away: 4,
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
		},
		{
			fixture: {
				id: 787604,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2021-10-20T19:00:00+00:00',
				timestamp: 1634756400,
				periods: {
					first: 1634756400,
					second: 1634760000,
				},
				venue: {
					id: 556,
					name: 'Old Trafford',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 33,
					name: 'Manchester United',
					logo: 'https://media-4.api-sports.io/football/teams/33.png',
					winner: true,
				},
				away: {
					id: 499,
					name: 'Atalanta',
					logo: 'https://media-4.api-sports.io/football/teams/499.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 3,
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
		},
		{
			fixture: {
				id: 787605,
				referee: 'M. Oliver',
				timezone: 'UTC',
				date: '2021-10-20T19:00:00+00:00',
				timestamp: 1634756400,
				periods: {
					first: 1634756400,
					second: 1634760000,
				},
				venue: {
					id: 655,
					name: 'Stade Pierre-Mauroy',
					city: "Villeneuve d'Ascq",
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 79,
					name: 'Lille',
					logo: 'https://media-4.api-sports.io/football/teams/79.png',
					winner: null,
				},
				away: {
					id: 536,
					name: 'Sevilla',
					logo: 'https://media-1.api-sports.io/football/teams/536.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 787606,
				referee: 'F. Letexier',
				timezone: 'UTC',
				date: '2021-10-20T19:00:00+00:00',
				timestamp: 1634756400,
				periods: {
					first: 1634756400,
					second: 1634760000,
				},
				venue: {
					id: 519,
					name: 'Stamford Bridge',
					city: 'London',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-5.api-sports.io/football/teams/49.png',
					winner: true,
				},
				away: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-4.api-sports.io/football/teams/375.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 4,
					away: 0,
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
		},
		{
			fixture: {
				id: 787607,
				referee: 'S. Schärer',
				timezone: 'UTC',
				date: '2021-10-20T19:00:00+00:00',
				timestamp: 1634756400,
				periods: {
					first: 1634756400,
					second: 1634760000,
				},
				venue: {
					id: null,
					name: 'Saint-Petersburg Stadium',
					city: 'St. Petersburg',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 3',
			},
			teams: {
				home: {
					id: 596,
					name: 'Zenit Saint Petersburg',
					logo: 'https://media-4.api-sports.io/football/teams/596.png',
					winner: false,
				},
				away: {
					id: 496,
					name: 'Juventus',
					logo: 'https://media-5.api-sports.io/football/teams/496.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 787608,
				referee: 'Artur Soares Dias',
				timezone: 'UTC',
				date: '2021-11-02T17:45:00+00:00',
				timestamp: 1635875100,
				periods: {
					first: 1635875100,
					second: 1635878700,
				},
				venue: {
					id: 752,
					name: 'VOLKSWAGEN ARENA',
					city: 'Wolfsburg',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 161,
					name: 'VfL Wolfsburg',
					logo: 'https://media-4.api-sports.io/football/teams/161.png',
					winner: true,
				},
				away: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-2.api-sports.io/football/teams/571.png',
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
					away: 1,
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
		},
		{
			fixture: {
				id: 787609,
				referee: 'F. Brych',
				timezone: 'UTC',
				date: '2021-11-02T17:45:00+00:00',
				timestamp: 1635875100,
				periods: {
					first: 1635875100,
					second: 1635878700,
				},
				venue: {
					id: 1518,
					name: 'Eleda Stadion',
					city: 'Malmö',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-6.api-sports.io/football/teams/375.png',
					winner: false,
				},
				away: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-4.api-sports.io/football/teams/49.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 787610,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2021-11-02T20:00:00+00:00',
				timestamp: 1635883200,
				periods: {
					first: 1635883200,
					second: 1635886800,
				},
				venue: {
					id: 700,
					name: 'Allianz Arena',
					city: 'München',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-5.api-sports.io/football/teams/157.png',
					winner: true,
				},
				away: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-5.api-sports.io/football/teams/211.png',
					winner: false,
				},
			},
			goals: {
				home: 5,
				away: 2,
			},
			score: {
				halftime: {
					home: 2,
					away: 1,
				},
				fulltime: {
					home: 5,
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
		},
		{
			fixture: {
				id: 787611,
				referee: 'O. Hațegan',
				timezone: 'UTC',
				date: '2021-11-02T20:00:00+00:00',
				timestamp: 1635883200,
				periods: {
					first: 1635883200,
					second: 1635886800,
				},
				venue: {
					id: null,
					name: "NSK Olimpijs'kyj",
					city: 'Kiev',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 572,
					name: 'Dynamo Kyiv',
					logo: 'https://media-4.api-sports.io/football/teams/572.png',
					winner: false,
				},
				away: {
					id: 529,
					name: 'Barcelona',
					logo: 'https://media-1.api-sports.io/football/teams/529.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 787612,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2021-11-02T20:00:00+00:00',
				timestamp: 1635883200,
				periods: {
					first: 1635883200,
					second: 1635886800,
				},
				venue: {
					id: 879,
					name: 'Gewiss Stadium',
					city: 'Bergamo',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 499,
					name: 'Atalanta',
					logo: 'https://media-2.api-sports.io/football/teams/499.png',
					winner: null,
				},
				away: {
					id: 33,
					name: 'Manchester United',
					logo: 'https://media-2.api-sports.io/football/teams/33.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 2,
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
		},
		{
			fixture: {
				id: 787613,
				referee: 'S. Gözübüyük',
				timezone: 'UTC',
				date: '2021-11-02T20:00:00+00:00',
				timestamp: 1635883200,
				periods: {
					first: 1635883200,
					second: 1635886800,
				},
				venue: {
					id: 1498,
					name: 'Estadio de la Cerámica',
					city: 'Villarreal',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-2.api-sports.io/football/teams/533.png',
					winner: true,
				},
				away: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-6.api-sports.io/football/teams/565.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787614,
				referee: 'I. Kovacs',
				timezone: 'UTC',
				date: '2021-11-02T20:00:00+00:00',
				timestamp: 1635883200,
				periods: {
					first: 1635883200,
					second: 1635886800,
				},
				venue: {
					id: 1494,
					name: 'Estadio Ramón Sánchez Pizjuán',
					city: 'Sevilla',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 536,
					name: 'Sevilla',
					logo: 'https://media-4.api-sports.io/football/teams/536.png',
					winner: false,
				},
				away: {
					id: 79,
					name: 'Lille',
					logo: 'https://media-1.api-sports.io/football/teams/79.png',
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
		},
		{
			fixture: {
				id: 787615,
				referee: 'Alejandro Hernández',
				timezone: 'UTC',
				date: '2021-11-02T20:00:00+00:00',
				timestamp: 1635883200,
				periods: {
					first: 1635883200,
					second: 1635886800,
				},
				venue: {
					id: 909,
					name: 'Allianz Stadium',
					city: 'Torino',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 496,
					name: 'Juventus',
					logo: 'https://media-6.api-sports.io/football/teams/496.png',
					winner: true,
				},
				away: {
					id: 596,
					name: 'Zenit Saint Petersburg',
					logo: 'https://media-2.api-sports.io/football/teams/596.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 4,
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
		},
		{
			fixture: {
				id: 787616,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2021-11-03T17:45:00+00:00',
				timestamp: 1635961500,
				periods: {
					first: 1635961500,
					second: 1635965100,
				},
				venue: {
					id: 907,
					name: 'Stadio Giuseppe Meazza',
					city: 'Milano',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 489,
					name: 'AC Milan',
					logo: 'https://media-4.api-sports.io/football/teams/489.png',
					winner: null,
				},
				away: {
					id: 212,
					name: 'FC Porto',
					logo: 'https://media-2.api-sports.io/football/teams/212.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 787617,
				referee: 'B. Bastien',
				timezone: 'UTC',
				date: '2021-11-03T17:45:00+00:00',
				timestamp: 1635961500,
				periods: {
					first: 1635961500,
					second: 1635965100,
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
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-5.api-sports.io/football/teams/541.png',
					winner: true,
				},
				away: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-6.api-sports.io/football/teams/550.png',
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
					away: 1,
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
		},
		{
			fixture: {
				id: 787618,
				referee: 'Antonio Mateu',
				timezone: 'UTC',
				date: '2021-11-03T20:00:00+00:00',
				timestamp: 1635969600,
				periods: {
					first: 1635969600,
					second: 1635973200,
				},
				venue: {
					id: 555,
					name: 'Etihad Stadium',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-4.api-sports.io/football/teams/50.png',
					winner: true,
				},
				away: {
					id: 569,
					name: 'Club Brugge KV',
					logo: 'https://media-5.api-sports.io/football/teams/569.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 4,
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
		},
		{
			fixture: {
				id: 787619,
				referee: 'A. Ekberg',
				timezone: 'UTC',
				date: '2021-11-03T20:00:00+00:00',
				timestamp: 1635969600,
				periods: {
					first: 1635969600,
					second: 1635973200,
				},
				venue: {
					id: 738,
					name: 'Red Bull Arena',
					city: 'Leipzig',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 173,
					name: 'RB Leipzig',
					logo: 'https://media-2.api-sports.io/football/teams/173.png',
					winner: null,
				},
				away: {
					id: 85,
					name: 'Paris Saint Germain',
					logo: 'https://media-4.api-sports.io/football/teams/85.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 2,
				},
				fulltime: {
					home: 2,
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
		},
		{
			fixture: {
				id: 787620,
				referee: 'D. Makkelie',
				timezone: 'UTC',
				date: '2021-11-03T20:00:00+00:00',
				timestamp: 1635969600,
				periods: {
					first: 1635969600,
					second: 1635973200,
				},
				venue: {
					id: 550,
					name: 'Anfield',
					city: 'Liverpool',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-5.api-sports.io/football/teams/40.png',
					winner: true,
				},
				away: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-4.api-sports.io/football/teams/530.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787621,
				referee: 'M. Oliver',
				timezone: 'UTC',
				date: '2021-11-03T20:00:00+00:00',
				timestamp: 1635969600,
				periods: {
					first: 1635969600,
					second: 1635973200,
				},
				venue: {
					id: 702,
					name: 'Signal-Iduna-Park',
					city: 'Dortmund',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 165,
					name: 'Borussia Dortmund',
					logo: 'https://media-5.api-sports.io/football/teams/165.png',
					winner: false,
				},
				away: {
					id: 194,
					name: 'Ajax',
					logo: 'https://media-5.api-sports.io/football/teams/194.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 3,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 3,
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
		},
		{
			fixture: {
				id: 787622,
				referee: 'S. Karasev',
				timezone: 'UTC',
				date: '2021-11-03T20:00:00+00:00',
				timestamp: 1635969600,
				periods: {
					first: 1635969600,
					second: 1635973200,
				},
				venue: {
					id: 1293,
					name: 'Estádio José Alvalade',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 228,
					name: 'Sporting CP',
					logo: 'https://media-1.api-sports.io/football/teams/228.png',
					winner: true,
				},
				away: {
					id: 549,
					name: 'Besiktas',
					logo: 'https://media-1.api-sports.io/football/teams/549.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 0,
			},
			score: {
				halftime: {
					home: 3,
					away: 0,
				},
				fulltime: {
					home: 4,
					away: 0,
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
		},
		{
			fixture: {
				id: 787623,
				referee: 'F. Zwayer',
				timezone: 'UTC',
				date: '2021-11-03T20:00:00+00:00',
				timestamp: 1635969600,
				periods: {
					first: 1635969600,
					second: 1635973200,
				},
				venue: {
					id: 1093,
					name: 'Bolshaya Sportivnaya Arena',
					city: 'Tiraspol',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 4',
			},
			teams: {
				home: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-1.api-sports.io/football/teams/568.png',
					winner: false,
				},
				away: {
					id: 505,
					name: 'Inter',
					logo: 'https://media-5.api-sports.io/football/teams/505.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 3,
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
		},
		{
			fixture: {
				id: 787624,
				referee: 'H. Meler',
				timezone: 'UTC',
				date: '2021-11-23T17:45:00+00:00',
				timestamp: 1637689500,
				periods: {
					first: 1637689500,
					second: 1637693100,
				},
				venue: {
					id: null,
					name: "NSK Olimpijs'kyj",
					city: 'Kiev',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 572,
					name: 'Dynamo Kyiv',
					logo: 'https://media-4.api-sports.io/football/teams/572.png',
					winner: false,
				},
				away: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-2.api-sports.io/football/teams/157.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
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
		},
		{
			fixture: {
				id: 787625,
				referee: 'F. Brych',
				timezone: 'UTC',
				date: '2021-11-23T17:45:00+00:00',
				timestamp: 1637689500,
				periods: {
					first: 1637689500,
					second: 1637693100,
				},
				venue: {
					id: 1498,
					name: 'Estadio de la Cerámica',
					city: 'Villarreal',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-5.api-sports.io/football/teams/533.png',
					winner: false,
				},
				away: {
					id: 33,
					name: 'Manchester United',
					logo: 'https://media-4.api-sports.io/football/teams/33.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 787626,
				referee: 'S. Karasev',
				timezone: 'UTC',
				date: '2021-11-23T20:00:00+00:00',
				timestamp: 1637697600,
				periods: {
					first: 1637697600,
					second: 1637701200,
				},
				venue: {
					id: 1462,
					name: 'Camp Nou',
					city: 'Barcelona',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 529,
					name: 'Barcelona',
					logo: 'https://media-4.api-sports.io/football/teams/529.png',
					winner: null,
				},
				away: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-2.api-sports.io/football/teams/211.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 787627,
				referee: 'D. Siebert',
				timezone: 'UTC',
				date: '2021-11-23T20:00:00+00:00',
				timestamp: 1637697600,
				periods: {
					first: 1637697600,
					second: 1637701200,
				},
				venue: {
					id: 10500,
					name: 'Stadion Wankdorf',
					city: 'Bern',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-1.api-sports.io/football/teams/565.png',
					winner: null,
				},
				away: {
					id: 499,
					name: 'Atalanta',
					logo: 'https://media-2.api-sports.io/football/teams/499.png',
					winner: null,
				},
			},
			goals: {
				home: 3,
				away: 3,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 3,
					away: 3,
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
		},
		{
			fixture: {
				id: 787628,
				referee: 'C. Çakιr',
				timezone: 'UTC',
				date: '2021-11-23T20:00:00+00:00',
				timestamp: 1637697600,
				periods: {
					first: 1637697600,
					second: 1637701200,
				},
				venue: {
					id: 1494,
					name: 'Estadio Ramón Sánchez Pizjuán',
					city: 'Sevilla',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 536,
					name: 'Sevilla',
					logo: 'https://media-1.api-sports.io/football/teams/536.png',
					winner: true,
				},
				away: {
					id: 161,
					name: 'VfL Wolfsburg',
					logo: 'https://media-6.api-sports.io/football/teams/161.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787629,
				referee: 'A. Taylor',
				timezone: 'UTC',
				date: '2021-11-23T20:00:00+00:00',
				timestamp: 1637697600,
				periods: {
					first: 1637697600,
					second: 1637701200,
				},
				venue: {
					id: 655,
					name: 'Stade Pierre-Mauroy',
					city: "Villeneuve d'Ascq",
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 79,
					name: 'Lille',
					logo: 'https://media-4.api-sports.io/football/teams/79.png',
					winner: true,
				},
				away: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-1.api-sports.io/football/teams/571.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787630,
				referee: 'S. Jovanović',
				timezone: 'UTC',
				date: '2021-11-23T20:00:00+00:00',
				timestamp: 1637697600,
				periods: {
					first: 1637697600,
					second: 1637701200,
				},
				venue: {
					id: 519,
					name: 'Stamford Bridge',
					city: 'London',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-6.api-sports.io/football/teams/49.png',
					winner: true,
				},
				away: {
					id: 496,
					name: 'Juventus',
					logo: 'https://media-2.api-sports.io/football/teams/496.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 4,
					away: 0,
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
		},
		{
			fixture: {
				id: 787631,
				referee: 'A. Treimanis',
				timezone: 'UTC',
				date: '2021-11-23T20:00:00+00:00',
				timestamp: 1637697600,
				periods: {
					first: 1637697600,
					second: 1637701200,
				},
				venue: {
					id: 1518,
					name: 'Eleda Stadion',
					city: 'Malmö',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-2.api-sports.io/football/teams/375.png',
					winner: null,
				},
				away: {
					id: 596,
					name: 'Zenit Saint Petersburg',
					logo: 'https://media-4.api-sports.io/football/teams/596.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 787632,
				referee: 'I. Peljto',
				timezone: 'UTC',
				date: '2021-11-24T17:45:00+00:00',
				timestamp: 1637775900,
				periods: {
					first: 1637775900,
					second: 1637779500,
				},
				venue: {
					id: 1578,
					name: 'Vodafone Park',
					city: 'İstanbul',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 549,
					name: 'Besiktas',
					logo: 'https://media-4.api-sports.io/football/teams/549.png',
					winner: false,
				},
				away: {
					id: 194,
					name: 'Ajax',
					logo: 'https://media-1.api-sports.io/football/teams/194.png',
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
					away: 0,
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
		},
		{
			fixture: {
				id: 787633,
				referee: 'O. Hațegan',
				timezone: 'UTC',
				date: '2021-11-24T17:45:00+00:00',
				timestamp: 1637775900,
				periods: {
					first: 1637775900,
					second: 1637779500,
				},
				venue: {
					id: 907,
					name: 'Stadio Giuseppe Meazza',
					city: 'Milano',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 505,
					name: 'Inter',
					logo: 'https://media-5.api-sports.io/football/teams/505.png',
					winner: true,
				},
				away: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-6.api-sports.io/football/teams/550.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787634,
				referee: 'D. Orsato',
				timezone: 'UTC',
				date: '2021-11-24T20:00:00+00:00',
				timestamp: 1637784000,
				periods: {
					first: 1637784000,
					second: 1637787600,
				},
				venue: {
					id: 555,
					name: 'Etihad Stadium',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-1.api-sports.io/football/teams/50.png',
					winner: true,
				},
				away: {
					id: 85,
					name: 'Paris Saint Germain',
					logo: 'https://media-1.api-sports.io/football/teams/85.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 787635,
				referee: 'D. Massa',
				timezone: 'UTC',
				date: '2021-11-24T20:00:00+00:00',
				timestamp: 1637784000,
				periods: {
					first: 1637784000,
					second: 1637787600,
				},
				venue: {
					id: 176,
					name: 'Jan Breydelstadion',
					city: 'Brugge',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 569,
					name: 'Club Brugge KV',
					logo: 'https://media-1.api-sports.io/football/teams/569.png',
					winner: false,
				},
				away: {
					id: 173,
					name: 'RB Leipzig',
					logo: 'https://media-4.api-sports.io/football/teams/173.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 5,
			},
			score: {
				halftime: {
					home: 0,
					away: 4,
				},
				fulltime: {
					home: 0,
					away: 5,
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
		},
		{
			fixture: {
				id: 787636,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2021-11-24T20:00:00+00:00',
				timestamp: 1637784000,
				periods: {
					first: 1637784000,
					second: 1637787600,
				},
				venue: {
					id: 1461,
					name: 'Estadio Wanda Metropolitano',
					city: 'Madrid',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-4.api-sports.io/football/teams/530.png',
					winner: false,
				},
				away: {
					id: 489,
					name: 'AC Milan',
					logo: 'https://media-4.api-sports.io/football/teams/489.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 787637,
				referee: 'F. Zwayer',
				timezone: 'UTC',
				date: '2021-11-24T20:00:00+00:00',
				timestamp: 1637784000,
				periods: {
					first: 1637784000,
					second: 1637787600,
				},
				venue: {
					id: 550,
					name: 'Anfield',
					city: 'Liverpool',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-5.api-sports.io/football/teams/40.png',
					winner: true,
				},
				away: {
					id: 212,
					name: 'FC Porto',
					logo: 'https://media-4.api-sports.io/football/teams/212.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787638,
				referee: 'Carlos del Cerro',
				timezone: 'UTC',
				date: '2021-11-24T20:00:00+00:00',
				timestamp: 1637784000,
				periods: {
					first: 1637784000,
					second: 1637787600,
				},
				venue: {
					id: 1293,
					name: 'Estádio José Alvalade',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 228,
					name: 'Sporting CP',
					logo: 'https://media-2.api-sports.io/football/teams/228.png',
					winner: true,
				},
				away: {
					id: 165,
					name: 'Borussia Dortmund',
					logo: 'https://media-2.api-sports.io/football/teams/165.png',
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
					away: 0,
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
		},
		{
			fixture: {
				id: 787639,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2021-11-24T20:00:00+00:00',
				timestamp: 1637784000,
				periods: {
					first: 1637784000,
					second: 1637787600,
				},
				venue: {
					id: 1093,
					name: 'Bolshaya Sportivnaya Arena',
					city: 'Tiraspol',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 5',
			},
			teams: {
				home: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-6.api-sports.io/football/teams/568.png',
					winner: false,
				},
				away: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-6.api-sports.io/football/teams/541.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 0,
					away: 3,
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
		},
		{
			fixture: {
				id: 787640,
				referee: 'Jesús Gil',
				timezone: 'UTC',
				date: '2021-12-07T17:45:00+00:00',
				timestamp: 1638899100,
				periods: {
					first: 1638899100,
					second: 1638902700,
				},
				venue: {
					id: 671,
					name: 'Parc des Princes',
					city: 'Paris',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 85,
					name: 'Paris Saint Germain',
					logo: 'https://media-5.api-sports.io/football/teams/85.png',
					winner: true,
				},
				away: {
					id: 569,
					name: 'Club Brugge KV',
					logo: 'https://media-2.api-sports.io/football/teams/569.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 1,
			},
			score: {
				halftime: {
					home: 3,
					away: 0,
				},
				fulltime: {
					home: 4,
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
		},
		{
			fixture: {
				id: 787641,
				referee: 'S. Schärer',
				timezone: 'UTC',
				date: '2021-12-07T17:45:00+00:00',
				timestamp: 1638899100,
				periods: {
					first: 1638899100,
					second: 1638902700,
				},
				venue: {
					id: 738,
					name: 'Red Bull Arena',
					city: 'Leipzig',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 173,
					name: 'RB Leipzig',
					logo: 'https://media-5.api-sports.io/football/teams/173.png',
					winner: true,
				},
				away: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-1.api-sports.io/football/teams/50.png',
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
		},
		{
			fixture: {
				id: 787642,
				referee: 'D. Makkelie',
				timezone: 'UTC',
				date: '2021-12-07T20:00:00+00:00',
				timestamp: 1638907200,
				periods: {
					first: 1638907200,
					second: 1638910800,
				},
				venue: {
					id: 907,
					name: 'Stadio Giuseppe Meazza',
					city: 'Milano',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 489,
					name: 'AC Milan',
					logo: 'https://media-1.api-sports.io/football/teams/489.png',
					winner: false,
				},
				away: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-5.api-sports.io/football/teams/40.png',
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
		},
		{
			fixture: {
				id: 787643,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2021-12-07T20:00:00+00:00',
				timestamp: 1638907200,
				periods: {
					first: 1638907200,
					second: 1638910800,
				},
				venue: {
					id: 1286,
					name: 'Estádio Do Dragão',
					city: 'Porto',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 212,
					name: 'FC Porto',
					logo: 'https://media-5.api-sports.io/football/teams/212.png',
					winner: false,
				},
				away: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-5.api-sports.io/football/teams/530.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 3,
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
		},
		{
			fixture: {
				id: 787644,
				referee: 'F. Letexier',
				timezone: 'UTC',
				date: '2021-12-07T20:00:00+00:00',
				timestamp: 1638907200,
				periods: {
					first: 1638907200,
					second: 1638910800,
				},
				venue: {
					id: 702,
					name: 'Signal-Iduna-Park',
					city: 'Dortmund',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 165,
					name: 'Borussia Dortmund',
					logo: 'https://media-2.api-sports.io/football/teams/165.png',
					winner: true,
				},
				away: {
					id: 549,
					name: 'Besiktas',
					logo: 'https://media-1.api-sports.io/football/teams/549.png',
					winner: false,
				},
			},
			goals: {
				home: 5,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 5,
					away: 0,
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
		},
		{
			fixture: {
				id: 787645,
				referee: 'D. Massa',
				timezone: 'UTC',
				date: '2021-12-07T20:00:00+00:00',
				timestamp: 1638907200,
				periods: {
					first: 1638907200,
					second: 1638910800,
				},
				venue: {
					id: 1117,
					name: 'Johan Cruijff Arena',
					city: 'Amsterdam',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 194,
					name: 'Ajax',
					logo: 'https://media-5.api-sports.io/football/teams/194.png',
					winner: true,
				},
				away: {
					id: 228,
					name: 'Sporting CP',
					logo: 'https://media-4.api-sports.io/football/teams/228.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 2,
			},
			score: {
				halftime: {
					home: 2,
					away: 1,
				},
				fulltime: {
					home: 4,
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
		},
		{
			fixture: {
				id: 787646,
				referee: 'F. Brych',
				timezone: 'UTC',
				date: '2021-12-07T20:00:00+00:00',
				timestamp: 1638907200,
				periods: {
					first: 1638907200,
					second: 1638910800,
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
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-1.api-sports.io/football/teams/541.png',
					winner: true,
				},
				away: {
					id: 505,
					name: 'Inter',
					logo: 'https://media-6.api-sports.io/football/teams/505.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787647,
				referee: 'D. Rumšas',
				timezone: 'UTC',
				date: '2021-12-07T20:00:00+00:00',
				timestamp: 1638907200,
				periods: {
					first: 1638907200,
					second: 1638910800,
				},
				venue: {
					id: null,
					name: "NSK Olimpijs'kyj",
					city: 'Kiev',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 550,
					name: 'Shakhtar Donetsk',
					logo: 'https://media-4.api-sports.io/football/teams/550.png',
					winner: null,
				},
				away: {
					id: 568,
					name: 'Sheriff Tiraspol',
					logo: 'https://media-4.api-sports.io/football/teams/568.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 787648,
				referee: 'I. Peljto',
				timezone: 'UTC',
				date: '2021-12-08T17:45:00+00:00',
				timestamp: 1638985500,
				periods: {
					first: 1638985500,
					second: 1638989100,
				},
				venue: {
					id: 909,
					name: 'Allianz Stadium',
					city: 'Torino',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 496,
					name: 'Juventus',
					logo: 'https://media-6.api-sports.io/football/teams/496.png',
					winner: true,
				},
				away: {
					id: 375,
					name: 'Malmo FF',
					logo: 'https://media-6.api-sports.io/football/teams/375.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787649,
				referee: 'S. Gözübüyük',
				timezone: 'UTC',
				date: '2021-12-08T17:45:00+00:00',
				timestamp: 1638985500,
				periods: {
					first: 1638985500,
					second: 1638989100,
				},
				venue: {
					id: null,
					name: 'Saint-Petersburg Stadium',
					city: 'St. Petersburg',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 596,
					name: 'Zenit Saint Petersburg',
					logo: 'https://media-5.api-sports.io/football/teams/596.png',
					winner: null,
				},
				away: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-6.api-sports.io/football/teams/49.png',
					winner: null,
				},
			},
			goals: {
				home: 3,
				away: 3,
			},
			score: {
				halftime: {
					home: 2,
					away: 1,
				},
				fulltime: {
					home: 3,
					away: 3,
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
		},
		{
			fixture: {
				id: 787650,
				referee: 'O. Hațegan',
				timezone: 'UTC',
				date: '2021-12-08T20:00:00+00:00',
				timestamp: 1638993600,
				periods: {
					first: 1638993600,
					second: 1638997200,
				},
				venue: {
					id: 700,
					name: 'Allianz Arena',
					city: 'München',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-5.api-sports.io/football/teams/157.png',
					winner: true,
				},
				away: {
					id: 529,
					name: 'Barcelona',
					logo: 'https://media-6.api-sports.io/football/teams/529.png',
					winner: false,
				},
			},
			goals: {
				home: 3,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 3,
					away: 0,
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
		},
		{
			fixture: {
				id: 787651,
				referee: 'D. Aytekin',
				timezone: 'UTC',
				date: '2021-12-08T20:00:00+00:00',
				timestamp: 1638993600,
				periods: {
					first: 1638993600,
					second: 1638997200,
				},
				venue: {
					id: null,
					name: 'Estádio do Sport Lisboa e Benfica',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-4.api-sports.io/football/teams/211.png',
					winner: true,
				},
				away: {
					id: 572,
					name: 'Dynamo Kyiv',
					logo: 'https://media-4.api-sports.io/football/teams/572.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 787652,
				referee: 'B. Bastien',
				timezone: 'UTC',
				date: '2021-12-08T20:00:00+00:00',
				timestamp: 1638993600,
				periods: {
					first: 1638993600,
					second: 1638997200,
				},
				venue: {
					id: 556,
					name: 'Old Trafford',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 33,
					name: 'Manchester United',
					logo: 'https://media-2.api-sports.io/football/teams/33.png',
					winner: null,
				},
				away: {
					id: 565,
					name: 'BSC Young Boys',
					logo: 'https://media-2.api-sports.io/football/teams/565.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 787653,
				referee: 'A. Taylor',
				timezone: 'UTC',
				date: '2021-12-09T18:00:00+00:00',
				timestamp: 1639072800,
				periods: {
					first: 1639072800,
					second: 1639076400,
				},
				venue: {
					id: 879,
					name: 'Gewiss Stadium',
					city: 'Bergamo',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 499,
					name: 'Atalanta',
					logo: 'https://media-5.api-sports.io/football/teams/499.png',
					winner: false,
				},
				away: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-6.api-sports.io/football/teams/533.png',
					winner: true,
				},
			},
			goals: {
				home: 2,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 2,
					away: 3,
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
		},
		{
			fixture: {
				id: 787654,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2021-12-08T20:00:00+00:00',
				timestamp: 1638993600,
				periods: {
					first: 1638993600,
					second: 1638997200,
				},
				venue: {
					id: 148,
					name: 'Red Bull Arena',
					city: 'Wals-Siezenheim',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-4.api-sports.io/football/teams/571.png',
					winner: true,
				},
				away: {
					id: 536,
					name: 'Sevilla',
					logo: 'https://media-1.api-sports.io/football/teams/536.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 787655,
				referee: 'D. Orsato',
				timezone: 'UTC',
				date: '2021-12-08T20:00:00+00:00',
				timestamp: 1638993600,
				periods: {
					first: 1638993600,
					second: 1638997200,
				},
				venue: {
					id: 752,
					name: 'VOLKSWAGEN ARENA',
					city: 'Wolfsburg',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Group Stage - 6',
			},
			teams: {
				home: {
					id: 161,
					name: 'VfL Wolfsburg',
					logo: 'https://media-5.api-sports.io/football/teams/161.png',
					winner: false,
				},
				away: {
					id: 79,
					name: 'Lille',
					logo: 'https://media-1.api-sports.io/football/teams/79.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 1,
					away: 3,
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
		},
		{
			fixture: {
				id: 816240,
				referee: 'S. Jovanović',
				timezone: 'UTC',
				date: '2022-02-15T20:00:00+00:00',
				timestamp: 1644955200,
				periods: {
					first: 1644955200,
					second: 1644958800,
				},
				venue: {
					id: 1293,
					name: 'Estádio José Alvalade',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 228,
					name: 'Sporting CP',
					logo: 'https://media-2.api-sports.io/football/teams/228.png',
					winner: false,
				},
				away: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-5.api-sports.io/football/teams/50.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 5,
			},
			score: {
				halftime: {
					home: 0,
					away: 4,
				},
				fulltime: {
					home: 0,
					away: 5,
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
		},
		{
			fixture: {
				id: 816241,
				referee: 'H. Meler',
				timezone: 'UTC',
				date: '2022-03-09T20:00:00+00:00',
				timestamp: 1646856000,
				periods: {
					first: 1646856000,
					second: 1646859600,
				},
				venue: {
					id: 555,
					name: 'Etihad Stadium',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-1.api-sports.io/football/teams/50.png',
					winner: null,
				},
				away: {
					id: 228,
					name: 'Sporting CP',
					logo: 'https://media-2.api-sports.io/football/teams/228.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 816242,
				referee: 'D. Orsato',
				timezone: 'UTC',
				date: '2022-02-15T20:00:00+00:00',
				timestamp: 1644955200,
				periods: {
					first: 1644955200,
					second: 1644958800,
				},
				venue: {
					id: 671,
					name: 'Parc des Princes',
					city: 'Paris',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 85,
					name: 'Paris Saint Germain',
					logo: 'https://media-6.api-sports.io/football/teams/85.png',
					winner: true,
				},
				away: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-1.api-sports.io/football/teams/541.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 816243,
				referee: 'D. Makkelie',
				timezone: 'UTC',
				date: '2022-03-09T20:00:00+00:00',
				timestamp: 1646856000,
				periods: {
					first: 1646856000,
					second: 1646859600,
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
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-4.api-sports.io/football/teams/541.png',
					winner: true,
				},
				away: {
					id: 85,
					name: 'Paris Saint Germain',
					logo: 'https://media-5.api-sports.io/football/teams/85.png',
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
		},
		{
			fixture: {
				id: 816244,
				referee: 'M. Oliver',
				timezone: 'UTC',
				date: '2022-02-16T20:00:00+00:00',
				timestamp: 1645041600,
				periods: {
					first: 1645041600,
					second: 1645045200,
				},
				venue: {
					id: 148,
					name: 'Red Bull Arena',
					city: 'Wals-Siezenheim',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-2.api-sports.io/football/teams/571.png',
					winner: null,
				},
				away: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-4.api-sports.io/football/teams/157.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 816245,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2022-03-08T20:00:00+00:00',
				timestamp: 1646769600,
				periods: {
					first: 1646769600,
					second: 1646773200,
				},
				venue: {
					id: 700,
					name: 'Allianz Arena',
					city: 'München',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-5.api-sports.io/football/teams/157.png',
					winner: true,
				},
				away: {
					id: 571,
					name: 'Red Bull Salzburg',
					logo: 'https://media-6.api-sports.io/football/teams/571.png',
					winner: false,
				},
			},
			goals: {
				home: 7,
				away: 1,
			},
			score: {
				halftime: {
					home: 4,
					away: 0,
				},
				fulltime: {
					home: 7,
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
		},
		{
			fixture: {
				id: 816246,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2022-02-16T20:00:00+00:00',
				timestamp: 1645041600,
				periods: {
					first: 1645041600,
					second: 1645045200,
				},
				venue: {
					id: 907,
					name: 'Stadio Giuseppe Meazza',
					city: 'Milano',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 505,
					name: 'Inter',
					logo: 'https://media-2.api-sports.io/football/teams/505.png',
					winner: false,
				},
				away: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-6.api-sports.io/football/teams/40.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 2,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 816247,
				referee: 'Antonio Mateu',
				timezone: 'UTC',
				date: '2022-03-08T20:00:00+00:00',
				timestamp: 1646769600,
				periods: {
					first: 1646769600,
					second: 1646773200,
				},
				venue: {
					id: 550,
					name: 'Anfield',
					city: 'Liverpool',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-6.api-sports.io/football/teams/40.png',
					winner: false,
				},
				away: {
					id: 505,
					name: 'Inter',
					logo: 'https://media-6.api-sports.io/football/teams/505.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 816248,
				referee: 'Jesús Gil',
				timezone: 'UTC',
				date: '2022-02-22T20:00:00+00:00',
				timestamp: 1645560000,
				periods: {
					first: 1645560000,
					second: 1645563600,
				},
				venue: {
					id: 519,
					name: 'Stamford Bridge',
					city: 'London',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-6.api-sports.io/football/teams/49.png',
					winner: true,
				},
				away: {
					id: 79,
					name: 'Lille',
					logo: 'https://media-6.api-sports.io/football/teams/79.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 816249,
				referee: 'D. Massa',
				timezone: 'UTC',
				date: '2022-03-16T20:00:00+00:00',
				timestamp: 1647460800,
				periods: {
					first: 1647460800,
					second: 1647464400,
				},
				venue: {
					id: 655,
					name: 'Stade Pierre-Mauroy',
					city: "Villeneuve d'Ascq",
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 79,
					name: 'Lille',
					logo: 'https://media-2.api-sports.io/football/teams/79.png',
					winner: false,
				},
				away: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-4.api-sports.io/football/teams/49.png',
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
		},
		{
			fixture: {
				id: 816250,
				referee: 'D. Siebert',
				timezone: 'UTC',
				date: '2022-02-22T20:00:00+00:00',
				timestamp: 1645560000,
				periods: {
					first: 1645560000,
					second: 1645563600,
				},
				venue: {
					id: 1498,
					name: 'Estadio de la Cerámica',
					city: 'Villarreal',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-6.api-sports.io/football/teams/533.png',
					winner: null,
				},
				away: {
					id: 496,
					name: 'Juventus',
					logo: 'https://media-1.api-sports.io/football/teams/496.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 816251,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2022-03-16T20:00:00+00:00',
				timestamp: 1647460800,
				periods: {
					first: 1647460800,
					second: 1647464400,
				},
				venue: {
					id: 909,
					name: 'Allianz Stadium',
					city: 'Torino',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 496,
					name: 'Juventus',
					logo: 'https://media-4.api-sports.io/football/teams/496.png',
					winner: false,
				},
				away: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-4.api-sports.io/football/teams/533.png',
					winner: true,
				},
			},
			goals: {
				home: 0,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 0,
					away: 3,
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
		},
		{
			fixture: {
				id: 816252,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2022-02-23T20:00:00+00:00',
				timestamp: 1645646400,
				periods: {
					first: 1645646400,
					second: 1645650000,
				},
				venue: {
					id: null,
					name: 'Estádio do Sport Lisboa e Benfica',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-5.api-sports.io/football/teams/211.png',
					winner: null,
				},
				away: {
					id: 194,
					name: 'Ajax',
					logo: 'https://media-6.api-sports.io/football/teams/194.png',
					winner: null,
				},
			},
			goals: {
				home: 2,
				away: 2,
			},
			score: {
				halftime: {
					home: 1,
					away: 2,
				},
				fulltime: {
					home: 2,
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
		},
		{
			fixture: {
				id: 816253,
				referee: 'Carlos del Cerro',
				timezone: 'UTC',
				date: '2022-03-15T20:00:00+00:00',
				timestamp: 1647374400,
				periods: {
					first: 1647374400,
					second: 1647378000,
				},
				venue: {
					id: 1117,
					name: 'Johan Cruijff Arena',
					city: 'Amsterdam',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 194,
					name: 'Ajax',
					logo: 'https://media-6.api-sports.io/football/teams/194.png',
					winner: false,
				},
				away: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-1.api-sports.io/football/teams/211.png',
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
					home: 0,
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
		},
		{
			fixture: {
				id: 816254,
				referee: 'O. Hațegan',
				timezone: 'UTC',
				date: '2022-02-23T20:00:00+00:00',
				timestamp: 1645646400,
				periods: {
					first: 1645646400,
					second: 1645650000,
				},
				venue: {
					id: 1461,
					name: 'Estadio Wanda Metropolitano',
					city: 'Madrid',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-1.api-sports.io/football/teams/530.png',
					winner: null,
				},
				away: {
					id: 33,
					name: 'Manchester United',
					logo: 'https://media-6.api-sports.io/football/teams/33.png',
					winner: null,
				},
			},
			goals: {
				home: 1,
				away: 1,
			},
			score: {
				halftime: {
					home: 1,
					away: 0,
				},
				fulltime: {
					home: 1,
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
		},
		{
			fixture: {
				id: 816255,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2022-03-15T20:00:00+00:00',
				timestamp: 1647374400,
				periods: {
					first: 1647374400,
					second: 1647378000,
				},
				venue: {
					id: 556,
					name: 'Old Trafford',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Round of 16',
			},
			teams: {
				home: {
					id: 33,
					name: 'Manchester United',
					logo: 'https://media-2.api-sports.io/football/teams/33.png',
					winner: false,
				},
				away: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-6.api-sports.io/football/teams/530.png',
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
					away: 1,
				},
				fulltime: {
					home: 0,
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
		},
		{
			fixture: {
				id: 851364,
				referee: 'I. Kovacs',
				timezone: 'UTC',
				date: '2022-04-05T19:00:00+00:00',
				timestamp: 1649185200,
				periods: {
					first: 1649185200,
					second: 1649188800,
				},
				venue: {
					id: 555,
					name: 'Etihad Stadium',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Quarter-finals',
			},
			teams: {
				home: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-2.api-sports.io/football/teams/50.png',
					winner: true,
				},
				away: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-1.api-sports.io/football/teams/530.png',
					winner: false,
				},
			},
			goals: {
				home: 1,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 851365,
				referee: 'D. Siebert',
				timezone: 'UTC',
				date: '2022-04-13T19:00:00+00:00',
				timestamp: 1649876400,
				periods: {
					first: 1649876400,
					second: 1649880000,
				},
				venue: {
					id: 1461,
					name: 'Estadio Wanda Metropolitano',
					city: 'Madrid',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Quarter-finals',
			},
			teams: {
				home: {
					id: 530,
					name: 'Atletico Madrid',
					logo: 'https://media-4.api-sports.io/football/teams/530.png',
					winner: null,
				},
				away: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-4.api-sports.io/football/teams/50.png',
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
					home: 0,
					away: 0,
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
		},
		{
			fixture: {
				id: 851366,
				referee: 'Jesús Gil',
				timezone: 'UTC',
				date: '2022-04-05T19:00:00+00:00',
				timestamp: 1649185200,
				periods: {
					first: 1649185200,
					second: 1649188800,
				},
				venue: {
					id: null,
					name: 'Estádio do Sport Lisboa e Benfica',
					city: 'Lisboa',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Quarter-finals',
			},
			teams: {
				home: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-1.api-sports.io/football/teams/211.png',
					winner: false,
				},
				away: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-1.api-sports.io/football/teams/40.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 2,
				},
				fulltime: {
					home: 1,
					away: 3,
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
		},
		{
			fixture: {
				id: 851367,
				referee: 'S. Gözübüyük',
				timezone: 'UTC',
				date: '2022-04-13T19:00:00+00:00',
				timestamp: 1649876400,
				periods: {
					first: 1649876400,
					second: 1649880000,
				},
				venue: {
					id: 550,
					name: 'Anfield',
					city: 'Liverpool',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Quarter-finals',
			},
			teams: {
				home: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-6.api-sports.io/football/teams/40.png',
					winner: null,
				},
				away: {
					id: 211,
					name: 'Benfica',
					logo: 'https://media-6.api-sports.io/football/teams/211.png',
					winner: null,
				},
			},
			goals: {
				home: 3,
				away: 3,
			},
			score: {
				halftime: {
					home: 1,
					away: 1,
				},
				fulltime: {
					home: 3,
					away: 3,
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
		},
		{
			fixture: {
				id: 851368,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2022-04-06T19:00:00+00:00',
				timestamp: 1649271600,
				periods: {
					first: 1649271600,
					second: 1649275200,
				},
				venue: {
					id: 519,
					name: 'Stamford Bridge',
					city: 'London',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Quarter-finals',
			},
			teams: {
				home: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-2.api-sports.io/football/teams/49.png',
					winner: false,
				},
				away: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-6.api-sports.io/football/teams/541.png',
					winner: true,
				},
			},
			goals: {
				home: 1,
				away: 3,
			},
			score: {
				halftime: {
					home: 1,
					away: 2,
				},
				fulltime: {
					home: 1,
					away: 3,
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
		},
		{
			fixture: {
				id: 851369,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2022-04-12T19:00:00+00:00',
				timestamp: 1649790000,
				periods: {
					first: 1649790000,
					second: 1649793600,
				},
				venue: {
					id: 1456,
					name: 'Estadio Santiago Bernabéu',
					city: 'Madrid',
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
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Quarter-finals',
			},
			teams: {
				home: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-6.api-sports.io/football/teams/541.png',
					winner: false,
				},
				away: {
					id: 49,
					name: 'Chelsea',
					logo: 'https://media-2.api-sports.io/football/teams/49.png',
					winner: true,
				},
			},
			goals: {
				home: 2,
				away: 3,
			},
			score: {
				halftime: {
					home: 0,
					away: 1,
				},
				fulltime: {
					home: 1,
					away: 3,
				},
				extratime: {
					home: 1,
					away: 0,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 851370,
				referee: 'A. Taylor',
				timezone: 'UTC',
				date: '2022-04-06T19:00:00+00:00',
				timestamp: 1649271600,
				periods: {
					first: 1649271600,
					second: 1649275200,
				},
				venue: {
					id: 1498,
					name: 'Estadio de la Cerámica',
					city: 'Villarreal',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Quarter-finals',
			},
			teams: {
				home: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-4.api-sports.io/football/teams/533.png',
					winner: true,
				},
				away: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-1.api-sports.io/football/teams/157.png',
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
					home: 1,
					away: 0,
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
		},
		{
			fixture: {
				id: 851371,
				referee: 'S. Vinčić',
				timezone: 'UTC',
				date: '2022-04-12T19:00:00+00:00',
				timestamp: 1649790000,
				periods: {
					first: 1649790000,
					second: 1649793600,
				},
				venue: {
					id: 700,
					name: 'Allianz Arena',
					city: 'München',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Quarter-finals',
			},
			teams: {
				home: {
					id: 157,
					name: 'Bayern Munich',
					logo: 'https://media-6.api-sports.io/football/teams/157.png',
					winner: null,
				},
				away: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-2.api-sports.io/football/teams/533.png',
					winner: null,
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
					home: null,
					away: null,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 857630,
				referee: 'I. Kovacs',
				timezone: 'UTC',
				date: '2022-04-26T19:00:00+00:00',
				timestamp: 1650999600,
				periods: {
					first: 1650999600,
					second: 1651003200,
				},
				venue: {
					id: 555,
					name: 'Etihad Stadium',
					city: 'Manchester',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Semi-finals',
			},
			teams: {
				home: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-4.api-sports.io/football/teams/50.png',
					winner: true,
				},
				away: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-4.api-sports.io/football/teams/541.png',
					winner: false,
				},
			},
			goals: {
				home: 4,
				away: 3,
			},
			score: {
				halftime: {
					home: 2,
					away: 1,
				},
				fulltime: {
					home: 4,
					away: 3,
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
		},
		{
			fixture: {
				id: 857631,
				referee: 'D. Orsato',
				timezone: 'UTC',
				date: '2022-05-04T19:00:00+00:00',
				timestamp: 1651690800,
				periods: {
					first: 1651690800,
					second: 1651694400,
				},
				venue: {
					id: 1456,
					name: 'Estadio Santiago Bernabéu',
					city: 'Madrid',
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
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Semi-finals',
			},
			teams: {
				home: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-6.api-sports.io/football/teams/541.png',
					winner: true,
				},
				away: {
					id: 50,
					name: 'Manchester City',
					logo: 'https://media-1.api-sports.io/football/teams/50.png',
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
					home: 2,
					away: 1,
				},
				extratime: {
					home: 1,
					away: 0,
				},
				penalty: {
					home: null,
					away: null,
				},
			},
		},
		{
			fixture: {
				id: 857632,
				referee: 'S. Marciniak',
				timezone: 'UTC',
				date: '2022-04-27T19:00:00+00:00',
				timestamp: 1651086000,
				periods: {
					first: 1651086000,
					second: 1651089600,
				},
				venue: {
					id: 550,
					name: 'Anfield',
					city: 'Liverpool',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Semi-finals',
			},
			teams: {
				home: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-2.api-sports.io/football/teams/40.png',
					winner: true,
				},
				away: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-5.api-sports.io/football/teams/533.png',
					winner: false,
				},
			},
			goals: {
				home: 2,
				away: 0,
			},
			score: {
				halftime: {
					home: 0,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 0,
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
		},
		{
			fixture: {
				id: 857633,
				referee: 'D. Makkelie',
				timezone: 'UTC',
				date: '2022-05-03T19:00:00+00:00',
				timestamp: 1651604400,
				periods: {
					first: 1651604400,
					second: 1651608000,
				},
				venue: {
					id: 1498,
					name: 'Estadio de la Cerámica',
					city: 'Villarreal',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Semi-finals',
			},
			teams: {
				home: {
					id: 533,
					name: 'Villarreal',
					logo: 'https://media-1.api-sports.io/football/teams/533.png',
					winner: false,
				},
				away: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-6.api-sports.io/football/teams/40.png',
					winner: true,
				},
			},
			goals: {
				home: 2,
				away: 3,
			},
			score: {
				halftime: {
					home: 2,
					away: 0,
				},
				fulltime: {
					home: 2,
					away: 3,
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
		},
		{
			fixture: {
				id: 861089,
				referee: 'C. Turpin',
				timezone: 'UTC',
				date: '2022-05-28T19:00:00+00:00',
				timestamp: 1653764400,
				periods: {
					first: 1653764400,
					second: 1653768000,
				},
				venue: {
					id: null,
					name: 'Stade de France',
					city: 'Saint-Denis',
				},
				status: {
					long: 'Match Finished',
					short: 'FT',
					elapsed: 90,
				},
			},
			league: {
				id: 2,
				name: 'UEFA Champions League',
				country: 'World',
				logo: 'https://media-1.api-sports.io/football/leagues/2.png',
				flag: null,
				season: 2021,
				round: 'Final',
			},
			teams: {
				home: {
					id: 40,
					name: 'Liverpool',
					logo: 'https://media-4.api-sports.io/football/teams/40.png',
					winner: false,
				},
				away: {
					id: 541,
					name: 'Real Madrid',
					logo: 'https://media-2.api-sports.io/football/teams/541.png',
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
					home: 0,
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
		},
	],
};