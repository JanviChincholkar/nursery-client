import React, { useState } from 'react'
import "./AddPlant.css"
import toast,{Toaster} from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddPlant() {
    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("0")
    const [ image,setimage]=useState("")
    const [ description,setDescription]=useState("")

    const addPlant = async()=>{
        toast.loading("Adding plant...")
        if(!name || !category||!price||!description){
            toast.error("please Enter all details")
            return
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Plant`,{
            name:name,
            category:category,
            price:price,
           image: image,
            description:description
        })

        toast.dismiss()
        toast.success(response.data.message)

        setName("")
        setCategory("")
        setPrice("")
        setimage("")
        setDescription("")
    }
          

  return (
    <div className='container'>
       <form>
       <input type='text'
        placeholder='Enter plant name'
        value ={name}
        onChange={(e)=>setName(e.target.value)}
        className='plant-input'
        />

        <input type='text'
        placeholder='Enter plant category'
        value ={category}
        onChange={(e)=>setCategory(e.target.value)}
        className='plant-input'
        />

         <img src={image} className='img-preview' />
        <input type='text'
        placeholder='Enter plant image url'
        value ={image}
        onChange={(e)=>setimage(e.target.value)}
        className='plant-input'
        />

        <input type='number'
        placeholder='Enter plant price'
        value ={price}
        onChange={(e)=>setPrice(e.target.value)}
        className='plant-input'
        />

         <input type='text'
        placeholder='Enter plant description'
        value ={description}
        onChange={(e)=>setDescription(e.target.value)}
        className='plant-input'
        />


<button type='button' onClick={addPlant} className='add-btn'>AddPlant</button>
        </form> 
        <br/>
        <Link to="/" className='back-home'>SHOW ALL PLANTS</Link>
        <Toaster/>
    </div>
  )
}

export default AddPlant
