import { DailyData } from "./models/dailyData.model";
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

    export const parseDailyData = (data: DailyData[]):{ day: string, icon: string, temp: string }[] => {
        return data.map((item: any) => {
            
            return {
                day: DateTime.fromISO(item.date).toFormat("EEE").toUpperCase(),
                temp: item.temperature + '°C',
                icon: "icon-rain"
            };
        });
}