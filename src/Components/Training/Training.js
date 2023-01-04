import React from 'react'
import { trainingData } from '../../Data/TrainingMapsData'

export default function Training() {

  const classCards = trainingData.map((data)=> {
    return (
      <div className='class__cards' key={data.level} id={`${data.level}`}>
        <p style={{margin:"0.5rem 0"}}><span id='link'>Level: </span>{data.level}</p>
        <p><span id='legion'>Map: </span>{data.map}</p>
        <p><span id='legion'>Training On: </span>{data.monster}</p>
        <p><span id='legion'>Note: </span>{data.note}</p>
      </div>
    )
  })

  const trainingAnchorTags = trainingData.map((levels) => {
    return (
      <a key={levels.map} href={`#${levels.level}`}>{levels.level}</a>
    )
  })

  return (
    <main className="card__container">
        <h1 id='container__title'>Training Areas</h1>
        <div id="anchor__container">{trainingAnchorTags}</div>
        <section id='card__details'>
          {classCards}
        </section>
    </main>
  )
}
