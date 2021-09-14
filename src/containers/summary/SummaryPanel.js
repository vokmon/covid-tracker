import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import SummaryCard from '../../components/SummaryCard';
import { useGlobalStateContext } from '../../context/GlobalStateProvider';
import style from './SummaryPanel.module.scss';

const SummaryPanel = () => {
  const { t } = useTranslation();
  const { data: { todaySummary, timelineData } } = useGlobalStateContext();

  const todaySummaryElement = todaySummary[0] || timelineData[timelineData.length - 1];
  const todayData = {
    confirmed: todaySummaryElement.new_case,
    recovered: todaySummaryElement.new_recovered,
    deaths: todaySummaryElement.new_death,
  };

  const totalData = {
    confirmed: todaySummaryElement.total_case,
    recovered: todaySummaryElement.total_recovered,
    deaths: todaySummaryElement.total_death,
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
