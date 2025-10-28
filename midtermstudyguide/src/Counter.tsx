/* Create a component that displays a counter, has + and - buttons to increment
and decrement the counter, and has a number input field that determines the
“step” amount by which the + and - buttons increment or decrement the counter. */

import { useState } from "react"

export default function Counter() {

    const [counter, setCounter] = useState(0)
    const [inputNumber, setInputNumber] = useState("")

    function addToCounter() {
        setCounter(counter + Number(inputNumber))
    }

    function subFromCounter() {
        setCounter(counter - Number(inputNumber))
    }

    return(
        <div>
            <h2>Counter</h2>
            <input
            type="number"
            placeholder="What number to count by?"
            value={inputNumber}
            onChange = {(e) => setInputNumber(e.target.value)}
            />
            {counter}
            <button
            onClick = {addToCounter}>
                +
            </button>

            <button
            onClick = {subFromCounter}>
                -
            </button>
        </div>

    )
}