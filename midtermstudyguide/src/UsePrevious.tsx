/*Create a custom “usePrevious” hook that takes a piece of state, and returns
whatever that state was on the previous render.*/

import { useEffect, useRef } from "react"

export function UsePrevious<T>(value: T): T | undefined {

    const ref = useRef<T>(value)

    // after every render, store the current value
    useEffect(() => {
        ref.current = value
    }, [value]);

    return ref.current
}