import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
    const [ nomreal, setNomreal ] = useState('')
  const [ nomsuper, setNomsuper ] = useState(0)
  const [ edad, SetEdad ] = useState(1)
  const [ sexo, setSexo ] = useState(2)
  const [ origen, setOrigen ] = useState(3)
  const [ Caracteristicas, setCaracteristicas ] = useState(4)

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "heroe", id)
        const data = {nomreal: nomreal, nomsuper:nomsuper, edad: edad,
            sexo:sexo, origen:origen,  Caracteristicas:Caracteristicas}
        await updateDoc(product, data)
        navigate('/')
    }

    const getProductById = async (id) => {
        const product = await getDoc( doc(db, "heroe", id) )
        if(product.exists()) {
            //console.log(product.data())
            setNomreal(product.data().nomreal)    
            setNomsuper(product.data().nomsuper)
            SetEdad(product.data().edad)
            setSexo(product.data().sexo)
            setOrigen(product.data().origen)
            setCaracteristicas(product.data().Caracteristicas)
        }else{
            console.log('El Heroe no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Editar Heroe</h1>
                 <form onSubmit={update}>
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
                        onChange={ (e)=> setSexo(e.target.value)}
                        type="radio" value="Masculino" name="sexo"
                         /> Masculino
                        <input 
                        
                        onChange={ (e)=> setSexo(e.target.value)}
                        type="radio" value="Femenino" name="sexo"
                        /> Femenino
                        <input 
                        
                        onChange={ (e)=> setSexo(e.target.value)}
                        type="radio" value="otro" name="sexo"
                        /> Otro
                    </div>

                    <div >
                    <label >origen</label>
                    <br></br>
                        <input 
                
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="radio" value="Humano" name="origen"
                         /> Humano
                        <input 
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="radio" value="Extraterrestre" name="origen"
                        /> Extraterrestre
                        <input 
                        
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="radio" value="Experimento Cientifico" name="origen"
                        /> Experimento Cientifico
                        <input 
                        
                        onChange={ (e)=> setOrigen(e.target.value)}
                        type="radio" value="Mutante" name="sexo"
                        /> Mutante
                    </div>

                    <div>
                        <label>Caracteristicas</label>
                        <br></br>
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Volador"/> Volador
                        <input 
                       
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Velocidad"/> Velocidad
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Fuerza"/> Fuerza
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Mutante"/> Mutante
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Vision"/> Vision
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Oido"/> Oido
                        <input 
                       
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Invulnerabilidad"/> Invulnerabilidad
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Telepatia"/> Telepatia
                        <input 
                       
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Telequinesis"/> Telequinesis
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Rayos"/> Rayos
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Artes Marciales"/> Artes Marciales
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Inteligencia"/> Inteligencia
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Acrobata"/> Acrobata
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox" 
                        value="Armadura"/> Armadura
                        <input 
                        
                        onChange={ (e)=> setCaracteristicas(e.target.value)}
                        name="caracteristicas"
                        type="checkbox"
                        value="Tecnologia" /> Tecnologia
                    </div>


                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit