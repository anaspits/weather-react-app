import { Button, Flex, Group, Space, Text, Image, Title } from "@mantine/core";

type WeatherInformation = {
  city: string;
  currentWeatherCodtition: string;
  currentTemperature: string;
  currentDate: string;
  currentDay: string;
};

type WeatherInformationProps = {
  weatherInfo: React.Dispatch<React.SetStateAction<WeatherInformation>>;
}; /* todo */

const weatherInfo: WeatherInformation = {
  city: "New York",
  currentWeatherCodtition: "Cloudy",
  currentTemperature: "22°C",
  currentDate: "Synday",
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
        {/*  <Button   styles={{
        root: { backgroundColor: 'red' },
        label: { color: 'blue' },
        inner: { fontSize: 20 },
      }}>Button 5</Button> */}
        <Image
          radius="md"
          h={200}
          w="auto"
          fit="contain"
          src="/pictures/sun-cloud.png"
          alt="sun-cloud"
        />
      </div>
      {/* <div className="p-4 text-white">
      <div className="flex items-center space-x-2">
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>New York</span>
      </div>
      <h1 className="text-5xl font-bold">26°C</h1>
      <p className="text-2xl">Sunny</p>
      <p>Sunday | 12 Dec 2023</p>
    </div> */}
    </>
  );
}

export default MainInfo;
