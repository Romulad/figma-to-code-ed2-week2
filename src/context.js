import { createContext } from "react";

// We can use redux to manage the app state, but just wanna learn more about react context
export const AppContext = createContext({
    dataState : {
        dataIsLoading: false, 
        setDataIsLoading: () => {}
    }
})
export const CartContext = createContext([])
