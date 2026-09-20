import { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase'

function SubirArchivo() {
  const [archivo, setArchivo] = useState(null)
  const [mensaje, setMensaje] = useState('')

  const manejarArchivo = (e) => {
    setArchivo(e.target.files[0])
  }

  const subirArchivo = async (e) => {
    e.preventDefault()

    if (!archivo) {
      setMensaje('Seleccione un archivo')
      return
    }

    try {
      const referencia = ref(storage, `archivos/${archivo.name}`)

      await uploadBytes(referencia, archivo)

      const url = await getDownloadURL(referencia)

      console.log('Archivo subido correctamente')
      console.log('URL del archivo:', url)

      setMensaje('Archivo subido correctamente')
      setArchivo(null)

    } catch (error) {
      console.error('Error al subir el archivo:', error)
      setMensaje('Error al subir el archivo')
    }
  }

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">

          <h2 className="card-title text-center mb-4">
            Subir archivo
          </h2>

          <p className="text-center">
            Selecciona un archivo para almacenarlo en Firebase
          </p>

          <form onSubmit={subirArchivo}>

            <div className="mb-3">
              <label className="form-label">
                Seleccionar archivo
              </label>

              <input
                type="file"
                className="form-control"
                onChange={manejarArchivo}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Subir archivo
              </button>
            </div>

          </form>

          {mensaje && (
            <p className="mt-3 text-center">
              {mensaje}
            </p>
          )}

        </div>
      </div>
    </div>
  )
}

export default SubirArchivo