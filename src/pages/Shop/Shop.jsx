import img1 from '../../assets/3 (1).jpg';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <div className='relative'>
                <img src={img1} className='min-h-52' alt="" />
                <div className='absolute  top-1/3 sm:right-[35%] left-[30%] flex flex-col items-center'>
                    <h2 className='text-5xl text-white font-bold'>Contact</h2>
                    <div className='flex items-center justify-center text-white gap-4 pt-5'>
                        <Link to="/">Home</Link>/<Link>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;