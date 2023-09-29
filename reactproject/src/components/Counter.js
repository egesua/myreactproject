import "./Counter.css"

const Counter = () => {

    const counter = 0;

    return (
        <div className="counter-card">
            <h2>Counter</h2>
            <hr />
            <div className="counter">
                {counter}
            </div>
            <div className="controls">
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    );
};

export default Counter;