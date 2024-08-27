import { useState } from "react";
import { Link} from "react-router-dom";
import UseloacalStorage from "../Hooks/UseloacalStorage";
import ReadBooks from "./ReadBooks";
import WishlistBooks from "./WishlistBooks";
import { BarChart } from "recharts";
import Short from "./Short";
import FavouritBooks from "../FavouriteBooks/FavouritBooks";



const ListsBook = () => {
	const {localData} = UseloacalStorage();
	const [tabIndex, setTabIndex] = useState(0);
  const [sortOption, setSortOpiton ] = useState("");
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const filteredBooks = localData.filter(item => item.listType === (tabIndex === 0 ? "reading" : "wishlist"));

  const toggleFavorite = (book) => {
    setFavoriteBooks((prevFavorites) => {
      const isFavorite = prevFavorites.some(fav => fav.id === book.id);
      if (isFavorite) {
        return prevFavorites.filter(fav => fav.id !== book.id);
      } else {
        return [...prevFavorites, book];
      }
    });
  };

  const sortedBooks = filteredBooks.sort((a, b) => {
    if(sortOption === "rating"){
      return b.rating - a.rating;
    }
    else if(sortOption === "pages"){
      return b.totalPages - a.totalPages;
    }
    else if(sortOption === "year"){
      return b.yearOfPublishing - a.yearOfPublishing;
    }
    return 0;
  })

  return (
    <div className="max-w-7xl mt-12 mx-auto ">
      <div className="text-center text-3xl p-4 rounded-lg items-center justify-center font-bold bg-gray-400"><h1>Books</h1></div>
        <div className="my-6 text-center">
        <Short setSortOption={setSortOpiton}></Short>
        </div>

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
	{
  tabIndex === 0 && (
    <div>
<BarChart data={sortedBooks} /> 
          {sortedBooks.map(data => (
            <ReadBooks key={data.id} data={data} toggleFavorite={toggleFavorite} isFavorite={favoriteBooks.some(book => book.id === data.id)} />
          ))}
        </div>
      )}
      {tabIndex === 1 && (
        <div>
          {sortedBooks.map(data => (
            <WishlistBooks key={data.id} data={data} toggleFavorite={toggleFavorite}   isFavorite={favoriteBooks.some(book => book.id === data.id)} />
          ))}
          <FavouritBooks favoriteBooks={favoriteBooks} />
    </div>
  )
}
    </div>
  );
};

export default ListsBook;