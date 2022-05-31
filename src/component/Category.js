import React from 'react';
import { useCountContext } from '../Context/UseContxt';




const Category = (props) => {
    const { defaultdata, setData } = useCountContext()

    const handleselected =(event)=>{
        console.log(event.target.value)
        const selectedResult = props.data.filter((item)=>
            item.category.toLowerCase().indexOf(event.target.value) !== -1 
        )
        console.log(selectedResult)
        return setData(selectedResult)

    }
    return (
        <div>
            <form onChange={handleselected}>
                <select name="region" id="region">
                    <option value="">Filter</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="game">Game</option>
                    <option value="tool">Tool</option>
                    <option value="blog">Blog</option>
                </select>
            </form>
        </div>
    )
}
export default Category