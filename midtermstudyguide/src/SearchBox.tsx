/*Create a component that renders a static list of strings (i.e. [“cat”, “dog”, “cow”,
“llamma”, “sheep”, “goat”, “pig”, “alpaca”]), and has a search box. The value from
the search box should filter the list of strings that are shown to the user. */

import {useState} from "react"

export default function SearchBox() {

    const listOfStrings = ["cat", "dog", "cow", "llama", "sheep", "goat", "pig", "alpaca"]
    const [searchValue, setSearchValue] = useState("")

    // set list that is what's filtered through
    // whatfilter.filter((toshow) => toshow.toLowerCase().includes(whatsearch.toLowerCase()))
    const filteredList = listOfStrings.filter((animal) => animal.toLowerCase().includes(searchValue.toLowerCase()))

    return(
        <div>
            <h2>Search Box</h2>

            <input 
            type = "string"
            placeholder= "Search the List!"
            value={searchValue}
            // KNOW TO DO ON CHANGE/ ON CLICK DEPENDING ON INPUT!!! e.target.value FOR E ARROW FUNCTION!
            onChange={(e) => setSearchValue(e.target.value)}
            />

            {/* if ? whatToDo : elseToDo */}
            <ul>
                {filteredList.length > 0 ? (filteredList.map((animal) => <li key={animal}>{animal}</li>)) :
                <li>No matches found</li>}
            </ul>

        </div>
    )
}