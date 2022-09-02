import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';


function App() {

  const [advice, setAdvice] = useState('')

  useEffect(() => {
    fetchAdvice();
  }, [])
  
  const fetchAdvice = async() => {
    const response = await axios.get('https://api.adviceslip.com/advice')
    setAdvice(await response.data.slip)
  }

  return (
    <div className="h-screen font-serif text-white flex justify-center text-center bg-gradient-to-tr from-slate-900 via-slate-600 to-slate-300">
      {
        advice
        ? <div className="w-11/12 mt-72 p-2 md:w-1/3 bg-black rounded-lg absolute">
          <div>
            <span className="font-extrabold text-6xl top-0 left-0  -m-3 absolute">”</span>
            <h1 className="p-1 text-center w-full text-xl font-bold mb-2">{advice && advice.advice}</h1>
            <button className="w-30 bg-slate-700 p-2 my-2 text-lg rounded-lg transition-all hover:bg-slate-400" onClick={() => fetchAdvice()}>give me an Advice</button>
          </div>
        </div>
        : <Loading />      
      }
      <p className="absolute bottom-4">created by <a href="mailto:tirehalireza@gmail.com" className="underline">Alireza</a></p>
    </div>
  );
}

export default App;
