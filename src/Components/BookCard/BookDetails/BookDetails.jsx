import { useParams } from "react-router-dom";
import UseData from "../../Hooks/UseData";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../Utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data, loading } = UseData();
  const [isReading, setIsReading] = useState(false);
  const [isWishtListed, setWishListed] = useState(false);

  const handleRead = () => {
    if (!isReading) {
      saveToLocalStorage(singleData, "reading");
      toast.success("Book added to reading list!");
      setIsReading(true);
    } else {
      toast.warning("You are already reading this book.");
    }
  };

  const handleWishList = () => {
    if(isReading){
      toast.warning("Already added to reading list; can't add to wishlist.")
    }
    else if(!isWishtListed){
      saveToLocalStorage(singleData, "wishlist");
      toast.success("Book added to reading list!");
      setWishListed(true);
    }
    else{
      toast.warning("You are already reading this book.");
    }
  };

  useEffect(() => {
    if (data) {
      const singleData = data.find(item => item.id == id);
      setSingleData(singleData);
    }
  }, [data, id]);

  const { bookName, author, image, rating, category, publisher, review, totalPages, tags, yearOfPublishing } = singleData || {};

  return (
    <div className="mt-12 gap-12  w-full flex max-w-7xl mx-auto">
      <div>
        <img className="h-[600px] rounded-2xl w-[500px]" src={image} alt="" />
      </div>
      <div>
        <h1 className="border-b-2 pb-4 text-4xl font-bold">{bookName}</h1>
        <p className="border-b-2 pt-6 pb-4 text-xl font-medium">By: <span>{author}</span></p>
        <div className="border-b-2 pt-6 pb-4"><p>{category}</p></div>
        <p className="pt-6"><span className="text-xl font-bold">Review: </span>{review}</p>
        <div className="pt-6">
          <div className="border-b-2 pt-6"><span className="font-bold">Tag</span> #{tags}</div>
        </div>
        <div className="flex pt-6 ">
          <p>Number of Pages:</p>
          <p className="font-bold">{totalPages}</p>
        </div>
        <div className="flex pt-6 ">
          <p>Publisher:</p>
          <p className="font-bold">{publisher}</p>
        </div>
        <div className="flex pt-6">
          <p>Year of Publishing:</p>
          <p className="font-bold">{yearOfPublishing}</p>
        </div>
        <div className="flex pt-6">
          <p>Rating:</p>
          <p className="font-bold">{rating}</p>
        </div>
        <div className="pt-6 text-black">
          <button onClick={handleRead} className="btn hover:bg-green-400">Read</button>
          <button onClick={handleWishList} className="btn bg-sky-500 rounded-lg ml-6 border hover:bg-green-600">Wishlist</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
