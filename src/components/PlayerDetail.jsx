import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromApi';

export default function PlayerDetail() {
	const { id } = useParams();
	const [player, setPlayer] = useState();

	useEffect(() => {
		fetchFromAPI(`/players?id=${id}&season=2022`).then((data) => {
			setPlayer(data?.response[0]);
		});
	}, [id]);

	return (
		<div>
			<p>Player: {player?.player?.name}</p>
			<p>Id: {player?.player?.id}</p>
		</div>
	);
}
