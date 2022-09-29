import React, { useEffect, useState } from 'react';
import './Exercise.css'

const Exercise = () => {
    const exercises =[
        {id: 1, title: 'agulami', time: 30},
        {id: 2, title: 'abulami', time: 20},
        {id: 3, title: 'ayulami', time: 50},
        {id: 4, title: 'aeulami', time: 60},
        {id: 5, title: 'awulami', time: 70},
        {id: 6, title: 'aiulami', time: 80}
    ]

    const [exercise, setExercise] = useState([]);

    useEffect( () =>{
        fetch('exercises.json')
        .then(res=> res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className='exercise-container'>
            <div className='exercise-types'>
                <h3>Select Your Exercise</h3>
            </div>
            <div className='user'>
                <h3>User</h3>
            </div>
        </div>
    );
};

export default Exercise;