import React, { Component } from 'react'
import './App.css'
import FormularioProductos from './components/FormularioProductos'
import RegistrodeUsuario from './components/RegistrodeUsuario'
import SubirArchivo from './components/SubirArchivo'

// Componente hijo
function Producto({ producto, agregarAlCarrito }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <h3 className="card-title">{producto.nombre}</h3>

          <p className="card-text">
            Precio: ${producto.precio}
          </p>

          <button
            className="btn btn-success"
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

// Componente padre
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productos: [
        { id: 1, nombre: 'Notebook', precio: 500000 },
        { id: 2, nombre: 'Mouse', precio: 15000 },
        { id: 3, nombre: 'Teclado', precio: 25000 },
      ],
      carrito: [],
    }
  }

  // Funcion que envia al hijo mediante props
  agregarAlCarrito = (producto) => {
    this.setState({
      carrito: [...this.state.carrito, producto],
    })
  }

  render() {
    return (
      <div className="container py-4">

        <h1 className="text-center mb-4">
          Tienda de Productos
        </h1>

        <h2 className="text-center mb-4">
          Productos disponibles
        </h2>

        <div className="row">
          {this.state.productos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={this.agregarAlCarrito}
            />
          ))}
        </div>

        <h2 className="text-center mt-4 mb-3">
          Carrito
        </h2>

        <div className="card shadow-sm mb-3">
          <div className="card-body text-center">

            {this.state.carrito.length === 0 ? (
              <p className="mb-0">
                El carrito está vacío.
              </p>
            ) : (
              this.state.carrito.map((producto, index) => (
                <p key={index}>
                  {producto.nombre} - ${producto.precio}
                </p>
              ))
            )}

          </div>
        </div>

        <h3 className="text-center mb-4">
          Total de productos: {this.state.carrito.length}
        </h3>

        <FormularioProductos />
        <RegistrodeUsuario />
        <SubirArchivo />

      </div>
    )
  }
}

export default App