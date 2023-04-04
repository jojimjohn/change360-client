import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Plans from '../partials/Plans';
import Timeline from '../partials/Timeline';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

import PageContent from '../components/PageContent';

function Home() {
  return (
    <>
    <MainNavigation />
    <PageContent title="C.H.A.N.G.E. 360">
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="grow">
          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          {/*  Page sections */}
          <HeroHome />
          <FeaturesBlocks />
          <FeaturesZigZag />
          <Plans />
          <Timeline />
          {/* <Testimonials /> */}
          <Newsletter />
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </PageContent>
    </>
  );
}

export default Home;
