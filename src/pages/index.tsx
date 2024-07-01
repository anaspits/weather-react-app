import { useState, useEffect } from "react";
import { BackgroundImage } from "@mantine/core";
import { detectDevice } from "../ModuleHandler/ModuleHandler";

import MobileLayout from "@/components/MobileLayout/MobileLayout";
import DesktopLayout from "@/components/DesktopLayout/DesktopLayout";

type WeatherInformation = {
  city: string;
  currentWeatherCondition: string;
  currentTemperature: string;
};

const weatherInfo: WeatherInformation = {
  city: "New York",
  currentWeatherCondition: "Cloudy",
  currentTemperature: "22°C",
};

const getBackgroundImage = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return "/pictures/sun-rays-cloudy-sky.png";
    case "cloudy":
      return "/pictures/blue-sky-with-windy-clouds.png";
    case "rainy":
      return "/pictures/window-with-raindrops-it-lights.png";
    case "stormy":
      return "/pictures/light-dark-dramatic-storm-clouds.png";
    default:
      return "/pictures/sun-rays-cloudy-sky.png";
  }
};

export async function getServerSideProps({ req }: any) {
  const userAgent = req.headers["user-agent"] || "";
  const deviceType = detectDevice(userAgent);

  return {
    props: { deviceType },
  };
}

export default function Home({ deviceType }: any) {
  const { isMobile, isTablet, isDesktop } = deviceType;
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(getBackgroundImage(weatherInfo.currentWeatherCondition));
  }, [weatherInfo.currentWeatherCondition]);

  return (
    <main className="min-h-screen">
      <BackgroundImage
        src={backgroundImage}
        className="min-h-screen bg-cover bg-center"
      >
        {(isMobile || isTablet) && <MobileLayout />}

        {isDesktop && (
          <div className="min-h-screen p-14">
            <DesktopLayout />
          </div>
        )}
      </BackgroundImage>
    </main>
  );
}
