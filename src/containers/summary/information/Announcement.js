/* eslint-disable react/no-danger */
import React from 'react';
import {
  Header,
  Icon,
  Container,
  Segment,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import style from './Announcement.module.scss';
import { useGlobalStateContext } from '../../../context/GlobalStateProvider';

const Announcement = () => {
  const { t } = useTranslation();
  const { data: { announcements } } = useGlobalStateContext();

  const getRandomColor = () => {
    const o = Math.round;
    const r = Math.random;
    const s = 255;
    return `rgba(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)}, 0.5)`;
  };

  return (
    <Segment className={style.container}>
      <Header>
        <Icon name='announcement' color='red' />
        {t('announcement-short-label')}
      </Header>

      {announcements.map((a, i) => (
        <Container key={`announcement-item-${i}`} className={style.item} style={{ borderLeft: `3px solid ${getRandomColor()}` }}>
          <Header size='small'>
            {a.AnnounceBy}
          </Header>
          <div>{a.Date}</div>
          <div>
            {a.Location}
            &nbsp;
            {a.Province}
          </div>
          <div className={style.announcementContent} dangerouslySetInnerHTML={{ __html: a.Recommend }} />
        </Container>
      ))}

    </Segment>
  );
};

export default Announcement;
