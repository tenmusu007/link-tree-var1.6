
import { createContext, useState, useContext } from 'react';
import { data } from '../data';
const CountContext = createContext();

export function useCountContext() {
    return useContext(CountContext);
}

export function CountProvider({ children }) {
    // const [count, setCount] = useState(100);
    // const [defaultdata, setData] = useState(data.map((item, index) =>{
    //         return (
    //             <div key={index} className='link-indiv'>
    //                 <div className='url-box'>
    //                     <p className='url-name'>{item.name}</p>
    //                     <p className='url'><a href={item.url}>{item.url}</a></p>
    //                     <p className='repo-name'>Repository</p>
    //                     <p className='url-repo'><a href={item.urlrepo}>{item.urlrepo}</a></p>
    //                 </div>
    //             </div>);
    // }))
    const [defaultdata, setData] = useState(data)
    // const value = {
    //     count,
    //     setCount,
    // };
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