import './Portfolio.css';
import c1 from '../../Images/c1.png'
import c2 from '../../Images/c2.png'
import c3 from '../../Images/c3.png'
import c4 from '../../Images/c4.png'
import c5 from '../../Images/c5.png'
import cer1 from '../../Images/cer1.png'
import cer2 from '../../Images/cer2.png'
import cer3 from '../../Images/cer3.png'
import cer4 from '../../Images/cer4.png'
import cer5 from '../../Images/cer5.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Portfolio() {
    return (
        <>
            <div className='portfolio' id='Certification'>
                <span>Recent Certification</span>
                <span>Portfolio</span>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className='portfolio-slider'>
                    <SwiperSlide>
                        <img src={c1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cer1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={c2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cer2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={c3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cer3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={c4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cer4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={c5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={cer5} />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}