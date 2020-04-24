import React from 'react';
import {
  Icon,
  Image,
  Menu,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import './AppFooter.scss';

const AppFooter = () => {
  const { t } = useTranslation();
  const date = new Date();

  return (
    <footer className='app-footer'>
      <Menu.Item as='a' header href={t('app.footer.link')} target='_blank'>
        <Image size='small' src={t('app.logo')} style={{ marginRight: '1.5em' }} className='app-logo' />
      </Menu.Item>
      <div className='copyright'>
        <Icon name='copyright outline' /> {date.getFullYear()}
      </div>
    </footer>
  );
};

export default AppFooter;
