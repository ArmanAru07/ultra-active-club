import React, { useEffect, useState } from 'react';
import { getTime, Settimelocal } from '../../utilities/fakeDB';
import './User.css'
import me from '../../image/stock-vector-male-avatar-cartoon-guy-character-facial-expression-smile-vector-illustration-580573279.jpg';

const User = (props) => {
    const {user} = props;
    console.log(user);

    const [activityTime, setactivityTime] = useState()

    let total = 0;
    for(const exercise of user){
        total = total + exercise.time;
    }

    const breaktime = (time) => {
         Settimelocal(time)
        // settimelocal(time);
    }

    
    const getitem = getTime()

    useEffect(() => {
        for (const item in getitem) {
            setactivityTime(getitem[item].time)
        }
    }, [])

    return (
        <div className='user'>
            <div>
                <img src={me} alt="" />
                <h4>Arman Hosen</h4>
                <p><small>Chowmuhani, Noakhali</small></p>
                <div className='discribe'>
                    <div className='user-info'><h3>60<small>kg</small></h3><p>Weight</p></div>
                    <div className='user-info'><h3>5.6 </h3><p>Height</p></div>
                    <div className='user-info'><h3>25<small>yrs</small></h3><p>Age</p></div>
                </div>
            </div>
            <div>
                <h5>Add A Break</h5>
                <button className='btn-break' onClick={() => { breaktime(10) }}>10s</button>
                <button className='btn-break' onClick={() => { breaktime(20) }}>20s</button>
                <button className='btn-break' onClick={() => { breaktime(30) }}>30s</button>
                <button className='btn-break' onClick={() => { breaktime(40) }}>40s</button>
                <button className='btn-break' onClick={() => { breaktime(50) }}>50s</button>
                <h5>Exercise Details</h5>
                <div>
                    <h5>Exercise Time: <small>{total} seconds</small></h5>
                    <h5>Break Time: <small>{activityTime} seconds</small></h5>
                </div>

                <button className='btn-final'>Activity Completed</button>
            </div>


        </div>
    );
};

export default User;