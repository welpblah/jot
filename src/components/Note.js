const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className="note">
			<span>{text}</span>
			<div className="note-footer">
				<small className="date">{date}</small>
				<small onClick={() => handleDeleteNote(id)} className="delete">
					delete note
				</small>
			</div>
		</div>
	);
};

export default Note;