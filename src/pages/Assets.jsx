import React from 'react';
import "../styles/Assets.scss";
import bigcar from "../assets/images/big-car.png"
import ActivityChart from "../charts/ActivityChart";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Assets = () => {
    return (
        <div className='Assets'>
            <h2 className='title'>Assets</h2>
            <div className='Assets__body'>
                <div className='Assets__left'>
                    <div className='Assets__left__top'>
                        <div>
                            <p>Fuel Usage</p>
                            <h3>2903.89 Ltr</h3>
                        </div>
                        <div>
                            <p>Fuel Usage</p>
                            <h3>2903.89 Ltr</h3>
                        </div>
                        <div>
                            <p>Fuel Usage</p>
                            <h3>2903.89 Ltr</h3>
                        </div>
                        <div>
                            <p>Fuel Usage</p>
                            <h3>2903.89 Ltr</h3>
                        </div>
                    </div>
                    <img src={bigcar} alt="" />
                </div>
                <div className='Assets__right'>
                    <div className='graph'>
                        <h3 className="stats__title">Car Statistics</h3>
                        <ActivityChart />
                    </div>
                    <div className='Assets__right__middle'>
                        <div className='Noties'>
                            <h3>Noties</h3>
                            <div className='text'>
                                <span>
                                    <i class="ri-chat-3-line"></i>
                                </span>
                                <div>
                                    <h4>Monday, 6th April 2020</h4>
                                    <p>Book for General Service</p>
                                    <div className='status'>
                                        completed
                                    </div>
                                </div>
                            </div>
                            <div className='text'>
                                <span>
                                    <i class="ri-error-warning-line"></i>
                                </span>
                                <div>
                                    <h4>Thursday, 24th October 2021</h4>
                                    <p>Book for General Service</p>
                                    <div className='status'>
                                        completed
                                    </div>
                                </div>
                            </div>
                            <div className='text'>
                                <span>
                                    <i class="ri-lightbulb-line"></i>
                                </span>
                                <div>
                                    <h4>Monday, 13th August 2018</h4>
                                    <p>Book for General Service</p>
                                    <div className='status'>
                                        completed
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='Sensors'>
                            <h3>Available sensors</h3>
                            <div className='text'>
                                <FormGroup>
                                    <div className='checkbox'>
                                        <FormControlLabel control={<Checkbox />} label="Asset - Fuel consumed" />
                                        <i class="ri-line-chart-line"></i>
                                    </div>
                                    <div className='checkbox'>
                                        <FormControlLabel control={<Checkbox />} label="Asset - Ododmeter" />
                                        <i class="ri-line-chart-line"></i>
                                    </div>
                                    <div className='checkbox'>
                                        <FormControlLabel control={<Checkbox />} label="Asset - Runtime" />
                                        <i class="ri-line-chart-line"></i>
                                    </div>
                                    <div className='checkbox'>
                                        <FormControlLabel control={<Checkbox />} label="Asset - Speed" />
                                        <i class="ri-line-chart-line"></i>
                                    </div>
                                    <div className='checkbox'>
                                        <FormControlLabel control={<Checkbox />} label="Asset - Speed" />
                                        <i class="ri-line-chart-line"></i>
                                    </div>
                                </FormGroup>
                            </div>


                        </div>
                    </div>
                    <div className='Assets__right__bottom'>
                        <div className='title'>
                            <h3>Reminders</h3>
                            <button>+ Add new</button>
                        </div>
                        <div className='table'>
                            <div className='Reminder'>
                                <p>Description</p>
                                <p>Due</p>
                                <p>Overdue</p>
                                <p>Notify</p>
                                <p>Status</p>
                            </div>
                            <div className='Reminder'>
                                <p>Description</p>
                                <p>Due</p>
                                <p>Overdue</p>
                                <p>Notify</p>
                                <p>Status</p>
                            </div>
                            <div className='Reminder'>
                                <p>Description</p>
                                <p>Due</p>
                                <p>Overdue</p>
                                <p>Notify</p>
                                <p>Status</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};
export default Assets;