import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const BookCard = ({item}) => {
  console.log(item);
  const {id, bookName, author, image, rating, category, publisher} = item || {};
  return (
      <Link to={`/book-detals/${id}`}>
      <div className="card p-6 shadow-xl cursor-pointer">
  <figure><img className="h-[300px] w-[250px] rounded-lg" src={image} /></figure>
  <div className="card-actions mt-4">
      <div className="badge text-[#23BE0A] badge-outline">Young Adult</div> 
      <div className="badge text-[#23BE0A] bg-[#23BE0D0A] badge-outline">Identity</div>
    </div>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
    </h2>
    <p className="border-b-2 border-dotted border-black pb-2">By: {author}</p>
    <div className="flex justify-between">
      <div className="font-medium text-base">
        {publisher}
      </div>
      <div className="flex items-center gap-3 text-base font-medium">
        {rating} <IoIosStarOutline></IoIosStarOutline>
      </div>
    </div>
    
  </div>
</div>
      </Link>
  );
};

export default BookCard;