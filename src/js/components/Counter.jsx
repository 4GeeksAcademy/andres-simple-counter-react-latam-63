import React, { useState } from "react";
import { useEffect } from "react";

function Counter() {

    let digit1 = 0;
    const[time, setTime] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevSetTime => prevSetTime+ 1)
            console.log(digit1)
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }

    }, []);
    return (
        <div>
            {digit1}
        </div>
    )
}
export default Counter;