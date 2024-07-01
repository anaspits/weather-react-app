//import weatherInfo from "@/utils/mock-data";
import {
  Group,
  Space,
  Text,
  Image,
  Grid,
  Avatar,
  Center,
  Flex,
} from "@mantine/core";
import classes from "./activities.module.css";

type WeatherInformation = {
  city: string;
  currentWeatherCodtition: string;
  currentTemperature: string;
  currentDate: string;
  currentDay: string;
};

const weatherInfo: WeatherInformation = {
  city: "New York",
  currentWeatherCodtition: "Cloudy",
  currentTemperature: "22°C",
  currentDate: "Synday",
  currentDay: "12 Dec 2023",
};

function MainInfoMobile() {
  return (
    <div className="py-1 px-1 w-full">
      <div className="p-4 flex flex-col items-center">
        <Grid justify="space-between">
          <Grid.Col span={6}>
            <Group gap={5}>
              <i className="icon-pin text-white"></i>
              <Text c="white">{weatherInfo.city}</Text>
              <i className="icon-right-arrow  text-white"></i>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Flex justify="flex-end">
              <Avatar src="/pictures/user1.png" radius="xl" size="sm" />
            </Flex>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text c="white" size="md" ta="center">
              {weatherInfo.currentWeatherCodtition}
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Flex justify="center">
              <Image
                radius="md"
                h={200}
                w="auto"
                fit="contain"
                src="/pictures/sun-cloud.png"
                alt="sun-cloud"
              />
            </Flex>
          </Grid.Col>
          <Grid.Col span={12}>
          <Text c="white" size="3rem" ta="center">
          {weatherInfo.currentTemperature}
        </Text>
          </Grid.Col>
          <Grid.Col span={12}>
          <Text c="white" size="xs" ta="center">
          {weatherInfo.currentDay} | {weatherInfo.currentDate}
        </Text>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}

export default MainInfoMobile;
