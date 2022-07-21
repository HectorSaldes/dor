export default function CardSense({ key, url, text }) {
	return (
		<div
			className='w-full rounded-md border-2 border-black border-dashed overflow-hidden'
			key={key}>
			<img
				className='w-full h-52 object-cover'
				src={url}
				alt='Cover'
			/>
			<div className='p-5'>
				<p className='text-lg text-justify'>{text}</p>
			</div>
		</div>
	);
}