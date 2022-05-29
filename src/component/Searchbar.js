import React, { useRef, useState } from 'react';

import { useCountContext } from '../Context/UseContxt';


const SearchBar = (props) => {
    const { defaultdata, setData } = useCountContext()

    const textRef = useRef(null)
    const search = (arg) => {
        console.log("working")
        console.log("arg is " + arg)
        console.log("props length is " + props.data.length)
        const filtered = props.data.filter((item, index) => {
            if (item.name.toLowerCase().indexOf(arg) !== -1) {
                return item
            }
            // return item
        })
        console.log(filtered)
        // return searchedResult
        return filtered
    }
    const handleSearch=()=>{
        const fliteredRsult = props.data.filter((item)=>
            item.name.toLowerCase().indexOf(textRef.current.value) !== -1 
        )
        console.log(fliteredRsult)
        return setData(fliteredRsult)
    }
    const copy =defaultdata.map((item, index) => {
            return (
                <div key={index} className='link-indiv'>
                    <div className='url-box'>
                        <p className='url-name'>{item.name}</p>
                        <p className='url'><a href={item.url}>{item.url}</a></p>
                        <p className='repo-name'>{item.reponame}</p>
                        <p className='url-repo'><a href={item.urlrepo}>{item.urlrepo}</a></p>
                    </div>
                </div>
            )
        })
    // const swap = search()

    return (
        <div>
            <input type="text" ref={textRef} onKeyUp={handleSearch} />
            {/* <button onClick={() => setData(SearchBar(defaultdata.map((item)=>{
                return item
            })))}> test </button> */}
            {copy}
            <button onClick={() => search(textRef.current.value)}> test </button>
            {/* <button onClick={handleSearch}> change</button> */}
        </div>
    )
}
export default SearchBar