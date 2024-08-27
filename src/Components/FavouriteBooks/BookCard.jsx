const BookCard = ({ book }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <img className='rounded-lg w-full h-48 object-cover' src={book.image} alt={book.bookName} />
      <h3 className="text-xl font-bold mt-4">{book.bookName}</h3>
      <p className="text-gray-600">{book.author}</p>
      <p className='text-sm text-gray-800'>Publisher: {book.publisher}</p>
      <p className='text-sm text-gray-800'>Pages: {book.totalPages}</p>
      <p className='text-sm text-gray-800'>Category: {book.category}</p>
      <p className='text-sm text-gray-800'>Rating: {book.rating}</p>
      <p className='mt-2 text-gray-700'>{book.review}</p>
    </div>
  );
};

export default BookCard;
