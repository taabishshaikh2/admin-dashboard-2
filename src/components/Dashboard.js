import React, { useEffect, useState } from 'react'
import { Select, MenuItem, FormControl } from '@material-ui/core';
import TableRecords from './TableRecords';
import axios from '../axios.js';
import requests from '../requests.js';

const Dashboard = () => {

    const [locations, setLocations] = useState([])
    // const [subTopics, setSubTopics] = useState(['attendance', 'guards', 'issues', 'feedback'])

    useEffect(() => {
        console.log("Use Effect ran");
        const requestOptions = {
          method: 'GET',
          headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA3YjgyNWM4NGU1YzViNjkwZTQ1OCIsImlhdCI6MTY2NDQ4OTg5MX0.vgRmpXTv0p_UwjFqH7RSgbwgfJI8_hQUvsKg6kOxTAY"},
          
          redirect: 'follow'
        };
        
        async function fetchData() {
          
          const request = await axios.get(requests.fetchLocation, requestOptions);
          
          console.log(request.data.payload)
          setLocations(request.data.payload)
          return request;
        }
        fetchData();
      }, []);

      const onLocationChange = (e) => {
        const locationChange = e.target.value
        console.log(locationChange)
        setLocations(locationChange)
      }

    return (
        <div className='dashboard'>
            <div className='dashboard__upper'> 
                <FormControl className='dashboard__select '>
                    <Select label="Andheri m-2" value={locations} onChange={onLocationChange}>
                        {locations.map((location) => (
                            <MenuItem value={location.name}>{location.name}</MenuItem>
                        ))}
                    </Select>
                   
                </FormControl>
            
                <div className='row'>
                <div className='dashboard__table col-8'> 
                    <TableRecords fetchurl={requests.fetchAttendance} />
                </div>
            
                </div>          
                
            </div>
        </div>
    )
}

export default Dashboard