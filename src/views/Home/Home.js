import "./Home.css"
import React from 'react'

import PlantCard from "../../components/PlantCard/PlantCard"

function Home() {

const plants = [
  {
    "_id": "66a3ec3c3c308695fda6445a",
    "name": "Sunflower",
    "category": "outdoor",
    "image": "https://housing.com/news/wp-content/uploads/2023/03/How-to-grow-and-care-for-sunflower-plants-01.png",
    "price": 380,
    "description": "sunflower can be sown from September to end of November. In non-traditional areas, it can be sown from January to February end in spring season. ",
    "__v": 0
},
{
    "_id": "66a4a2d7f66574c5b81d4e97",
    "name": "Red Rose",
    "category": "outdoor",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Small_Red_Rose.JPG/800px-Small_Red_Rose.JPG",
    "price": 450,
    "description": "The most classic of them all, a red rose is a perfect choice for a significant other. This stunning shade most popularly stands for passion and communicates love. ",
    "__v": 0
},
{
    "_id": "66a4b447ee452468a0f7172b",
    "name": "Lilium",
    "category": "indoor",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xrRhxUt08zyYGw1LFOZyimd1jt0Inf6uZqsxmolX8S4kgTR_a4j3dqV7X5rn-UOacMI&usqp=CAU",
    "price": 250,
    "description": "In a nice sunny place without direct sunlight, lilies in pots can also thrive indoors and enchant the room with their lovely fragrance ",
    "__v": 0
}
]

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
      description={description} />)
  })
}
  </div>
)
}



export default Home
