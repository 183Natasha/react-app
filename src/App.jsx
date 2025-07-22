import './App.css';
import Button  from './components/Button/Button';

import LeftPanel from './layouts/LeftPanel/leftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA= [
	// {	id:1,
	// 	title: 'Подготовка к обновлению курсов',
	// 	date: new Date(),
	// 	text: 'Сегодня провёл весь день за...'
	// },
	// {	id:2,
	// 	title: 'Поход в годы',
	// 	date: new Date(),
	// 	text: 'Думал, что очень много времени'
	// }
];


function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item =>{
		setItems(oldItem => [...oldItem, {
			title: item.title,
			date: new Date(item.date),
			text: item.text,
			id: oldItem.length > 0 ? Math.max(...oldItem.map(i=>i.id))+1 : 1
		}]);
	};

	
	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items = {items} />

			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItem}></JournalForm>
			</Body>

			
			
		</div>
	);
}

export default App;