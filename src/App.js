import React,{useState,useRef} from 'react';
import './scss/App.scss';
import { data } from './data';
// import search from './component/Header'


import Header from './component/Header';
import SearchBar from './component/Searchbar';
import Card from './component/Card';
import Category from './component/Category';
import { CountProvider } from './Context/UseContxt';

export const UserCount = React.createContext()
// const { defaultdata, setData } = useCountContext();

function App() {


  return (
    <div className="App">
      <CountProvider>
            <Header />
            <SearchBar data = {data}/>
            <Category data = {data}/>
            <Card/>
      </CountProvider>
    </div>
  );
}

export default App;
