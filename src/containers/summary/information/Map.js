import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import style from './Map.module.scss';

const Map = () => {
  const { t } = useTranslation();

  return (
    <Segment className={style.container}>
      <iframe className={style.iframe} src='https://covid19.th-stat.com/th/share/map' title='map' />
    </Segment>
  );
};

export default Map;
