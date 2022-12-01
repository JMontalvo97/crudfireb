import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
  const [ nomreal, setNomreal ] = useState('')
  const [ nomsuper, setNomsuper ] = useState(0)
  const [ edad, SetEdad ] = useState(1)
  const [ sexo, setSexo ] = useState(2)
  const [ origen, setOrigen ] = useState(3)
  const [ Caracteristicas, setCaracteristicas ] = useState(4)
  const navigate = useNavigate()

  const heroeCollection = collection(db, "heroe")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( heroeCollection, { nomreal: nomreal, nomsuper:nomsuper, edad: edad,
         sexo:sexo, origen:origen,  Caracteristicas:Caracteristicas } )
    navigate('/')
    //console.log(e.target[0].value)
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Crear Heroe</h1>
                 <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre Real</label>
                        <input
                            value={nomreal}
                            onChange={ (e) => setNomreal(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre de Super Heroe</label>
                        <input
                            value={nomsuper}
                            onChange={ (e) => setNomsuper(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Edad</label>
                        <input
                            value={edad}
                            onChange={ (e)=> SetEdad(e.target.value)} 
                            type="number"
                            className='form-control'
                        />                 
                    </div>
                    <div >
                    <label >sexo</label>
                    <br></br>
                        <input 
                        value={sexo}
                        onChange={ (e)=> setSexo(e.target.value)}
                        type="radio" name="sexo"
                         /> Masculino
                        <input 
                        value={sexo}
                        onChange={ (e)=> setSexo(e.target.value)}
                        type="radio" name="sexo"
                        /> Femenino
                        <input 
                        value={sexo}
                        onChange={ (e)=> setSexo(e.target.value)}
                        type="radio" name="sexo"
                        /> Otro
                    </div>

                    <div >
                    <label >origen</label>
                    <br></br>
                        <input 
                        value={origen}
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="radio" name="origen"
                         /> Humano
                        <input 
                        value={origen}
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="radio" name="origen"
                        /> Extraterrestre
                        <input 
                        value={origen}
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="radio" name="origen"
                        /> Experimento Cientifico
                        <input 
                        value={origen}
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="radio" name="sexo"
                        /> Mutante
                    </div>
                    <div>
                        <label>Caracteristicas</label>
                        <br></br>
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Volador
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Velocidad
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Fuerza
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Mutante
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Vision
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Oido
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Invulnerabilidad
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Telepatia
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Telequinesis
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Rayos
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Artes Marciales
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Inteligencia
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Acrobata
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Armadura
                        <input 
                        value={Caracteristicas}
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" /> Tecnologia
                    </div>
                    <button type='submit' className='btn btn-primary'>Guardar</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create