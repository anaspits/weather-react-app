//import weatherInfo from "@/utils/mock-data";
import { Grid, Menu } from "@mantine/core";
import MainInfo from "../MainInfo/MainInfo";
import MiddleSection from "../MiddleSection/MiddleSection";
import WeeklyForecast from "../WeeklyForecast/WeaklyForecast";
import classes from "./activities.module.css";
import MainInfoMobile from "./MainInfoMobile/MainInfoMobile";


function MobileLayout() {
  return (
    <Grid justify="space-between">
      <Grid.Col span={12}><MainInfoMobile /></Grid.Col>
      <Grid.Col span={1}></Grid.Col>
      <Grid.Col span={8} ></Grid.Col>
      <Grid.Col span={3} ></Grid.Col>
    </Grid>
  );
}

export default MobileLayout;
