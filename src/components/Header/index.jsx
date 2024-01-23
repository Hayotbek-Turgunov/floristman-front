import React from 'react'
import Container from '../../layout/Container'
import second from '../../images/logo.png'
import classes from './Header.module.scss'
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { catagories } from '../../routes/catagories'
import CategoriesBlock from '../CategoriesBlock';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';


const Header = () => {

  const location = useLocation();

  return (
    <header className={classes['header']}>
      <Container className={classes['header__container']}>
        <Link className={classes['header__logo']} to={'/'}>
          <img src={second} alt="Floristman" />
        </Link>
        <MdOutlineShoppingBag className={classes['header__heart']} />
        <CiHeart className={classes['header__bag']} />
      </Container>

      <Container>
        <ul className={classes['header__list']}>
          {
            catagories.map(link =>
            (
              <li key={link.text}>
                <Link className={classNames(classes['header__link'], location.pathname === link ? classes['header__link_active'] : '')} to={link.link}>{link.text}</Link>
              </li>
            ))}
        </ul>
      </Container>
    </header >
  )
}

export default Header