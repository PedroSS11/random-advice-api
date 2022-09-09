import React from 'react'

// HOOKS
import { useFetch } from '../hooks/useFetch';


export const Frase = () => {
    
    const url = 'https://api.adviceslip.com/advice'
    const {data} = useFetch(url)

  return (
    <div className='mainDiv'>
        <ul className='divContent'>
          {data && data.map((phrase) => (
            <li className='content' id='advice' key={data}>{phrase}</li>
          ))}
        </ul>

    </div>
  )
}
