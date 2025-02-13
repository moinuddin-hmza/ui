import { createContext } from 'react';

interface RovingFocusGroupType {
    refArray: any[];

    handleClick: (ref: any) => void;
    handleDownKey: (e:any, ref: any) => void;
}
    

export const RovingFocusGroupContext = createContext<RovingFocusGroupType>({} as RovingFocusGroupType);
