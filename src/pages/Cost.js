import React from 'react'
import styled from 'styled-components'
import Table from '../components/DataGrids/Table'


const St={
  MainContentContainer:styled.div`
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    height: 100%;

    @media ${({theme})=>theme.tablet}{
      margin-top: 0;
      margin-bottom: 0;
    }
  `,

}




const Cost = () => {
  return (
    <St.MainContentContainer>
      
    </St.MainContentContainer>
  )
}

export default Cost