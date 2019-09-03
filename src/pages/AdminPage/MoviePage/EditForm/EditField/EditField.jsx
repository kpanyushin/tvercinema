import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import Text from '_components/Text';

import styles from './EditField.scss';

const EditField = ({
  className,
  isEditing,
  label,
  value,
}) => (
  <li styleName="root" className={className}>
    <Text message={label} />
    <input
      styleName={classnames('input', { isEditing })}
      type="text"
      value={value}
      disabled={!isEditing}
    />
  </li>
);

EditField.propTypes = {
  className: PropTypes.string,
  isEditing: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default CSSModules(EditField, styles, { allowMultiple: true });
