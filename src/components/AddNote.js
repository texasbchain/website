import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');

	const [jobLink, setJobLink] = useState('');

	const characterLimit = 200;

	const handleDescChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleJobLinkChange = (event) => {
		if (event.target.value.length >= 0) {
			setJobLink(event.target.value);
			console.log(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
			setJobLink('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleDescChange}
			></textarea>
			<input style={{
				paddingTop: "1.5%",
				outline: "none",
				color: "black",
				marginRight: "0px",
				marginLeft: "0px",
				paddingRight: "0px",
				backgroundColor: "white"
			}}
				className="form-control"
				id="link"
				name="link"
				placeholder="Link to Job Posting"
				value={jobLink}
				type="link"
				onChange={handleJobLinkChange}
			/>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;