import React from 'react';
// import swiper react component
import {Swiper , SwiperSlide} from 'swiper/react';
// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
// import required modules
import {Pagination, Navigation} from 'swiper';
// components
import Product from './Product';

const ProductSlider = ({data}) => {
  // console.log(data);
  return (<Swiper modules={[Pagination,  Navigation]} loop={false} navigation={true}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 30
      },
    }}

    pagination={{
      clickable: true,
    }}
    className='product-slider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
  >
    <>
      {data?.map((p)=>{
        return (
        <SwiperSlide key={p.id}>
          <Product product={p} />          
        </SwiperSlide>)
      })}
    </>
  </Swiper>);
};

export default ProductSlider;
