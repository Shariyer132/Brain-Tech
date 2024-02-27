import img1 from '../../assets/about-part-1.png';
import img2 from '../../assets/about-part-2.png';
import img3 from '../../assets/about-part-3.png';


const AboutUs = () => {
    return (
        <div className='flex flex-col md:flex-row px-5 gap-4 justify-center items-center md:pt-20 md:pb-44 py-20'>
            <div className='md:w-1/2 relative'>
                <div className='absolute left-1/4 bottom-1/4'>
                    <img src={img1} className='z-20' alt="" />
                </div>
                <div>
                    <img src={img2} className='pb-10 animate-fade-left z-10 animate-infinite animate-ease-in-out animate-alternate' alt="" />
                    <img src={img3} className='animate-fade-up z-10 animate-infinite animate-ease-in-out animate-alternate' alt="" />
                </div>

            </div>
            <div className='md:w-1/2 flex flex-col gap-7'>
                <div className='flex gap-3 items-center'>
                    <div className='w-3 h-1 bg-blue-800'></div>
                    <div className='w-12 h-1 bg-blue-800'></div>
                    <h6 className='text-blue-800'>ABOUT US</h6>
                </div>
                <h2 className='max-w-2xl text-4xl font-bold'>We Are Increasing Business Success With Technology</h2>
                <p className='text-lg max-w-xl'>Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.</p>
                <div className='w-full max-w-lg'>
                    <div className='flex items-center justify-between'>
                        <p>Software Development</p>
                        <p>92%</p>
                    </div>
                        
                    <progress className="progress progress-info" value={92} max="100"></progress>
                </div>
                <div className='w-full max-w-lg'>
                    <div className='flex items-center justify-between'>
                        <p>Cyber Security</p>
                        <p>80%</p>
                    </div>
                    <progress className="progress progress-info" value={80} max="100"></progress>
                </div>
                <div className='w-full max-w-lg'>
                    <div className='flex items-center justify-between'>
                        <p>Artificial Intelligence</p>
                        <p>95%</p>
                    </div>
                    <progress className="progress progress-info" value={95} max="100"></progress>
                </div>
                <div className='w-full max-w-lg'>
                    <div className='flex items-center justify-between'>
                        <p>Web Development</p>
                        <p>78%</p>
                    </div>
                    <progress className="progress progress-info" value={78} max="100"></progress>
                </div>
                <div>
                    <button className='btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] border-0 text-white px-9 rounded-full'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;