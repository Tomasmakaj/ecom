import React from 'react'
import { Carousel } from 'react-bootstrap';
import supreme from '../../assets/supreme.jpg'
import nike from '../../assets/nike.jpg'
import cards from '../../assets/cards.jpg'
import yeezy from '../../assets/yeezy.jpg'
import ps5 from '../../assets/ps5.jpg'
import xbox from '../../assets/xbox.jpg'
import banner from '../../assets/banner.PNG'

import './Hero.css'

const Hero = () => {
  return (
    <>
    <Carousel>
    <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-item"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-item"
          src={supreme}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={nike}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={cards}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-item"
          src={yeezy}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-item"
          src={ps5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-item"
          src={xbox}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </>

  )
}

export default Hero