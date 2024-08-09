
import { useParams } from 'react-router-dom'
import { baseService } from '../api/baseService'
import React, { useState, useEffect } from 'react';


function ActivityDetail() {
  const { activityId } = useParams()
  const [activity, setactivity] = useState({})
  useEffect(() => {
    baseService.getById("Activity",activityId)
      
      .then(res => setactivity(res.data))

  }, [])

  return <>
    <h1>Activity Detail Page</h1>
    <hr />
    <div>
      <div key={activity.id}>
        <h3>{activity.name}</h3>
        <p>{activity.detail}</p>
      </div>
    </div>
  </>
}

export default ActivityDetail