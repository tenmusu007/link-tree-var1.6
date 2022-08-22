import React,{useState,useRef, useEffect} from 'react';
import './scss/App.scss';
import { data } from './data';
import Header from './component/Header';
import SearchBar from './component/Searchbar';
import Card from './component/Card';
import Category from './component/Category';
import { DataProvider } from './Context/UseContxt';


export const UserCount = React.createContext()

function App() {

  return (
    <div className="App">
      <DataProvider>
            <Header />
            <SearchBar data = {data}/>
            <Category data = {data}/>
            <Card/>
      </DataProvider>
    </div>
  );
}

export default App;
