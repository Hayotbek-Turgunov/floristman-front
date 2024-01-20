import React from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import Container from '../../layout/Container'
import ProductCard from '../../components/ProductCard'
import classes from './Category.module.scss'


const Category = () => {
  const { type } = useParams()
  return (
    <>
      <Header />
      <Container className={classes['cards']}>
        <ProductCard className={classes['card-item']} />
      </Container>
    </>
  )
}

export default Category