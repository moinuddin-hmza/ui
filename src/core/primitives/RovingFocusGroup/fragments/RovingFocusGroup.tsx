import React, { useContext,createContext, useRef, MutableRefObject } from 'react';
import { RovingFocusGroupContext } from '../contexts/RovingFocusGroupContext';


export interface RovingFocusGroupProps {
    children : any
}

function RovingFocusGroup({children} : RovingFocusGroupProps) {
    



    const handleClick = (sendRef: any) => {
        console.log(sendRef)
        sendRef.current.focus()
    }

    const refArray: any[] = []
    const handleDownKey =(e: React.KeyboardEvent<HTMLDivElement>, ref:any) => {
        const position = refArray.indexOf(ref)

        if (e.key === 'ArrowRight') {  
            
              // prevent scrolling when pressing arrow keys
              e.preventDefault();
              const nextButton = refArray[position + 1]
              if (nextButton) nextButton.current.firstChild.focus()
              else refArray[0].current.firstChild.focus();  
          }
          if (e.key === 'ArrowLeft') {
              // prevent scrolling when pressing arrow keys
              e.preventDefault();
              const pervButton = refArray[position - 1]
              if (pervButton) pervButton.current.firstChild.focus();
              else refArray[refArray.length - 1].current.firstChild.focus();  
          }
      }
    
    const values = {
        refArray, 
        handleClick,
        handleDownKey
    }
    
    console.log(refArray)

    
    

    return (
        <div>
            <RovingFocusGroupContext.Provider value={values}>
                {children}
            </RovingFocusGroupContext.Provider>
        </div>
    );
}

export default RovingFocusGroup;