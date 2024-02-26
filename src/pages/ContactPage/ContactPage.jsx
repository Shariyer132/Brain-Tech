import { Link } from 'react-router-dom';
import img1 from '../../assets/3 (1).jpg';
import { FaHome } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactPage = () => {
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
            <div className='flex flex-col lg:flex-row items-center justify-center mt-16'>
                <div className=' mx-3'>
                    <div className='bg-gradient-to-r from-[#1C49AF] to-[#498DE6] max-w-96 pl-8 py-20 rounded-lg w-full flex flex-col gap-4 text-white'>
                        <p>LET TALK</p>
                        <h2 className='text-4xl leading-normal pb-5 font-bold'>Speak With Expert Engineers.</h2>
                        {/* email */}
                        <div className='flex items-center gap-7'>
                            <div className='p-4 bg-slate-200 text-blue-800 rounded-full'><FaHome /></div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-medium'>Email</p>
                                <p>shariyer@gmail.com</p>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className='flex items-center gap-7'>
                            <div className='p-4 bg-slate-200 text-blue-800 rounded-full'><FaPhone /></div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-medium'>Phone</p>
                                <p>(123) 222-8888</p>
                            </div>
                        </div>
                        {/* address */}
                        <div className='flex items-center gap-7'>
                            <div className='p-4 bg-slate-200 text-blue-800 rounded-full'><FaLocationDot /></div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-medium'>Address:</p>
                                <p>New Jesrsy, 1201, USA</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* form */}
                <div>
                    <div className="card max-w-4xl w-full lg:w-[700px] shrink-0 lg:p-14 md:m-3 mt-2 mr-2 bg-base-100">
                        <form className="card-body gap-9 rounded-md">
                            <div>
                                <p className='text-blue-800 pb-5'>GET IN TOUCH</p>
                                <h3 className="font-bold text-4xl">Fill The Form Below</h3>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="form-control md:w-1/2">
                                    <input type="name" placeholder="Name" className="input input-bordered bg-[#F6F7F9]" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <input type="email" placeholder="E-Mail" className="input input-bordered bg-[#F6F7F9]" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="form-control md:w-1/2">
                                    <input type="number" placeholder="Phone Number" className="input-bordered bg-[#F6F7F9] input-md input" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <input type="text" placeholder="Your Website" className="input input-bordered bg-[#F6F7F9]" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <textarea name="" id="" cols="30" placeholder='Your message Here' className='textarea bg-[#F6F7F9] textarea-bordered' rows="5"></textarea>
                            </div>
                            <div className=" mt-6">
                                <input type="submit" value="Submit Now" className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] border-0 text-white px-9 rounded-full text-lg" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;