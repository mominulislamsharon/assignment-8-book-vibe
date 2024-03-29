import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import UseloacalStorage from "../Hooks/UseloacalStorage";
import ReadBooks from "./ReadBooks";



const ListsBook = () => {
	const {localData} = UseloacalStorage();
	console.log(localData);
	const [tabIndex, setTabIndex] = useState(0)
  const data = useLoaderData();
	

  return (
    <div className="max-w-7xl mt-12 mx-auto ">
      <div className="text-center text-3xl p-4 rounded-lg items-center justify-center font-bold bg-gray-400"><h1>Books</h1></div>
      <div className="flex items-center mt-6 -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
	<Link to="" onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read Books</span>
	</Link>
	<Link to="wishListBooks" onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wishlist Books</span>
	</Link>
	
</div>
<Outlet></Outlet>
<div>
	{
		localData.map((data) => <ReadBooks key={data.id} data={data}></ReadBooks>)
	}
</div>
    </div>
  );
};

export default ListsBook;