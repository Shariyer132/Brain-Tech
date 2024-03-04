import qouteImg from '../../assets/quote2.png';
import img1 from '../../assets/1 (2).jpg';
import img2 from '../../assets/2 (1).jpg';
import img3 from '../../assets/4 (1).jpg';
import img4 from '../../assets/3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Header from '../../components/Header/Header';

export default function Testimonials() {
    return (
        <div className='bg-[#F6F7F9]'>
            <div className='max-w-7xl mx-auto py-32 bg-[#F6F7F9]'>
                <div className='pb-12'>
                    <Header header='What Saying Our Customers' subHeader="TESTIMONIAL" />
                </div>
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
                            <div className='flex flex-col items-center gap-12 rounded-lg bg-base-100 pt-14'>
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <img src={qouteImg} alt="Qoute" />
                                    <p className='max-w-xs text-center leading-loose'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                                </div>
                                <div className='-mb-12 flex justify-center'>
                                    <img src={img2} className='rounded-full w-2/3' alt="avater" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Sonia Akhter</p>
                                <span className="designation">Graphic Designer</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* two */}
                    <SwiperSlide>
                        <div className='pb-14'>
                            <div className='flex flex-col items-center gap-12 rounded-lg bg-base-100 pt-14'>
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <img src={qouteImg} alt="Qoute" />
                                    <p className='max-w-xs text-center leading-loose'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                                </div>
                                <div className='-mb-12 flex justify-center'>
                                    <img src={img1} className='rounded-full w-2/3' alt="avater" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Sonia Akhter</p>
                                <span className="designation">Graphic Designer</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* three */}
                    <SwiperSlide>
                        <div className='pb-14'>
                            <div className='flex flex-col items-center gap-12 rounded-lg bg-base-100 pt-14'>
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <img src={qouteImg} alt="Qoute" />
                                    <p className='max-w-xs text-center leading-loose'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                                </div>
                                <div className='-mb-12 flex justify-center'>
                                    <img src={img3} className='rounded-full w-2/3' alt="avater" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Sonia Akhter</p>
                                <span className="designation">Graphic Designer</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* four */}
                    <SwiperSlide>
                        <div className='pb-14'>
                            <div className='flex flex-col items-center gap-12 rounded-lg bg-base-100 pt-14'>
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <img src={qouteImg} alt="Qoute" />
                                    <p className='max-w-xs text-center leading-loose'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                                </div>
                                <div className='-mb-12 flex justify-center'>
                                    <img src={img4} className='rounded-full w-2/3' alt="avater" />
                                </div>
                            </div>
                            <div className="flex pt-12 justify-center items-center flex-col gap-2">
                                <p className="text-2xl font-semibold">Sonia Akhter</p>
                                <span className="designation">Graphic Designer</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
