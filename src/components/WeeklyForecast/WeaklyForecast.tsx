// src/components/WeeklyForecast.tsx
import React from "react";
import {
  BackgroundImage,
  Card,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./CardsCarousel.module.css";
import classes1 from "./weeklyForecast.module.css";
import "@mantine/carousel/styles.css";

const weeklyData = [
  { day: "Fri", icon: "icon-sun", temp: "26°C" },
  { day: "Sat", icon: "icon-cloud", temp: "22°C" },
  { day: "Sun", icon: "icon-sun", temp: "26°C" },
  { day: "Mon", icon: "icon-rain", temp: "20°C" },
  { day: "Tue", icon: "icon-cloud", temp: "18°C" },
];

const airConditions = [
  {
    label: "Real Feel",
    icon: "icon-temperature",
    value: "30°C",
  } /* TODO add icon */,
  { label: "Wind", icon: "icon-wind", value: "0.8 km/hr" },
  { label: "Chance of rain", icon: "icon-raindrop", value: "2%" },
  { label: "UV Index", icon: "icon-sun", value: "4" },
];

const timeData = { time: "8:00PM GMT" };

const WeeklyForecast: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-20 py-10 rounded-3xl">
      <BackgroundImage
        src="pictures/vector.svg"
        className={classes1.divBackground}
      >
        <div className="px-4">
          <Flex gap="lg" justify="center" direction="column" wrap="nowrap">
            <Carousel
              height="fit-content"
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              align="start"
              slidesToScroll={1}
            >
              {weeklyData.map((item, index) => (
                <Carousel.Slide key={index}>
                  <Flex
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="column"
                    mih={50}
                  >
                    <Text c="white" size="lg">
                      {item.day}
                    </Text>
                    <i
                      className={`${item.icon} text-white text-xl`}
                    ></i>
                  </Flex>
                </Carousel.Slide>
              ))}

              {/*       <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide> */}
              {/* ...other slides */}
            </Carousel>

            <Flex
              gap={1}
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
            >
              <i className="icon-heart text-white"></i>{" "}
              {/* todo add clock icon */}
              <Text c="white" size="sm">
                {timeData.time}
              </Text>
            </Flex>
            <Text c="white" size="md" fw={500}>
              AIR CONDITIONS
            </Text>
            {airConditions.map((condition, index) => (
              <Flex
                key={index}
                mih={50}
                justify="center"
                align="start"
                direction="column"
                wrap="wrap"
              >
                <Group gap="xs">
                  <i className={`${condition.icon} text-lg`}></i>
                  <Text size="xs" c="white">
                    {condition.label}
                  </Text>
                </Group>
                <Text size="md" c="white">
                  <span className="pl-8">{condition.value}</span>
                </Text>
              </Flex>
            ))}
          </Flex>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default WeeklyForecast;
