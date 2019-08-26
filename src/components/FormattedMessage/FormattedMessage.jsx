import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const FormattedMessageComponent = ({ message, values, isHtml }) => (
  isHtml ? (
    <FormattedHTMLMessage id={message} defaultMessage={message} values={values} />
  ) : (
    <FormattedMessage id={message} defaultMessage={message} values={values} />
  )
);

FormattedMessageComponent.propTypes = {
  message: PropTypes.string,
  values: PropTypes.object,
  isHtml: PropTypes.bool,
};

export default FormattedMessageComponent;
