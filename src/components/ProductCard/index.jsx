import React, { useState } from 'react'
import classes from './ProductCard.module.scss'
import classNames from 'classnames'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { handleLike } from '../../redux/likeSlice'
import { useDispatch } from 'react-redux'



const ProductCard = ({ className, data, liked }) => {
  const [image] = data.images
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  const selectItem = () => {
    setSelected((prevState) => !prevState)
  }

  const handleLikeButtonClick = () => {
    dispatch(handleLike(data))
  }

  return (
    <div className={classNames(classes['card'], className)}>
      <img src={image} alt="" className={classes['card__image']} />
      <h3 className={classes['card__title']}>{data.name}</h3>
      <p className={classes['card__price']}>{data.price} USD<span className={classes['card__discount']}>{data.discount}  <br />USD</span></p>
      <button onClick={selectItem} className={classNames(classes['card__button'], selected && classes['card__button_selected'])}>
        {selected ? 'Added' : 'Add to card'}
      </button>
      <button className={classes['card__like']} onClick={handleLikeButtonClick}>
        <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular} />
      </button>
    </div>
  )
}

export default ProductCard