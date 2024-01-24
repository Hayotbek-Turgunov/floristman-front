import React from 'react'
import { useSelector } from 'react-redux'
import classes from './Favorite.module.scss'
import Container from '../../layout/Container'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import DiscountCarousel from '../../components/DiscountsCarousel'
import Title from '../../components/Title/index'

const Favorite = () => {
  const { like } = useSelector((state) => state)
  const items = Object.values(like)
  return (
    <>
      <Header />
      {items.length ? (
        <>
          <Title>Favorite products</Title>
          <Container className={classes['cards']}>
            {items.map((card) => (
              <ProductCard
                key={card.id}
                data={card}
                className={classes['card-item']}
                liked={card.id in like}
              />
            ))}
          </Container>
        </>
      ) : (
        <Title>You don't have favorite products😢</Title>
      )}
      <DiscountCarousel />
    </>
  )
}

export default Favorite