import axios from "axios";
import { useState } from "react";
import React from "react";
import { useDataContext } from "../Context/UseContxt";

const Header = () => {
    const { update, setUpdate } = useDataContext();

  const handlerReset = () => {
		axios
			.get("https://api.github.com/users/tenmusu007/repos")
			.then((res) => checkLocal(res));
  };
  const checkLocal = (data) => {
    if (
			JSON.stringify(JSON.parse(localStorage.getItem("data")).data) !==
			JSON.stringify(data.data)
		) {
      localStorage.setItem("data", JSON.stringify(data));
      console.log("ccheck");
		}
    setUpdate(true)
  }
	return (
		<header>
			<div className='header-container'>
				<h1 className='header-txt'>link-tree</h1>
				<button onClick={handlerReset} className='btn'>
					Reconect Git
				{update && <p className='updateModal'>Updated</p>}
				</button>
			</div>
		</header>
	);
};
export default Header;
