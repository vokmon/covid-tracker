import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { useGlobalStateContext } from '../../../context/GlobalStateProvider';

const numToShow = 5;

const TopProvinceConfirmed = () => {
  const { t, i18n } = useTranslation();
  const { data: { casesSummary: { Province } } } = useGlobalStateContext();

  const keys = Object.keys(Province).slice(0, numToShow);
  const values = keys.map((k) => Province[k].Count);
  const provinces = keys.map((k) => (i18n.language === 'th' ? Province[k].Province : Province[k].ProvinceEn || Province[k].Province));

  const state = {
    labels: provinces,
    datasets: [
      {
        borderColor: '#eaec2f',
        backgroundColor: 'rgba(255, 255, 127, 0.8)',
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
        title: {
          display: true,
          text: t('case-summary-province', { num: numToShow }),
          fontSize: 20,
        },
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem) => tooltipItem.xLabel.toLocaleString(),
          },
        },
      }}
    />
  );
};

export default TopProvinceConfirmed;
