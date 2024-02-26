import Header from "../../components/Header/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../../assets/2.jpg';


const Blogs = () => {
    return (
        <div className="max-w-7xl mx-auto py-24">
            <Header header='Read Our Latest Tips & Tricks' subHeader='BLOGS' />
            <div className="px-5">
                <Swiper
                    breakpoints={{
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }

                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[FreeMode, Autoplay]}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper hidden md:block"
                >
                    {/* one */}
                    <SwiperSlide>
                        <div className="card bg-base-100 mt-10 mb-4 shadow-[#F4F8FE] shadow-xl hover:-translate-y-4 duration-700">
                            <figure className="p-4 h-1/2 relative">
                                <img src={img1} alt="Shoes" className="rounded-lg" />
                                <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] px-6 text-white border-0 rounded-full absolute right-8 bottom-7">It Services</button>
                            </figure>
                            <div className="card-body h-1/2">
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2"><span className="text-blue-800"><FaRegCalendarCheck /></span><span>16 Nov 2020</span></div>
                                    <div className="flex items-center gap-2"><span className="text-blue-800"><LuUser2 /></span><span>admin</span></div>
                                </div>
                                <h2 className="card-title">Necessity May Give Us Your Best Virtual Court System</h2>
                                <p className="leading-relaxed py-2">We denounce with rihteous indige nation and dislike men who are so beguiled...</p>
                                <div className="card-actions justify-start">
                                    <button className="text-lg px-0 font-semibold btn btn-link btn-active text-black"><span>Learn More</span><MdKeyboardArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* two */}
                    <SwiperSlide>
                        <div className="card bg-base-100 mt-10 mb-4 shadow-[#F4F8FE] shadow-xl hover:-translate-y-4 duration-700">
                            <figure className="p-4 h-1/2 relative">
                                <img src={img1} alt="Shoes" className="rounded-lg" />
                                <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] px-6 text-white border-0 rounded-full absolute right-8 bottom-7">It Services</button>
                            </figure>
                            <div className="card-body h-1/2">
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2"><span className="text-blue-800"><FaRegCalendarCheck /></span><span>16 Nov 2020</span></div>
                                    <div className="flex items-center gap-2"><span className="text-blue-800"><LuUser2 /></span><span>admin</span></div>
                                </div>
                                <h2 className="card-title">Necessity May Give Us Your Best Virtual Court System</h2>
                                <p className="leading-relaxed py-2">We denounce with rihteous indige nation and dislike men who are so beguiled...</p>
                                <div className="card-actions justify-start">
                                    <button className="text-lg px-0 font-semibold btn btn-link btn-active text-black"><span>Learn More</span><MdKeyboardArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* three */}
                    <SwiperSlide>
                        <div className="card bg-base-100 mt-10 mb-4 shadow-[#F4F8FE] shadow-xl hover:-translate-y-4 duration-700">
                            <figure className="p-4 h-1/2 relative">
                                <img src={img1} alt="Shoes" className="rounded-lg" />
                                <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] px-6 text-white border-0 rounded-full absolute right-8 bottom-7">It Services</button>
                            </figure>
                            <div className="card-body h-1/2">
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2"><span className="text-blue-800"><FaRegCalendarCheck /></span><span>16 Nov 2020</span></div>
                                    <div className="flex items-center gap-2"><span className="text-blue-800"><LuUser2 /></span><span>admin</span></div>
                                </div>
                                <h2 className="card-title">Necessity May Give Us Your Best Virtual Court System</h2>
                                <p className="leading-relaxed py-2">We denounce with rihteous indige nation and dislike men who are so beguiled...</p>
                                <div className="card-actions justify-start">
                                    <button className="text-lg px-0 font-semibold btn btn-link btn-active text-black"><span>Learn More</span><MdKeyboardArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* four */}
                    <SwiperSlide>
                        <div className="card bg-base-100 mt-10 mb-4 shadow-[#F4F8FE] shadow-xl hover:-translate-y-4 duration-700">
                            <figure className="p-4 h-1/2 relative">
                                <img src={img1} alt="Shoes" className="rounded-lg" />
                                <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] px-6 text-white border-0 rounded-full absolute right-8 bottom-7">It Services</button>
                            </figure>
                            <div className="card-body h-1/2">
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2"><span className="text-blue-800"><FaRegCalendarCheck /></span><span>16 Nov 2020</span></div>
                                    <div className="flex items-center gap-2"><span className="text-blue-800"><LuUser2 /></span><span>admin</span></div>
                                </div>
                                <h2 className="card-title">Necessity May Give Us Your Best Virtual Court System</h2>
                                <p className="leading-relaxed py-2">We denounce with rihteous indige nation and dislike men who are so beguiled...</p>
                                <div className="card-actions justify-start">
                                    <button className="text-lg px-0 font-semibold btn btn-link btn-active text-black"><span>Learn More</span><MdKeyboardArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Blogs;