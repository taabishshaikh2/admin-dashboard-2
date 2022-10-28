import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "../axios.js";
import requests from "../requests.js";

const TableRecords = ({fetchurl}) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    console.log("Use Effect ran");
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA3YjgyNWM4NGU1YzViNjkwZTQ1OCIsImlhdCI6MTY2NDQ4OTg5MX0.vgRmpXTv0p_UwjFqH7RSgbwgfJI8_hQUvsKg6kOxTAY",
      },

      redirect: "follow",
    };

    async function fetchData() {
      const request = await axios.get(fetchurl, requestOptions);

      console.log(request.data.payload);
      setTableData(request.data.payload);
      return request;
    }
    fetchData();
  }, [fetchurl]);

  return (
    <TableContainer className="table" component={Paper}>
      <Table stickyHeader aria-label={"sticky table"}>
        <TableHead className="bg-secondary">
          <TableCell>ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Location</TableCell>
        </TableHead>
        {tableData.map((data) => (
          <TableBody>
            <TableRow key={data._id}>
                <TableCell>{data._id}</TableCell>
                <TableCell>{data.user.firstName}</TableCell>
                <TableCell>{data.user.lastName}</TableCell>
                <TableCell>{data.user.email}</TableCell>
                <TableCell>{data.location.name}</TableCell>
                
              </TableRow>
            {/*
            {data.location.name === "Wadhwa - A" ? (
              <TableRow key={data._id}>
                <TableCell>{data._id}</TableCell>
                <TableCell>{data.user.firstName}</TableCell>
                <TableCell>{data.user.lastName}</TableCell>
                <TableCell>{data.user.email}</TableCell>
                <TableCell>{data.location.name}</TableCell>
              </TableRow>
            ) : (
              <TableCell>no data</TableCell>
            )} */}
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
};

export default TableRecords;
