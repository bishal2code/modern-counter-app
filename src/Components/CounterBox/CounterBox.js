import { useEffect, useMemo, useRef, useState } from "react";
import "./CounterBox.css";

const CounterBox = () => {
    const audio = useMemo(() => new Audio("/ringtone.mp3"), []);
    const [theme, setTheme] = useState("dark");
    const [inputstep, setInputstep] = useState(0);
    const [values, setValue] = useState([0, 0, 0, 0]);
    const [steps, setSteps] = useState(0)
    const [error, setError] = useState(false);
    const [timeComplete, setTimeComplete] = useState(false);

    // For Input
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);

    const inputRefs = useMemo(() => [input1, input2, input3, input4], []);


    // Input Logic
    useEffect(() => {
        if (steps === 0) {
            inputRefs[inputstep].current.focus();
        }

    }, [inputstep, inputRefs, steps]);

    function timeInput(time) {
        // Only proceed if input is numeric text
        if (/^\d+$/.test(time)) {
            let formatted = time;

            // If single digit, pad with leading zero
            if (formatted.length === 1) {
                formatted = ("0" + formatted).slice(-2);
            }
            // If more than 2 digits, keep only last 2
            else if (formatted.length > 2) {
                formatted = formatted.slice(-2);
            }

            const newValue = [...values];
            newValue[inputstep] = formatted;
            setValue(newValue);

            // If not numeric, do nothing
        }


    }


    // Reset All
    function ResetAll() {
        setInputstep(0);
        setValue([0, 0, 0, 0]);
        setSteps(0);
        setBeha("");
        setError(false);
        setTimeComplete(false);
        audio.pause();
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
            startCountDown();
        }
    }



    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])



    // Start Count Down
    function startCountDown() {
        if (values[0] > 0 && values[1] === 0) {
            let tempCalc = [...values];
            tempCalc[1] = 23;
            tempCalc[0] = tempCalc[0] - 1;
            tempCalc[2] === 0 ? tempCalc[2] = 59 : tempCalc[2] = values[2];
            tempCalc[3] === 0 ? tempCalc[3] = 59 : tempCalc[3] = values[3];
            setValue(tempCalc);
        }
        else if (values[1] > 0 && values[2] === 0) {
            let tempCalc = [...values];
            tempCalc[2] = 59;
            tempCalc[1] = tempCalc[1] - 1;
            tempCalc[3] === 0 ? tempCalc[3] = 59 : tempCalc[3] = values[3];
            setValue(tempCalc);
        }
        if (values[3] === 0 && values[2] === 0 && values[1] === 0 && values[0] === 0) {
            setError(true);
        }
        else {
            setError(false);
            setSteps(1);
        }

    }

    useEffect(() => {
        if (steps === 1) {
            const timer = setInterval(() => {
                if (Number(values[3]) > 0) {
                    // setDemoSecond((prev)=> prev-1)
                    const tempSecond = [...values];
                    tempSecond[3] = values[3] - 1;
                    setValue(tempSecond);

                }
                if (Number(values[2]) > 0 && Number(values[3]) === 0) {
                    const tempMin = [...values];
                    tempMin[2] = tempMin[2] - 1;
                    tempMin[3] = 59;
                    setValue(tempMin);
                }
                if (Number(values[2]) === 0 && Number(values[1]) > 0) {
                    const tempMin = [...values];
                    tempMin[2] = 59;
                    tempMin[1] = tempMin[1] - 1;
                    setValue(tempMin);
                }
                if (Number(values[1]) === 0 && Number(values[0]) > 0) {
                    const tempHour = [...values];
                    tempHour[1] = 24;
                    tempHour[0] = tempHour[0] - 1;
                    setValue(tempHour);
                }
                if (values[3] === 0 &&values[2] ===0 && values[1]===0 && values[0]===0) {
                    setSteps(4);
                    setTimeComplete(true)
                }
            }, 1000);

            return () => clearInterval(timer);

        }
    }, [steps, values]);
    const [behaviour, setBeha] = useState("");
    useEffect(() => {
        if (error) {
            setBeha("error");
            audio.pause();
        }
        else if (timeComplete && steps !== 0) {
            setBeha("success")
            audio.play();
        }
        else {
            setBeha("")
            audio.pause();
        }
    }, [error, timeComplete, steps, audio])
    return (
        <>
            <div className={`counter_container ${behaviour}`}>
                <div className="themeChanger">
                    <i onClick={toggleTheme} className="fa-solid fa-sun"></i>
                </div>

                <div className="counters">
                    <div className="counter">
                        <div className={error ? "timeBox error" : "timeBox"}>
                            {steps === 0 ?
                                <><input onClick={() => setInputstep(0)} onChange={(e) => timeInput(e.target.value)} onKeyDown={(e) => handleKey(e)} ref={input1} type="text" value={values[0]} />
                                </> :
                                <><p>{values[0]}</p></>
                            }

                        </div>
                        <div className="timeLabel">Day</div>
                    </div>
                    <div className="counter">
                        <div className={error ? "timeBox error" : "timeBox"}>
                            {steps === 0 ?
                                <><input onClick={() => setInputstep(1)} onChange={(e) => timeInput(e.target.value)} onKeyDown={(e) => handleKey(e)} ref={input2} type="text" value={values[1]} />
                                </> :
                                <><p>{values[1]}</p></>}

                        </div>
                        <div className="timeLabel">Hours</div>
                    </div>
                    <div className="counter">
                        <div className={error ? "timeBox error" : "timeBox"}>
                            {steps === 0 ?
                                <><input onClick={() => setInputstep(2)} onChange={(e) => timeInput(e.target.value)} onKeyDown={(e) => handleKey(e)} ref={input3} type="text" value={values[2]} />
                                </> :
                                <><p>{values[2]}</p></>}

                        </div>
                        <div className="timeLabel">Minutes</div>
                    </div>
                    <div className="counter">
                        <div className={error ? "timeBox error" : "timeBox"}>
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
                            <button onClick={() => startCountDown()} className="mainBTN"> Start <i className="fa-solid fa-play"></i></button>
                        </>
                        :
                        <>
                            {steps === 1 || steps === 2 ?
                                <div className="secondBTN">
                                    <button onClick={() => setSteps(steps === 1 ? 2 : 1)}> {steps === 1 ? "Pause" : "Play"} <i className={steps === 2 ? "fa-solid fa-play" : "fa-solid fa-pause"}></i></button>
                                    <button onClick={ResetAll}> Clear <i className="fa-solid fa-x"></i></button>
                                </div>
                                :
                                <>
                                </>
                            }
                        </>
                    }
                    {steps === 4 &&
                        <>
                            <button onClick={ResetAll} className="mainBTN">Stop</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default CounterBox;