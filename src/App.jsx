import './App.css';
import Button  from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
	const data= [
		{
			title: 'Подготовка к обновлению курсов',
	    date: new Date(),
	    text: 'Сегодня провёл весь день за...'
		},
		{
			title: 'Поход в годы',
	    date: new Date(),
	    text: 'Думал, что очень много времени'
		}
	];
	return (
		<>
			<h1>Заголовок</h1>
			<p>Какой-то текст</p>
			<Button/>
			<JournalItem
				title={data[0].title}
				date={data[0].date}
				text={data[0].text}
			/>
			<JournalItem
				title={data[1].title}
				date={data[1].date}
				text={data[1].text}
			/>
		</>
	);
}

export default App;