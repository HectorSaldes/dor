export default function CardCartoonFilled({ Items }) {
	return (
		<div className='block group'>
			<div
				className='relative transition bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl group-hover:shadow-[8px_8px_0_0_#000] p-8'>
				<Items />
			</div>
		</div>
	);
}