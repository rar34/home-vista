import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const Banner = () => {
    return (
        <div className='my-10'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                effect="fade"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={
                    {delay: 2000}
                }
            >
                

                <SwiperSlide>
                    <div className='flex flex-col md:min-h-[750px] items-center justify-center' style={{ background: `url('https://i.ibb.co/XLqWtZS/1.jpg')` }}>
                        <div className='md:bg-green-100 text-center p-10 rounded-xl space-y-4'>
                            <h3 className="text-2xl md:text-3xl font-bold lg:text-5xl">Luxury Villa with Ocean View</h3>
                            <p>Stunning luxury villa with breathtaking ocean views. Spacious living areas, modern kitchen, and private swimming pool.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:min-h-[750px] items-center justify-center' style={{ background: `url('https://i.ibb.co/KF4tyPk/2.jpg')` }}>
                        <div className='md:bg-green-100 text-center p-10 rounded-xl space-y-4'>
                            <h3 className="text-2xl md:text-3xl font-bold lg:text-5xl">Cozy Townhouse in Historic District</h3>
                            <p>Charming townhouse located in a historic district. Renovated interior with exposed brick walls and a cozy fireplace.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:min-h-[750px] items-center justify-center' style={{ background: `url('https://i.ibb.co/Qp4c969/3.jpg')` }}>
                        <div className='md:bg-green-100 text-center p-10 rounded-xl space-y-4'>
                            <h3 className="text-2xl md:text-3xl font-bold lg:text-5xl">Modern Downtown Apartment</h3>
                            <p>Sleek and modern apartment in the heart of the city. Floor-to-ceiling windows offer panoramic city views.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:min-h-[750px] items-center justify-center' style={{ background: `url('https://i.ibb.co/ypnSYwf/4.jpg')` }}>
                        <div className='md:bg-green-100 text-center p-10 rounded-xl space-y-4'>
                            <h3 className="text-2xl md:text-3xl font-bold lg:text-5xl">Student Housing Near Campus</h3>
                            <p>Convenient student housing just steps away from campus. Fully furnished with modern amenities.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;