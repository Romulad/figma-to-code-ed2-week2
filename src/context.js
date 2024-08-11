import { createContext } from "react";

// I used this approach for leaning purpose
export const initialState = {
    dataState : {
        dataIsLoading: false, 
        setDataIsLoading: () => {}
    }
};

export const AppContext = createContext(initialState)