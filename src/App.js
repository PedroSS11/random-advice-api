import { Frase } from './components/Frase';
import Default from './components/Default';
import { useState } from 'react';
import './App.css';
//import { useState } from 'react';


function App() {
  //const titulo = 'Moment Advice'
  const [show, setShow]=useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  return (

    <div className="App w-full h-screen flex items-center justify-center flex-col bg-neutral-100 font-[sans-serif] title">
      
      <div>
        {/* <h1 className='text-center p-5 font-bold'>{titulo}</h1> */}
        {show?<Frase/>:<Default/>}
      </div>
      <button onClick={handleClick} className='botao'>Gerar Frase</button>

    </div>
  );
}

export default App;
