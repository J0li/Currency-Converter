import React, { useState } from "react";
import './count.css'

function Count() {
    const [Count, setCount] = useState(0);

    const increase = () => {
        setCount(Count + 1);
    };

    const decrease = () => {
        setCount(Count - 1);
    }

    return (
        <div className="display-count">
            <h2>Count</h2>
            <p>Value: {Count}</p>
            <button className="btn-plus" onClick={increase}>Increase</button>
            <button className="btn-menus" onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Count;