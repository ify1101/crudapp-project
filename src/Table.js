import React from 'react';

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Product Id</th>
        <th>Product name</th>
        <th>Product type</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
    {props.products.length > 0 ? (
        props.products.map((product) => (
          <tr key={product.id}>
              <td>{product.no}</td>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>{product.amount}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button onClick={() =>
              props.deleteProduct(product.id)} className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No products</td>
        </tr>
      )}

          </tbody>
  </table>
)

export default UserTable
