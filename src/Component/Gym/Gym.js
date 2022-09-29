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

            <div className='blog'>
                <h3>Question And Answer:-</h3>

                <div>
                    <h4>How does react work...?</h4>
                    <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
                    <h4>what is the difference between props and state..? </h4>
                    <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                    <h4>what is the work of useeffect except data loading..?</h4>
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                </div>
            </div>
        </div>
    );
};

export default Gym;