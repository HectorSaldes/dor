export default function TextDetails({ title, description }) {
	return (
		<>
			<h3 className='font-bold text-3xl'>{title}</h3>
			<p className='text'>{description}</p>
		</>
	);
}
