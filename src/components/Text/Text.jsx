import { injectIntl, intlShape } from 'react-intl';
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import _isString from 'lodash/isString';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import modsClasses from '_utils/modsClasses';

import FormattedMessage from '_components/FormattedMessage';

import styles from './Text.scss';

@injectIntl
@CSSModules(styles, { allowMultiple: true })

class Text extends PureComponent {
  getTextMessage = () => {
    const {
      intl,
      values,
      message,
      children,
    } = this.props;

    if (message) return intl.formatMessage({ id: message, defaultMessage: message }, values);
    if (children && _isString(children)) return children;

    return '';
  };

  handleClick = () => {
    const { data, onClick } = this.props;

    if (onClick) onClick(data);
  };

  renderedText = () => {
    const {
      values,
      isHtml,
      message,
      children,
    } = this.props;

    /* eslint-disable react/no-danger */
    if (children && isHtml) return (<div dangerouslySetInnerHTML={{ __html: children }} />);
    /* eslint-enable react/no-danger */
    if (children) return children;

    return <FormattedMessage message={message} values={values} isHtml={isHtml} />;
  };

  render() {
    const {
      className,
      message,
      style,
      tag,
      color,
      hover,
      cursor,
      dataAttrs,
      textAlign,
      wordBreak,
      whiteSpace,
      lineHeight,
      letterSpacing,
      textTransform,
      fontWeight,
      fontSize,
      isEllipsisOverflow,
      withoutComponentStyles,
      children,
      onClick,
    } = this.props;

    const classes = withoutComponentStyles ? (
      undefined
    ) : (
      modsClasses(styles,
        {
          color,
          cursor,
          hover,
          textAlign,
          wordBreak,
          whiteSpace,
          textTransform,
        },
      )
    );

    const Tag = tag;

    if (!children && !message) return '';

    return (
      <Tag
        {...dataAttrs}
        title={isEllipsisOverflow ? this.getTextMessage() : undefined}
        styleName={classnames('root', { interactive: onClick, isEllipsisOverflow })}
        style={{
          letterSpacing,
          fontSize,
          fontWeight,
          lineHeight,
          ...style,
        }}
        className={classnames(className, classes)}
        onClick={this.handleClick}
      >
        {this.renderedText()}
      </Tag>
    );
  }
}

Text.propTypes = {
  className: PropTypes.string,
  intl: intlShape,
  tag: PropTypes.string,
  style: PropTypes.object,
  dataAttrs: PropTypes.object,
  isEllipsisOverflow: PropTypes.bool,
  /* inline styles */
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  fontWeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  /* inline styles */
  /* styles throw classes */
  withoutComponentStyles: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'black', 'darkGray', 'rollingStone', 'outerSpace']),
  hover: PropTypes.oneOf(['white', 'black', 'outerSpace']),
  whiteSpace: PropTypes.oneOf(['normal', 'nowrap', 'prewrap']),
  wordBreak: PropTypes.oneOf(['breakWord', 'breakAll', 'normal']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  textTransform: PropTypes.oneOf(['uppercase', 'capitalize', 'none']),
  cursor: PropTypes.oneOf(['default', 'pointer', 'text', 'inherit']),
  /* styles throw classes */
  isHtml: PropTypes.bool,
  /* react-intl props */
  message: PropTypes.string,
  values: PropTypes.object,
  /* react-intl props */
  data: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

Text.defaultProps = {
  tag: 'span',
  color: 'black',
  isHtml: false,
  dataAttrs: {},
  style: {},
};

export default Text;
