import { Outlet } from "react-router-dom";
import NoteDetail from "./NoteDetail";
import NoteList from "./NoteList";

const Main = () => {
  return <div className="grow py-[70px]">
    <Outlet />
  </div>
};

export default Main