import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Label, Segment, Grid } from 'semantic-ui-react';
import CaseCard from './CaseCard';
import style from './SummaryCard.module.scss';

const SummaryCard = ({
  title,
  color,
  data,
}) => {
  const { t } = useTranslation();
  const { confirmed, recovered, deaths } = data;
  return (
    <Segment textAlign='left'>
      <Grid columns={4} divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <Label color={color} className={style.title}>
              {title}
            </Label>
          </Grid.Column>
          <Grid.Column className={style.confirmed}>
            <CaseCard title={t('confirmed-label')} number={confirmed} />
          </Grid.Column>
          <Grid.Column className={style.recovered}>
            <CaseCard title={t('recovered-label')} number={recovered} />
          </Grid.Column>
          <Grid.Column className={style.deaths}>
            <CaseCard title={t('deaths-label')} number={deaths} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

SummaryCard.defaultProps = {
  title: 'Summary',
  color: 'blue',
  data: {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  },
};

SummaryCard.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.shape({
    confirmed: PropTypes.number,
    recovered: PropTypes.number,
    deaths: PropTypes.number,
  }),
};

export default SummaryCard;
