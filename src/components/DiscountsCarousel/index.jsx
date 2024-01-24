import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import Container from '../../layout/Container';
import classes from './DiscountCarousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './DiscountCarousel.module.scss'
import { useSelector } from 'react-redux';




const DiscountCarousel = () => {

  const [data, setData] = useState([])
  const { like } = useSelector(state => state)


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
            <SwiperSlide key={item.id}>
              <ProductCard data={item} liked={item.id in like} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  )
}

export default DiscountCarousel