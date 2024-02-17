import { NavLink } from "react-router-dom";

const Header = () => {

    const navData=
        <>
        <NavLink>Home</NavLink>
        <NavLink>Pet Listing</NavLink>
        <NavLink>Donation Campaigns</NavLink>
        </>
    

    return (
        <div className="navbar bg-emerald-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navData}
                    </ul>
                </div>
                <img className="h-12" src="https://i.ibb.co/0nFP8Vs/Brown-Black-Simple-Modern-Pet-Shop-Logo-1-removebg-preview.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-6 text-lg  font-semibold">
                    {navData}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;