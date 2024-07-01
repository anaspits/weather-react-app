import { Card, Flex, Grid, Image, SimpleGrid, Text } from "@mantine/core";

import classes from "./middleSection.module.css";
import Activities from "./Activities/Activities";
import HourForecast from "./HourForecast/HourForecast";

function MiddleSection() {
  return (
    <Flex
      gap="xl"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <Activities />
      <HourForecast />
    </Flex>
  );
}

export default MiddleSection;
