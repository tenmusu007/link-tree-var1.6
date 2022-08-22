import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

import { useDataContext } from '../Context/UseContxt';


const SearchBar = () => {
    const { git, setGit } = useDataContext()
    const textRef = useRef(null)


    const handleSearch = () => {
        const fliteredRsult = git[0].original.filter(
					(item) =>
						item.description
							.toLowerCase()
							.replace(/-|\s/g, "")
							.indexOf(textRef.current.value.toLowerCase()) !== -1
				);
        console.log(fliteredRsult);
        return setGit([
					{
						original: [...git[0].original],
						repo: fliteredRsult,
						category: [...git[0].category],
					},
				]);
    }
    return (
        <div className='search-bar'>
            <div className='input-box'>
                <Icon icon="akar-icons:search" className='icon-search'/>
                <input className='input' type="text" ref={textRef} onKeyUp={handleSearch} />
            </div>
        </div>
    )
}
export default SearchBar