import "./weatherCarousel.module.css";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { Text, useMantineTheme } from "@mantine/core";
import classes from "./weatherCarousel.module.css";

const data = [
  { day: "FRI", icon: "icon-rain", temp: "26°C" },
  { day: "SAT", icon: "icon-sun", temp: "22°C" },
  { day: "SUN", icon: "icon-cloud-sun", temp: "26°C" },
  { day: "MON", icon: "icon-rain-sun", temp: "20°C" },
  { day: "TUE", icon: "icon-storm", temp: "18°C" },
];

const WeatherCarousel = () => {
  const theme = useMantineTheme();

  return (
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
            backgroundColor: "transparent",
            border: "none",
            color: "#FFCC21",
            boxShadow: "none",
          },
          indicator: {
            backgroundColor: "transparent",
            "&[data-active]": { backgroundColor: theme.colors.yellow[4] },
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
  );
};

export default WeatherCarousel;
