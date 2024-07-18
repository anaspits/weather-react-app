import { HourlyData } from "./models/hourlyData.model";
import { DateTime } from "luxon";

export const parseHourlyData = (data: HourlyData[]): { time: string, temp: number, wind: string, icon: string }[] => {
    return data.map((item: any) => {
        
        return {
        time: DateTime.fromISO(item.date).toFormat("HH:mm"),
        temp: parseInt(item.temperature),
        wind: item.windSpeed,
        icon: "cloudyNight"
        };
    });
}