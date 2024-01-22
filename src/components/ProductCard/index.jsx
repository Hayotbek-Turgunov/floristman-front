import React, { useState } from 'react'
import classes from './ProductCard.module.scss'
import classNames from 'classnames'


const ProductCard = ({ className, data }) => {
  const [image] = data.images
  const [selected, setSelected] = useState(false)
  const selectItem = () => {
    setSelected((prevState) => !prevState)
  }


  return (
    <div className={classNames(classes['card'], className)}>
      <img src={image} alt="" className={classes['card__image']} />
      <h3 className={classes['card__title']}>{data.name}</h3>
      <p className={classes['card__price']}>{data.price} USD<span className={classes['card__discount']}>{data.discount}  <br />USD</span></p>
      <button onClick={selectItem} className={classNames(classes['card__button'], selected && classes['card__button_selected'])}>
        {selected ? 'Added' : 'Add to card'}
      </button>
      <button></button>
    </div>
  )
}

export default ProductCard