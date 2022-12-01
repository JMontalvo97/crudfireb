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
            setDescription(product.data().description)    
            setStock(product.data().stock)
        }else{
            console.log('El producto no existe')
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
                <h1>Edit Product</h1>
                 <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Descripcion</label>
                        <input
                            value={description}
                            onChange={ (e) => setDescription(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Stock</label>
                        <input
                            value={stock}
                            onChange={ (e)=> setStock(e.target.value)} 
                            type="number"
                            className='form-control'
                        />                 
                    </div>  
                    <button type='submit' className='btn btn-primary'>Update</button>
                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit