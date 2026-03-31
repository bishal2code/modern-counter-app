import { useEffect, useRef, useState } from "react";
import "./CounterBox.css";
const CounterBox = () => {
    const [theme, setTheme] = useState("dark");
    const [inputstep, setInputstep] = useState(0);
    const [values, setValue] = useState(["00", "00", "00", "00"]);
    const [steps, setSteps] = useState(0)

    // For Input
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);

    const inputRefs = [input1, input2, input3, input4];

    // Input Logic
    useEffect(() => {
        inputRefs[inputstep].current.focus();
    }, [inputstep]);

    function timeInput(time) {
        const newValue = [...values];
        if (time.length === 1) {
            time = ("0" + time.slice(-1)).slice(-2);
        }
        else if (time.length > 2) {
            time = time.slice(-2);
        }
        newValue[inputstep] = time;
        setValue(newValue);
    }


    // Reset All
    function ResetAll() {
        setInputstep(0);
        setValue(["00", "00", "00", "00"]);
        setSteps(0);
        setTimeout(() => {
            if (input1.current) {
                input1.current.focus();
            }
        }, 0);

    }

    // For Key Management
    function handleKey(e) {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault(); // stop default cursor movement
            if (e.key === "ArrowLeft") {
                setInputstep(inputstep > 0 ? inputstep - 1 : inputstep);
            }
            if (e.key === "ArrowRight") {
                setInputstep(inputstep < 3 ? inputstep + 1 : inputstep);
            }
        }
        else if (e.key === "Enter") {
            setSteps(1);
        }
    }



    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])



    // For Countdown
    const [demoSecond, setDemoSecond] = useState(0);
    const [min, setMin] = useState(10);
    useEffect(() => {
        if (steps === 1) {
            const timer = setInterval(() => {
                setDemoSecond((prevSec) => {
                    if (prevSec < 9) {
                        return prevSec + 1; // count up seconds
                    } else {
                        // when 10 seconds reached, reset seconds and decrement minutes
                        setMin((prevMin) => prevMin - 1);
                        return 0;
                    }
                });
            }, 1000);

            return () => clearInterval(timer); // cleanup
        }
    }, [steps,min,demoSecond]);

    // console.log("Min ", min, "Sec ", demoSecond)
    return (
        <>
            <div className="counter_container">
                <div className="themeChanger">
                    <i onClick={toggleTheme} className="fa-solid fa-sun"></i>
                </div>

                <div className="counters">
                    <div className="counter">
                        <div className="timeBox">
                            {steps === 0 ?
                                <><input onClick={() => setInputstep(0)} onChange={(e) => timeInput(e.target.value)} onKeyDown={(e) => handleKey(e)} ref={input1} type="text" value={values[0]} />
                                </> :
                                <><p>{values[0]}</p></>
                            }

                        </div>
                        <div className="timeLabel">Day</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            {steps === 0 ?
                                <><input onClick={() => setInputstep(1)} onChange={(e) => timeInput(e.target.value)} onKeyDown={(e) => handleKey(e)} ref={input2} type="text" value={values[1]} />
                                </> :
                                <><p>{values[1]}</p></>}

                        </div>
                        <div className="timeLabel">Hours</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            {steps === 0 ?
                                <><input onClick={() => setInputstep(2)} onChange={(e) => timeInput(e.target.value)} onKeyDown={(e) => handleKey(e)} ref={input3} type="text" value={values[2]} />
                                </> :
                                <><p>{values[2]}</p></>}

                        </div>
                        <div className="timeLabel">Minutes</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            {steps === 0 ?
                                <><input onClick={() => setInputstep(3)} onChange={(e) => timeInput(e.target.value)} onKeyDown={(e) => handleKey(e)} ref={input4} type="text" value={values[3]} />
                                </> :
                                <><p>{values[3]}</p></>}

                        </div>
                        <div className="timeLabel">Seconds</div>
                    </div>

                </div>

                <div className="actionButtons">
                    {steps === 0 ?
                        <>
                            <button onClick={() => setSteps(1)} className="mainBTN"> Start <i className="fa-solid fa-play"></i></button>
                        </>
                        :
                        <>
                            <div className="secondBTN">
                                <button onClick={() => setSteps(steps === 1 ? 2 : 1)}> {steps === 1 ? "Pause" : "Play"} <i className={steps === 2 ? "fa-solid fa-play" : "fa-solid fa-pause"}></i></button>
                                <button onClick={ResetAll}> Clear <i className="fa-solid fa-x"></i></button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default CounterBox;