import React, { useEffect, useState } from 'react';
import { leagues } from '../utils/constants';

import '../styles/MatchCards.scss';

export default function MatchCards({ leagueId }) {
	const [leagueIdArr, setLeagueIdArr] = useState([]);

	useEffect(() => {
		if (leagueId === 'all') {
			let newLeagueIdArr = [];
			leagues.forEach((league) => {
				newLeagueIdArr.push(league.id);
			});
			setLeagueIdArr(newLeagueIdArr);
		} else {
			setLeagueIdArr([leagueId]);
		}
	}, [leagueId]);

	console.log(leagueIdArr);
	return (
		<div className='match-cards'>
			<h1>{leagueIdArr}</h1>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sequi
			dolorem animi doloribus, voluptatem, deleniti recusandae quia modi
			delectus quidem illo possimus blanditiis harum consequatur nam ad ex,
			voluptates quas! Exercitationem deserunt, neque dolores consectetur
			officia impedit earum recusandae necessitatibus, sunt quibusdam quae eaque
			sit architecto, corporis mollitia ab laborum magni? Similique non
			quibusdam, soluta nulla veritatis, repudiandae beatae, commodi a corrupti
			aliquid atque? Culpa tempore accusamus fuga itaque quas aut dolorem
			officia id illo quasi totam eum aliquam sapiente consequuntur ex, natus,
			doloribus magni modi dolores! Sit deserunt commodi repellendus nesciunt
			minima laborum nam consectetur nisi, quis, sed nostrum dolorem a ducimus
			vero, magni iste quod animi omnis. Iure, modi totam earum atque sequi ea
			assumenda autem, odit nam libero perferendis ipsa animi veniam nemo est,
			reiciendis aliquid voluptatibus placeat. Ipsum numquam rerum quis vel
			commodi a dicta, voluptate voluptatem molestiae aperiam ad accusamus!
			Soluta molestias consequuntur fugit et ad nihil? Obcaecati ullam quasi
			possimus consequuntur eos minus itaque autem explicabo placeat nisi!
			Labore odit minima impedit quam accusamus, maxime tempora asperiores id
			provident. Dolores officiis maiores asperiores error facilis nemo. Aut
			libero eaque perferendis dolores ipsam, dignissimos consectetur rem sit
			nisi asperiores quis alias a id hic quisquam! Deserunt quibusdam ut maxime
			alias iure totam sequi mollitia ducimus atque quaerat culpa facilis ea
			dignissimos ullam, saepe ex adipisci quam quae nostrum nihil, aliquid fuga
			dolores aut? Porro recusandae doloremque dolor rem excepturi voluptatem
			architecto autem ipsam. Unde incidunt perspiciatis praesentium ipsa eaque
			asperiores ea amet nisi repellendus vitae libero eum inventore
			voluptatibus eligendi voluptatum consectetur, cupiditate error minima
			saepe quidem ut? Corrupti dicta saepe fuga, explicabo adipisci voluptas
			obcaecati illo est reiciendis, exercitationem nam minima iste aliquid quis
			magnam ratione harum ducimus dolorem vero similique facilis at voluptatum,
			suscipit rem! Quia vel ut ea accusamus impedit! Cum explicabo quo culpa
			error harum consequuntur, ullam possimus voluptatibus mollitia optio nulla
			odit aliquam sit, animi inventore minus alias veniam nobis suscipit,
			voluptas neque deleniti. Provident maiores veritatis nulla officiis
			cupiditate soluta, nobis laudantium quidem sed ex voluptatibus praesentium
			deleniti. Commodi error officiis quia ut fugit! Corporis culpa praesentium
			quos suscipit excepturi voluptate officiis ipsum, necessitatibus quia
			consectetur a fugit recusandae omnis sed impedit maiores sapiente veniam
			expedita eaque ratione ullam inventore eligendi obcaecati. Iusto, animi
			ut! Provident animi labore, fugiat consequuntur doloremque omnis neque, ut
			aliquam recusandae accusantium sapiente similique soluta. Blanditiis
			beatae explicabo aperiam voluptatibus sed possimus mollitia ipsum
			asperiores sapiente adipisci sequi sint dolor dolores, est culpa fugiat a
			animi ducimus laborum maiores corrupti. Quod voluptate aspernatur est
			explicabo similique unde, ex magni repellat culpa delectus quam modi
			deserunt vitae suscipit non hic temporibus, placeat, accusamus nulla
			voluptatibus? Natus quas nam consequuntur. Temporibus non magnam tempore,
			at facere quaerat sequi molestiae. Rem laboriosam sapiente incidunt cum,
			quaerat pariatur quasi? Officiis ipsam consequatur quidem earum quaerat
			porro sint facere, fuga voluptas odio id dicta beatae incidunt officia!
			Illo laudantium explicabo illum similique fuga ipsam. Libero
			exercitationem rerum ratione incidunt ea temporibus laboriosam mollitia
			consectetur ad. Asperiores omnis officiis suscipit dolores officia
			molestias enim recusandae illo dolor praesentium perspiciatis, porro eius,
			facilis magni eum quos eos et laudantium illum veritatis cumque doloribus
			minima saepe magnam. Tenetur molestias nam maiores ullam vero corporis ut
			itaque ipsa iusto similique commodi quam dolores excepturi ipsam, veniam
			tempore debitis in nulla ad mollitia eum et qui? Dicta, eaque adipisci.
			Tenetur dolore laudantium iure, atque incidunt blanditiis repudiandae hic
			a corporis repellat nihil quidem rerum molestias ab sit temporibus quo
			libero ea ad corrupti? Rem quia aperiam temporibus, ut minima sequi
			possimus reiciendis doloribus vel ullam voluptates pariatur explicabo
			similique totam neque repellat deleniti sit odio maiores ipsa! Molestias
			facilis maxime nisi! Aspernatur assumenda minima voluptate quam sapiente
			dolorum ullam perferendis tenetur, repudiandae distinctio porro itaque
			dolor laudantium labore architecto quasi. Facilis quibusdam iusto incidunt
			provident aliquid. Porro neque, ab sed incidunt quas omnis ullam doloribus
			officia necessitatibus eveniet nisi reprehenderit aliquam libero quibusdam
			consequuntur unde itaque placeat rem ex expedita labore soluta dolorum.
			Nulla, natus soluta est reprehenderit iure reiciendis non sed dignissimos
			fugiat quas sint temporibus consequuntur perspiciatis ullam assumenda eum
			totam iusto? Atque sed ipsam eaque praesentium voluptatem ipsum
			reprehenderit culpa exercitationem. Doloribus voluptatem corrupti ad hic
			sunt officiis voluptate quia ut iure illo, blanditiis minima dolor, quidem
			excepturi est ullam consequatur! Modi accusantium iusto, beatae quod minus
			aliquid facilis necessitatibus. In, optio voluptas tempora, a sunt
			possimus exercitationem vel fugiat adipisci, natus incidunt. Velit nemo
			possimus dolore beatae autem accusantium ut cum nostrum, molestias ex
			obcaecati, id odit deserunt vero consequuntur eaque ducimus assumenda
			molestiae rem harum vitae amet? Vitae, a dolor ex facere fugiat earum
			ratione consequuntur blanditiis id dolorem, veritatis nesciunt cum sunt
			deserunt mollitia eum nostrum ab minima magnam veniam dolores distinctio
			reiciendis aperiam! Ipsam rem ipsa consectetur cupiditate officiis
			mollitia earum adipisci cum. Perspiciatis, esse dicta! Quidem aspernatur
			reiciendis pariatur eligendi nostrum sint natus dolorem quas totam ipsum
			eius incidunt distinctio fugiat excepturi earum dolores, nesciunt impedit
			nulla, ipsa, sapiente fuga blanditiis iure. Explicabo eum deleniti
			accusamus esse id magni odio facere. Nobis vero earum corrupti officia
			blanditiis accusantium tempora iste, ipsam obcaecati veritatis,
			perspiciatis error numquam assumenda impedit qui facilis nisi soluta cum
			ratione ut eveniet dicta rem. Debitis expedita explicabo eos aliquid cum
			commodi nam odit maiores autem repudiandae vero et consequatur totam
			natus, in odio nemo sed tenetur officiis repellat, saepe cupiditate quis!
			Eveniet, laboriosam deleniti? Eveniet, magni voluptates asperiores omnis
			hic veniam. Magni ab omnis quia unde deleniti repellat voluptatibus et
			labore quos quod! Blanditiis natus nobis vel, recusandae aliquam expedita?
			Quam, assumenda quae deleniti tempore, neque magnam dolore officiis natus
			veritatis esse praesentium ipsa aperiam ipsam ab nulla consequatur
			molestias aliquid atque nihil accusantium expedita reprehenderit saepe
			architecto! Fugit, optio. Accusamus cum blanditiis nulla beatae id
			repellendus consequatur totam iure ad et recusandae, error culpa magnam.
			Assumenda molestias, iste laborum accusamus dolorum cumque distinctio sit
			sapiente quam voluptates, pariatur accusantium. Amet deserunt dolore
			repellendus dicta sapiente expedita tempora quae aliquid. Officia fugiat
			impedit dolore alias recusandae dignissimos repellendus esse, totam atque
			unde.
		</div>
	);
}
