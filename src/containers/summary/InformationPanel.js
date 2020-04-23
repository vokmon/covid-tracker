import React from 'react';
import { Grid } from 'semantic-ui-react';
import Announcement from './information/Announcement';
import Map from './information/Map';
import style from './InformationPanel.module.scss';

const InformationPanel = () => (
  <div className={style.container}>
    <Grid columns={2} doubling className={style.gridContainer}>
      <Grid.Row stretched>
        <Grid.Column width={6}>
          <Announcement />
        </Grid.Column>
        <Grid.Column width={10}>
          <Map />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default InformationPanel;
