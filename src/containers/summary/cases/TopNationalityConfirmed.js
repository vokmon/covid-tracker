import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { useGlobalStateContext } from '../../../context/GlobalStateProvider';

const numToShow = 5;

const TopNationalityConfirmed = () => {
  const { t } = useTranslation();
  const { data: { casesSummary: { Nation } } } = useGlobalStateContext();

  const keys = Object.keys(Nation).slice(0, numToShow);
  const values = keys.map((k) => Nation[k].Count);
  const nations = keys.map((k) => Nation[k].Nation);

  const state = {
    labels: nations,
    datasets: [
      {
        borderColor: 'pink',
        backgroundColor: 'rgba(255, 127, 127, 0.8)',
        borderWidth: 2,
        data: values,
      },
    ],
  };

  return (
    <HorizontalBar
      data={state}
      height={140}
      options={{
        scales: {
          xAxes: [
            {
              ticks: {
                callback: (label) => label.toLocaleString(),
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem) => tooltipItem.xLabel.toLocaleString(),
          },
        },
        title: {
          display: true,
          text: t('case-summary-nation', { num: numToShow }),
          fontSize: 20,
        },
        legend: {
          display: false,
        },
      }}
    />
  );
};

export default TopNationalityConfirmed;
