import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
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
            
            <div className="exercise-container">    
                {
                    exercises.map(exercise=><Exercise
                    key={exercise.id}
                    exercise={exercise}
                    handleSelect={handleSelect}
                    ></Exercise>)
                }
            </div>
            <div className= "user-container">
                <h3>User</h3>
                <p>Selected Item: {user.length}</p>
            </div>
        </div>
    );
};

export default Gym;