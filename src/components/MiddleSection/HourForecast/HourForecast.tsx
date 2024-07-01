import {
  Button,
  Flex,
  Text,
} from "@mantine/core";

import classes from "./hourForecast.module.css";
import WeatherChart from "./WeatherChart/WeatherChart";


function HourForecast() {
  return (
    <div className="bg-white bg-opacity-20 pt-4 px-3 md:px-10 rounded-3xl w-full">
      <Flex gap="lg" justify="center" direction="column" wrap="nowrap">
        <Flex
          gap="xs"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <i className="icon-clock text-white"></i>
          <Text c="white" size="sm">
            24-hour forecast
          </Text>
        </Flex>
        <WeatherChart />
        <span className="lg:hidden text-center mb-4 lg:mb-0">
          <Button
            styles={{
              root: { backgroundColor: "#EACA8F", borderRadius: 20 },
              label: { color: "white" },
              inner: { fontSize: 15 },
            }}
          >
            5-dour forecast
          </Button>
        </span>
      </Flex>
    </div>
  );
}

export default HourForecast;
