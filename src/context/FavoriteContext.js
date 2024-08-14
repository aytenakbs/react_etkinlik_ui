import { createContext, useState } from "react";
export const FavoriteContext = createContext(null)
export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const addToFavorites = (activity) => {
        setFavorites([...favorites, activity])
    }
    const removeFromFavorites = (id) => {
        let filteredFavorites = favorites.filter(item => item.id != id)
        setFavorites(filteredFavorites)
    }

    const favOperation = (activity) => {
        let favControl = favorites.find(f => f.id == activity.id)
        if (favControl) {
            removeFromFavorites(activity.id)
        }
        else {
            addToFavorites(activity)
        }
    }

    const clearAll = () => {
        setFavorites([])
    }
    const isFavorite = (id) => {
        return favorites.find(x => x.id == id)
    }
    return <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, favOperation, clearAll,isFavorite }}>{children}</FavoriteContext.Provider>
}