import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import img1 from '../../assets/2.jpg';


const Projects = () => {
    return (
        <div className=''>
            <div className="min-h-screen pb-10 mb-16  bg-[#000060] pt-28 relative group" >
                <div className='max-w-7xl mx-auto'>
                    <p className="text-center text-white">PROJECT</p>
                    <h2 className="text-4xl font-bold text-center mx-auto py-5 pb-12 leading-tight text-white max-w-lg">We Are Offering All Kinds of IT Solutions Services</h2>
                    <div className=''>
                        <Swiper
                            breakpoints={{
                                890: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }

                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".button-next-slide",
                                prevEl: ".button-prev-slide",
                            }}
                            loop={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='relative mb-14'>
                                    <div className="card card-compact z-0 bg-base-100 shadow-xl">
                                        <figure><img src={img1} alt="Shoes" className='z-0 rounded-lg hover:scale-125 duration-1000' /></figure>
                                    </div>
                                    <div className="card-body absolute left-[13%] hover:-translate-y-4 duration-1000 -bottom-12 flex-col justify-center items-center w-3/4 mx-auto rounded-lg  z-20 bg-white">
                                        <h2 className="card-title text-2xl z-20">Product Design</h2>
                                        <p className='z-20 text-blue-600 text-lg font-semibold'>IT Technology</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative mb-14'>
                                    <div className="card card-compact z-0 bg-base-100 shadow-xl">
                                        <figure><img src={img1} alt="Shoes" className='z-0 rounded-lg hover:scale-125 duration-1000' /></figure>
                                    </div>
                                    <div className="card-body absolute left-[13%] hover:-translate-y-4 duration-1000 -bottom-12 flex-col justify-center items-center w-3/4 mx-auto rounded-lg  z-20 bg-white">
                                        <h2 className="card-title text-2xl z-20">Product Design</h2>
                                        <p className='z-20 text-blue-600 text-lg font-semibold'>IT Technology</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative mb-14'>
                                    <div className="card card-compact z-0 bg-base-100 shadow-xl">
                                        <figure><img src={img1} alt="Shoes" className='z-0 rounded-lg hover:scale-125 duration-1000' /></figure>
                                    </div>
                                    <div className="card-body absolute left-[13%] hover:-translate-y-4 duration-1000 -bottom-12 flex-col justify-center items-center w-3/4 mx-auto rounded-lg  z-20 bg-white">
                                        <h2 className="card-title text-2xl z-20">Product Design</h2>
                                        <p className='z-20 text-blue-600 text-lg font-semibold'>IT Technology</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative mb-14'>
                                    <div className="card card-compact z-0 bg-base-100 shadow-xl">
                                        <figure><img src={img1} alt="Shoes" className='z-0 rounded-lg hover:scale-125 duration-1000' /></figure>
                                    </div>
                                    <div className="card-body absolute left-[13%] hover:-translate-y-4 duration-1000 -bottom-12 flex-col justify-center items-center w-3/4 mx-auto rounded-lg  z-20 bg-white">
                                        <h2 className="card-title text-2xl z-20">Product Design</h2>
                                        <p className='z-20 text-blue-600 text-lg font-semibold'>IT Technology</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='button-next-slide top-2/3  rounded-full absolute z-10 group-hover:right-[3%] duration-700 animate-fade-right animate-ease-linear animate-alternate cursor-pointer w-[40px] h-[40px] hidden group-hover:grid place-items-center bg-white'>
                    <MdOutlineArrowForward />
                </div>
                <div className='button-prev-slide top-2/3  rounded-full absolute z-10 group-hover:left-[3%] duration-700 animate-fade-left animate-ease-linear animate-alternate  cursor-pointer  w-[40px] h-[40px] hidden group-hover:grid place-items-center bg-white'>
                    <MdOutlineArrowBack />
                </div>

            </div >
        </div>
    );
};

export default Projects;