import bannerImg from '../../assets/team-bg.png';
import bgImg from '../../assets/ngbng.png';
import img1 from '../../assets/1 (5).jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";


const Team = () => {
    return (
        <div className='bg-[#000060] min-h-screen py-10' style={{ backgroundImage: `url(${bannerImg})` }} >
            <h5 className='py-2 bg-[#020A6C] text-white max-w-24 mt-20 text-center rounded-full mx-auto'>TEAM</h5>
            <h2 className='md:text-4xl md:font-bold text-3xl font-semibold text-center text-white py-5'>Expert IT Consultants</h2>
            <div className='bg-transparent'>
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
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {/* one */}
                    <SwiperSlide>
                        <div className='pb-14'>
                            <div className='flex flex-col items-center gap-12 rounded-lg pt-14'>
                                <div className='flex relative items-center justify-center'>
                                    <img src={img1} alt="Qoute" className='rounded-full z-10 max-w-xs' />
                                    <img src={bgImg} className='absolute max-w-sm z-0' alt="" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center text-white items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Makhaia Antitni</p>
                                <span className="designation">Web Developer</span>
                                <div className='flex gap-3 py-2'>
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaTwitter />
                                    <FaPinterestP />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Two */}
                    <SwiperSlide>
                        <div className='pb-14'>
                            <div className='flex flex-col items-center gap-12 rounded-lg pt-14'>
                                <div className='flex relative items-center justify-center'>
                                    <img src={img1} alt="Qoute" className='rounded-full z-10 max-w-xs' />
                                    <img src={bgImg} className='absolute max-w-sm z-0' alt="" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center text-white items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Makhaia Antitni</p>
                                <span className="designation">Web Developer</span>
                                <div className='flex gap-3 py-2'>
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaTwitter />
                                    <FaPinterestP />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Three */}
                    <SwiperSlide>
                        <div className='pb-14'>
                            <div className='flex flex-col items-center gap-12 rounded-lg pt-14'>
                                <div className='flex relative items-center justify-center'>
                                    <img src={img1} alt="Qoute" className='rounded-full z-10 max-w-xs' />
                                    <img src={bgImg} className='absolute max-w-sm z-0' alt="" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center text-white items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Makhaia Antitni</p>
                                <span className="designation">Web Developer</span>
                                <div className='flex gap-3 py-2'>
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaTwitter />
                                    <FaPinterestP />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Four */}
                    <SwiperSlide>
                        <div className='pb-14'>
                            <div className='flex flex-col items-center gap-12 rounded-lg pt-14'>
                                <div className='flex relative items-center justify-center'>
                                    <img src={img1} alt="Qoute" className='rounded-full z-10 max-w-xs' />
                                    <img src={bgImg} className='absolute max-w-sm z-0' alt="" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center text-white items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Makhaia Antitni</p>
                                <span className="designation">Web Developer</span>
                                <div className='flex gap-3 py-2'>
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaTwitter />
                                    <FaPinterestP />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Five */}
                    <SwiperSlide>
                        <div className='pb-14'>
                            <div className='flex flex-col items-center gap-12 rounded-lg pt-14'>
                                <div className='flex relative items-center justify-center'>
                                    <img src={img1} alt="Qoute" className='rounded-full z-10 max-w-xs' />
                                    <img src={bgImg} className='absolute max-w-sm z-0' alt="" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center text-white items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Makhaia Antitni</p>
                                <span className="designation">Web Developer</span>
                                <div className='flex gap-3 py-2'>
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaTwitter />
                                    <FaPinterestP />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Team;