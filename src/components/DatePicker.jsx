import React, { useEffect, useState } from 'react';

import { getDateArr } from '../utils/getDateArr';

import {
	RiArrowLeftSLine,
	RiArrowRightSLine,
	RiCalendar2Line,
} from 'react-icons/ri';

import '../styles/DatePicker.scss';

export default function DatePicker({ setFetchDate }) {
	const dateArr = getDateArr(Date.now());

	const [dateIndex, setDateIndex] = useState(2);
	const [date, setDate] = useState(dateArr[dateIndex]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setDate(dateArr[dateIndex]);
		setFetchDate(dateArr[dateIndex]);
	}, [dateIndex]);

	const leftBtnHandle = () => {
		if (dateIndex > 0) {
			setDateIndex(dateIndex - 1);
		}
	};
	const rightBtnHandle = () => {
		if (dateIndex < dateArr.length - 1) {
			setDateIndex(dateIndex + 1);
		}
	};

	return (
		<div className='date-picker'>
			<div className='date-picker__buttons'>
				<button
					onClick={leftBtnHandle}
					className='date-picker__btn date-picker__left-btn'
				>
					<RiArrowLeftSLine className='icon' />
				</button>
				<button
					onClick={() => setOpen(!open)}
					className='date-picker__btn date-picker__trigger-btn'
				>
					<RiCalendar2Line className='icon' />
					{date}
				</button>
				<button
					onClick={rightBtnHandle}
					className='date-picker__btn date-picker__left-btn'
				>
					<RiArrowRightSLine className='icon' />
				</button>
			</div>
			<div
				className={`date-picker__menu ${
					open ? 'date-picker__menu--active' : 'date-picker__menu--inactive'
				}`}
			>
				{dateArr.map((dateEl, id) => {
					return (
						<div
							onClick={() => {
								setOpen(!open);
								setDate(dateEl);
								setFetchDate(dateEl);
							}}
							className={
								dateEl === date
									? 'date-picker__element date-picker__element--active'
									: 'date-picker__element'
							}
							key={id}
						>
							{dateEl}
						</div>
					);
				})}
			</div>
		</div>
	);
}
