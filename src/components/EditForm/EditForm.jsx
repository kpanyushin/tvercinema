import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import EditField from './EditField';

import styles from './EditForm.scss';

const EditForm = ({
  className,
  isEditing,
  fields,
  onFieldChange,
}) => (
  <ul styleName="root" className={className}>
    {fields.map(({ label, value }) => (
      <EditField
        styleName="field"
        name={label}
        value={value}
        isEditing={isEditing}
        onChange={onFieldChange}
      />
    ))}
  </ul>
);

EditForm.propTypes = {
  className: PropTypes.string,
  isEditing: PropTypes.bool,
  fields: PropTypes.array,
  onFieldChange: PropTypes.func,
};

export default CSSModules(EditForm, styles);
