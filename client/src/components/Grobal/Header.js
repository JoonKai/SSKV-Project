import React from 'react';
import styled from 'styled-components';

const st ={
    Header: styled.header`
        position: sticky;
        top: 0;
        z-index: 100;
        width: 100%;
        height: 60px;
        background-color: rgb(9,54,135);
    
    `,
    Container: styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        float : center;
        max-width: 1360px;
        margin: 0 auto;
        font-family: 'Noto Sans KR';
        @media ${({theme, isRootURL})=>(!isRootURL ? theme.tablet : true)}{
            max-width: 950px;
        }
        @media ${({theme, isRootURL})=>(isRootURL ? theme.tablet : true)}{
            max-width: 100%;
        }
    `,
    SiteHeading: styled.h1`
        padding: 0 20px;
        width: 150px;
        height: 100%;
    `,
    MainLink: styled.a`
        display: block;
        background-image: ${({logo})=>`url(${logo})`};
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        color: transparent;
        width: 100%;
        height: 40%;
        position : relative;
        top: 20px;
    `,
    MainMenu: styled.a`
        color: #677fa7;
        margin-left: 30px;
        text-decoration: none;
        font-size: small;
    `
};


const MainHeader = ({isRootURL}) => {
  return (
    <st.Header>
        <st.Container isRootURL={isRootURL}>
            <st.SiteHeading>
                <st.MainLink href="/" logo={process.env.PUBLIC_URL +"/EPI.png"} title={"메인으로 이동"}>
                </st.MainLink>
            </st.SiteHeading>
            <st.MainMenu href="/Test" title={"메인으로 이동"}>Test</st.MainMenu>
            <st.MainMenu href="/Cost">비용관리</st.MainMenu>
            <st.MainMenu href="/Mocvd">MOCVD</st.MainMenu>
            <st.MainMenu href="/Measurement">계측설비</st.MainMenu>
            <st.MainMenu href="/Measurement">계측설비</st.MainMenu>
        </st.Container>
    </st.Header>
  );
};

export default MainHeader