/*Create a custom “usePrevious” hook that takes a piece of state, and returns
whatever that state was on the previous render.*/

import {UsePrevious} from "./UsePrevious"
import {useState} from "react"

export default function UsePreviousCount() {
    const [count, setCount] = useState(0)
    const previousCount = UsePrevious(count)

    return(
        <div>
            <h2>Count</h2>
            <p>Current: {count}</p>
            <p>Previous: {previousCount ?? "none"}</p>

            <button
            onClick = {() => setCount(count + 1)}
            >+</button>
        </div>
    )
}