import React, { useState } from "react";
import { useDataContext } from "../Context/UseContxt";

const Category = (props) => {
  const { git, setGit } = useDataContext();
	const handleselected = (event) => {
		const selectedResult = git[0].original.filter((item) => {
			console.log(event.target.value);
			console.log(item.topics);
      if (event.target.value === "All") {
        return item
      } else if (item.topics.indexOf(event.target.value) !== -1) {
        return item
      }
    });
    return setGit([
			{
				original: [...git[0].original],
				repo: selectedResult,
				category: [...git[0].category],
			},
		]);
  };
	return (
		<div className='category'>
			<form onChange={handleselected} className='form'>
				<select name='region' id='region' className='select-region'>
					<option value='All' className='option'>
						All
					</option>
					{git[0].category.map((option, index) => {
						return (
							<option value={option} key={index}>
								{option}
							</option>
						);
					})}
				</select>
			</form>
		</div>
	);
};
export default Category;
