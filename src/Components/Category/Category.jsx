import BookCard from "../BookCard/BookCard";
import UseData from "../Hooks/UseData";

const Category = () => {
  const {data, loading} = UseData();
  return (
    <div>
      <div  className="text-center max-w-7xl mx-auto mt-12 text-3xl font-bold ">Books</div>
      <div className="mt-8 grid grid-cols-3 max-w-7xl mx-auto gap-6 py-5">
      {
        data.map(item => <BookCard key={item.id} item={item}></BookCard>)
      }
    </div>
    </div>
  );
};

export default Category;