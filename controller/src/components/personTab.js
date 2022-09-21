import React from 'react';
import './persons.css'


export default function Person(props){
        const {name,age,bd,img} = props.persons;

    return(
       
        <div className='personTab'>
            <img className='personImg' src = {img} alt ='' />
            <h4>{name}</h4>
            <p>{bd}
            </p>
            <p>{age}</p>
        </div>


    );
}