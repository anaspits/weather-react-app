import { Grid } from "@mantine/core";
import MainInfoMobile from "./MainInfoMobile/MainInfoMobile";
import WeatherCarousel from "../shared/WeatherCarousel/WeatherCarousel";
import HourForecast from "../shared/HourForecast/HourForecast";


function MobileLayout() {
  return (
    <Grid justify="space-between">
      <Grid.Col span={12}><MainInfoMobile /></Grid.Col>
      <Grid.Col span={12}><div className="mx-2"><WeatherCarousel/></div></Grid.Col>
      <Grid.Col span={12} ><div className="mx-2"><HourForecast isMobile={true}/></div></Grid.Col>
    </Grid>
  );
}

export default MobileLayout;
