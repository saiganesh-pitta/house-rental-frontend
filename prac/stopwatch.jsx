import { useEffect, useState } from 'react'
import './App.css'


function () {

const [time, setTime] = useState(0)
const [now, setNow] = useState(false)
 

   useEffect(() => {
    let pause;
    if(now) {
   pause=setInterval(() => {
          setTime((prevTime)=> prevTime + 1)
       },1000);
       }
    return ()=> clearInterval(pause)
    },[now])
let secs= String(time % 60).padStart(2,'0')
let mins=String( Math.floor((time % 3600)/ 60) ).padStart(2,'0')
let hrs=String( Math.floor(time / 3600) ).padStart(2,'0')
       
  return (
    <>
    <center>
     <div className='numbers'><span>{hrs}</span>:<span>{mins}</span>:<span>{secs}</span></div>
     <button onClick={()=>setNow(true)}>Play</button>
     <button onClick={()=>setNow(false)} >Stop</button>
     <button onClick={()=>(setTime(0),setNow(false))} >Reset</button>
    </center> 
    </>
  )
}

export default 
