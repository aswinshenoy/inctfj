import React, {useState} from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import leaderboard19 from '../src/data/hall-of-fame/2019';
import leaderboard20 from '../src/data/hall-of-fame/2020';
import schoolRank20 from '../src/data/school-rankings/20'


import YearlyLeaderboard from "../src/components/HallOfFame/YearlyLeaderboard";

const Header = styled.section`
    min-height: 50vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
       color: white;
    }
    p {
      color: #AAA;
    }
`;

const PageWrap = styled.div`
    background: rgb(32, 32, 48);
    min-height: 50vh;
    color: #eee;
`;

const TabButton = styled.button`
      padding: 0.5rem 1rem;
      font-size: 24px;
      background: none;
      border: none;
      font-weight: 600;
      color: ${({isActive}) => isActive ? `#fd7e14` : '#eee'};
      &:hover, &:focus {
        outline: none!important;
      }
`;

const HallOfFame = () => {

    const [year, setYear] = useState(2020);

    const editions = [
        { "year": 2020, leaderboard: leaderboard20, schools: schoolRank20 },
        { "year": 2019, leaderboard: leaderboard19 },
        { "year": 2018, leaderboard: [] },
        { "year": 2017, leaderboard: [] },
        { "year": 2016, leaderboard: [] }
    ]

    return <Base meta={{ title: "Hall of Fame" }}>
        <TopBar darkenOnSidebar includeSpace={false} />
        <Header>
            <div className="mt-5">
                <h1>Hall of Fame</h1>
                <p>Honouring past participants of InCTF Junior</p>
            </div>
        </Header>
        <PageWrap>
            <div style={{ background: `rgba(0,0,30,0.5)` }} className="d-flex align-items-center">
                <div className="container-lg p-2">
                    {editions.map((y) =>
                        <TabButton isActive={y.year===year} onClick={() => setYear(y.year)}>{y.year}</TabButton>
                    )}
                </div>
            </div>
            <div className="container-lg px-1 py-5">
                {editions.filter((y) => y.year === year).map((y) =>
                    <YearlyLeaderboard {...y} />
                )}
            </div>
        </PageWrap>
    </Base>;

};

export default HallOfFame;