import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import SummaryCard from '../../components/SummaryCard';
import { useGlobalStateContext } from '../../context/GlobalStateProvider';
import style from './SummaryPanel.module.scss';

const SummaryPanel = () => {
  const { t } = useTranslation();
  const { data: { todaySummary } } = useGlobalStateContext();
  const todayData = {
    confirmed: todaySummary.NewConfirmed,
    recovered: todaySummary.NewRecovered,
    deaths: todaySummary.NewDeaths,
  };

  const totalData = {
    confirmed: todaySummary.Confirmed,
    recovered: todaySummary.Recovered,
    deaths: todaySummary.Deaths,
  };

  return (
    <div className={style.container}>
      <Grid columns={2} doubling className={style.gridContainer}>
        <Grid.Row>
          <Grid.Column>
            <SummaryCard title={t('today-label')} color='teal' data={todayData} />
          </Grid.Column>
          <Grid.Column>
            <SummaryCard title={t('total-label')} color='blue' data={totalData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default SummaryPanel;
