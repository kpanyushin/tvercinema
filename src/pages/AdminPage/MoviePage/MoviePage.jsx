import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import _isEqual from 'lodash/isEqual';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { movieSelector } from '_controllers/movies/selectors';
import {
  CHANGE_MOVIE,
  DELETE_MOVIE,
  FETCH_MOVIE,
  ADD_MOVIE,
} from '_controllers/movies/actions';

import createAction from '_utils/createAction';

import Text from '_components/Text';
import Button from '_components/Button';

import EditForm from './EditForm';

import styles from './MoviePage.scss';

@connect((state, { id }) => ({
  movie: movieSelector(state, id),
}), {
  addMovie: createAction(ADD_MOVIE),
  fetchMovie: createAction(FETCH_MOVIE),
  changeMovie: createAction(CHANGE_MOVIE),
  deleteMovie: createAction(DELETE_MOVIE),
})
@CSSModules(styles)

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: props.movie || {},
      isEditing: false,
    };
  }

  componentDidMount() {
    const { id, movie, fetchMovie } = this.props;

    if (!movie || !movie.id) fetchMovie(id);
  }

  componentDidUpdate({ movie: prevMovie }) {
    const { movie } = this.props;

    if (!_isEqual(movie, prevMovie)) {
      this.setState({ movieData: movie }); // eslint-disable-line
    }
  }

  toggleIsEditing = isEditing => this.setState({ isEditing });

  handleEditButtonClick = () => {
    this.toggleIsEditing(true);
  };

  handleCancelButtonClick = () => {
    // this.toggleIsEditing(false);
    this.props.addMovie({
      genre: 'comedy',
      title: 'american pie',
      rating: '9.1',
      duration: '151',
    });
  };

  handleSaveButtonClick = () => {
    const { movieData } = this.state;
    const { changeMovie } = this.props;

    changeMovie(movieData);
    this.toggleIsEditing(false);
  };

  handleFieldChange = (field, value) => {
    const { movieData } = this.state;

    this.setState({
      movieData: {
        ...movieData,
        [field]: value,
      },
    });
  };

  render() {
    const { movieData, isEditing } = this.state;
    const {
      id,
      movie,
      className,
      deleteMovie,
    } = this.props;
    const fields = Object.keys(movie || {});

    return (
      <div styleName="root" className={className}>
        <Helmet title="MoviePage" />
        {movieData && movieData.id && (
          <EditForm
            data={movieData}
            fields={fields}
            isEditing={isEditing}
            onFieldChange={this.handleFieldChange}
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
              onClick={this.handleSaveButtonClick}
            >
              <Text
                color="white"
                message="save"
                textAlign="center"
              />
            </Button>
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
          </div>
        )}
        <Button
          styleName="button"
          backgroundColor="black"
          cbData={id}
          onClick={deleteMovie}
        >
          <Text
            color="white"
            message="delete"
            textAlign="center"
          />
        </Button>
      </div>
    );
  }
}

Movies.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  movie: PropTypes.object,
  addMovie: PropTypes.func,
  fetchMovie: PropTypes.func,
  changeMovie: PropTypes.func,
  deleteMovie: PropTypes.func,
};

export default Movies;
