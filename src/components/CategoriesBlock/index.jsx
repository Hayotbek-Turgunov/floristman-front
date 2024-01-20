import React from 'react'
import Container from '../../layout/Container'
import classes from './CategoriesBlock.module.scss'
import { catagories } from '../../routes/catagories'
import { Link } from 'react-router-dom'

const CategoriesBlock = () => {
  return (
    <Container className={classes['categories']}>
      {
        catagories.map(category => (
          <div key={catagories.text} className={classes['categories__item']}>
            <img className={classes['categories__img']} src={category.image} alt={category.text} />
            <Link to={category.link} className={classes['categories__button']}>{category.text}</Link>
          </div>
        ))
      }
    </Container>
  )
}

export default CategoriesBlock