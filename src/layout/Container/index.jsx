import React from 'react'
import classes from './Container.module.scss'
import classNames from 'classnames'

const Container = ({ children, className }) => {
  return (
    <div className={classNames(classes['container'], className)} >{children}</div>
  )
}

export default Container