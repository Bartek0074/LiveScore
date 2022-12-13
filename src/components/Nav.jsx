import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import '../styles/Nav.scss';

export default function Nav() {
	return (
		<div className='nav-box'>
			<div className='nav wrapper'>
				<h1 className='nav__heading'>LiveScore</h1>
				<button className='nav__button nav__button-refresh'>
					<FiRefreshCcw className='icon' />
				</button>
			</div>
		</div>
	);
}
