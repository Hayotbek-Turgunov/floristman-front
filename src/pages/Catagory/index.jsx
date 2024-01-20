import React from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'

const Category = () => {
  const { type } = useParams()
  console.log(type);
  return (
    <Header />
  )
}

export default Category