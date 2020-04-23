import React from 'react';
import {
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import style from './Map.module.scss';

const Map = () => {
  const { t } = useTranslation();

  return (
    <Segment className={style.container}>
      <Header>
        <Icon name='map' />
        {t('map-label')}
      </Header>
    </Segment>
  );
};

export default Map;
