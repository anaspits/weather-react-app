export interface DailyData {
    date:         string;
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

export const MockDailyData: DailyData[] = [
    {
        "date": "2024-07-12T11:53:16.187Z",
        "temperature": 34,
        "realFeel": 33,
        "uvIndex": 2,
        "chanceOfRain": 53,
        "windSpeed": 24,
        "condition": Condition.Cloudy
    },
    {
        "date": "2024-07-13T11:53:16.187Z",
        "temperature": 33,
        "realFeel": 31,
        "uvIndex": 6,
        "chanceOfRain": 29,
        "windSpeed": 14,
        "condition": Condition.Cloudy
    },
    {
        "date": "2024-07-14T11:53:16.187Z",
        "temperature": 11,
        "realFeel": 11,
        "uvIndex": 10,
        "chanceOfRain": 44,
        "windSpeed": 5,
        "condition": Condition.Sunny
    },
    {
        "date": "2024-07-15T11:53:16.187Z",
        "temperature": 28,
        "realFeel": 30,
        "uvIndex": 7,
        "chanceOfRain": 59,
        "windSpeed": 24,
        "condition": Condition.Sunny
    },
    {
        "date": "2024-07-16T11:53:16.187Z",
        "temperature": 33,
        "realFeel": 31,
        "uvIndex": 1,
        "chanceOfRain": 43,
        "windSpeed": 15,
        "condition": Condition.Sunny
    },
    {
        "date": "2024-07-17T11:53:16.187Z",
        "temperature": 37,
        "realFeel": 39,
        "uvIndex": 5,
        "chanceOfRain": 18,
        "windSpeed": 5,
        "condition": Condition.Sunny
    },
    {
        "date": "2024-07-18T11:53:16.187Z",
        "temperature": 29,
        "realFeel": 28,
        "uvIndex": 8,
        "chanceOfRain": 66,
        "windSpeed": 14,
        "condition": Condition.Snowy
    }
]