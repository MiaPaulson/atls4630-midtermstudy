/*Create an “accordion” component that takes a header prop and a children prop -
the children are not shown by default, clicking on the header toggles whether the
children are shown or not.*/

import {useState} from "react"


// SET THE TYPE LIKE THIS
type AccordionProps = {
    header: string
    children: React.ReactNode
}

// CALL FUNCTION WITH TYPE LIKE THIS
export default function Accordion({ header, children }: AccordionProps) {

    const [isOpen, setOpen] = useState(false)

    return(
        <div>
            <h2>Accordion</h2>
            <div
            // MAKE ON CLICK AN ARROW FUNCTION!!!!!
            onClick = {() => setOpen(!isOpen)}>
                {header}
            </div>

            {/* FOR "IF" STATEMENT, NO ELSE, JUST USE && */}
            {isOpen && 
            <div>
                {children}
            </div>}
            
        </div>
    )
}