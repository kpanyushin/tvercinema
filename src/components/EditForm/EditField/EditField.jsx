import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';

import Text from '_components/Text';

import styles from './EditField.scss';

@CSSModules(styles, { allowMultiple: true })

class EditField extends PureComponent {
  handleInputChange = (e) => {
    const { name, onChange } = this.props;

    if (onChange) onChange(name.toLowerCase(), e.target.value);
  };

  render() {
    const {
      className,
      isEditing,
      name,
      value,
    } = this.props;

    return (
      <Form.Field styleName="root" className={className}>
        <label htmlFor={name}><Text message={name} /></label>
        <Form.Input
          styleName="input"
          fluid
          type="text"
          name={name}
          value={value}
          placeholder={name}
          disabled={!isEditing}
          onChange={this.handleInputChange}
        />
      </Form.Field>
    );
  }
}

EditField.propTypes = {
  className: PropTypes.string,
  isEditing: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

EditField.defaultProps = {
  onChange: () => {},
};

export default EditField;
