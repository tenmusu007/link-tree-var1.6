import React,{useState,useRef} from 'react';
import './scss/App.scss';
import { data } from './data';
// import search from './component/Header'


import Header from './component/Header';
import SearchBar from './component/Searchbar';
import Card from './component/Card';
import { CountProvider } from './Context/UseContxt';
import { useCountContext } from './Context/UseContxt';

export const UserCount = React.createContext()
// const { defaultdata, setData } = useCountContext();

function App() {
  // const { defaultdata, setData } = useCountContext();
  const textRef = useRef(null)
  // const [inputText, setSearch] = useState("");
  // let inputHandler = (e) => {
  //   //convert input text to lower case
  //   let lowerCase = e.target.value.toLowerCase();
  //   setSearch(lowerCase);
  // };
//   const search = (arg) => {
//     console.log("working")
//     console.log("arg is " + arg)
//     // console.log("data length is " + data.length)
//     const filtered = data.filter((item, index) => {
//         let emptyArray = ""
//         if (item.name.toLowerCase().indexOf(arg) !== -1) {
//             return emptyArray += item
//         }
//         return emptyArray
//     })
//     console.log(filtered)

//     // setData(filtered)
//     return filtered
// }

  
  return (
    <div className="App">
      <CountProvider>
            <Header />
            {/* <input type="text" ref={textRef}/>
            <button onClick={()=>setData(data)}> test </button> */}
            <SearchBar data = {data}/>
            <Card 
                  // data = {data}
            />
            {/* {defaultdata} */}
      </CountProvider>
    </div>
  );
}

export default App;
