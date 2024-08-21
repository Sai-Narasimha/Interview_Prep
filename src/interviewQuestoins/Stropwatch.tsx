import React, { useEffect, useState } from 'react'

const Stropwatch = () => {
    const [timer, setTimer] = useState(0)

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: any = null;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTimer((prev) => prev + 10);
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);


    const startTimer = () => {
        setIsRunning(true)
    }
    const pauseTimer = () => {
        setIsRunning(false)
    }
    const stopTimer = () => {
        setIsRunning(false)
        setTimer(0)
    }



    const formatTime = (time: number) => {
        const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
        const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
        const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div>
            <h1>{formatTime(timer)}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default Stropwatch