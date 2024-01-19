import React from 'react'
import Container from '../../layout/Container'
import second from '../../images/logo.png'
import classes from './Header.module.scss'
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { catagories } from '../../routes/catagories'
import CategoriesBlock from '../CategoriesBlock';


console.log(catagories);
const Header = () => {
  return (
    <header className={classes['header']}>
      <Container className={classes['header__container']}>
        <img className={classes['header__logo']} src={second} alt="Floristman" />
        <MdOutlineShoppingBag className={classes['header__heart']} />
        <CiHeart className={classes['header__bag']} />
      </Container>

      <Container>
        <ul className={classes['header__list']}>
          {
            catagories.map(link =>
            (
              <li>
                <a className={classes['header__link']} href={link.link}>{link.text}</a>
              </li>
            ))}
        </ul>
      </Container>
    </header >
  )
}

export default Header