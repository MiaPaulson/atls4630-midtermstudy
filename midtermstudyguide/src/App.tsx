/* Create a custom “useFetch” hook. It should take one argument, the URL to fetch
data from. And it should return the data that is fetched from the URL, or
undefined if still fetching or if there was an error during fetching. */

//import UseFetch from "./UseFetch.tsx"
import NumberList from "./NumberList.tsx"
import Counter from "./Counter.tsx"
import Accordion from "./Accordion.tsx"
import SearchBox from "./SearchBox.tsx"
import StopWatch from "./StopWatch.tsx"
import UsePreviousCount from "./UsePreviousCount.tsx"
import UseOnClickOutside from "./UseOnClickOutside.tsx"
// import UseDebouncedState from "./UseDebouncedState.tsx"
import './App.css'
function App() {  

  return (
    <div>
      {/* <UseFetch /> */}
      <NumberList />
      <Counter />
      <Accordion 
      header="Hello!"
      children="OMG HI!"/>
      <SearchBox />
      <StopWatch />
      <UsePreviousCount />
      <UseOnClickOutside />
      {/* <UseDebouncedState /> */}
    </div>
  )
}

export default App