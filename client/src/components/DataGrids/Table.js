import React,{useState, useEffect} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
  const [rowData,setRowData] = useState([
      {make:1,model: "손준석", price: 20},
  ]);
  const [columns,setColumns]=useState([
      {
          headerName: "make", field: "make"
      },
      {
          headerName: "model", field: "model"
      },
      {
          headerName: "price", field:"price"
      }
  ]);
  const defaultColDef={sortable:true, editable: true, filter: true}

  useEffect(()=>{
      fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result =>result.json())
      .then(rowData=>setRowData(rowData))
  },[]);
  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
        <AgGridReact rowData={rowData} columnDefs={columns} defaultColDef={defaultColDef}/>
    </div>
  )
}

export default Table