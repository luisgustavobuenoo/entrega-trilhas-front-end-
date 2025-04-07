import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Saudacao from "./trilha1/Saudacao";
import Contador from "./trilha1/Contador";
import ListaDeTarefas from "./trilha1/ListaDeTarefas";
import ToggleVisibilidade from "./trilha1/ToggleVisibilidade";
import Home from "./Trilha2Pages/Home";
import Contact from "./Trilha2Pages/Contact";
import About from "./Trilha2Pages/About";
import Rooms from "./Trilha2Pages/Rooms";
import RoomDetails from "./Trilha2Pages/RoomDatails";
import BookingSuccess from "./Trilha2Pages/BookingSuccess";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/about" element={<About />} />
          <Route path="/contador" element={<Contador inicial={0} />} />
          <Route path="/saudacao" element={<Saudacao nomeInicial="João" />} />
          <Route
            path="/listaDeTarefas"
            element={<ListaDeTarefas tarefasIniciais={[]} />}
          />
          <Route
            path="/toggleVisibilidade"
            element={<ToggleVisibilidade texto="Exemplo de texto" />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Quartos</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contato</Link>
            </li>
            <li>
              <Link to="/contador">Contador</Link>
            </li>
            <li>
              <Link to="/saudacao">Saudação</Link>
            </li>
            <li>
              <Link to="/listaDeTarefas">Lista de Tarefas</Link>
            </li>
            <li>
              <Link to="/toggleVisibilidade">Toggle Visibilidade</Link>
            </li>
            <li>
              <Link to="/animal/cachorro">Cachorro</Link>
            </li>
            <li>
              <Link to="/animal/gato">Gato</Link>
            </li>
            <li>
              <Link to="/animal/elefante">Elefante</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default App;
