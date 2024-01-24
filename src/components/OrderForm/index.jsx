import React, { useState } from 'react'
import Container from '../../layout/Container'
import classes from './OrderForm.module.scss'
import image from '../../images/OrderForm.jpg'

const OrderForm = () => {

  const initialData = {
    name: '',
    text: '',
    tel: ''
  }

  const [fields, setFields] = useState({})


  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const handleSumbit = (e) => {
    e.preventDefault()
    setFields(initialData)
  }

  return (
    <Container className={classes['order-form']}>
      <h2 className={classes['order-form__title']}>Order A unique Basket!</h2>
      <form className={classes['order-form__form']}>
        <div className={classes['order-form__fields']}>
          <input name='name' value={fields.name} onChange={handleChange} className={classes['order-form__input']} type="text" placeholder='Name' />
          <input name='tel' value={fields.tel} onChange={handleChange} className={classes['order-form__input']} type="tel" placeholder='Phone Number' />
          <textarea name='text' value={fields.text} onChange={handleChange} className={classes['order-form__textarea']} placeholder='Your Ideas'></textarea>
          <button onClick={handleSumbit} className={classes['order-form__button']}>Send</button>
        </div>
        <img className={classes['order-form__img']} src={image} alt="" />
      </form>
    </Container>
  )
}

export default OrderForm