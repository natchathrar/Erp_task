import React from 'react';
import './Erp.css'
import Dashboard from './Dashboard';
import intech from './Assets/intech-logo.jpg'
export default function SideNav() {
    return (
        <>
            <nav className="navbar navbar-light d-block">
                <span className='border p-2'>
                    <img src={intech} alt='logo' height='30px' width='30px' />
                    <a className="navbar-brand" href=" "><b className='intech'>Intech ERP</b></a>

                </span>

                <span >  <i class='bx bxs-left-arrow-circle'></i> </span>
                <i class='bx bx-log-out bx-rotate-180  float-end' ></i>
            </nav>
            <div style={{ fontSize: '12px' }}>
                <div className='row'>
                    <div className='col-md-3 col-lg-2  shadow'>
                        <div className='d-flex align-items-center  justify-content-between'>
                            <span className='imgBack mx-auto'>
                                <img src='https://play-lh.googleusercontent.com/bTjUXfgtmtC0G1xuKUAAlKoGQQAjlRc9it2rrOFakxLlNTdx16nbpMcR9VHNSSmoOw=w526-h296-rw' alt='profile' height='55px' style={{ borderRadius: '50%' }} />

                            </span>
                            <div className='text-sky'>
                                <span >R.Natchathra</span>
                                <p>OE,123</p>
                            </div>
                        </div>
                        <div className='border-bottom'>
                            <p className='m-2'> <a className=' text-decoration-none text-dark' href=" ">Address Book</a></p>
                        </div>
                        <div className='border-bottom'>
                            <p className='m-2'> <a className=' text-decoration-none text-dark' href=" ">Price & stock</a></p>
                        </div>
                        <div className='border-bottom'>
                            <p className='m-2'> <a className=' text-decoration-none text-dark' href=" ">Qtn Reports</a></p>
                        </div>
                        <div className='border-bottom'>
                            <p className='m-2'> <a className=' text-decoration-none text-dark' href=" ">DRS</a></p>
                        </div>
                        <div className='border-bottom'>
                            <p className='m-3 position-relative'>
                                <a className='text-decoration-none text-dark' href=" ">
                                    Address Book App
                                    <span className='position-absolute top-0 start-100 translate-middle'>0</span>
                                </a>
                            </p>
                        </div>
                        <div className='m-1'>
                            <a className='text-sky ms-3' href=" "><b>MID value(L)</b></a>
                            <table className='table table-bordered table-responsive'>
                                <tr>
                                    <th>Received</th>
                                    <th>Dropped</th>
                                    <th>Lost</th>
                                </tr>
                                <tr>
                                    <td className='text-success'>0</td>
                                    <td>2.38</td>
                                    <td className='text-danger'>0</td>
                                </tr>
                            </table>
                        </div>
                        <div className='m-3'>
                            <a className='text-sky' href=" "><b>Qtn Pending-Perpetual</b></a>
                            <table className='table table-bordered'>
                                <tr>
                                    <th>Qty</th>
                                    <th>Value(L)</th>
                                </tr>
                                <tr>
                                    <td>89</td>
                                    <td>136.72(L)</td>
                                </tr>
                            </table>
                        </div>
                        <div className='m-3'>
                            <a className='text-sky' href=" "><b> SO Pending-Perpetual</b></a>
                            <table className='table table-bordered'>
                                <tr>
                                    <th>Qty</th>
                                    <th>Value(L)</th>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </table>
                        </div>
                        <div className='m-3'>
                            <a className='text-sky' href=" "><b>PO Expected-value(L)</b></a>
                            <table className='table table-bordered'>
                                <tr>
                                    <th>Qty</th>
                                    <th>Value(L)</th>
                                </tr>
                                <tr>
                                    <td>47</td>
                                    <td>40.91</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='col-md-9 col-lg-10'>
                        <Dashboard />
                    </div>
                </div>
            </div>
        </>
    )
}