import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import { addNote } from "../store/notesSlice";

const Siderbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    const id = uuidv4();
    const newNote = {
      id,
      title: "새로운 노트",
      content: "",
      time: Date.now(),
      summary: ""
    };
    dispatch(addNote(newNote));
    navigate(`/notes/${id}`)
  };
  const notes = useSelector((state => state.notes));
  console.log(notes);

  return (
		<div className="w-[230px] p-4">
			<h1 className="mb-4 text-2xl font-bold">Plota's Note</h1>
			<button className="w-full px-4 py-2 bg-gray-400 rounded hover:bg-gray-500" onClick={handleClick}>
				노트 추가
			</button>
			<div className="mt-4">
				<NavLink
					to={'/'}
					className={({ isActive }) =>
						isActive ? 'text-blue-500 font-semibold' : 'text-gray-300 hover:text-white'
					}
				>
					홈
        </NavLink>
        <ul className="mt-4">
          {notes.map(note => (
            <li key={note.id} className="mb-2">
				<NavLink
					to={`/notes/${note.id}`}
					className={({ isActive }) =>
						isActive ? 'text-blue-500 font-semibold' : 'text-gray-300 hover:text-white'
					}
				>
					{note.title}
				</NavLink>
			</li>
          ))}
        </ul>
			</div>
		</div>
  );
}

export default Siderbar  