import React from 'react';

import '../styles/LineupsPitch.scss';

export default function LineupsPitch() {
	return (
		<div className='lineups-pitch'>
			<div className='lineups-pitch__background'
				style={{
					backgroundImage:
						'url(https://upload.wikimedia.org/wikipedia/commons/9/90/Football_pitch.svg)',
				}}
			></div>
		</div>
	);
}
