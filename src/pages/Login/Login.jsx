import { Link } from 'react-router-dom';
import bgImg from '../../assets/login-bg.jpg';
import logo from '../../assets/logo-light.png';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col lg:flex-row max-w-[1300px] mx-auto md:p-10 p-2">
                <div className="hero lg:w-7/12 lg:text-left text-center rounded-t-2xl lg:rounded-r-none lg:rounded-s-2xl" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="hero-overlay bg-opacity-60 rounded-t-2xl lg:rounded-s-2xl lg:rounded-r-none"></div>
                    <div className='flex flex-col gap-5 py-10'>
                        <img src={logo} className='max-w-48 lg:mx-1 mx-auto' alt="logo" />
                        <h1 className="md:text-5xl text-3xl font-semibold text-white">Welcome back!</h1>
                        <big className='font-medium text-white'>Get access to your Orders, Wishlist and Recommendations.</big>
                    </div>
                </div>
                <div className="card shrink-0 lg:w-5/12 bg-base-200 lg:rounded-s-none rounded-t-none">
                    <form className="card-body">
                        <h3 className='text-center text-3xl font-semibold'>Sign In</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email Address</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password" className="input input-bordered" required />
                            <div className="flex justify-between">
                                <label className="label gap-2">
                                    <input type="checkbox" defaultChecked className="cursor-pointer" />
                                    <span className="label-text font-medium">Remember Me</span>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-info">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] border-0 text-white px-9 rounded-xl">Sign In</button>
                        </div>
                        <div className="divider font-medium">Or with Social Profile</div>
                    </form>
                    <div className='flex gap-4 items-center justify-center'>
                        <Link className='bg-[#1874EB] rounded-full text-white p-3 text-lg'><FaFacebookF /></Link>
                        <Link className='bg-[#038EC3] text-white rounded-full p-3 text-lg'><FaTwitter /></Link>
                        <Link className='bg-[#DB4437] text-white rounded-full p-3 text-lg'><FaGoogle /></Link>
                        <Link className='bg-[#0F628B] text-white rounded-full p-3 text-lg'><FaLinkedinIn /></Link>
                    </div>
                    <p className='font-medium text-center py-5'>Don't have an account? <Link to='/signup' className='link link-info'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;