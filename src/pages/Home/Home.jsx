import React from 'react'
import Header from '../../components/Header'
import Badge from '../../components/Badge'
import CategoriesBlock from '../../components/CategoriesBlock'
import DiscountCarousel from '../../components/DiscountsCarousel'
import OrderForm from '../../components/OrderForm'


const Home = () => {
  return (
    <>
      <Header />
      <Badge />
      <CategoriesBlock />
      <DiscountCarousel />
      <OrderForm />
    </>
  )
}

export default Home
