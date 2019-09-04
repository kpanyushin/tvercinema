import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';

import Text from '_components/Text';

import styles from './EditField.scss';

@CSSModules(styles, { allowMultiple: true })

class EditField extends PureComponent {
  handleInputChange = (e) => {
    const { label, onChange } = this.props;

    if (onChange) onChange(label.toLowerCase(), e.target.value);
  };

  render() {
    const {
      className,
      isEditing,
      label,
      value,
    } = this.props;

    return (
      <li styleName="root" className={className}>
        <Text message={label} />
        <input
          styleName={classnames('input', { isEditing })}
          type="text"
          value={value}
          disabled={!isEditing}
          onChange={this.handleInputChange}
        />
      </li>
    );
  }
}

EditField.propTypes = {
  className: PropTypes.string,
  isEditing: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default EditField;
