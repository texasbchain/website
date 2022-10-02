import { MdDeleteForever } from 'react-icons/md';
import AddNote from './AddNote';

const Note = ({ id, link, text, date, handleDeleteNote,}) => {

	
	const go = e => {
		e.preventDefault();
		window.location.href = link;
	}
	
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<div className='note-btn'>
				<button onClick={go} style={{ backgroundColor: "#001E49", borderRadius: "10px"
				, borderColor: "none", margin: "auto", padding: "8px", marginLeft: "0px"
				, marginRight: "0px", width: "fit-content"
				, borderColor: "none"}}>Apply Here</button>
				</div>
			</div>
		</div>
	);
};

export default Note;