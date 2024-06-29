import { Card, Flex, Grid, Image, SimpleGrid, Text } from "@mantine/core";

import classes from "./activityCard.module.css";

type ActivityCardProps = {
  index: number;
  activity: { image: string; distance: string };
};

function ActivityCard({ index, activity }: ActivityCardProps) {
  return (
    <>
      <Card key={index} className={classes.card}>
        <Image
          src={activity.image}
          height={100}
          width={150}
          alt={`activity-${index}`}
        />
        <Text>{activity.distance}</Text>
      </Card>
    </>
  );
}

export default ActivityCard;
