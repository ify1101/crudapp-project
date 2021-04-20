import React, { useState } from 'react'

const Addproduct = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  const [product, setProduct] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!product.name || !product.username) return

        props.Addproduct(product)
        setProduct(initialFormState)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
      />
      <label>productname</label>
      <input
        type="text"
        name="productname"
        value={product.productname}
        onChange={handleInputChange}
      />
      <button>Add new product</button>
    </form>
  )
}

export default Addproduct
