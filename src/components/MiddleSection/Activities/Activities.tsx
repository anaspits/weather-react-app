import { Card, Flex, Grid, Image, SimpleGrid, Text } from "@mantine/core";

import classes from "./activities.module.css";
import ActivityCard from "./ActivityCard/ActivityCard";

const activities = [
  { image: "pictures/forest1.png", distance: "2km away" },
  { image: "pictures/forest2.png", distance: "1.5km away" },
  { image: "pictures/waterslides.png", distance: "3km away" },
  { image: "pictures/beach.png", distance: "500m away" },
];

function Activities() {
  return (
      <div className="bg-white bg-opacity-20 py-4 px-10 rounded-3xl w-full">
        <Flex gap="lg" justify="center" direction="column" wrap="nowrap">
          <Flex
            gap="xs"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <i className="icon-heart text-white"></i>
            <Text c="white" size="xl">
              Activities in your area
            </Text>
          </Flex>
          <SimpleGrid cols={4}>
            {activities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} index={index} />
            ))}
          </SimpleGrid>
        </Flex>
      </div>
  );
}

export default Activities;
