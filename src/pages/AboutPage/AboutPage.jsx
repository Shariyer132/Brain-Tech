import img1 from '../../assets/1 (4).jpg';
import { Link } from 'react-router-dom';
import BusinesSuccess from './BusinesSuccess';
import Team from './Team';
import Process from './Process';
import PricingPlan from '../../Home/PricingPlan/PricingPlan';


const AboutPage = () => {
    return (
        <div>
            {/* banner */}
            <div className='relative'>
                <img src={img1} className='min-h-52' alt="" />
                <div className='absolute  top-1/3 sm:right-[35%] left-[30%] flex flex-col items-center'>
                    <h2 className='text-5xl text-white font-bold'>About</h2>
                    <div className='flex items-center justify-center text-white gap-4 pt-5'>
                        <Link to="/">Home</Link>/<Link>About</Link>
                    </div>
                </div>
            </div>
            <BusinesSuccess/>
            <Team/>
            <Process/>
            <PricingPlan/>
        </div>
    );
};

export default AboutPage;