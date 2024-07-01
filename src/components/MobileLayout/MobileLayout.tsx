import { Grid } from "@mantine/core";
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
