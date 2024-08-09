import React from 'react'
import { FavoriteContext } from '../../context/FavoriteContext'
import { light } from '@mui/material/styles/createPalette'
import { ClearAll } from '@mui/icons-material'

function Favorite() {
  const {favorites,clearAll} = useContext(FavoriteContext)
  return<>
  <h1>Favorites</h1>
  <hr />
  <button onClick={clearAll}>Clear All</button>
  {
    favorites.map(fav=><li key={fav.id}>{fav.name}</li>)
  }
  </>
}

export default Favorite