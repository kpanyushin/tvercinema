import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_MOVIE } from '_controllers/movies/actions';
import { movieSelector } from '_controllers/movies/selectors';

import createAction from '_utils/createAction';

import Text from '_components/Text';
import Button from '_components/Button';

import EditForm from './EditForm';

import styles from './MoviePage.scss';

@connect((state, { id }) => ({
  movie: movieSelector(state, id),
}), {
  fetchMovie: createAction(FETCH_MOVIE),
})
@CSSModules(styles)

class Movies extends Component {
  state = {
    isEditing: false,
  };

  componentDidMount() {
    const { id, movie, fetchMovie } = this.props;

    if (!movie || !movie.id) fetchMovie(id);
  }

  toggleIsEditing = isEditing => this.setState({ isEditing });

  handleEditButtonClick = () => {
    this.toggleIsEditing(true);
  };

  handleCancelButtonClick = () => {
    this.toggleIsEditing(false);
  };

  handleSaveButtonClick = () => {
    console.info('saved');
  };

  render() {
    const { isEditing } = this.state;
    const { movie, className } = this.props;
    const fields = Object.keys(movie || {});

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviePage" />
        {movie && movie.id && (
          <EditForm
            data={movie}
            fields={fields}
            isEditing={isEditing}
          />
        )}
        {!isEditing && (
          <Button
            styleName="button"
            backgroundColor="black"
            onClick={this.handleEditButtonClick}
          >
            <Text
              color="white"
              message="edit"
              textAlign="center"
            />
          </Button>
        )}
        {isEditing && (
          <div styleName="buttonGroup">
            <Button
              styleName="button"
              backgroundColor="black"
              onClick={this.handleCancelButtonClick}
            >
              <Text
                color="white"
                message="cancel"
                textAlign="center"
              />
            </Button>
            <Button
              styleName="button"
              backgroundColor="black"
              onClick={this.handleSaveButtonClick}
            >
              <Text
                color="white"
                message="save"
                textAlign="center"
              />
            </Button>
          </div>
        )}
      </div>
    );
  }
}

Movies.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  movie: PropTypes.object,
  fetchMovie: PropTypes.func,
};

export default Movies;
