import { Link } from "react-router-dom";

const WishlistBooks = ({ data }) => {

  const { bookName, id, author, image, rating, category, publisher, review, totalPages, tags, yearOfPublishing } = data;

  return (
    <div className='flex flex-col my-6 md:flex-row items-center gap-6 p-4 border rounded-lg shadow-lg'>
      <div>
        <img className='rounded-lg w-[300px] h-64 object-cover' src={image} alt={bookName} />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>{bookName}</h1>
        <p className='text-base mt-2 font-semibold'>By: {author}</p>
        <div className='flex flex-col md:flex-row itc gap-4 mt-2'>
          <p className='text-sm text-gray-600'>{tags}</p>
          <p className='text-sm text-gray-600'>Year: {yearOfPublishing}</p>
        </div>
        <div className='mt-2'>
          <p className='text-sm text-gray-800'>Publisher: {publisher}</p>
          <p className='text-sm text-gray-800'>Pages: {totalPages}</p>
        </div>
        <div className='flex gap-4 mt-2'>
          <p className='text-sm text-gray-800'>Category: {category}</p>
          <p className='text-sm text-gray-800'>Rating: {rating}</p>
        </div>
        <p className='mt-2 text-gray-700'>{review}</p>
        <Link to={`/book-detals/${id}`}>
        <button className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600'>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default WishlistBooks;
