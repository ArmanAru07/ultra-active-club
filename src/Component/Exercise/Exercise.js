import React from 'react';
import './Exercise.css'

const Exercise = ({exercise, handleSelect}) => {

    // const {exercise, handleSelect} = props;
    const {img, title, age, time} = exercise;
    
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                 <p className='exercise-name'>{title}</p>
                 <p>For Age: {age}Year</p>
                 <p>Time Required: {time}s</p>
            </div>
            <button onClick={() => handleSelect(exercise)} className='btn-select'>
                <p>Select</p>
            </button>
        </div>
    );
};

export default Exercise;