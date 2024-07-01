import { Group, Space, Text, Image, Title } from "@mantine/core";

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
  currentDate: "Sunday",
  currentDay: "12 Dec 2023",
};

function MainInfo() {
  return (
    <>
      <div className="flex gap-4 items-center flex-wrap justify-between mx-8">
        <div className="p-4 flex flex-col">
          <Group gap={5}>
            <i className="icon-pin text-white"></i>
            <Text c="white">{weatherInfo.city}</Text>
            <i className="icon-right-arrow  text-white"></i>
          </Group>
          <Space h="md" />
          <p className="text-2xl font-medium text-white">
            {weatherInfo.currentWeatherCodtition}
          </p>
          <Space h="xl" />
          <Text c="white" size="3rem">
            {weatherInfo.currentTemperature}
          </Text>
          <Text c="white" size="xs">
            {" "}
            {weatherInfo.currentDay} | {weatherInfo.currentDate}
          </Text>
        </div>
        <Image
          radius="md"
          h={200}
          w="auto"
          fit="contain"
          src="/pictures/sun-cloud.png"
          alt="sun-cloud"
        />
      </div>
    </>
  );
}

export default MainInfo;
