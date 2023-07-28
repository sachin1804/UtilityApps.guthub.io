import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
// import { deleteNote } from "../../redux/actions/noteActions";
import { noteActions } from "../../redux/reducers/noteReducers";
import { noteSelector } from "../../redux/reducers/noteReducers";

function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();
  console.log(notes);
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(noteActions.delete(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
