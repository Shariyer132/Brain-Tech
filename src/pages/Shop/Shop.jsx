import { Link } from 'react-router-dom';
import img1 from '../../assets/3 (1).jpg';
import img2 from '../../assets/1 (3).jpg';
import img3 from '../../assets/3 (2).jpg';
import img4 from '../../assets/2 (2).jpg';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Shop = () => {
    return (
        <div>
            {/* banner */}
            <div className='relative'>
                <img src={img1} className='min-h-52' alt="" />
                <div className='absolute  top-1/3 sm:right-[35%] left-[30%] flex flex-col items-center'>
                    <h2 className='text-5xl text-white font-bold'>Shop</h2>
                    <div className='flex items-center justify-center text-white gap-4 pt-5'>
                        <Link to="/">Home</Link>/<Link>Shop</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl lg:mx-auto mx-5 py-36'>
                <div className='flex justify-between items-center my-10'>
                    <p>Showing 1-9 of 12 results</p>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Normal</option>
                        <option>Normal Apple</option>
                        <option>Normal Orange</option>
                        <option>Normal Tomato</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {/* card one */}
                    <div className="card rounded-none group">
                        <figure className='relative'>
                            <img src={img2} alt="Shoes" />
                            <button className='btn text-2xl btn-md absolute bottom-1/2 right-3  border-none text-transparent bg-transparent border-transparent shadow-none group-hover:text-white group-hover:bg-blue-600 duration-700 group-hover:translate-y-44 cursor-pointer'><Link to="/singleShop"><MdOutlineAddShoppingCart /></Link></button>
                        </figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="text-2xl font-bold">Electronics Device</h2>
                            <p className='text-xl font-bold text-blue-600'>$30.00</p>
                        </div>
                    </div>
                    {/* card two */}
                    <div className="card rounded-none group">
                        <figure className='relative'>
                            <img src={img3} alt="Shoes" />
                            <button className='btn text-2xl btn-md absolute bottom-1/2 right-3  border-none text-transparent bg-transparent border-transparent shadow-none group-hover:text-white group-hover:bg-blue-600 duration-700 group-hover:translate-y-44 cursor-pointer'><Link to="/singleShop"><MdOutlineAddShoppingCart /></Link></button>
                        </figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="text-2xl font-bold">Electronics Device</h2>
                            <p className='text-xl font-bold text-blue-600'>$30.00</p>
                        </div>
                    </div>
                    {/* card three */}
                    <div className="card rounded-none group">
                        <figure className='relative'>
                            <img src={img4} alt="Shoes" />
                            <button className='btn text-2xl btn-md absolute bottom-1/2 right-3  border-none text-transparent bg-transparent border-transparent shadow-none group-hover:text-white group-hover:bg-blue-600 duration-700 group-hover:translate-y-44 cursor-pointer'><Link to="/singleShop"><MdOutlineAddShoppingCart /></Link></button>
                        </figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="text-2xl font-bold">Electronics Device</h2>
                            <p className='text-xl font-bold text-blue-600'>$30.00</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center py-5'>
                    <div className="join">
                        <button className="join-item btn">«</button>
                        <button className="join-item btn">Page 22</button>
                        <button className="join-item btn">»</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;