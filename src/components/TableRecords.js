import { Table , TableBody , TableContainer , TableHead , TableCell , TableRow , Paper} from '@mui/material';
import React from 'react'

const TableData = [{
    "id": 1,
    "first_name": "Kathy",
    "last_name": "Coraini",
    "email": "kcoraini0@youtube.com",
    "gender": "Female",
    "ip_address": "51.228.130.15"
  }, {
    "id": 2,
    "first_name": "Keen",
    "last_name": "Kennham",
    "email": "kkennham1@geocities.jp",
    "gender": "Male",
    "ip_address": "105.64.21.238"
  }, {
    "id": 3,
    "first_name": "Jourdain",
    "last_name": "Newham",
    "email": "jnewham2@csmonitor.com",
    "gender": "Male",
    "ip_address": "23.34.17.213"
  }, {
    "id": 4,
    "first_name": "Cati",
    "last_name": "Tie",
    "email": "ctie3@uol.com.br",
    "gender": "Agender",
    "ip_address": "95.204.102.45"
  }, {
    "id": 5,
    "first_name": "Walton",
    "last_name": "Chiverstone",
    "email": "wchiverstone4@wsj.com",
    "gender": "Male",
    "ip_address": "131.4.242.36"
  }, {
    "id": 6,
    "first_name": "Roderigo",
    "last_name": "MacGilpatrick",
    "email": "rmacgilpatrick5@spotify.com",
    "gender": "Male",
    "ip_address": "84.158.100.246"
  }, {
    "id": 7,
    "first_name": "Biron",
    "last_name": "Calbaithe",
    "email": "bcalbaithe6@booking.com",
    "gender": "Male",
    "ip_address": "226.255.166.30"
  }, {
    "id": 8,
    "first_name": "Anstice",
    "last_name": "Killoran",
    "email": "akilloran7@hp.com",
    "gender": "Female",
    "ip_address": "217.237.220.19"
  }, {
    "id": 9,
    "first_name": "Lyda",
    "last_name": "Filshin",
    "email": "lfilshin8@privacy.gov.au",
    "gender": "Female",
    "ip_address": "136.104.88.132"
  }, {
    "id": 10,
    "first_name": "Darill",
    "last_name": "Matura",
    "email": "dmatura9@miibeian.gov.cn",
    "gender": "Male",
    "ip_address": "119.114.241.20"
  }]


const TableRecords = () => {
  return (
    <TableContainer className='table' component={Paper}>
        <Table stickyHeader aria-label={'sticky table'} >
            <TableHead className='bg-secondary'>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
            </TableHead>
            <TableBody>
                {TableData.map((data)=>(
                <TableRow key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.first_name}</TableCell>
                    <TableCell>{data.last_name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                </TableRow>    
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TableRecords