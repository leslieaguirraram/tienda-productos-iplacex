import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

function RegistrodeUsuario() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registrarUsuario = async (e) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)

      console.log('Usuario se registro correctamente')

      setEmail('')
      setPassword('')
    } catch (error) {
      console.error('Error de registro del usuario:', error)
    }
  }

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          
          <h2 className="card-title text-center mb-4">
            Registrar usuario
          </h2>

          <p className="text-center">
            Crea una cuenta para acceder a la tienda
          </p>

          <form onSubmit={registrarUsuario}>

            <div className="mb-3">
              <label className="form-label">
                Correo electrónico
              </label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Contraseña
              </label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Registrarse
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default RegistrodeUsuario