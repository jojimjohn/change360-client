import React, { useEffect } from 'react';
import ReactFbq from 'react-fbq';

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

function Home() {
  useEffect(() => {
    ReactFbq.initialize({ id: '1248511849106047' });
    ReactFbq.pageView();
  }, []);

  return (
    <>
    {/* <PageContent title="C.H.A.N.G.E. 360">
    </PageContent> */}
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
          {/* <Plans /> */}
          {/* <Timeline /> */}
          {/* <Testimonials /> */}
          <div class="ml-form-embed" data-account="1919516:v0m2w9s2z4" data-form="5900469:a9i0l5"></div>
          {/* <Newsletter /> */}
        </main>

        {/*  Site footer */}
        <Footer />
      </div>

    </>
  );
}

export default Home;
