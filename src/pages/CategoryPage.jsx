import { baseService } from '../api/baseService'
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


function CategoryPage() {
  const [products, setproducts] = useState([])
  const { categoryId } = useParams()
  useEffect(() => {
    baseService.getAll("Products")
      .then(data => {
        let filteredData = data.filter(product => product.CategoryId == categoryId)
        setproducts(filteredData)
      })
  }, [categoryId])

  return <>
    <div>
      <h1>Activities</h1>
      <hr />
      <div>
        {
          products.map(product => <Link to={`/${product.id}`}>
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.unitPrice}</p>
            </div></Link>)
        }
      </div>
    </div>
  </>
}

export default CategoryPage