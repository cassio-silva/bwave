import type { NextPage } from 'next';
import Head from 'next/head';

import "react-multi-carousel/lib/styles.css";

//Components
import { Header } from '../components/home/Header';
import { SectionCollection } from '../components/home/SectionCollection';
import { SectionFollowUs } from '../components/home/SectionFollowUs';
import { SectionProductCards } from '../components/home/SectionProductCards';
import { GlobalContainer, GlobalMain } from '../styles/ComponentGlobalStyles';

const Home: NextPage = () => {
  return (
    <GlobalContainer>
      <Head>
        <title>BWave | Home</title>
      </Head>
      <Header />
      <GlobalMain>
        <SectionCollection />
        <SectionProductCards />
      </GlobalMain>
      <SectionFollowUs />
    </GlobalContainer>
  )
}

export default Home;