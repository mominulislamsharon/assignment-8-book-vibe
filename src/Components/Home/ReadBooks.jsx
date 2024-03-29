import React from 'react';

const ReadBooks = ({data}) => {
  console.log(data);
  const {bookName, author, image, rating, category, publisher, review, totalPages, tags,yearOfPublishing, } = data || {};
  return (
    <div className='flex gap-6'>
      <div>
        <img className='rounded-lg' src={image} alt="" />
      </div>
      <div>
        <h1 className='text-xl mt-6 font-bold'>{bookName}</h1>
        <p className='text-base pt-6 font-semibold'>By: {author}</p>
        <div className='flex gap-6 pt-6'>
          <p className=''>{tags}</p>
          <p className='text-base font-semibold'>Year of publishing: {yearOfPublishing}</p>
        </div>
        <div className='flex pt-6'>
          <p>{publisher}</p>
          <p>page: {totalPages}</p>
        </div>
        <div className='flex gap-6'>
          <p>category: {category}</p>
          <p>Rating: {rating}</p>
          <p>View Details</p>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;