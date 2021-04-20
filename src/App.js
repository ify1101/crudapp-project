import React, {useState} from 'react'
import UserTable from './Table'
import Addproduct from './Addproduct'


const App = () => {
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }
     const productsData = [
       {no:1, name:'plates', type:'glass', amount:3000},
       {no:2, name:'cups', type:'plastic', amount:3500},
       {no:3, name:'spoons', type:'steel', amount:3500}
     ]
     const [products, setProducts]= useState(productsData)
     const addProduct = (product) => {
       product.id = products.length + 1
       setProducts([...products, product])
     }

  return(
    <div className="container">
       <h1>Crud App for Radeer Career</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Product</h2>
        </div>
        <div className="flex-large">
          <h2>View Product</h2>
          <UserTable products={products} deleteProduct={deleteProduct}/>
          <Addproduct  addProduct={addProduct} />
        
        </div>
      </div>
    </div>
  )
}
    
export default App