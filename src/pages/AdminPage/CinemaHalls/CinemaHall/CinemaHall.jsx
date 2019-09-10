import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';

import { cinemaHallSelector } from '_controllers/cinemahalls/selectors';

import LinkTo from '_components/LinkTo';
import PreviewCard from '_components/PreviewCard';

import styles from './CinemaHall.scss';

@connect((state, { id }) => ({
  cinemaHall: cinemaHallSelector(state, id),
}))
@CSSModules(styles)

class CinemaHall extends PureComponent {
  render() {
    const { className, cinemaHall: { id, title } } = this.props;

    return (
      <LinkTo className={className} linkTo={`/admin/cinemahalls/${id}`}>
        <PreviewCard
          styleName="previewCard"
          title={title}
        />
      </LinkTo>
    );
  }
}

CinemaHall.propTypes = {
  className: PropTypes.string,
  cinemaHall: PropTypes.object,
};

export default CinemaHall;
