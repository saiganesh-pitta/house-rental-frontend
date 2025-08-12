import { useRef, useState } from 'react'
import './App.css'


  const Dies=()=>{
     
    const [onedie, setonedie] = useState(".")
    const [twodie, settwodie] = useState(".")


    const handleClick =()=>{
        let val='.'.repeat(Math.floor(Math.random()*6)+1)
        let val2='.'.repeat(Math.floor(Math.random()*6)+1)
     setonedie(val);
     settwodie(val2)
    }

    return(<>
    <center>
        <div>
            <div className='dies'>
                <span className='one'>{onedie}</span>
                <span className='two'>{twodie}</span></div>
            <button onClick={handleClick}>Roll</button>
        </div>
    </center>    
    </>)
  }

  export default Dies;