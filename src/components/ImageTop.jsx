export default function ImageTop ({url, alt}) {
	return (
		<img
			className='rounded-full w-60 md:w-80'
			src={url}
			alt={alt}
		/>
	);
};