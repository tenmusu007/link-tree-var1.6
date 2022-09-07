import { createContext, useState, useContext, useEffect } from "react";
import { data } from "../data";
import axios from "axios";

const DataContext = createContext();

export function useDataContext() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
	const [git, setGit] = useState([{
		original:[],
		repo: [],
		category: []
	}])
	const [update, setUpdate]= useState(false)
	useEffect(() => {
		if (JSON.parse(localStorage.getItem("data"))) {
			console.log("local working");
			filteredRepo(JSON.parse(localStorage.getItem("data")).data);
		} else {
			console.log("api working");
			axios
				.get("https://api.github.com/users/tenmusu007/repos")
				.then((res) => localStorage.setItem("data", JSON.stringify(res))
				.then((res)=>filteredRepo(res.data)));
			}
		}, [])
		// console.log("useContxt", git);
	const filteredRepo = (git) => {
		// console.log(git);
		const filltred = git.filter((data) => {
			if (data.description !== null) {
				return data;
			}
		});
		const topics = git.filter((value, index) => {
			if (value.topics !== []) {
				return value.topics[0]
			}
		});
		const toppicsMap = topics.map((value) => {
			return value.topics[0]
		})
		const topic = Array.from(new Set(toppicsMap)).filter(
			(value) => value !== undefined
		);
		setGit([{original :filltred, repo: filltred, category: topic }]);
	};
	// console.log(git);
	const value1 = {
		git,
		setGit,
		update,
		setUpdate,
	};

	return <DataContext.Provider value={value1}>{children}</DataContext.Provider>;
}
