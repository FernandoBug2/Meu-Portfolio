import './App.css';
import NavBar from './Componentes/NavBar';
import Banner from './Componentes/Banner';
import Sobre from './Componentes/Sobre';
import Cursos from './Componentes/Cursos';
import Contato from './Componentes/Contato';
import Projetos from './Componentes/Projetos';

function App() {
  return (
    <div className="App">
      <NavBar />  

      <Banner />

      <Sobre />

      <Cursos />

      <Projetos />

      <Contato />
    </div>
  );
}

export default App;
