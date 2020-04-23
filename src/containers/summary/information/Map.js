import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';
import style from './Map.module.scss';

const Map = () => (
  <Segment className={style.container}>
    <div className={style.container}>
      <iframe className={style.iframe} src='https://covid19.th-stat.com/th/share/map' title='map' />
    </div>
  </Segment>
);

export default Map;
