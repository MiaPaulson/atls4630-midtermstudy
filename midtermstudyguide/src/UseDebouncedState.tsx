/* Create a custom “useDebouncedState” hook that takes an initial value and a
debounce time in ms. It should return a [state, setState] array, but the state value
should be debounced by the time specified. */

import {useState, useEffect} from "react"


function useDebouncedState<T>(
  initialValue: T,
  delay: number
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue, setValue];
}

export default function UseDebouncedState<T>(initialValue: T, delay: number): [T, (value: T) => void] {

  const [searchTerm, setSearchTerm] = useDebouncedState("", 500); // 500ms debounce
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // immediate UI update
    setSearchTerm(e.target.value); // triggers debounced update
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>🔍 Debounced Search</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "0.5rem", width: "200px" }}
      />
      <p style={{ marginTop: "1rem" }}>
        <strong>Debounced value:</strong> {searchTerm}
      </p>
    </div>
  );
}