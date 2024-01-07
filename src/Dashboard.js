import React from 'react'
import TableComponent from './DataTable'


export default function Dashboard() {
    return (
        <div className=''>

            <div className='bg-light' style={{ fontSize: '11px' }}>

                <div className=''>
                    <div className='row d-flex align-items-center justify-content-between' >
                        <div className=' col-md-5 mt-3'>
                            <h5 className='text-sky'>Dashboard</h5>
                            <p> <span className='text-sky'>Home &gt;</span><span> Quotation Followup sheet</span> </p>
                        </div>
                        <div className='d-flex flex-wrap gap-2 col-md-7 mb-2' >
                            <button className='btn btn-secondary btn-sm  rounded-0 position-relative me-2' style={{ fontSize: '12px' }} >Pending Enquiry<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">11</span></button>
                            <button className='btn btn-secondary btn-sm   rounded-0 position-relative' style={{ fontSize: '12px' }}>Pending FU<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">40</span></button>
                            <button className='btn btn-secondary btn-sm   rounded-0 position-relative' style={{ fontSize: '12px' }}>PO Received <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">972</span></button>
                            <button className='btn btn-secondary btn-sm  rounded-0 ' style={{ fontSize: '12px' }}>Manual Order</button>
                            <button className='btn btn-secondary btn-sm  rounded-0 ' style={{ fontSize: '12px' }}><i class='bx bxs-plus-circle'></i>Add Enquiry</button>

                        </div>

                    </div>
                    <div className='card'>

                        <TableComponent />

                    </div>
                </div>
            </div>
        </div>
    )
}