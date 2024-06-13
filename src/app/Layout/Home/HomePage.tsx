import React from 'react'
import Hero from './Hero/Hero'
import Benefits from './Benefits/Benefits'
import BestSellers from './BestSellers/BestSellers'
import Lenovo from '../ui/Lenovo'
import Categories from './Categories/Categories'
import Products from './Products/Products'
import Blog from './Blog/Blog'
import Partners from '../ui/Partners'
import BenefitsSlider from '../ui/BenefitsSlider'

const HomePage = () => {
  return (
   <section>
    <Hero></Hero>
    <Benefits></Benefits>
    <BestSellers></BestSellers>
    <Lenovo></Lenovo>
    <Categories></Categories>
    <Products></Products>
    <Blog></Blog>
    <Partners></Partners>
   </section>
  )
}

export default HomePage