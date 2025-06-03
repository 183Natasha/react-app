import './App.css';
import Button  from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/leftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';


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
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					{data.map(el =>
						<CardButton>
							<JournalItem
								title={el.title}
								date={el.date}
								text={el.text}
							/>
						</CardButton>
					)}
					
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm></JournalForm>
			</Body>

			
			
		</div>
	);
}

export default App;