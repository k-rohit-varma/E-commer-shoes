import { useState } from "react"
import Navigaion from "./Navigaion/Nav"
import Products from './Products/Products'
import Recomended from './Recomended/Recomended'
import SideBar from "./Sidebar/Sidebar"
import data from "./db/data"
import Card from "./components/Card"

const App = () => {

  const[selectodCategory,setSelectedCategory] = useState(null)

  //input Filter

  const[query,setQuery] = useState("")

  const handleInputChange = (event)=>{
    setQuery(event.target.value)
  }

  const filteredItems = data.filter(product=> (
      product.title.toLowerCase().indexOf(query.toLowerCase())!==-1)
  )

  // RadioFilters

  const handleChange = (event) =>{
    setSelectedCategory(event.target.value)
  }

  //Buttons filter

  const handleClick = (event) =>{
    setSelectedCategory(event.target.value)
  }

   function filteredData(products,selected,query)
   {
      let filteredProducts = products
      //filtering input items
      if(query)
      {
        filteredProducts = filteredItems;
      }

      //seletec filter
      if(selected)
      {
        filteredProducts = filteredProducts.filter(({category,color,newPrice,company,title})=>
          category === selected || color === selected ||company === selected || newPrice === selected || title === selected 

        )
      }

      return filteredProducts.map( ({img,title,star,reviews,prevPrice,newPrice}) =>(
        <Card key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
        />
      ) )

   }
  const result = filteredData(data,selectodCategory,query)
  return (
    <div>
      <SideBar handleChange={handleChange} />
      <Navigaion query={query} handleInputChange={handleInputChange} />
      <Recomended  handleClick={handleClick}/>
      <Products result={result}  />
    </div>
  )
}

export default App