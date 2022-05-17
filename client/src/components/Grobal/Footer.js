import React from 'react';
import styled from 'styled-components';

const St={
    Footer: styled.footer`
        display: block;
        width: 100%;
        height: 100%;
        background-color: white;
        padding: 20px 0;
        @media ${({theme}) => theme.tablet}{
            display: none;
        }
    `,
    Container : styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        max-width: 1360px;
        margin: 0 auto;
        padding: 0 20px;
        @media ${({theme})=>theme.tablet}{
            display: block;
            max-width: 950px;
        }
    `,
    MainLink: styled.a`
    display: block;
    background-image: ${({ logo }) => `url(${logo})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    color: transparent;
    width: 130px;
    height: 60px;
    `,
    Description: styled.p`
        font-weight: 600;
        font-size: 0.9rem;
        color: gray;
        height: 85px;
        margin-top: 10px;

    `,
    DescSpan: styled.span`
        display: flex;
        flex-direction: column;
    `,
    ContactContainer: styled.address`
        display: flex;
        flex-direction: column;
    `,
    LinkTitle: styled.span`
        height: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        color: gray;
    `,
    LinkTag: styled.a`
        display: flex;
        align-items: center;
        height: 30px;
        color:black;
        text-decoration: none;
    `,
    LinkSpan: styled.span`
        display: block;
        margin-left: ${({marginLeft})=> marginLeft||"8px"};
        font-weight: 600;
        font-size: 0.9rem;
        height: 20px;
        color: gray;
    `
};


const Footer = () => {
  return (
    <St.Footer>
        <St.Container>
            <St.MainLink href="/" title={"메인으로 이동"} logo={process.env.PUBLIC_URL +"/EPI.png"}/>
        </St.Container>
        <St.Description>
            <St.DescSpan>Upbit Clon Project</St.DescSpan>
            <St.DescSpan>Create by son</St.DescSpan>
            <St.DescSpan>
                Copyright c 2022 EPI Inc. All RIGHTS RESERVED.
            </St.DescSpan>
        </St.Description>
    </St.Footer>
  )
}

export default Footer