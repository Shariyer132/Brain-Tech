import { Link } from 'react-router-dom';
import img1 from '../../assets/1 (3).jpg';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const RelatedProduct = () => {
    return (
        <div className="mx-5 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {/* card one */}
                <div className="card rounded-none group">
                    <figure className='relative'>
                        <img src={img1} alt="Shoes" />
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
                        <img src={img1} alt="Shoes" />
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
                        <img src={img1} alt="Shoes" />
                    <button className='btn text-2xl btn-md absolute bottom-1/2 right-3  border-none text-transparent bg-transparent border-transparent shadow-none group-hover:text-white group-hover:bg-blue-600 duration-700 group-hover:translate-y-44 cursor-pointer'><MdOutlineAddShoppingCart/></button>
                    </figure>
                    <div className="card-body justify-center items-center">
                        <h2 className="text-2xl font-bold">Electronics Device</h2>
                        <p className='text-xl font-bold text-blue-600'>$30.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProduct;