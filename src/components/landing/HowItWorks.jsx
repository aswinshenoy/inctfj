import React from 'react';
import styled from "@emotion/styled";

const HowItWorksSection = styled.section`
  text-align: center;
  img {
     max-height: 90px;
     max-width: 100%;
     box-shadow: none!important;
     padding: 0;
     margin-bottom: 10px;
  }
  h3 {
      text-transform: uppercase;
      font-weight: 900;
      img {
        box-shadow: none!important;
      }
  }
  p {
    font-size: 14px;
  } 
`;


const LandingHowItWorks = () => {

    return <HowItWorksSection className="motto-cards row py-5 mx-0">
        <div className="col-12 d-flex p-0 mb-4">
            <h1 className="px-md-4 px-2 py-2 rounded-right mt-4 mb-2 d-inline-block bg-primary text-light text-uppercase shadow font-weight-bold text-center mb-0">
                <img src={require('../../assets/images/icons/thinking.png')} className="mr-2 my-0 p-0 shadow-none" />
                How it Works?
            </h1>
        </div>
        <div className="col-md-4 px-3">
            <div className="row mx-0">
                <div className="col-md-12 d-flex align-items-center justify-content-center col-3 p-1 p-md-0">
                    <img src={require('../../assets/images/icons/learn.png')} />
                </div>
                <div className="col-md-12 col-9 text-left text-md-center p-2 p-md-0">
                    <h3>Learn</h3>
                </div>
                <div className="col-12 text-left text-md-center">
                    <p>
                        Students are introduced to cyber security space through
                        sessions conducted by team bi0s, and through lightening talks
                        given by expert speakers at the event. Resources to learn
                        hacking and personal mentors are also assigned.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 px-3">
            <div className="row mx-0">
                <div className="col-md-12 order-2 order-md-1 d-flex align-items-center justify-content-center col-3 p-1 p-md-0">
                    <img src={require('../../assets/images/icons/hack.png')} />
                </div>
                <div className="col-md-12 col-9 order-1 order-md-2 text-right text-md-center p-2 p-md-0">
                    <h3>Hack</h3>
                </div>
                <div className="col-12 order-3 text-right text-md-center">
                    <p>
                        Students now participate in real Capture The Flag contest,
                        a gamified approach to learning cyber-security and try to
                        collect as many flags solving each cyber security challenge.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 px-3">
            <div className="row mx-0">
                <div className="col-md-12 d-flex align-items-center justify-content-center col-3 p-1 p-md-0">
                    <img src={require('../../assets/images/icons/win.png')} />
                </div>
                <div className="col-md-12 col-9 text-left text-md-center p-2 p-md-0">
                    <h3>Win</h3>
                </div>
                <div className="col-12 text-left text-md-center">
                    <p>
                        Students finishing at top of the CTF leaderboard are awarded
                        from a total cash prize pool of Rs. 1 Lakhs, and they also
                        invited to exclusive cyber-security training following the contest.
                        All other participants also receive certificates, and goodies.
                    </p>
                </div>
            </div>
        </div>
    </HowItWorksSection>

};

export default LandingHowItWorks;