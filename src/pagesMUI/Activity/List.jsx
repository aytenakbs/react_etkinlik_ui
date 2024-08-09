import React, { useContext, useEffect } from 'react'
import { baseService } from '../../api/baseService'
import { DataGrid } from '@mui/x-data-grid'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FavoriteContext } from '../../context/FavoriteContext';
import { useNavigate } from 'react-router-dom';

function List() {
    const [activity, setactivity] = useState([])
    const [loading, setloading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
      loadActivities()
    }, [])
    const loadActivities=()=>{
        baseService.getAll("Activity")
        .then(res=>{
            setactivity(res.data)
            setloading(false)
        })
    }
    const {addToFavorites}=useContext(FavoriteContext)
    const columns=[
        {
            field:"id",
            header:"ID",
            flex:0.2
        },
        {
            field:"name",
            header:"Activity Name",
            flex:0.2
        },
        {
            field:"categoryId",
            header:"Activity Category",
            flex:0.2
        },
        {
            field:"description",
            header:"Activity Description",
            flex:0.2
        },
        {
            field: "delete",
            header: "Delete",
            flex: 0.2,
            renderCell: (params) => {
                return <Button color="error" variant="contained" onClick={() => deleteActivity(params.row.id)}>Delete</Button>
            }
        },
        {
            field: "favorite",
            header: "Favorite",
            flex: 0.2,
            renderCell: (params) => {
                return <Button color="pink" variant="contained" onClick={() => add(params.row)}>Favorite</Button>
            }

        }
    ]
    const deleteActivity = (id) => {
        baseService.delete("Activity", id)
            .then(res => {
                loadActivities()
            })
    }
    const add=(activity)=>{
        addToFavorites(activity)
    }

  return <>
  <DataGrid
  rows={activity}
  columns={columns}
  loading={loading}
  />
  </>
}

export default List