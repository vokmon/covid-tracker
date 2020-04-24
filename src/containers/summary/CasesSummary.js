import React from 'react';
import { Grid } from 'semantic-ui-react';
import TopProvinceConfirmed from './cases/TopProvinceConfirmed';
import GenderPieChart from './cases/GenderPieChart';
import TopNationalityConfirmed from './cases/TopNationalityConfirmed';
import style from './CasesSummary.module.scss';

const CasesSummary = () => {
  const { innerWidth: width } = window;
  let columnNum = 1;
  if (width > 1000) {
    columnNum = 3;
  }

  return (
    <div className={style.container}>
      <Grid columns={columnNum} doubling className={style.container}>
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
};

export default CasesSummary;
