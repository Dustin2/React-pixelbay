
import './styles/bootstrap.min.css';

//import Navbar from './componets/Navbar';

import Buscador from './componets/buscador'
function App() {
  return (
    <div className="app container">
      <h1>
        title
      </h1>
    
      <div className="jumbotron">
        <p className="lead text-center">
          buscador  de imagenes
        </p>
        <Buscador/>
      </div>
    </div>
  );
}

export default App;
