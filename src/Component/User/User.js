import React from 'react';
import './User.css'

const User = (props) => {
    const {user} = props;

    let total = 0;
    for(const exercise of user){
        total = total + exercise.time;
    }


    return (
        <div className='user'>
            <div>
                <img src="" alt="" />
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
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
                <h5>Exercise Details</h5>
                <div>
                    <h5>Exercise Time: <small>{total} seconds</small></h5>
                    <h5>Break Time: <small> seconds</small></h5>
                </div>

                <button>Activity Completed</button>
            </div>


        </div>
    );
};

export default User;