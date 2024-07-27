import React from 'react'
import "./PlantCard.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
function PlantCard({ _id, name, category, image, price, description, loadPlants }) {

    const  deletePlant = async(PlantId)=>{
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/Plant/${PlantId}`)
        toast.success(response.data.message)
        loadPlants()
    }
  return (
    <div className='plant-card'>
    <h1 className='plant-title'>{name}</h1>
    <p className='plant-price'>price:{price}</p>
 
    <img src={image} className='plant-card-img'/>

<div> 
<Link type='button' className='plantcard-action-button'to={`/Update/${_id}`}>Edit Plant</Link>
    <button 
    type='button' 
    className='plantcard-action-button' 
    onClick={() =>{
        deletePlant(_id)
    }}>
         Delete Plant</button>
</div>



    </div>
  )
}

export default PlantCard
