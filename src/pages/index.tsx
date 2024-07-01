import { useState, useEffect } from "react";
import MainInfo from "@/components/MainInfo/MainInfo";
import Menu from "@/components/Menu/Menu";
import { SimpleGrid, BackgroundImage, Button, Grid, Group, rem, Flex } from "@mantine/core";
import MiddleSection from "@/components/MiddleSection/MiddleSection";
import WeeklyForecast from "@/components/WeeklyForecast/WeaklyForecast";
import { parse } from "next-useragent";
import MobileLayout from "@/components/MobileLayout/MobileLayout";

type WeatherInformation = {
  city: string;
  currentWeatherCondition: string;
  currentTemperature: string;
};

const weatherInfo: WeatherInformation = {
  city: "New York",
  currentWeatherCondition: "Cloudy",
  currentTemperature: "22°C",
};

const getBackgroundImage = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return "/sun-rays-cloudy-sky.png";
    case "cloudy":
      return "/blue-sky-with-windy-clouds.png";
    case "rainy":
      return "/window-with-raindrops-it-lights.png";
    case "stormy":
      return "/light-dark-dramatic-storm-clouds.png";
    default:
      return "/sun-rays-cloudy-sky.png";
  }
};

export function detectDevice(userAgent: any) {
  const ua = parse(userAgent);
  return {
    isMobile: ua.isMobile,
    isTablet: ua.isTablet,
    isDesktop: !ua.isMobile && !ua.isTablet,
  };
}

export async function getServerSideProps({ req }: any) {
  const userAgent = req.headers['user-agent'] || '';
  const deviceType = detectDevice(userAgent);

  return {
    props: { deviceType },
  };
}

export default function Home({ deviceType }: any) {
  const { isMobile, isTablet, isDesktop } = deviceType;
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(getBackgroundImage(weatherInfo.currentWeatherCondition));
  }, [weatherInfo.currentWeatherCondition]);

  
  return (
    <main className="min-h-screen">
      <BackgroundImage
        src={backgroundImage}
        className="min-h-screen bg-cover bg-center"
      >
        <div>
      {isMobile && <MobileLayout />}

    </div>

         {(isDesktop || isTablet) &&  <div className="min-h-screen p-14">
{/*           <MainInfo />
          <span className="hidden md:flex">
          <Menu />
          </span>
<Activities /> */}

<Grid justify="space-between">
      <Grid.Col span={12}><MainInfo /></Grid.Col>
      <Grid.Col span={1}><Menu /></Grid.Col>
      <Grid.Col span={8} ><MiddleSection /></Grid.Col>
      <Grid.Col span={3} ><WeeklyForecast /></Grid.Col>
    </Grid>
                    {/* Group */}
{/*           <Group justify="space-between" className="px-10">
          <Button >Button 1</Button> 
          <Button >Button 2</Button> 
          </Group>  */}

          {/* Grid */}
{/*           <Grid justify="space-between" align="stretch" className="p-10">
            <Grid.Col span={2} style={{ minHeight: rem(80) }}>
            <Button >Button 3</Button> 
            </Grid.Col>
            <Grid.Col span={2}>
            <Button >Button 4</Button> 
            </Grid.Col>
          </Grid> 

          <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid> */}

          {/* Flex */}
{/*            <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="xl"
            align="center"
            direction="row"
            wrap="wrap"
            justify="space-between"
          >
            <MainInfo></MainInfo>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Flex>  */}

{/*           <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 5 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">1</div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">2</div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">3</div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">4</div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">5</div>
          </SimpleGrid> */}
        </div>
        }
                    {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>
        <i className="icon-heart"></i>
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
      </BackgroundImage>
    </main>
  );
}
