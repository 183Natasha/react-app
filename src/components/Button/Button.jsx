import './Button.css';

function Button({text}) {

	// const [text, setText]=useState('Сохранить');

	// const clicked = ()=>{

	// 	setText( t => (t + '!'));
	// 	console.log(text);

	// };

	return (
		<button  className='button accent'>{text}</button>
	);
}

export default Button;