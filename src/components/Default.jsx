import React from 'react'
import './Default.css'

function Default() {
    const saudacao = 'Olá bem vindo! Para gerar a frase clique no botão😁'
   
  return (

    <div className='mainDiv'>
        <div className='divContent'>
            <h1 id='saudacaoContent' className='content'>{saudacao}</h1>
        </div>
    </div>

  )
}

export default Default