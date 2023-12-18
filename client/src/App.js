import './style/Home.css';
import { useRoutes } from 'react-router-dom'
import Home from "./pages/Home.js"
import Standings from "./pages/Standings.js"


function App() {
    const routes = [
    {
      path: "/",
      element: <Home />,
    },
      {
        path: "/standings",
        element: <Standings />,
      }
  ];
  return useRoutes(routes)
}

export default App;
