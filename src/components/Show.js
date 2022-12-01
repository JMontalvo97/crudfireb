import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
const MySwal = withReactContent(Swal)

const Show = () => {
  //1 - configuramos los hooks
  const [heroes, setHeroes] = useState( [] )

  //2 - referenciamos a la DB firestore
  const heroeCollection = collection(db, "heroe")

  //3 - Funcion para mostrar TODOS los docs
  const getheroes = async ()   => {
   const data = await getDocs(heroeCollection)
   //console.log(data.docs)
   setHeroes(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   //console.log(products)
  }
  //4 - Funcion para eliminar un doc
  const deleteProduct = async (id) => {
   const productDoc = doc(db, "heroe", id)
   await deleteDoc(productDoc)
   getheroes()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina el Heroe?',
      text: "Esta accion no es revertible!",
      icon: 'atencion',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteProduct(id)               
        Swal.fire(
          'Eliminado!',
          'Su heroe se ha eliminado .',
          'correctamente'
        )
      }
    })    
  }
  //6 - usamos useEffect
  useEffect( () => {
    getheroes()
    // eslint-disable-next-line
  }, [] )
  //7 - devolvemos vista de nuestro componente
  return (
    <>
    <h1>Creacion de Super Heroes</h1>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="d-grid gap-2">
            <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Crear</Link>    
          </div>
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Descripcion</th>
                <th>Stock</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Origen</th>
                <th>Caracteristicas</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              { heroes.map( (heroes) => (
                <tr key={heroes.id}>
                  <td>{heroes.nomreal}</td>
                  <td>{heroes.nomsuper}</td>
                  <td>{heroes.edad}</td>
                  <td>{heroes.sexo}</td>
                  <td>{heroes.origen}</td>
                  <td>{heroes.caracteristicas}</td>
                  <td>
                    <Link to={`/edit/${heroes.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                    <button onClick={ () => { confirmDelete(heroes.id) } } className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Show