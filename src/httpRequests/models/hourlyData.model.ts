export interface HourlyData {
    date:         string;
    temperature:  number;
    realFeel:     number;
    uvIndex:      number;
    chanceOfRain: number;
    windSpeed:    number;
    condition:    string;
}

export const MockHourlyData: HourlyData[] = [
    {
        "date": "2024-07-12T11:48:19.013Z",
        "temperature": 28,
        "realFeel": 27,
        "uvIndex": 9,
        "chanceOfRain": 42,
        "windSpeed": 16,
        "condition": "Cloudy"
    },
    {
        "date": "2024-07-12T10:48:19.013Z",
        "temperature": 18,
        "realFeel": 18,
        "uvIndex": 7,
        "chanceOfRain": 11,
        "windSpeed": 23,
        "condition": "Sunny"
    },
    {
        "date": "2024-07-12T09:48:19.013Z",
        "temperature": 25,
        "realFeel": 26,
        "uvIndex": 9,
        "chanceOfRain": 8,
        "windSpeed": 21,
        "condition": "Sunny"
    },
    {
        "date": "2024-07-12T08:48:19.013Z",
        "temperature": 28,
        "realFeel": 28,
        "uvIndex": 6,
        "chanceOfRain": 71,
        "windSpeed": 12,
        "condition": "Rainy"
    },
    {
        "date": "2024-07-12T07:48:19.013Z",
        "temperature": 19,
        "realFeel": 19,
        "uvIndex": 1,
        "chanceOfRain": 78,
        "windSpeed": 6,
        "condition": "Snowy"
    },
    {
        "date": "2024-07-12T06:48:19.013Z",
        "temperature": 17,
        "realFeel": 19,
        "uvIndex": 7,
        "chanceOfRain": 90,
        "windSpeed": 6,
        "condition": "Sunny"
    },
    {
        "date": "2024-07-12T05:48:19.013Z",
        "temperature": 13,
        "realFeel": 13,
        "uvIndex": 4,
        "chanceOfRain": 5,
        "windSpeed": 8,
        "condition": "Snowy"
    },
    {
        "date": "2024-07-12T04:48:19.013Z",
        "temperature": 20,
        "realFeel": 18,
        "uvIndex": 7,
        "chanceOfRain": 79,
        "windSpeed": 5,
        "condition": "Cloudy"
    },
    {
        "date": "2024-07-12T03:48:19.013Z",
        "temperature": 28,
        "realFeel": 26,
        "uvIndex": 7,
        "chanceOfRain": 76,
        "windSpeed": 14,
        "condition": "Sunny"
    },
    {
        "date": "2024-07-12T02:48:19.013Z",
        "temperature": 26,
        "realFeel": 28,
        "uvIndex": 6,
        "chanceOfRain": 49,
        "windSpeed": 9,
        "condition": "Cloudy"
    },
    {
        "date": "2024-07-12T01:48:19.013Z",
        "temperature": 24,
        "realFeel": 26,
        "uvIndex": 3,
        "chanceOfRain": 10,
        "windSpeed": 22,
        "condition": "Rainy"
    },
    {
        "date": "2024-07-12T00:48:19.013Z",
        "temperature": 39,
        "realFeel": 38,
        "uvIndex": 3,
        "chanceOfRain": 74,
        "windSpeed": 22,
        "condition": "Sunny"
    },
    {
        "date": "2024-07-11T23:48:19.013Z",
        "temperature": 31,
        "realFeel": 31,
        "uvIndex": 4,
        "chanceOfRain": 57,
        "windSpeed": 6,
        "condition": "Sunny"
    },
    {
        "date": "2024-07-11T22:48:19.013Z",
        "temperature": 25,
        "realFeel": 25,
        "uvIndex": 10,
        "chanceOfRain": 55,
        "windSpeed": 22,
        "condition": "Sunny"
    },
    {
        "date": "2024-07-11T21:48:19.013Z",
        "temperature": 32,
        "realFeel": 31,
        "uvIndex": 1,
        "chanceOfRain": 14,
        "windSpeed": 23,
        "condition": "Rainy"
    },
    {
        "date": "2024-07-11T20:48:19.013Z",
        "temperature": 22,
        "realFeel": 24,
        "uvIndex": 8,
        "chanceOfRain": 22,
        "windSpeed": 18,
        "condition": "Rainy"
    },
    {
        "date": "2024-07-11T19:48:19.013Z",
        "temperature": 39,
        "realFeel": 39,
        "uvIndex": 5,
        "chanceOfRain": 56,
        "windSpeed": 10,
        "condition": "Cloudy"
    },
    {
        "date": "2024-07-11T18:48:19.013Z",
        "temperature": 38,
        "realFeel": 38,
        "uvIndex": 10,
        "chanceOfRain": 86,
        "windSpeed": 6,
        "condition": "Snowy"
    },
    {
        "date": "2024-07-11T17:48:19.013Z",
        "temperature": 34,
        "realFeel": 35,
        "uvIndex": 1,
        "chanceOfRain": 33,
        "windSpeed": 19,
        "condition": "Sunny"
    },
    {
        "date": "2024-07-11T16:48:19.013Z",
        "temperature": 34,
        "realFeel": 33,
        "uvIndex": 6,
        "chanceOfRain": 86,
        "windSpeed": 8,
        "condition": "Rainy"
    },
    {
        "date": "2024-07-11T15:48:19.013Z",
        "temperature": 14,
        "realFeel": 16,
        "uvIndex": 9,
        "chanceOfRain": 56,
        "windSpeed": 16,
        "condition": "Rainy"
    },
    {
        "date": "2024-07-11T14:48:19.013Z",
        "temperature": 37,
        "realFeel": 37,
        "uvIndex": 3,
        "chanceOfRain": 8,
        "windSpeed": 22,
        "condition": "Rainy"
    },
    {
        "date": "2024-07-11T13:48:19.013Z",
        "temperature": 23,
        "realFeel": 25,
        "uvIndex": 0,
        "chanceOfRain": 53,
        "windSpeed": 22,
        "condition": "Snowy"
    },
    {
        "date": "2024-07-11T12:48:19.013Z",
        "temperature": 14,
        "realFeel": 12,
        "uvIndex": 4,
        "chanceOfRain": 28,
        "windSpeed": 6,
        "condition": "Snowy"
    }
]