import { withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import _isEqual from 'lodash/isEqual';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
import EditForm from '_components/EditForm';

import styles from './MoviePage.scss';

@connect((state, { id }) => ({
  movie: movieSelector(state, id),
}), {
  addMovie: createAction(ADD_MOVIE),
  fetchMovie: createAction(FETCH_MOVIE),
  changeMovie: createAction(CHANGE_MOVIE),
  deleteMovie: createAction(DELETE_MOVIE),
})
@withRouter
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
    this.toggleIsEditing(false);
  };

  handleSaveButtonClick = () => {
    const { movieData } = this.state;
    const { changeMovie } = this.props;

    changeMovie(movieData);
    this.toggleIsEditing(false);
  };

  handleDeleteButtonClick = () => {
    const { id, history, deleteMovie } = this.props;

    deleteMovie(id);
    history.push('/admin/movies');
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
    const { className, movie } = this.props;
    const fields = Object.keys(movie || {});
    const textProps = {
      color: 'white',
      fontWeight: '500',
      textAlign: 'center',
      textTransform: 'uppercase',
    };

    console.log(this.props);

    return (
      <div styleName="root" className={className}>
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
            backgroundColor="yellow"
            onClick={this.handleEditButtonClick}
          >
            <Text message="edit" {...textProps} />
          </Button>
        )}
        {isEditing && (
          <div styleName="buttonGroup">
            <Button
              styleName="button"
              backgroundColor="green"
              onClick={this.handleSaveButtonClick}
            >
              <Text message="save" {...textProps} />
            </Button>
            <Button
              styleName="button"
              backgroundColor="red"
              onClick={this.handleCancelButtonClick}
            >
              <Text message="cancel" {...textProps} />
            </Button>
          </div>
        )}
        <Button
          styleName="button"
          backgroundColor="red"
          onClick={this.handleDeleteButtonClick}
        >
          <Text message="delete" {...textProps} />
        </Button>
      </div>
    );
  }
}

Movies.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  movie: PropTypes.object,
  addMovie: PropTypes.func,
  fetchMovie: PropTypes.func,
  changeMovie: PropTypes.func,
  deleteMovie: PropTypes.func,
};

export default Movies;
