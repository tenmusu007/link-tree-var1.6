
import React,{useContext, useState} from 'react' 
import { useDataContext } from '../Context/UseContxt';
// import search from './component/Header'
const Card = () => {
    const { git, setGit,update } = useDataContext()
	const copy = git[0].repo.map((item, index) => {
			// console.log(item);
        return (
					<div key={index} className='link-indiv'>
						<div className='url-box'>
							<p className='url-name'>{item.description}</p>
							<p className='url'>
								<a href={item.homepage}>{item.homepage}</a>
							</p>
							<p className='repo-name'>Repository</p>
							<p className='url-repo'>
								<a href={item.svn_url}>{item.svn_url}</a>
							</p>
						</div>
					</div>
				);
    })
    return (
			<div className='link-container'>
			
            {copy}
        </div>
    )
}
export default Card