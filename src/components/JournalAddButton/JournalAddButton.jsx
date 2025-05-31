import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {

	return (
		<CardButton className='journal-add'>
			<img src="/plus.svg" alt="Добавить" />
            Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;