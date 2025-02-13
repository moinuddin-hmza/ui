import React, { useContext, useRef, Children, useEffect } from 'react';
import { RovingFocusGroupContext } from '../contexts/RovingFocusGroupContext';

export interface RovingFocusItemProps {
    children: any
}

function RovingFocusItem({children} : RovingFocusItemProps) {
    const {refArray, handleClick, handleDownKey} = useContext(RovingFocusGroupContext)
    const ref = useRef<HTMLDivElement | null>(null)
    refArray.push(ref)

    useEffect(() => {
        const element = ref.current;
        if (element && element.firstChild) {
            (element.firstChild as HTMLElement).tabIndex = -1;
          }
        
    }, [ref]);
    return (
        // doesnt work
        // React.cloneElement(children, {onClick:() => handleClick(ref), onKeyDown:(e) => {handleDownKey(e, ref)}, tabIndex:-1, ref:ref})
        
        //  working
        <div onClick={() => handleClick(ref)} onKeyDown={(e) => {handleDownKey(e, ref)}} tabIndex={-1} ref={ref}>
            {children}
        </div>

        
    )
}

export default RovingFocusItem;