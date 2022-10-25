import React, { useState } from 'react'
import { Select, MenuItem, FormControl } from '@material-ui/core';
import TableRecords from './TableRecords';

const Dashboard = () => {

    const [locations, setLocations] = useState(['Andheri', 'Wadhwa', 'Wadhwa1'])
    const [subTopics, setSubTopics] = useState(['attendance', 'guards', 'issues', 'feedback'])

    return (
        <div className='dashboard'>
            <div className='dashboard__upper'> 
                <FormControl className='dashboard__select '>
                    <Select label="Andheri m-2">
                        {locations.map((location) => (
                            <MenuItem value={location}>{location}</MenuItem>
                        ))}
                    </Select>
                    <Select label="Andheri m-2" >
                        {subTopics.map((subtopic) => (
                            <MenuItem value={subtopic}>{subtopic}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            
                <div className='row'>
                <div className='dashboard__table col-8'> 
                    <TableRecords />
                </div>
            
                </div>          
                
            </div>
        </div>
    )
}

export default Dashboard