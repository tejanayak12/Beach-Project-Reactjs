import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title={'Luxurious Rooms'} subtitle={"Deluxe Rooms Starting From ₹1800"}>
          <Link to={"/rooms"} className='btn-primary'>
            Our-Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  )
}

export default Home