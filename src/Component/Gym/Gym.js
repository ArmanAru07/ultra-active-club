import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import User from '../User/User';
import './Gym.css'


const Gym = () => {
        const [exercises, setExercises] = useState([]);
        const [user, setUser] = useState([]);


        useEffect( () =>{
            fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
        }, []);

        const handleSelect = (exercise) =>{
            console.log(exercise);
            // user.push(exercise);
            const newUser = [...user, exercise];
            setUser(newUser);
        }

    return (
        <div className="gym-container">
            
            <div>
                <h3>Select Your Item List</h3>
            <div className="exercise-container">    
                {
                    exercises.map(exercise=><Exercise
                    key={exercise.id}
                    exercise={exercise}
                    handleSelect={handleSelect}
                    ></Exercise>)
                }
            </div>
            </div>
            <div className= "user-container">
                <User user={user}></User>
            </div>
        </div>
    );
};

export default Gym;