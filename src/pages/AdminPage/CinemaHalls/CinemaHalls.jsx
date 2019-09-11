import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_CINEMAHALLS } from '_controllers/cinemahalls/actions';
import { cinemaHallsIdsSelector } from '_controllers/cinemahalls/selectors';

import createAction from '_utils/createAction';

import Text from '_components/Text';
import LinkTo from '_components/LinkTo';
import Button from '_components/Button';

import CinemaHall from './CinemaHall';

import styles from './CinemaHalls.scss';

@connect(state => ({
  cinemaHalls: cinemaHallsIdsSelector(state),
}), {
  fetchCinemaHalls: createAction(FETCH_CINEMAHALLS),
})
@CSSModules(styles)

class CinemaHalls extends Component {
  componentDidMount() {
    const { fetchCinemaHalls } = this.props;

    fetchCinemaHalls();
  }

  render() {
    const { cinemaHalls, className } = this.props;
    const textProps = {
      color: 'white',
      fontWeight: '500',
      textAlign: 'center',
      textTransform: 'uppercase',
    };

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviesPage" />
        <LinkTo linkTo="/admin/cinemahalls/new">
          <Button backgroundColor="green">
            <Text message="add" {...textProps} />
          </Button>
        </LinkTo>
        <ul styleName="hallsList">
          {cinemaHalls.length > 0 && cinemaHalls.map(id => (
            <CinemaHall key={id} id={id} />
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
