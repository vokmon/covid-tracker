import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import style from './CaseCard.module.scss';

const CaseCard = ({
  title,
  number,
}) => (
  <div className={style.container}>
    <div className={style.title}>
      {title}
    </div>
    <div className={style.number}>
      <CountUp
        start={0}
        end={number}
        duration={1.75}
        separator=','
      />
    </div>
  </div>
);

CaseCard.defaultProps = {
  title: 'Infected',
  number: 0,
};

CaseCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};


export default CaseCard;
