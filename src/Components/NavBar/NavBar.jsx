import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar mt-6 max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <ul className="p-2 text-lg md:gap-3 m:flex gap-5">
            <NavLink to='/' className={({isActive}) => isActive ? 'text-[#23BE0A] font-medium' : 'font-medium'}>Home</NavLink>
            <NavLink to='/listed' className={({isActive}) => isActive ? 'text-[#23BE0A] font-medium' : 'font-medium'}>Listed Books</NavLink>
            <NavLink to='/pageread' className={({isActive}) => isActive ? 'text-[#23BE0A] font-medium' : 'font-medium'}>Pages to Read</NavLink>
          </ul>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-medium">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu sm:flex gap-5 menu-horizontal px-1 text-lg font-medium">
            <NavLink to='/' className={({isActive}) => isActive ? 'text-[#23BE0A] font-medium' : 'font-medium'}>Home</NavLink>
            <NavLink to='/listed' className={({isActive}) => isActive ? 'text-[#23BE0A] font-medium' : 'font-medium'}>Listed Books</NavLink>
            <NavLink to='/pageread' className={({isActive}) => isActive ? 'text-[#23BE0A] font-medium' : 'font-medium'}>Pages to Read</NavLink>
            <NavLink to='/favouriteBooks' className={({isActive}) => isActive ? 'text-[#23BE0A] font-medium' : 'font-medium'}>Favourite Books</NavLink>
            <NavLink to='/morebooks' className={({isActive}) => isActive ? 'text-[#23BE0A] font-medium' : 'font-medium'}>More..</NavLink>
    </ul>
  </div>
  <div className="navbar-end text-lg font-medium gap-4">
    <a className="btn text-white bg-[#23BE0A]">Sign In</a>
    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
  </div>
</div>
  );
};

export default NavBar;