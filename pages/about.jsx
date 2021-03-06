import React from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import PastINCTFSpeakers from "../src/components/about/PastSpeakers";
import INCTFJStats from "../src/components/about/Stats";
import InctfIntro from "../src/components/about/Intro";
import Footer from "../src/components/shared/Footer";

const AboutPageCoverSection = styled.div`
    background-image: ${() => `url(${require('../src/assets/images/covers/inctfj_mountains.jpg')})`};
    background-size: cover;
    background-position: center;
    min-height: 60vmin;
`;

const AboutPage = () => {

    return <Base meta={{ title: "About InCTF Jr." }}>
        <TopBar includeSpace={false} />
        <AboutPageCoverSection />
        <InctfIntro />
        <INCTFJStats />
        <PastINCTFSpeakers />
        <Footer />
    </Base>

};

export default AboutPage;