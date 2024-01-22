import React, { useState } from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import Container from '../../layout/Container'
import ProductCard from '../../components/ProductCard'
import classes from './Category.module.scss'


const Category = () => {
  const { type } = useParams()
  const [data, setData] = useState(null)

  const fetchData = () => {
    fetch('http://localhost:4000/products')
      .then((data) => (data.json()))
      .then((cards) => setData(cards))
  }
  return (
    <>
      <Header />
      <Container className={classes['cards']}>
        {data && data.map(card => <ProductCard data={card} key={card.id} className={classes['card-item']} />
        )}
        <button onClick={fetchData}>FetchData</button>
      </Container>
    </>
  )
}

export default Category