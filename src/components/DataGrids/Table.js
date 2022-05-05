import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
  const data = [
      {id:1,name: "손준석", age: 20},
      {id:2,name: "이광수", age: 23},
      {id:3,name: "손민혁", age: 24},
      {id:4,name: "신우승", age: 27},
  ]
  const columns=[
      {
          headerName: "ID", field: "id"
      },
      {
          headerName: "Name", field: "name", checkboxSelection: true
      },
      {
          headerName: "Age", field:"age"
      }
  ]
  const defaultColDef={sortable:true, editable: true, filter: true}
  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef}/>
    </div>
  )
}

export default Table