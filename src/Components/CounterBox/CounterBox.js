import { useEffect, useMemo, useRef, useState } from "react";
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

    const inputRefs = useMemo(() => [input1, input2, input3, input4], []);


    // Input Logic
    useEffect(() => {
        if (steps === 0) {
            inputRefs[inputstep].current.focus();
        }

    }, [inputstep, inputRefs, steps]);

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
    // console.log("For Check", "1"-1)
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
    // const [demoSecond, setDemoSecond] = useState(4);
    // const [min, setMin] = useState(2);
    // const [hour,setHour] = useState(2);
    // const [day, setDay] = useState(1);

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
                    tempMin[3] = 60;
                    setValue(tempMin);
                }
                if (Number(values[2]) === 0 && Number(values[1]) > 0) {
                    const tempMin = [...values];
                    tempMin[2] = 60;
                    tempMin[1] = tempMin[1] - 1;
                    setValue(tempMin);
                }
                if (Number(values[1]) === 0 && Number(values[0]) > 0) {
                    const tempHour = [...values];
                    tempHour[1] = 24;
                    tempHour[0] = tempHour[0] - 1;
                    setValue(tempHour);
                }
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [steps, values]);
    // const timeFunction = () => {
    //     if (Number(values[2]) > 0 && Number(values[3]) === 0) {
    //         const tempMin = [...values];
    //         tempMin[2] = tempMin[2] - 1;
    //         tempMin[3] = 60;
    //         setValue(tempMin);
    //     }
    //     if (Number(values[2]) === 0 && Number(values[1]) > 0) {
    //         const tempMin = [...values];
    //         tempMin[2] = 60;
    //         tempMin[1] = tempMin[1] - 1;
    //         setValue(tempMin);
    //     }
    //     if (Number(values[1]) === 0 && Number(values[0]) > 0) {
    //         const tempHour = [...values];
    //         tempHour[1] = 24;
    //         tempHour[0] = tempHour[0] - 1;
    //         setValue(tempHour);
    //     }

    // }

    // console.log("Day ",day,"Hour ",hour,"Min ", min, "Sec ", demoSecond)
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