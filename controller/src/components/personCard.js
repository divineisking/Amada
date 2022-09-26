import React, {useState} from 'react'
import './persons.css'
import Data from '../data'
import Ptab from './personTab'

export default function Pcard(){

    const [persons,setPerson] = useState(Data)

    function deletePerson (personID) {

        const newPerson = persons.filter(function(pid){
            return pid.id !== personID
        })
        console.log('clicked')

        setPerson(newPerson)
    };

    function deleteAll(){
        setPerson([])
    }

    const num = persons.length

    const numcheck = num > 1 ? 'Birthdays This Month ' : 'Birthday This Month'

    const bdlist = persons.map(function(person){
    return <Ptab key={person.id} persons={person} deletePerson={deletePerson}/>
    
  })
    return(
        <div className='personCard'>
            <h4> {num} {numcheck} </h4>
            {bdlist}

            <button className='deleteAll' onClick={deleteAll}>Delete All</button>
        </div>
    )
}