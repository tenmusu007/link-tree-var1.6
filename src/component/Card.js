
import React,{useContext, useState} from 'react' 
import SearchBar from './Searchbar';
import { useCountContext } from '../Context/UseContxt';
// import search from './component/Header'
const Card = (props) => {
    // const count = useContext(UserCount)
    // const [power, setPower] = useState(false);

    // const { defaultdata, setData } = useCountContext()
    // const cards = props.data.map((item, index) => {
    //     return (
    //         <div key={index} className='link-indiv'>
    //             <div>power {power? 'On' : 'Off'}</div>
    //             <button onClick={() => setPower(prevState => !prevState)}>ON/OFF</button>
    //             <p>{defaultdata}</p>
    //             <button onClick={() => setData(defaultdata.map())}>+</button>
                
    //             <div className='url-box'>
    //                 <p className='url-name'>{item.name}</p>
    //                 <p className='url'><a href={item.url}>{item.url}</a></p>
    //                 <p className='repo-name'>Repository</p>
    //                 <p className='url-repo'><a href={item.urlrepo}>{item.urlrepo}</a></p>
    //             </div>
    //         </div>
    //     )
    // });
    // const searchedCards =defaultdata.map((item, index) => {
    //     return (
    //         <div key={index} className='link-indiv'>
    //             <div className='url-box'>
    //                 <p className='url-name'>{item.name}</p>
    //                 <p className='url'><a href={item.url}>{item.url}</a></p>
    //                 <p className='repo-name'>Repository</p>
    //                 <p className='url-repo'><a href={item.urlrepo}>{item.urlrepo}</a></p>
    //             </div>
    //         </div>
    //     )
    // })
    // const copy =props.data1.map((item, index) => {
    //     return (
    //         <div key={index} className='link-indiv'>
    //             <div className='url-box'>
    //                 <p className='url-name'>{item.name}</p>
    //                 <p className='url'><a href={item.url}>{item.url}</a></p>
    //                 <p className='repo-name'>Repository</p>
    //                 <p className='url-repo'><a href={item.urlrepo}>{item.urlrepo}</a></p>
    //             </div>
    //         </div>
    //     )
    // })
    // const atsu =()=>{
    //     return(
    //         <h1>atsuya</h1>
    //     )
    // }
    // const testsearch = setData
    return (
        <div className='link-container'>
            {/* {defaultdata}
            {searchedCards} */}
            {/* {copy} */}
            {/* {searchedCards} */}
            {/* <h1>atsuya</h1> */}
        </div>
    )
}
export default Card