import React, { Component } from "react";

class Buscador extends Component {

    //nos ayudara a leer los valores de los inputs con react
    busquedaref = React.createRef({});

    //funcion que nos ayudara a obtenerDatos del form
    obtenerDatos = (e) => {
        //evitamos se muestren  los datos en la url  al enviarlos
        e.preventDefault();

        console.log (this.busquedaref.current.value);
    }    
  render() {
    // metodo necesario que nos imprimira el componente en pantalla
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={this.busquedaref}
              type="text"
              className="form-control form-control-md"
              placeholder="Buscar..."
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-danger"
              value = "Buscar"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
