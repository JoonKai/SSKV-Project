import React from 'react';
import {ResponsiveBar} from '@nivo/bar';
import BarChart from '../components/Charts/BarChart';
import {Card} from '../components/Styles/Card/Card.style';

const Test = (props) => {
  return (
    <Card>
      <BarChart data={props.data}></BarChart>
    </Card>
  )
}

export default Test