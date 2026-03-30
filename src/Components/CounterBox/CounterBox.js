import "./CounterBox.css";
const CounterBox = () => {
    return (
        <>
            <div className="counter_container">
                <div className="themeChanger">
                    <i className="fa-solid fa-sun"></i>
                </div>
                <div className="counters">
                    <div className="counter">
                        <div className="timeBox">
                            <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                        </div>
                    </div>
                    <div className="timeLabel">Day</div>
                </div>
                <div className="counters">
                    <div className="counter">
                        <div className="timeBox">
                            <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                        </div>
                        <div className="timeLabel">Day</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                        </div>
                        <div className="timeLabel">Hours</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                        </div>
                        <div className="timeLabel">Minutes</div>
                    </div>
                    <div className="counter">
                        <div className="timeBox">
                            <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                        </div>
                        <div className="timeLabel">Seconds</div>
                    </div>
                    
                </div>
                
                <div className="actionButtons">
                    <button> Start <i className="fa-solid fa-play"></i></button>
                    <button> Start <i className="fa-solid fa-pause"></i></button>
                    <button> Start <i className="fa-solid fa-x"></i></button>
                </div>
            </div>
        </>
    )
}
export default CounterBox;