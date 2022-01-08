import React from 'react';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import style from './SummaryChart.module.scss';
import { useGlobalStateContext } from '../../context/GlobalStateProvider';

const numberOfDays = 30;

const SummaryDailyChart = () => {
  const { t } = useTranslation();
  const { data: data1 } = useGlobalStateContext();
  const { timelineData } = data1;
  const dataToShow = timelineData.slice(Math.max(timelineData.length - numberOfDays, 1));

  const { innerWidth: width } = window;
  let chartHeight = 180;
  if (width > 1000) {
    chartHeight = '150';
  }

  return (
    <div className={style.container}>
      <Line
        height={chartHeight}
        options={{
          title: {
            display: true,
            text: t('summary-data-daily-days', { days: numberOfDays }),
            fontSize: 17,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: (label) => label.toLocaleString(),
                },
              },
            ],
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem) => tooltipItem.yLabel.toLocaleString(),
            },
          },
        }}
        data={{
          labels: dataToShow.map(({ txn_date: date }) => date),
          datasets: [
            {
              data: dataToShow.map((data) => data.new_death),
              label: t('deaths-label'),
              borderColor: 'red',
              backgroundColor: 'rgba(255, 127, 127, 0.5)',
              fill: true,
            },
            {
              data: dataToShow.map((data) => data.new_recovered),
              label: t('recovered-label'),
              borderColor: '#7fff7f',
              backgroundColor: 'rgba(127, 255, 127, 0.5)',
              fill: true,
            },
            {
              data: dataToShow.map((data) => data.new_case),
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

export default SummaryDailyChart;
