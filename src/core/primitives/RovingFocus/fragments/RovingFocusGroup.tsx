import React, { useContext,createContext, useRef, useEffect, useState, MutableRefObject } from 'react';
import { RovingFocusGroupContext } from '../contexts/RovingFocusGroupContext';


export interface RovingFocusGroupProps {
    children : any
}

function RovingFocusGroup({children} : RovingFocusGroupProps) {

    const ref = useRef<HTMLDivElement | null>(null)
    const [elementList, setElementList] = useState<HTMLElement[]>([]);

    const values = {
       
    }

    useEffect(() => {
        if (ref.current) {
           
            setElementList(Array.from(ref.current.childNodes) as HTMLElement[]);
           
        }
     }, []);

     const handleDownKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const focused = document.activeElement as HTMLElement;
        if (!focused || !ref.current?.contains(focused)) return;

        const index = elementList.indexOf(focused);
        if (e.key === 'ArrowRight') {  

              // prevent scrolling when pressing arrow keys
              e.preventDefault();
              const nextButton = elementList[index + 1]
              if (nextButton) nextButton.focus()
              else elementList[0].focus();  
          }
          if (e.key === 'ArrowLeft') {
              // prevent scrolling when pressing arrow keys
              e.preventDefault();
              const pervButton = elementList[index - 1]
              if (pervButton) pervButton.focus();
              else elementList[elementList.length - 1].focus();  
          }
    };

    useEffect(() => {
        elementList.forEach((element) => {
            element.tabIndex = -1
        })
    })

  


    return (
        <div ref={ref} onKeyDown={handleDownKey} tabIndex={-1}>
            <RovingFocusGroupContext.Provider value={values}>
                {children}
            </RovingFocusGroupContext.Provider>
        </div>
    );
}

export default RovingFocusGroup;