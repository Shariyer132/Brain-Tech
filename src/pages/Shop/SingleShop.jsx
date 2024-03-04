import img1 from '../../assets/3 (1).jpg';
import img2 from '../../assets/1 (3).jpg';
import { Link } from 'react-router-dom';
import RelatedProduct from './RelatedProduct';
import { FaLocationDot } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

const SingleShop = () => {
    const reviewsAvailble = false;
    return (
        <div>
            {/* banner */}
            <div className='relative'>
                <img src={img1} className='min-h-52' alt="" />
                <div className='absolute  top-1/3 sm:right-[35%] left-[30%] flex flex-col items-center'>
                    <h2 className='text-5xl text-white font-bold'>Shop</h2>
                    <div className='flex items-center justify-center text-white gap-4 pt-5'>
                        <Link to="/">Home</Link>/<Link>Product</Link>
                    </div>
                </div>
            </div>
            {/* Product */}
            <div className="hero min-h-screen my-10">
                <div className="flex max-w-7xl lg:mx-auto mx-5 gap-16 flex-col lg:flex-row">
                    <img src={img2} className="w-full max-w-xl rounded" />
                    <div>
                        <h1 className="text-3xl pb-3 font-bold">Digital Headphone</h1>
                        <span className='font-semibold text-blue-600'>$150.00</span>
                        <p className="py-6 leading-loose">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id culpa qui officia deserunt mollit anim id est laborum nisi.</p>
                        <div className='flex justify-start items-center gap-7 '>
                            <input type="number" defaultValue={1} className="input border-[#F2F2F2] border-2 outline-[#F2F2F2] outline-1 rounded-none max-w-14" name="quantity" id="" />
                            <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] border-0 text-white px-9 rounded text-base">Add To cart</button>
                        </div>
                        <hr className='my-8' />
                        <p className='font-bold'>Category: <span className='font-normal'>Business</span></p>
                    </div>
                </div>
            </div>
            {/* Review form */}
            <div className='max-w-7xl mx-auto'>
                <div tabIndex={0} className="collapse">
                    <div className="collapse-title text-blue-600">
                        Description Reviews <span>(0)</span>
                        <hr className='border-1 my-2' />
                    </div>
                    <div className="collapse-content">
                        <div>
                            {
                                reviewsAvailble ? <>
                                    {/* reviews */}
                                    <div className='pb-10 flex flex-col gap-7'>
                                        {/* review one */}
                                        <div className='flex justify-between relative'>
                                            <div className='flex items-center gap-7 relative'>
                                                <div className='p-4 bg-slate-200 rounded-full'><FaLocationDot /></div>
                                                <div className='flex flex-col gap-2'>
                                                    <p className='font-medium'>Shariyer Hossain</p>
                                                    <p>Very Nice Headphone.</p>
                                                    <div className='flex items-center gap-1'>
                                                        <div className='flex items-center gap-1'>
                                                            {
                                                                reviewsAvailble ?
                                                                    <><button className='btn btn-sm rounded-full text-lg btn-ghost'><BiSolidLike /></button></>
                                                                    :
                                                                    <><button className='btn btn-sm rounded-full text-lg btn-ghost'><BiLike /></button></>
                                                            }
                                                            <span>13</span>
                                                        </div>
                                                        <div>
                                                            {
                                                                reviewsAvailble ? <>
                                                                    <button className='btn btn-sm rounded-full text-lg btn-ghost'><BiSolidDislike /></button>
                                                                </>
                                                                    :
                                                                    <>
                                                                        <button className='btn btn-sm rounded-full text-lg btn-ghost'><BiDislike /></button>
                                                                    </>
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown dropdown-left dropdown-end">
                                                <div tabIndex={0} role="button" className="cursor-pointer m-1"><BsThreeDotsVertical /></div>
                                                <ul tabIndex={0} className="dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li><a>Item 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* review two */}
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-7'>
                                                <div className='p-4 bg-slate-200 rounded-full'><FaLocationDot /></div>
                                                <div className='flex flex-col gap-2'>
                                                    <p className='font-medium'>Shariyer Hossain</p>
                                                    <p>Very Nice Headphone.</p>
                                                    <div className='flex items-center gap-1'>
                                                        <div className='flex items-center gap-1'>
                                                            {
                                                                reviewsAvailble ?
                                                                    <><button className='btn btn-sm rounded-full text-lg btn-ghost'><BiSolidLike /></button></>
                                                                    :
                                                                    <><button className='btn btn-sm rounded-full text-lg btn-ghost'><BiLike /></button></>
                                                            }
                                                            <span>13</span>
                                                        </div>
                                                        <div>
                                                            {
                                                                reviewsAvailble ? <>
                                                                    <button className='btn btn-sm rounded-full text-lg btn-ghost'><BiSolidDislike /></button>
                                                                </>
                                                                    :
                                                                    <>
                                                                        <button className='btn btn-sm rounded-full text-lg btn-ghost'><BiDislike /></button>
                                                                    </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <span className='cursor-pointer mt-2 ml-5'><BsThreeDotsVertical/></span> */}
                                            <div className="dropdown dropdown-left dropdown-end">
                                                <div tabIndex={0} role="button" className="cursor-pointer m-1"><BsThreeDotsVertical /></div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li><a>Item 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                    : <>
                                        <p>There are no reviews yet.</p>
                                        <p className='font-medium pb-2 pt-4'>Be the first to review "Digital Headphone"</p>
                                    </>
                            }
                        </div>
                        <p>Your email address will not be published. Required fields are marked*</p>
                        {/* form */}
                        <div className="card shrink-0 py-5 w-full max-w-2xl">
                            <h2 className='text-center font-semibold text-xl'>Place a review</h2>
                            <form>
                                {/* name */}
                                <div className="form-control py-3">
                                    <label className="label">
                                        <span className="font-semibold">Name *</span>
                                    </label>
                                    <input type="name" className="input input-bordered rounded-none" required />
                                </div>
                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold">Email *</span>
                                    </label>
                                    <input type="email" className="input input-bordered rounded-none" required />
                                </div>
                                {/* rating */}
                                <div className='flex flex-col py-3 gap-2'>
                                    <span className=' font-semibold'>Your rating</span>
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                {/* Review */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold">Your review *</span>
                                    </label>
                                    <textarea type="email" cols={10} className="textarea textarea-bordered rounded-none" required />
                                </div>
                                <div className="mt-6">
                                    <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] border-0 text-white px-10">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <h3 className="text-2xl px-5 font-bold">Related products</h3>
                <RelatedProduct />
            </div>
        </div>
    );
};

export default SingleShop;