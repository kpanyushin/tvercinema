import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_CINEMAHALLS } from '_controllers/cinemahalls/actions';
import { cinemaHallsSelector } from '_controllers/cinemahalls/selectors';

import createAction from '_utils/createAction';

import LinkTo from '_components/LinkTo';
import PreviewCard from '_components/PreviewCard';

import styles from './CinemaHalls.scss';

@connect(state => ({
  cinemaHalls: cinemaHallsSelector(state),
}), {
  fetchCinemaHalls: createAction(FETCH_CINEMAHALLS),
})
@CSSModules(styles)

class CinemaHalls extends Component {
  componentDidMount() {
    const { cinemaHalls, fetchCinemaHalls } = this.props;

    if (!cinemaHalls || !cinemaHalls.length) fetchCinemaHalls();
  }

  render() {
    const { cinemaHalls, className } = this.props;

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviesPage" />
        <ul styleName="hallsList">
          {cinemaHalls.length > 0 && cinemaHalls.map(({ id, title }) => (
            <LinkTo key={id} linkTo={`/admin/cinemahalls/${id}`}>
              <PreviewCard
                styleName="previewCard"
                title={title}
              />
            </LinkTo>
          ))}
        </ul>
      </div>
    );
  }
}

CinemaHalls.propTypes = {
  className: PropTypes.string,
  cinemaHalls: PropTypes.array,
  fetchCinemaHalls: PropTypes.func,
};

export default CinemaHalls;
