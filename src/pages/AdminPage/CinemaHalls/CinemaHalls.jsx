import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_SHOWTIMES } from '_controllers/showtimes/actions';
import { showtimesSelector } from '_controllers/showtimes/selectors';

import createAction from '_utils/createAction';

import styles from './CinemaHalls.scss';

@connect(state => ({
  showtimes: showtimesSelector(state),
}), {
  fetchShowtimes: createAction(FETCH_SHOWTIMES),
})
@CSSModules(styles)

class CinemaHalls extends Component {
  componentDidMount() {
    this.props.fetchShowtimes();
  }

  render() {
    const { showtimes, className } = this.props;

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviesPage" />
        <ul>
          {showtimes.length > 0 && showtimes.map(data => (
            <li key={data.id}>{data.price}</li>
          ))}
        </ul>
      </div>
    );
  }
}

CinemaHalls.propTypes = {
  className: PropTypes.string,
  showtimes: PropTypes.array,
  fetchShowtimes: PropTypes.func,
};

export default CinemaHalls;
