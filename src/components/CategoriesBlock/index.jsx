import React from 'react'
import Container from '../../layout/Container'
import classes from './CategoriesBlock.module.scss'
import { catagories } from '../../routes/catagories'

const CategoriesBlock = () => {
  return (
    <Container className={classes['categories']}>
      {
        catagories.map(category => (
          <div className={classes['categories__item']}>
            <img className={classes['categories__img']} src={category.image} alt={category.text} />
            <a className={classes['categories__button']} href={category.link}>{category.text}</a>
          </div>
        ))
      }
    </Container>
  )
}

export default CategoriesBlock