import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DataTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make", field: "make"
            }, {
                headerName: "Model", field: "model"
            }, {
                headerName: "Price", field: "price"
            }],
            rowData: [{ make: "Toyota", model: "Celeica", price: 50000},
                { make: "Ford", model: "Mondeo", price: 30000},
                { make: "Porche", model: "Baxter", price: 4000}
            ]
        }
    }

    render(){
        return(
            <div className="ag-theme-balham"
                style={{
                    height: '300px',
                    width: '300px'
                }}
            >
            <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
            </AgGridReact>               

            </div>
        )
    }
}

export default DataTable;