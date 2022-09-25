import React from 'react';
import './persons.css'
//import Data from '../data'


export default function Person(props, {deletePerson}){

    /*function wrapDeletePerson(){
        
        console.log(deletePerson)
    }*/

        const {name,age,bd,img} = props.persons;


    return(
       
        <div className='personTab'>
            <img className='personImg' src = {img} alt ='' />
            <h4>{name}</h4>
            <p>{bd}
            </p>
            <p>{age}</p>
            <button className='deleteperson' onClick={deletePerson}>X</button>
        </div>


    );
}