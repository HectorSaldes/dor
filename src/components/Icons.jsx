import Ballon from "../assets/svg/ballon.svg";
import Cake from "../assets/svg/cake.svg";
import Congrat from "../assets/svg/congrat.svg";
import Congrats from "../assets/svg/congrats.svg";
import Gif from "../assets/svg/gif.svg";
import Horse from "../assets/svg/horse.svg";
import Pie from "../assets/svg/pie.svg";
import Piece from "../assets/svg/piece.svg";

export default function Icons() {
	return (
		<div className='flex justify-evenly flex-wrap'>
			<img className='w-12 md:w-20' alt='Ballon' src={Ballon} />
			<img className='w-12 md:w-20' alt='Cake' src={Cake} />
			<img className='w-12 md:w-20' alt='Congrat' src={Congrat} />
			<img className='w-12 md:w-20' alt='Congrats' src={Congrats} />
			<img className='w-12 md:w-20' alt='Gif' src={Gif} />
			<img className='w-12 md:w-20' alt='Horse' src={Horse} />
			<img className='w-12 md:w-20' alt='Pie' src={Pie} />
			<img className='w-12 md:w-20' alt='Piece' src={Piece} />
		</div>
	);
}
