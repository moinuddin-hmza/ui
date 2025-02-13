import React from "react";
import RovingFocusGroup from "./fragments/RovingFocusGroup"
import RovingFocusItem from './fragments/RovingFocusItem';

export interface RovingFocusRoot {
    children : React.ReactNode
}
function RovingFocusRoot({children}: RovingFocusRoot) {
    return (
        <div>
            {children}
        </div>
        
    );
}

const RovingFocus = {
    Root : RovingFocusRoot,
    Group : RovingFocusGroup,
    Item : RovingFocusItem
} as const 

export default RovingFocus;