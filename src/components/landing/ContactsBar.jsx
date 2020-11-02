import React from 'react';
import styled from "@emotion/styled";


const ContactsBarSection = styled.section`
    padding: 5vh 3vw;
    background: #222640;
    color: white;
    img {
      max-height: 64px;
      margin-right: 8px;
    }
    .social-bar {
        img {
          max-height: 45px;
        }
    }
`;

const LandingContactsBar = () => {

    return <ContactsBarSection>
        <div className="row mx-0">
            <div className="col-md-4 p-2 d-flex align-items-center justify-content-md-center">
                <img src={require('../../assets/images/icons/email.png')} />
                <div>
                    <div>FOR GENERAL ENQUIRES</div>
                    <h5>inctfj@am.amrita.edu</h5>
                </div>
            </div>
            <div className="col-md-4 p-2 d-flex align-items-center justify-content-md-center">
                <img src={require('../../assets/images/icons/whatsapp.png')} />
                <div>
                    <div>CHAT THROUGH WHATSAPP</div>
                    <h5>(+91) 8129 42 6557</h5>
                </div>
            </div>
            <div className="col-md-4 p-2 mb-2 d-flex align-items-center justify-content-md-center">
                <img src={require('../../assets/images/icons/telephone.png')} />
                <div>
                    <div>ANYTHING ELSE? RING US UP.</div>
                    <h5>0476 280 4525</h5>
                </div>
            </div>
            <div className="col-md-8 text-center text-md-left h-100 d-flex align-items-center pt-4 px-2">
                 <div>&copy; Amrita InCTF 2017-2020. All Rights Reserved.</div>
            </div>
            <div className="social-bar col-md-4 d-flex align-items-center justify-content-md-end justify-content-center p-2">
                <a target="_blank" href="https://www.instagram.com/juniorinctf/"><img src={require('../../assets/images/icons/instagram.png')} /></a>
                <a target="_blank" href="https://twitter.com/InCTFj"><img src={require('../../assets/images/icons/facebook.png')} /></a>
                <a target="_blank" href="https://www.facebook.com/InCTFj/"><img src={require('../../assets/images/icons/twitter.png')} /></a>
                <a href="#"><img src={require('../../assets/images/icons/play_button.png')} /></a>
            </div>
        </div>
    </ContactsBarSection>

};

export default LandingContactsBar;
