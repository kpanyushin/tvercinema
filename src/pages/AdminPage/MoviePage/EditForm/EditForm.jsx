import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import EditField from './EditField';

import styles from './EditForm.scss';

const EditForm = ({
  className,
  isEditing,
  fields,
  data,
}) => (
  <ul styleName="root" className={className}>
    {fields.map(field => field !== 'id' && (
      <EditField
        styleName="field"
        label={[field.charAt(0).toUpperCase(), ...field.slice(1)].join('')}
        isEditing={isEditing}
        value={data[field]}
      />
    ))}
  </ul>
);

EditForm.propTypes = {
  className: PropTypes.string,
  isEditing: PropTypes.bool,
  fields: PropTypes.array,
  data: PropTypes.object,
};

export default CSSModules(EditForm, styles);
