import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Form,
  Card,
} from 'semantic-ui-react';
import style from './LanguageSelectorComponent.module.scss';

const LanguageSelectorComponent = ({ onChange, value, languages }) => (
  <Card className={style.container}>
    <Icon name='language' size='large' color='orange' />
    <Form.Group inline className={style.group}>
      {
        languages.map((lng) => (
          <Form.Field
            key={`radio-language-${lng.value}`}
            className={style.field}
          >
            <input
              type='radio'
              name='lang'
              onChange={onChange}
              checked={value === lng.value}
              id={lng.label}
              value={lng.value}
              className={style.input}
            />
            <label htmlFor={lng.label}>{lng.label}</label>
          </Form.Field>
        ))
      }
    </Form.Group>
  </Card>
);

LanguageSelectorComponent.defaultProps = {
  onChange: () => { },
  value: 'th',
};

LanguageSelectorComponent.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

export default LanguageSelectorComponent;
