import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";

// eslint-disable-next-line react-refresh/only-export-components
export const routerConfig = [
	{
		path: '/',
		element: <Home />,
		children: [
			{
				index: true,
				element: <NoteList />,
			},
			{
				path: '/notes/:id',
				element: <NoteDetail />,
			},
		],
	},
];

const router = createBrowserRouter(routerConfig);


function App() {
  return <RouterProvider router={router} />;

}

export default App
