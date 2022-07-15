import useBoard from '@hooks/useboard';
import React from 'react';

const Letter = ({ letterPosition, attemptPosition }: any) => {
	const { board } = useBoard();
	const letter = board[attemptPosition][letterPosition]
	return (
		<div className=' w-[33%] uppercase h-[70px] border border-gray-500 m-[5px] grid place-items-center text-[30px] font-semibold text-white'>
			{letter}
		</div>
	);
};

export default Letter;
