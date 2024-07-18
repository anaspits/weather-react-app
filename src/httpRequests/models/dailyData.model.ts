export interface DailyData {
    date:         Date;
    temperature:  number;
    realFeel:     number;
    uvIndex:      number;
    chanceOfRain: number;
    windSpeed:    number;
    condition:    Condition;
}

export enum Condition {
    Cloudy = "Cloudy",
    Rainy = "Rainy",
    Snowy = "Snowy",
    Sunny = "Sunny",
}