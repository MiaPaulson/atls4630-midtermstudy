/* Create a custom “useOnClickOutside” hook that takes a ref that contains a DOM
element, and a callback function. This hook returns nothing, but invokes the
callback function whenever the user clicks outside of the DOM element in the ref. */

import {useEffect, useState, useRef} from "react"

function ClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // If clicking inside the element, do nothing
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function UseOnClickOutside() {
  const [isOpen, setIsOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  if (boxRef.current !== null) {
    ClickOutside(boxRef, () => {
    setIsOpen(false)
  })
  }
  
  
  return(
    <div>
      <h2>UseOnClickOutside</h2>
      <button
      onClick = {()=> setIsOpen(true)}
      >Open Box</button>

      {isOpen && (
        <div
          ref={boxRef}
          style={{
            margin: "1rem auto",
            padding: "1rem",
            width: "200px",
            border: "1px solid #ccc",
            background: "#f9f9f9",
          }}
        > </div>)}

    </div>
  )
}