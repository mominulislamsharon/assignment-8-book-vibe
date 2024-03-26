import BookCard from "../BookCard/BookCard";
import UseData from "../Hooks/UseData";

const Category = () => {
  const {data, loading} = UseData();
  return (
    <div className="mt-8 grid grid-cols-3 max-w-7xl mx-auto gap-6 py-5">
      {
        data.map(item => <BookCard key={item.id} item={item}></BookCard>)
      }
    </div>
  );
};

export default Category;