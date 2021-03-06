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
import EditForm from '_components/EditForm';
import { ModalBasic } from '_components/Modal';
import { Button, EditButton, DeleteButton } from '_components/Button';

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

class MoviePage extends Component {
  constructor(props) {
    super(props);

    const initialMovieData = {
      title: '',
      rating: '',
      genre: '',
      duration: 0,
    };
    this.isNewMovie = props.match.params.id === 'new';
    this.state = {
      movieData: props.movie || initialMovieData,
      isEditing: false,
    };
  }

  componentDidMount() {
    const { id, movie, fetchMovie } = this.props;

    if (!this.isNewMovie && !movie) fetchMovie(id);
  }

  componentDidUpdate({ movie: prevMovie }) {
    const { movie } = this.props;

    if (!_isEqual(movie, prevMovie)) {
      this.setState({ movieData: movie }); // eslint-disable-line
    }
  }

  toggleIsEditing = isEditing => this.setState({ isEditing });

  redirect = () => {
    const { history } = this.props;

    history.push('/admin/movies');
  };

  handleEditButtonClick = () => {
    this.toggleIsEditing(true);
  };

  handleCancelButtonClick = () => {
    if (this.isNewMovie) {
      this.redirect();
    } else {
      this.toggleIsEditing(false);
    }
  };

  handleSaveButtonClick = () => {
    const { movieData } = this.state;
    const { changeMovie, addMovie } = this.props;

    if (this.isNewMovie) {
      addMovie(movieData);
      this.redirect();
    } else {
      changeMovie(movieData);
      this.toggleIsEditing(false);
    }
  };

  handleDeleteButtonClick = () => {
    const { id, deleteMovie } = this.props;

    deleteMovie(id);
    this.redirect();
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
    const { className } = this.props;
    const fields = Object
      .keys(movieData || {})
      .filter(field => field !== 'id')
      .map(field => ({
        label: [field.charAt(0).toUpperCase(), ...field.slice(1)].join(''),
        value: movieData[field],
      }));
    const textProps = {
      color: 'white',
      fontWeight: '500',
      textAlign: 'center',
      textTransform: 'uppercase',
    };

    return (
      <div styleName="root" className={className}>
        {movieData && (
          <EditForm
            styleName="editForm"
            fields={fields}
            isEditing={isEditing || this.isNewMovie}
            onFieldChange={this.handleFieldChange}
          />
        )}
        {!isEditing && !this.isNewMovie && (
          <EditButton styleName="button" onClick={this.handleEditButtonClick} />
        )}
        {(isEditing || this.isNewMovie) && (
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
        <ModalBasic
          headerContent={{
            iconName: 'recycle',
            message: 'Remove this movie',
          }}
          content="Are you sure you want to remove this movie?"
          trigger={<DeleteButton styleName="button" />}
          yesActionContent={{
            iconName: 'checkmark',
            message: 'Yes',
            onClick: this.handleDeleteButtonClick,
          }}
        />
      </div>
    );
  }
}

MoviePage.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  movie: PropTypes.object,
  addMovie: PropTypes.func,
  fetchMovie: PropTypes.func,
  changeMovie: PropTypes.func,
  deleteMovie: PropTypes.func,
};

export default MoviePage;
