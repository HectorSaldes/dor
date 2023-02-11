export default function CardCartoonOutlined({ Items }) {
	return (
		<div className='relative block group'>
			<span className='absolute inset-0 border-2 border-black border-dashed rounded-lg'></span>
			<div className='transition bg-white border-2 border-black rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2'>
				<div className='p-6'>
					<Items />
				</div>
			</div>
		</div>
	);
}
