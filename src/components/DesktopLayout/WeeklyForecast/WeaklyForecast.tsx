import React from "react";
import {
  BackgroundImage,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import classes from "./CardsCarousel.module.css";
import classes1 from "./weeklyForecast.module.css";
import "@mantine/carousel/styles.css";
import WeatherCarousel from "../../shared/WeatherCarousel/WeatherCarousel";

const airConditions = [
  {
    label: "Real Feel",
    icon: "icon-temperature",
    value: "30°C",
  },
  { label: "Wind", icon: "icon-wind", value: "0.8 km/hr" },
  { label: "Chance of rain", icon: "icon-raindrop", value: "2%" },
  { label: "UV Index", icon: "icon-sun", value: "4" },
];

const timeData = { time: "8:00PM GMT" };

const WeeklyForecast = () => {
  return (
    <div className="bg-white bg-opacity-20 py-10 rounded-3xl h-full">
      <BackgroundImage
        src="pictures/vector.svg"
        className={classes1.divBackground}
      >
        <div className="px-4">
          <Flex gap="lg" justify="center" direction="column" wrap="nowrap">
            <WeatherCarousel />
            <Flex
              gap={1}
              mih={60}
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
            >
              <i className="icon-clock text-white"></i>{" "}
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
                mih={60}
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
