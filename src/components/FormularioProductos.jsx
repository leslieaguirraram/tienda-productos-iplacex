import { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator'
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

function FormularioProductos() {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState('')

  const [validator] = useState(new SimpleReactValidator())

  const manejarEnvio = async (e) => {
    e.preventDefault()

    if (validator.allValid()) {
      try {
        await addDoc(collection(db, "productos"), {
          nombre,
          precio,
          categoria,
        })

        console.log("Producto guardado correctamente")

        setNombre('')
        setPrecio('')
        setCategoria('')
      } catch (error) {
        console.error("Error al guardar el producto:", error)
      }
    } else {
      validator.showMessages()
    }
  }

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">

        <h2 className="text-center mb-4">
          Registrar producto
        </h2>

        <form onSubmit={manejarEnvio}>

          <div className="mb-3">
            <label className="form-label">
              Nombre del producto
            </label>

            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            {validator.message('nombre', nombre, 'required')}
          </div>

          <div className="mb-3">
            <label className="form-label">
              Precio
            </label>

            <input
              type="number"
              className="form-control"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Categoría
            </label>

            <input
              type="text"
              className="form-control"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Guardar producto
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default FormularioProductos