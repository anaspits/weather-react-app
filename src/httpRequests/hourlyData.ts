import axios from "axios";
import { HourlyData } from "./models/hourlyData.model";

const getHourlyData  = () => {
  return axios.get<HourlyData[]>(`https://502f4630-f860-48f8-b49a-664d840c2eae.mock.pstmn.io/hourly`, {
  });
};
export default getHourlyData;
