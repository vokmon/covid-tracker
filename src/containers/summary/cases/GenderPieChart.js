import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { useGlobalStateContext } from '../../../context/GlobalStateProvider';

const numToShow = 5;

const GenderPieChart = () => {
  const { t } = useTranslation();
  const { data: { casesSummary: { Gender } } } = useGlobalStateContext();

  const keys = Object.keys(Gender);
  const values = keys.map((k) => Gender[k].Count);
  const translatedKeys = keys.map((k) => `${t(k)} ${Gender[k].Gender}`);

  const state = {
    labels: translatedKeys,
    datasets: [
      {
        backgroundColor: [
          '#02a3fe',
          '#ec49a6',
          '#ed7a41',
        ],
        hoverBackgroundColor: [
          '#0872af',
          '#c10570',
          '#a93b05',
        ],
        data: values,
      },
    ],
  };

  return (
    <Doughnut
      data={state}
      height={140}
      options={{
        title: {
          display: true,
          text: t('case-summary-gender', { num: numToShow }),
          fontSize: 20,
        },
        legend: {
          display: true,
        },
      }}
    />
  );
};

export default GenderPieChart;
