import React, { Component } from 'react';

class Buscador extends Component {
    render() {// metodo necesario que nos imprimira el componente en pantalla 
        return (
            <form>
               <div className="row">
                   <div className="form-group col-md-8"> 
                   <input type="text" className="form-control form-control-lg" placeholder="por ejemplo : Animales">

                   </input>
                   </div>
                   </div>
            </form>
        );
    }
}

export default Buscador;
