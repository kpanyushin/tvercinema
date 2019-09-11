import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import CSSModules from 'react-css-modules';

import EditField from './EditField';

import styles from './EditForm.scss';

const EditForm = ({
  className,
  isEditing,
  fields,
  onFieldChange,
}) => (
  <Form styleName="root" className={className}>
    {fields.map(({ label, value }) => (
      <EditField
        styleName="field"
        key={label}
        name={label}
        value={value}
        isEditing={isEditing}
        onChange={onFieldChange}
      />
    ))}
  </Form>
);

EditForm.propTypes = {
  className: PropTypes.string,
  isEditing: PropTypes.bool,
  fields: PropTypes.array,
  onFieldChange: PropTypes.func,
};

export default CSSModules(EditForm, styles);
