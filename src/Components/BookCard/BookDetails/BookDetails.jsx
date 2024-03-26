import { useParams } from "react-router-dom";
import UseData from "../../Hooks/UseData";
import { useEffect, useState } from "react";


const BookDetails = () => {
  const [singlData, setSingleData] = useState({});
  const {id} = useParams();
  const {data, loading} = UseData()

  useEffect(()=>{
    if(data){
      const singlData = data.find(item => item.id == id);
      console.log(singlData);
      setSingleData(singlData);
    }
  },[data, id])
  const {bookName, author, image, rating, category, publisher, review, totalPages, tags,yearOfPublishing, } = singlData || {};

  return (
    <div className="mt-12 gap-12  w-full flex max-w-7xl mx-auto">
      <div>
        <img className="h-[600px] rounded-2xl w-[500px]"  src={image} alt="" />
      </div>
      <div>
        <h1 className="border-b-2 pb-4 text-4xl font-bold">{bookName}</h1>
        <p className="border-b-2 pt-6  pb-4 text-xl font-medium">By: <span>{author}</span></p>
          <div className="border-b-2 pt-6 pb-4"><p>{category}</p></div>
        <p className="pt-6"><span className="text-xl font-bold">Review: </span>{review}</p>
        <div className="pt-6">
          <div className="border-b-2 pt-6"><span className="font-bold">Tag</span> #{tags}</div>
        </div>
        <div className="flex pt-6 ">
          <p>Number of Page:</p>
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
        <button className="btn hover:bg-green-400">Read</button>
          <button className="btn bg-sky-500 rounded-lg ml-6 border hover:bg-green-600">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;