import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../../../context/FavoriteContext';
import { red } from '@mui/material/colors';


function SiteHeader() {

  const [categories, setcategories] = useState([])
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then(res => res.json())
      .then(data => setcategories(data))
  }, [])
const {favorites} = useContext(FavoriteContext)
  return <>
    <div>
      <Link to="/"><h3>Logo</h3></Link>
      <AppBar position="static">
        <Stack direction="row" justifyContent="space-evenly" sx={{ padding: "1%" }}>
          <Link style={{ color: "white", textDecoration: "none" }} to="/products"><Typography variant="h5">Products</Typography></Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/products"><Typography variant="h5">Chart</Typography></Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/favorite"><Typography variant="h5">Favorites <span style={{color:"red"}}>({favorites.lenght})</span></Typography></Link>
        </Stack>
      </AppBar>
      <ul>
        {
          categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></li>)
        }
      </ul>
      <input type="text" placeholder="Search" />
    </div>
  </>
}

export default SiteHeader