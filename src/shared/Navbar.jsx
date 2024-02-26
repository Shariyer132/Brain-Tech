import logo from '../assets/logo-dark.png';
import { FaShoppingBag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import Header from '../components/NavbarComponents/Header';
import Drawer from '../components/NavbarComponents/Drawer';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const Links = <>
        <li className="indicator"><Link to='/shop' className="text-white"><FaShoppingBag /></Link></li>
        <li><Link to='/shopingCart' className="text-white"><FaShoppingCart /></Link></li>
    </>

    const links = <>
        <li><NavLink>ORDERS</NavLink></li>
        <li><NavLink>DASHBOARD</NavLink></li>
        <li><NavLink className="flex items-center">Logout<IoIosLogOut /></NavLink></li>
    </>

    return (
        <div className="navbar justify-between bg-blue-400 px-10">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl"><img src={logo} className='max-w-40' alt="" /></Link>
            </div>
            {/* moblie view */}
            <main className="md:hidden">
                <Header setIsOpen={setIsOpen} />
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <ul onClick={() => (setIsOpen(false))} className="menu">
                        {Links}
                        {links}
                    </ul>
                </Drawer>
            </main>

            {/* large device view */}
            <div className="flex-none hidden md:block">
                <ul className="menu text-white menu-horizontal text-lg font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Services</Link></li>
                    <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
                    {/* <li className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button">Service</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] grid menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>SoftWare Development</a></li>
                            <li><a>Web Development</a></li>
                            <li><a>Analytic Solutions</a></li>
                            <li><a>Cloud And DevOps</a></li>
                            <li><a>Product Design</a></li>
                            <li><a>Data Center</a></li>
                        </ul>
                    </li> */}
                    {/* <li className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button">Pages</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] grid menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Services</a></li>
                            <li><a>Our Team</a></li>
                            <li><a>Single Team</a></li>
                            <li><a>Case Studies</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Faq</a></li>
                        </ul>
                    </li> */}
                    {/* <li className="dropdown dropdown-end dropdown-hover">
                        <div tabIndex={0} role="button">Blog</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] grid menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Blog</a></li>
                            <li><a>Blog Details</a></li>
                        </ul>
                    </li> */}
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div >
    );
};

export default Navbar;