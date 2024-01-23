import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import Container from '../../layout/Container';
import classes from './DiscountCarousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './DiscountCarousel.module.scss'



const DiscountCarousel = () => {

  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/discounts')
      const discount = await res.json()
      setData(discount)
    }

    fetchData()
  }, [])

  return (
    <Container className={classes['discounts']}>
      <h2 className={classes['discounts__title']}>Special Discount</h2>
      {data && (
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
        >
          {data.map(item => (
            <SwiperSlide>
              <ProductCard key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  )
}

export default DiscountCarousel