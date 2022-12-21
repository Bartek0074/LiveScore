import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FiRefreshCcw } from 'react-icons/fi';

import '../styles/Nav.scss';

export default function Nav() {
	const navigate = useNavigate();
	return (
		<div className='nav-box'>
			<div className='nav wrapper'>
				<h1 onClick={() => navigate('/')} className='nav__heading'>
					LiveScore
				</h1>
				<button className='nav__button nav__button-refresh'>
					<FiRefreshCcw
						onClick={() => {
							window.location.reload(false);
						}}
						className='icon'
					/>
				</button>
			</div>
		</div>
	);
}
