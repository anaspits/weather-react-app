import axios from "axios";

const getDailyData  = () => {
  return axios.get(`https://502f4630-f860-48f8-b49a-664d840c2eae.mock.pstmn.io/daily`, {
  });
};
export default getDailyData;
