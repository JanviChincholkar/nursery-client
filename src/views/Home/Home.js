import "./Home.css"
import React, {useEffect, useState} from 'react'
import PlantCard from "../../components/PlantCard/PlantCard"
import axios from "axios"
import {toast, Toaster} from "react-hot-toast"
import imgAdd from "./add.png"
import {Link} from "react-router-dom"

function Home() {

const [plants, setPlants] = useState([])


const loadPlants= async ()=>{
  toast.loading("Loading Plants...")
 const response  = await axios.get(`${process.env.REACT_APP_API_URL}/Plants`)
 toast.dismiss()
 toast.success("Plant loaded successfully!")
 setPlants(response.data.data)
}

useEffect(()=>{
  loadPlants()
 },[])


return (
  <div> 
    <h1> Plants</h1>
{
  plants.map((plant,  i) => {
    const { 
      _id, 
      name,
      category, 
      price,
      image, 
      description
      } = plant

    return (<PlantCard 
      key={i}
      _id={_id}
      name={name} 
      category={category }
      price={price}
      image={image}
      description={description} 
      loadPlants={loadPlants}/>)
  })
}
       {plants.lengthh === 0 ? "Loading.....!" : null}
       <Toaster/>

<Link to="/add">
<img src={imgAdd} className="btn-add" />
</Link>
  </div>
)
}



export default Home
