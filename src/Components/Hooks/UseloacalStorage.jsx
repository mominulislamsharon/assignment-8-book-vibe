import { useEffect, useState } from "react";
import { getFormalLocalStorage } from "../Utils/localStorage";

const UseloacalStorage = () => {
  const [localData, setLocalData] = useState([]);
  console.log(localData);
  useEffect(()=> {
    setLocalData(getFormalLocalStorage())
  },[])
  return {localData}
};

export default UseloacalStorage;