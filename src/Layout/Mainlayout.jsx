import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";


const Mainlayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;