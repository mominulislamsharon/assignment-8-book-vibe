export const saveToLocalStorage = (data) => {
  const saveData = JSON.parse(localStorage.getItem("book")) || [];

  const existedData = saveData.find((item) => item.id == item.id);
  if(!existedData){
    saveData.push(data);
    localStorage.setItem("bookdetails", JSON.stringify(saveData));
    alert("Successfully");
  }
  else{
    alert("Alredy access");
  }
};

export const getFormalLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("bookdetails")) || [];
  console.log("local", data);
  return data;
}









