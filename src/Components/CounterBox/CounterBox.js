import { useEffect, useState } from "react";
import "./CounterBox.css";
const CounterBox = () => {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])
    return (
        <>
            <div className="counter_container">
                <div className="themeChanger">
                    <i onClick={toggleTheme} className="fa-solid fa-sun"></i>
                </div>

                <div className="counters">
                    <div className="counter">
                        <div className="timeBox">
                            <input type="text" value={"00"} />
                            {/* <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p> */}
                        </div>
                        <div className="timeLabel">Day</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            <input type="text" value={"00"} />
                            {/* <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p> */}
                        </div>
                        <div className="timeLabel">Hours</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            <input type="text" value={"00"} />
                            {/* <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p> */}
                        </div>
                        <div className="timeLabel">Minutes</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            <input type="text" value={"00"} />
                            {/* <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p> */}
                        </div>
                        <div className="timeLabel">Seconds</div>
                    </div>

                </div>

                <div className="actionButtons">
                    {/* <button className="mainBTN"> Start <i className="fa-solid fa-play"></i></button> */}
                    <div className="secondBTN">
                        <button> Pause <i className="fa-solid fa-pause"></i></button>
                        <button> Clear <i className="fa-solid fa-x"></i></button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default CounterBox;