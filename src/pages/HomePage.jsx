import React, { useState, useEffect } from 'react';
import { baseService } from '../api/baseService';
import { DataGrid } from '@mui/x-data-grid'; // veya doğru bileşen ismini ekleyin


function HomePage() {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    baseService.getAll("Activity")
    .then(res=>setActivities(res.data))
  }, [])
  const columns=[
    {
      field:"id",
      headerName:"ID",
      flex:0.2
    },
    {
      field:"categoryId",
      headerName:"Category",
      flex:0.2
    },
    {
      field:"name",
      headerName:"Activity Name",
      flex:0.2
    },
    {
      field:"description",
      headerName:"Description",
      flex:0.2
    },
    {
      field:"startDate",
      headerName:"Date",
      flex:0.2
    }
  ]

  return <>
  <div>
    <h1>Activities</h1>
    <hr/>
    <DataGrid
    rows={activities}
    columns={columns}
    />
  </div>
  </>
}

export default HomePage