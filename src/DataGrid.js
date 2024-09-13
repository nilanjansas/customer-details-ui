// src/DataGrid.js
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

const DataGrid = () => {
  const [rowData, setRowData] = useState([]);
  const [columnDefs] = useState([
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Date Of Birth', field: 'dob' },
  ]);

  useEffect(() => {
    axios.get('http://localhost:9090/customer/customerDetails')
      .then(response => {
        console.log(JSON.stringify(response.data));
        setRowData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 1300 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default DataGrid;
