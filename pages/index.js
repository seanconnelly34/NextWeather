import Head from 'next/head'
import TodayForecast from "../components/TodayForecast";
import Header from "../containers/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name='Weather App, Find Weather'
          content='Find weather with this amazing weather selection app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <TodayForecast />
    </div>
  );
}
