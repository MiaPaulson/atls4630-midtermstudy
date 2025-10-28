/* Create a stopwatch component that displays elapsed time, with start, stop, and
reset buttons. */

import {useState, useEffect, useRef} from "react"

export default function StopWatch() {

    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef<number | null>(null)

    // COME BACK TO THIS IT'S CONFUSING!!!!
    useEffect(() => {
        if (isRunning) {
        intervalRef.current = window.setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        } else if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        }

        // Cleanup when component unmounts
        return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [isRunning])

    return(
        <div>
            <h2>Stopwatch</h2>
            <h1>{time}</h1>
            <button
            onClick = {() => setIsRunning(true)}
            >Start</button>

            <button
            onClick = {() => setIsRunning(false)}
            >Stop</button>

            <button
            onClick = {() => {setTime(0); setIsRunning(false)}}
            >Reset</button>
        </div>
    )
}