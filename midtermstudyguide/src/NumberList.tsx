/* Create a component that renders a list of numbers, (1, 2, 3, 4... etc.) and has one
button to add the next number to the list, and another button to remove the last
number from the list. */



import {useState} from "react"

export default function NumberList() {

    const [numbersInList, setNumbersInList] = useState([1])

    function addNumber() {
        setNumbersInList((prev) => [...prev, prev.length+1])
    }

    function subtractNumber() {
        setNumbersInList((prev) => prev.slice(0,-1))
    }


    return(
        <div>
            <h2>Number List</h2>
            <ul>
                {/* {numbersInList} */}
                {numbersInList.map((num) => (
                    <li key={num}>{num}</li>
                        ))}
            </ul>
            <button
            onClick={addNumber}
            >Add</button>
            <button
            onClick={subtractNumber}
            >Subtract</button>
        </div>

    )
}