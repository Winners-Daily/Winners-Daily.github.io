import React, { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';

//styling
import '../styles/counter.module.css';

const Count = props => {
    const label = props.lable;          // label of counter
    const number = props.number;        // number to increment to
    const duration  = props.duration;   // duration of count in seconds

    const [count, setCount] = useState("0");    // number displayed by component

    useEffect(() => {
        let start = 0;
        const end = parseInt(number.substring(0, 3));    // first three numbers from props
        
        // if zero, return
        if (start === end) return;

        // find duration per increment
        let totalMilSecDur = parseInt(duration);
        let incrementTime  = (totalMilSecDur / end) * 1000;

        // timer increments start counter 
        // then updates count
        // ends if start reaches end
        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3));
            if (start === end) clearInterval(timer);
        }, incrementTime);

        // dependency array
    }, [number, duration]);

    return (
        <div className="Count">
            <InView as="div">    
                <h3>
                    <i style={{ font: "800 40px system-ui" }}>{count}</i>
                </h3>
            </InView>
        </div>
    );
}

export default Count;