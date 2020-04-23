import React from 'react';
import { Grid } from 'semantic-ui-react';
import TopProvinceConfirmed from './cases/TopProvinceConfirmed';
import GenderPieChart from './cases/GenderPieChart';
import TopNationalityConfirmed from './cases/TopNationalityConfirmed';
import style from './CasesSummary.module.scss';

const CasesSummary = () => (
  <div className={style.container}>
    <Grid columns={3} doubling className={style.container}>
      <Grid.Row>
        <Grid.Column>
          <TopProvinceConfirmed />
        </Grid.Column>
        <Grid.Column>
          <GenderPieChart />
        </Grid.Column>
        <Grid.Column>
          <TopNationalityConfirmed />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default CasesSummary;
