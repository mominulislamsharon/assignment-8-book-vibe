import BookCard from './BookCard';
import books from '../../assets/../../public/data.json'; 

const FavouritBooks = () => {
  const favoriteBooks = books.filter(book => book.rating >= 4.5);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center mt-16">Favorite Books</h2>
      {favoriteBooks.length > 0 ? (
        <div className="grid grid-cols-1 mt-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p>No favorite books added yet.</p>
      )}
    </div>
  );
};

export default FavouritBooks;
