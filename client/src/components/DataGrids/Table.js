import React,{useState, useEffect} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
  const [rowData,setRowData] = useState([]);
  const [columns,setColumns]=useState([
      {
          headerName: "id", field: "id"
      },
      {
          headerName: "image", field: "image"
      },
      {
          headerName: "name", field:"name"
      },
      {
          headerName: "birthday", field:"birthday"
      },
      {
          headerName: "gender", field:"gender"
      },

  ]);
  const defaultColDef={sortable:true, editable: true, filter: true}

  useEffect(()=>{
      fetch('/api/customers')
      .then(result =>result.json())
      .then(rowData=>setRowData(rowData))
      
  },[]);
  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
        <AgGridReact rowData={rowData} columnDefs={columns} defaultColDef={defaultColDef}/>
        {
            console.log(rowData)
        }
    </div>
    
  )
}

export default Table