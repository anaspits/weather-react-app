/* import React from 'react';
import { Carousel } from '@mantine/carousel';
import { useMantineTheme } from '@mantine/core';
import './weatherCarousel.module.css';

const items = [
  { day: 'FRI', icon: '/path/to/icon1.svg' },
  { day: 'SAT', icon: '/path/to/icon2.svg' },
  { day: 'SUN', icon: '/path/to/icon3.svg' },
  { day: 'MON', icon: '/path/to/icon4.svg' },
  { day: 'TUES', icon: '/path/to/icon5.svg' },
];

const CustomCarousel = () => {
  const theme = useMantineTheme();

  return (
    <Carousel
      slideSize="20%"
      slideGap="md"
      loop
      align="center"
      withControls
      controlSize={30}
      nextControlIcon={<span style={{ color: '#FFCC21'}}><i className='icon-arrow-right'></i></span>}
      previousControlIcon={<span style={{ color: '#FFCC21' }}>‹</span>}
      classNames={{
        control: 'custom-control',
      }}
    >
      {items.map((item, index) => (
        <Carousel.Slide key={index} className="carousel-slide">
          <div className="carousel-item">
            <img src={item.icon} alt={item.day} className="icon" />
            <p className="day">{item.day}</p>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CustomCarousel; */

import './weatherCarousel.module.css';
 import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Paper, Text, useMantineTheme } from '@mantine/core';
//import { IconSun, IconCloudRain, IconCloudSnow, IconCloud, IconStorm } from '@tabler/icons-react';
import Image from 'next/image';
import  classes from './weatherCarousel.module.css';

const data = [
  { day: "Fri", icon: "icon-rain", temp: "26°C" },
  { day: "Sat", icon: "icon-sun", temp: "22°C" },
  { day: "Sun", icon: "icon-cloud-sun", temp: "26°C" },
  { day: "Mon", icon: "icon-rain-sun", temp: "20°C" },
  { day: "Tue", icon: "icon-storm", temp: "18°C" },
];

const WeatherCarousel = () => {
  const theme = useMantineTheme();

  return (

    <>
      <Carousel
      slideSize="20%"
      slideGap="md"
      align="start"
      loop
      classNames={{
        control: classes.customControl,
      }}
      styles={{
        control: {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#FFCC21',
          boxShadow: 'none',
        },
        indicator: {
          backgroundColor: 'transparent',
          '&[data-active]': { backgroundColor: theme.colors.yellow[4] },
        },
      }}
    >
      {data.map((item, index) => (
        <Carousel.Slide key={index}>
          <div className={classes[`carouselItem${index}`]}>
            <Text c="white">{item.day}</Text>
            <i className={item.icon}></i>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
    
{/*     <Carousel
      withIndicators
      slideSize="20%"
      slideGap="md"
      align="start"
      loop
      previousControlIcon={<span style={{ color: '#FFCC21' }}>‹</span>}
      classNames={{
        control: 'customControl',
      }}
      styles={{
        control: {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#FFCC21',
        },
        indicator: {
          backgroundColor: 'transparent',
          '&[data-active]': { backgroundColor: theme.colors.yellow[4] },
        },
      }}
    >
        {data.map((item, index) => (
          <Carousel.Slide key={index}>
            <div className="text-center">
              <Text c='white'>{item.day}</Text>
              <i className={`${item.icon}`}></i>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel> */}
      </>
  );
};

export default WeatherCarousel;
 