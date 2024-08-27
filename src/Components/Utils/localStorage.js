export const saveToLocalStorage = (data, listType) => {
  const saveData = JSON.parse(localStorage.getItem("bookdetails")) || [];
  const existedData = saveData.find((item) => item.id === data.id);
  if (!existedData) {
    const newData = { ...data, listType };
    saveData.push(newData);
    localStorage.setItem("bookdetails", JSON.stringify(saveData));
    console.log("Book added:", newData);
    alert("Successfully added to list");
  } else {
    alert("Already exists in the list");
  }
};


export const getFormalLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("bookdetails")) || [];
  console.log("local", data);
  return data;
}


export const getFavoriteBooksFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("bookdetails")) || [];
  const favoriteBooks = data.filter(book => book.listType === "favorite");
  return favoriteBooks;
};

