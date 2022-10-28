import React from 'react'
import requests from '../requests'
import TableRecords from './TableRecords'

const Attendance = () => {
  return (
    <TableRecords fetchurl={requests.fetchAttendance} />
  )
}

export default Attendance