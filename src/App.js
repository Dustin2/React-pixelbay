
//import './styles/bootstrap.min.css';

import Navbar from './componets/Navbar';
//import Buscador from './componets/Buscador'

function App() {
  return (
    <div className="app container">
   
      <h1 className="text-aling-center">
        Buscador de Imagenes
      </h1>
      <Navbar
      //props funciona para compunicar componetes entre si
      mensaje = "buscador"
      />
    
      
     
    </div>
  );
}

export default App;
