import React from 'react'
import classes from './ProductCard.module.scss'
import classNames from 'classnames'


const data = {
  name: 'Basket No 1',
  category: 'flower',
  images: [
    'https://images.squarespace-cdn.com/content/v1/5eac4ea3e88fff1b365dc45d/1599599381716-G6S1JK3EQVVQR1F4ZJ4S/AUGUST+pink+50x70.jpg?format=1000w'
  ],
  price: 1500000,
  discount: 1000000
}



const ProductCard = ({ className }) => {
  const [image] = data.images
  return (
    <div className={classNames(classes['card'], className)}>
      <img src={image} alt="" className={classes['card__image']} />
      <h3 className={classes['card__title']}>{data.name}</h3>
      <p className={classes['card__price']}>{data.price} USD<span className={classes['card__discount']}>{data.discount}</span></p>
      <button className={classes['card__button']}>
        ADD to Card
      </button>
    </div>
  )
}

export default ProductCard