import React from 'react';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import style from './SummaryChart.module.scss';
import { useGlobalStateContext } from '../../context/GlobalStateProvider';

const numberOfDays = 30;

const SummaryChart = () => {
  const { t } = useTranslation();
  const { data: { timelineData } } = useGlobalStateContext();

  const dataToShow = timelineData.slice(Math.max(timelineData.length - numberOfDays, 1));

  return (
    <div className={style.container}>
      <Line
        height={90}
        options={{
          title: {
            display: true,
            text: t('summary-data-days', { days: numberOfDays }),
            fontSize: 17,
          },
        }}
        data={{
          labels: dataToShow.map(({ Date }) => Date),
          datasets: [
            {
              data: dataToShow.map((data) => data.Deaths),
              label: t('deaths-label'),
              borderColor: 'red',
              backgroundColor: 'rgba(255, 127, 127, 0.5)',
              fill: true,
            },
            {
              data: dataToShow.map((data) => data.Recovered),
              label: t('recovered-label'),
              borderColor: '#7fff7f',
              backgroundColor: 'rgba(127, 255, 127, 0.5)',
              fill: true,
            },
            {
              data: dataToShow.map((data) => data.Confirmed),
              label: t('confirmed-label'),
              borderColor: '#7f7fff',
              backgroundColor: 'rgba(127, 127, 255, 0.5)',
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default SummaryChart;
