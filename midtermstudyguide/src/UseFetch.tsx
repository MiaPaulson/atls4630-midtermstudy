/*Create a custom “useFetch” hook. It should take one argument, the URL to fetch
data from. And it should return the data that is fetched from the URL, or
undefined if still fetching or if there was an error during fetching.*/

import { useState } from "react"

export default function UseFetch(url: string) {

    const [data, setData] = useState()

    const fetchData = async () => {
        try{
            const response = await fetch(url)
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            const json = (await response.json())
            setData(json)
        }
        catch {
            console.error("Fetch error")
        }
    }

    fetchData()

    return(
        <div>
            <h2>Use Fetch</h2>
            {data}
        </div>
    )
}