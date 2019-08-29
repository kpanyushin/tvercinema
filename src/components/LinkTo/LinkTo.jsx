import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import isExternalLink from '_utils/isExternalLink';

const LinkTo = ({
  className,
  linkTo,
  children,
  ...restProps
}) => {
  const isExternal = isExternalLink(linkTo);

  return isExternal ? (
    <a
      className={className}
      href={linkTo}
      target="_blank"
      rel="nofollow noopener noreferrer"
      {...restProps}
    >
      {children}
    </a>
  ) : (
    <Link to={linkTo} className={className} {...restProps}>
      {children}
    </Link>
  );
};

LinkTo.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  children: PropTypes.any,
};

export default LinkTo;
