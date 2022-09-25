import React, {useState} from 'react'
import './persons.css'
import Data from '../data'
import Ptab from './personTab'

export default function Pcard(){

    //const [persons,setPerson] = useState(persons)

    const deletePerson = () => {
        console.log('clicked')

        //setPerson = newPerson
    };

    const bdlist = Data.map(function(person,index){
    return <Ptab key={index} persons={person} deletePerson={deletePerson}/>
    
  })
    return(
        <div className='personCard'>
            {bdlist}
        </div>
    )
}