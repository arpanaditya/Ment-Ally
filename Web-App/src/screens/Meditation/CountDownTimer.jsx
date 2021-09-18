import { useState, useEffect } from "react";
import "./CountDownTimer.css";
import Timer from "react-compound-timer";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import OpeningMessage from "./OpeningMessage";

const CountDownTimer = () => {
  const [m, setm] = useState(0);
  const [s, sets] = useState(0);
  const [totalSeconds, settotalSeconds] = useState(0);
  const [show, setshow] = useState(false);
  const [inputshow, setinputshow] = useState(true);
  const miliseconds = () => {
    if (m === 0 && s !== 0) {
      settotalSeconds(s);
      return totalSeconds;
    } else if (s === 0 && m !== 0) {
      settotalSeconds(m * 60);
      return totalSeconds;
    } else {
      let seconds = parseInt(m * 60) + parseInt(s);
      settotalSeconds(seconds);
      return totalSeconds;
    }
  };
  useEffect(() => {
    miliseconds();
  });
  return (
    <>


      {inputshow && (
        <div className="inputTime">
          
          <div className="minInput">
              <button onClick={()=>setm(m+1)} ><IoIosArrowDropup color='#000' size='1.5rem'/></button>
              <input
                value={m}
                onChange={(e) => {
                  setm(e.target.value);
                }}
                className="minutes"
                type="number"
              />
              <button onClick={()=>{if(m>0)setm(m-1)}} ><IoIosArrowDropdown color='#000' size='1.5rem' /></button>
          </div>
          <div className="secInput">
              <button onClick={()=>sets(s+1)} ><IoIosArrowDropup color='#000' size='1.5rem'/></button>
              <input
                value={s}
                onChange={(e) => {
                  sets(e.target.value);
                }}
                className="seconds"
                type="number"
              />
              <button onClick={()=>{if(s>0)sets(s-1)}} ><IoIosArrowDropdown color='#000' size='1.5rem' /></button>
          </div>
          <button
            className="setBtn"
            onClick={() => {
              miliseconds();
              console.log(totalSeconds);
              setshow(true);
              setinputshow(false);
            }}
          >
            SET
          </button>
        </div>
      )}
      <div className="countdown">
        {show && (
          <Timer
            initialTime={totalSeconds * 1000}
            direction="backward"
            startImmediately={true}
          >
            {({ start, resume, pause, stop, reset, timerState }) => (
              <>
                <div>
                  <Timer.Hours /> : <Timer.Minutes /> : <Timer.Seconds />
                </div>
                <div className="Actionbtns" >
                  <button className="timerActionBtn" onClick={start}>
                    <AiOutlinePlayCircle size = '2rem' />
                  </button>
                  <button className="timerActionBtn" onClick={pause}>
                    <AiOutlinePauseCircle size = '2rem' />
                  </button>
                  <button className="timerActionBtn" onClick={reset}>
                    <AiOutlineReload size = '2rem' />
                  </button>
                 <p>Relax</p>
                </div>
                
              </>
            )}
            
          </Timer>
        )}
      </div>
    </>
  );
};

export default CountDownTimer;
