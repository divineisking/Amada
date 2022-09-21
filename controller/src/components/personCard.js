import React from 'react'
import './persons.css'
import Data from '../data'
import Ptab from './personTab'

export default function Pcard(){
    const bdlist = Data.map(function(person, index){
    return <Ptab key={index} persons={person} />
  })
    return(
        <div className='personCard'>
            {bdlist}
        </div>
    )
}