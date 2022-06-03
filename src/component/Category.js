import React from 'react';
import { useCountContext } from '../Context/UseContxt';




const Category = (props) => {
    const { defaultdata, setData } = useCountContext()

    const handleselected = (event) => {
        console.log(event.target.value)
        const selectedResult = props.data.filter((item) =>
            item.category.toLowerCase().indexOf(event.target.value) !== -1
        )
        console.log(selectedResult)
        return setData(selectedResult)

    }
    return (
        <div className='category'>
            <form onChange={handleselected} className="form">
                <select name="region" id="region" className="select-region" >
                    <option hidden value="" >Filter</option>
                    <option  value=""  className='option'>All</option>
                    <option value="portfolio" className='option'>Portfolio</option>
                    <option value="game" className='option'>Game</option>
                    <option value="tool" className='option'>Tool</option>
                    <option value="blog" className='option'>Blog</option>
                </select>
            </form>
        </div>
    )
}
export default Category