import { Grid } from "@mantine/core";
import MainInfo from "./MainInfo/MainInfo";
import MiddleSection from "../MiddleSection/MiddleSection";
import WeeklyForecast from "./WeeklyForecast/WeaklyForecast";
import Menu from "../Menu/Menu";


function DesktopLayout() {
  return (
<Grid justify="space-between">
      <Grid.Col span={12}><MainInfo /></Grid.Col>
      <Grid.Col span={1}><Menu /></Grid.Col>
      <Grid.Col span={8} ><MiddleSection /></Grid.Col>
      <Grid.Col span={3} ><WeeklyForecast/></Grid.Col>
    </Grid>
  );
}

export default DesktopLayout;
