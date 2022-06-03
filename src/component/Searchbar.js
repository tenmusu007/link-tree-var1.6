import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

import { useCountContext } from '../Context/UseContxt';


const SearchBar = (props) => {
    const { defaultdata, setData } = useCountContext()
    const [changeClass, setClass] = useState(true)
    const textRef = useRef(null)
    const changeRef = useRef(null)
    const handleSearchbar = () => {
        setClass(!changeClass)
    }
    const [deficon, setIcon] = useState(false)


    const handleSearch = () => {
        const fliteredRsult = props.data.filter((item) =>
            item.name.toLowerCase().indexOf(textRef.current.value) !== -1
        )
        console.log(fliteredRsult)
        return setData(fliteredRsult)
    }
    return (
        <div className='search-bar'>
            <div className='input-box'>
                <Icon icon="akar-icons:search" className='icon-search'/>
                <input className='input' type="text" ref={textRef} onKeyUp={handleSearch} />
            </div>
            {/* <div className={changeClass ? 'search' : 'search open'} onClick={handleSearchbar}>
                <input type="search" className='search-box'/>
                <span className='search-button'>
                    <span className='search-icon'></span>
                </span>
            </div> */}
        </div>
    )
}
export default SearchBar