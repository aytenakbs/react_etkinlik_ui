import{createContext,useState} from "react";
export const FavoriteContext=createContext(null)
export const FavoriteProvider=({children})=>{
    const [favorites, setfavorites] = useState([])
    const addToFavorites=(activity)=>{
        setfavorites([...favorites,activity])
    }
    const removeFromFavorites=(id)=>{
        let filteredFavorites=favorites.filter(item=>item.id!= id)
        setfavorites(filteredFavorites)
    }
    const clearAll=()=>{
        setfavorites([])
    }
    const isFavorite=(id)=>{
return favorites.find(x=>x.id==id)
    }
    return <FavoriteContext.Provider value={{favorites,addToFavorites,removeFromFavorites,clearAll}}>{children}</FavoriteContext.Provider>
}