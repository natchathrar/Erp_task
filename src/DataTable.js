import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './Erp.css'
import { InputText } from 'primereact/inputtext';

const DataTables = () => {

    const data = [
        {
            color: 'orange',
            T: 'R1',
            customerName: 'Aashifa',
            qtnCode: 'QC001',
            qtnDt: '2022-01-01',
            valL: 1000,
            keyPerson: 'Person 1',
            prodCatg: 'Category A',
            FU: '1',
            lastFU: 'LFU1',
            lastFURemarks: 'Remarks 1',
            nextFU: 'NFU1',
            POExp: '2022-02-01',
        },
        {
            color: 'red',
            T: 'R2',
            customerName: 'Ranjith',
            qtnCode: 'QC002',
            qtnDt: '2022-02-01',
            valL: 1500,
            keyPerson: 'Person 2',
            prodCatg: 'Category B',
            FU: '2',
            lastFU: 'LFU2',
            lastFURemarks: 'Remarks 2',
            nextFU: 'NFU2',
            POExp: '2022-03-01',
        },
        {
            color: 'orange',
            T: 'R3',
            customerName: 'Sara',
            qtnCode: 'QC003',
            qtnDt: '2022-03-01',
            valL: 1200,
            keyPerson: 'Person 3',
            prodCatg: 'Category C',
            FU: '3',
            lastFU: 'LFU3',
            lastFURemarks: 'Remarks 3',
            nextFU: 'NFU3',
            POExp: '2022-04-01',
        },
        {
            color: 'orange',
            T: 'R1',
            customerName: 'Aashifa',
            qtnCode: 'QC001',
            qtnDt: '2022-01-01',
            valL: 1000,
            keyPerson: 'Person 1',
            prodCatg: 'Category A',
            FU: '4',
            lastFU: 'LFU1',
            lastFURemarks: 'Remarks 1',
            nextFU: 'NFU1',
            POExp: '2022-02-01',
        },
        {
            color: 'red',
            T: 'R2',
            customerName: 'Ranjith',
            qtnCode: 'QC002',
            qtnDt: '2022-02-01',
            valL: 1500,
            keyPerson: 'Person 2',
            prodCatg: 'Category B',
            FU: '5',
            lastFU: 'LFU2',
            lastFURemarks: 'Remarks 2',
            nextFU: 'NFU2',
            POExp: '2022-03-01',
        },
        {
            color: 'orange',
            T: 'R3',
            customerName: 'Sara',
            qtnCode: 'QC003',
            qtnDt: '2022-03-01',
            valL: 1200,
            keyPerson: 'Person 3',
            prodCatg: 'Category C',
            FU: '6',
            lastFU: 'LFU3',
            lastFURemarks: 'Remarks 3',
            nextFU: 'NFU3',
            POExp: '2022-04-01',
        },
        {
            color: 'orange',
            T: 'R1',
            customerName: 'Aashifa',
            qtnCode: 'QC001',
            qtnDt: '2022-01-01',
            valL: 1000,
            keyPerson: 'Person 1',
            prodCatg: 'Category A',
            FU: '7',
            lastFU: 'LFU1',
            lastFURemarks: 'Remarks 1',
            nextFU: 'NFU1',
            POExp: '2022-02-01',
        },
        {
            color: 'red',
            T: 'R2',
            customerName: 'Ranjith',
            qtnCode: 'QC002',
            qtnDt: '2022-02-01',
            valL: 1500,
            keyPerson: 'Person 2',
            prodCatg: 'Category B',
            FU: '8',
            lastFU: 'LFU2',
            lastFURemarks: 'Remarks 2',
            nextFU: 'NFU2',
            POExp: '2022-03-01',
        },
        {
            color: 'orange',
            T: 'R3',
            customerName: 'Sara',
            qtnCode: 'QC003',
            qtnDt: '2022-03-01',
            valL: 1200,
            keyPerson: 'Person 3',
            prodCatg: 'Category C',
            FU: '9',
            lastFU: 'LFU3',
            lastFURemarks: 'Remarks 3',
            nextFU: 'NFU3',
            POExp: '2022-04-01',
        },
        {
            color: 'orange',
            T: 'R1',
            customerName: 'Aashifa',
            qtnCode: 'QC001',
            qtnDt: '2022-01-01',
            valL: 1000,
            keyPerson: 'Person 1',
            prodCatg: 'Category A',
            FU: 'FU1',
            lastFU: 'LFU1',
            lastFURemarks: 'Remarks 1',
            nextFU: 'NFU1',
            POExp: '2022-02-01',
        },
        {
            color: 'red',
            T: 'R2',
            customerName: 'Ranjith',
            qtnCode: 'QC002',
            qtnDt: '2022-02-01',
            valL: 1500,
            keyPerson: 'Person 2',
            prodCatg: 'Category B',
            FU: 'FU2',
            lastFU: 'LFU2',
            lastFURemarks: 'Remarks 2',
            nextFU: 'NFU2',
            POExp: '2022-03-01',
        },
        {
            color: 'orange',
            T: 'R3',
            customerName: 'Sara',
            qtnCode: 'QC003',
            qtnDt: '2022-03-01',
            valL: 1200,
            keyPerson: 'Person 3',
            prodCatg: 'Category C',
            FU: 'FU3',
            lastFU: 'LFU3',
            lastFURemarks: 'Remarks 3',
            nextFU: 'NFU3',
            POExp: '2022-04-01',
        },
    ];
    const columns = [
        { field: 'T', header: 'T' },
        { field: 'customerName', header: 'Customer Name' },
        { field: 'qtnCode', header: 'Qtn Code' },
        { field: 'qtnDt', header: 'Qtn Dt' },
        { field: 'valL', header: 'Val(L)' },
        { field: 'keyPerson', header: 'Key Person' },
        { field: 'prodCatg', header: 'Prod Catg' },
        { field: 'FU', header: 'FU' },
        { field: 'lastFU', header: 'Last FU' },
        { field: 'lastFURemarks', header: 'Last FU Remarks' },
        { field: 'nextFU', header: 'Next FU' },
        { field: 'POExp', header: 'PO Exp' },
    ];
    const colorMap = {
        "Aashifa": 'orange',
        "Ranjith": 'Orange',
        "Sara": 'red',
    };

    const rowClassName = (rowData) => {
        const colorInfo = colorMap[rowData.customerName];
        const className = colorInfo || '';
        return className;
    };


    return (
        <>
            <div className='row d-flex justify-content-around align-items-center m-2 mt-4'>
                <div className='col-md-9 d-flex flex-wrap gap-2 ' >
                    <select className='selectionQuot'>
                        <option>Qtn</option>
                        <option>Option 1.1</option>
                        <option>Option 1.2</option>
                    </select>

                    <select className='selectionQuot'>
                        <option>All FE</option>
                        <option>Option 2.1</option>
                        <option>Option 2.2</option>
                    </select>

                    <select className='selectionQuot'>
                        <option>Qtn importance</option>
                        <option>Option 3.1</option>
                        <option>Option 3.2</option>
                    </select>

                    <select className='selectionQuot'>
                        <option>Customer category</option>
                        <option>Option 4.1</option>
                        <option>Option 4.2</option>
                    </select>
                </div>
                <div className='col-md-3'>
                    <span className="p-input-icon-right">
                        <i className="bx bx-search text-sky fs-6" />
                        <InputText placeholder="Search" />
                    </span>
                </div>
            </div>
            <div className='table table-responsive'>

                <DataTable
                    value={data}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    className="p-datatable-striped m-3"
                    rowClassName={rowClassName}
                >
                    {columns.map((col) => (
                        <Column key={col.field} field={col.field} header={col.header} style={{ fontSize: '11px' }} />
                    ))}
                </DataTable>
            </div>
        </>
    );
};

export default DataTables;