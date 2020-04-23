import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelectorComponent from '../../components/LanguageSelector/LanguageSelectorComponent';
import style from './LanguageSelector.module.scss';

const languages = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'ไทย',
    value: 'th',
  },
];

const LanguageSelector = () => {
  const [state, setState] = useState('th');
  const { i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setState(value);
    changeLanguage(value);
  };

  return (
    <div className={style.container}>
      <LanguageSelectorComponent
        onChange={handleChange}
        value={state}
        languages={languages}
      />
    </div>
  );
};

export default LanguageSelector;
