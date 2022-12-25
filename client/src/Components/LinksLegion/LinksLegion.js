import React, { useState } from 'react'
import { classLinksLegion } from '../../Data/LinksLegionData'

import "../LinksAndTraining.css"

export default function LinksLegion() {
  const [ className, setClassName ] = useState('');

  const classCards = classLinksLegion.filter((value)=>{
    if (className === ''){
      return value;
    } else if (value.jobTitle.toLowerCase().includes(className.toLowerCase())) {
      return value;
    }
  }).map((data)=> {
    return (
      <div className='class__cards' key={data.id}>
        <h3>{data.jobTitle}</h3>
        <p style={{margin:"0.5rem 0"}}><span id='link'>Link: </span>{data.linkSkill}</p>
        <p><span id='legion'>Legion: </span>{data.legionCard}</p>
      </div>
    )
  })

  return (
    <main className="card__container">
        <h1 id='container__title'>Class Link and Legion Cards</h1>
        <input 
          type="text" 
          id='search__bar' 
          placeholder='Search Class Name'
          onChange={(e) => {setClassName(e.target.value)}}
        />
        <section id='card__details'>
          {classCards}
        </section>
    </main>
  )
}
