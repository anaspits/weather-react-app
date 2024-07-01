//import weatherInfo from "@/utils/mock-data";
import { Grid, Menu } from "@mantine/core";
import MainInfo from "../MainInfo/MainInfo";
import MiddleSection from "../MiddleSection/MiddleSection";
import WeeklyForecast from "../WeeklyForecast/WeaklyForecast";
import classes from "./activities.module.css";
import MainInfoMobile from "./MainInfoMobile/MainInfoMobile";
import WeatherCarousel from "../WeeklyForecast/WeatherCarousel/WeatherCarousel";
import HourForecast from "../MiddleSection/HourForecast/HourForecast";


function MobileLayout() {
  return (
    <Grid justify="space-between">
      <Grid.Col span={12}><MainInfoMobile /></Grid.Col>
      <Grid.Col span={12}><div className="mx-2"><WeatherCarousel/></div></Grid.Col>
      <Grid.Col span={12} ><div className="mx-2"><HourForecast/></div></Grid.Col>
    </Grid>
  );
}

export default MobileLayout;
