// App.js
import './App.css'; // Importa los estilos de App
import { NavLink } from "react-router-dom";


function App() {

    return (
        <div> 
            <p>hola</p>
            <NavLink
          to={"/tasks"}
        >
          tasks
        </NavLink>
        </div>
    );
}

export default App;