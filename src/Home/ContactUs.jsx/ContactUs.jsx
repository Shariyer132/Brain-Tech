import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CountUp from "react-countup";
import img1 from '../../assets/contact-here.png';
import img2 from '../../assets/counter-bg.png';

const ContactUs = () => {
    return (
        <div className='relative mb-28'>
            <div className="hero justify-center bg-[#000060] text-white lg:pt-14 rounded-md" >
                <div className="flex  flex-col lg:flex-row">
                    <label className="lg:w-1/2 flex justify-center">
                        <img src={img1} className="rounded-lg hidden lg:block" />
                    </label>
                    <div className="lg:w-1/2 flex  flex-col items-center py-10 px-1">
                        <div className='mb-6 bg-white text-blue-700 p-5 rounded-full animate-bounce'>
                            <FaPhoneAlt />
                        </div>
                        <h5 className='text-xl font-bold'>CALL US 24/7</h5>
                        <h1 className="sm:text-5xl sm:font-bold font-semibold text-2xl pt-4">(+888) 01886600369</h1>
                        <p className="py-6 text-center sm:text-lg max-w-lg leading-loose">Have any idea or project for in your mind call us or schedule a appointment. Our representative will reply you shortly.</p>
                        <button className="btn border-0 rounded-full bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] sm:text-lg text-white sm:px-9"><Link to="/contact">Let's Talk</Link></button>
                    </div>
                </div>
            </div>
            <div className='max-w-4xl  mx-auto my-10 lg:absolute right-20 -bottom-20 w-full'>
                <div className='flex md:flex-row flex-col gap-7 mx-10  items-center justify-around bg-white py-10 rounded-lg shadow-2xl' style={{ backgroundImage: `url(${img2})` }}>

                    <div className="flex flex-col items-center gap-2">
                        <div className="font-bold text-5xl text-blue-900">
                            <CountUp duration={8} enableScrollSpy={true} className="counter" end={80} />
                            <span>k</span>
                        </div>
                        <div className='font-semibold text-lg'>Happy Clients</div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="font-bold text-5xl text-blue-900"><CountUp duration={8} enablescrollSpy={true} className="counter" end={50} /><span>+</span></div>
                        <div className="font-semibold text-lg">Companies</div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                    <div className="font-bold text-5xl text-blue-900"><CountUp duration={8} enablescrollSpy={true} className="counter" end={230} /><span>+</span></div>
                        <div className="font-semibold text-lg">Projects Done</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactUs;