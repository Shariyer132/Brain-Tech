import img1 from '../../assets/about-3.png';

const BusinesSuccess = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={img1} className="md:w-5/12 w-3/4 pt-5" />
                <div className='py-10 flex flex-col sm:items-start items-center'>
                    <div>
                        <span className='px-5 text-blue-700 bg-[#E2EBF8] py-2 rounded-full'>ABOUT US</span>
                    </div>
                    <h1 className="sm:text-4xl text-3xl sm:font-bold font-semibold py-5 text-center sm:text-left">We Are Increasing Business Success With Technology</h1>
                    <big className='text-center sm:text-left'>Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.</big>
                    <p className='py-5 text-center sm:text-left'>applications and mobile apps for clients all over the world.
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying.</p>
                    <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] border-0 text-white px-10 rounded-full">Learn-More</button>
                </div>
            </div>
        </div>
    );
};

export default BusinesSuccess;