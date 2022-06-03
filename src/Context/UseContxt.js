
import { createContext, useState, useContext } from 'react';
import { data } from '../data';
const CountContext = createContext();

export function useCountContext() {
    return useContext(CountContext);
}

export function CountProvider({ children }) {
    const [defaultdata, setData] = useState(data)
    const value1 = {
        defaultdata,
        setData,
    };

    return (
        <CountContext.Provider value={value1}>
            {children}
        </CountContext.Provider>
    );
}