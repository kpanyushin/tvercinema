import { withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import _isEqual from 'lodash/isEqual';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cinemaHallSelector } from '_controllers/cinemahalls/selectors';
import {
  CHANGE_CINEMAHALL,
  DELETE_CINEMAHALL,
  FETCH_CINEMAHALL,
  ADD_CINEMAHALL,
} from '_controllers/cinemahalls/actions';
import createAction from '_utils/createAction';

import Text from '_components/Text';
import Button from '_components/Button';
import EditForm from '_components/EditForm';

import styles from './CinemaHallPage.scss';

@connect((state, { id }) => ({
  cinemaHall: cinemaHallSelector(state, id),
}), {
  addCinemaHall: createAction(ADD_CINEMAHALL),
  fetchCinemaHall: createAction(FETCH_CINEMAHALL),
  changeCinemaHall: createAction(CHANGE_CINEMAHALL),
  deleteCinemaHall: createAction(DELETE_CINEMAHALL),
})
@withRouter
@CSSModules(styles)

class CinemaHallPage extends Component {
  constructor(props) {
    super(props);

    const initialCinemaHallData = {
      title: '',
      capacity: 0,
    };
    this.isNewHall = props.match.params.id === 'new';
    this.state = {
      cinemaHallData: props.cinemaHall || initialCinemaHallData,
      isEditing: false,
    };
  }

  componentDidMount() {
    const { id, cinemaHall, fetchCinemaHall } = this.props;

    if (!this.isNewHall && !cinemaHall) fetchCinemaHall(id);
  }

  componentDidUpdate({ cinemaHall: prevCinemaHall }) {
    const { cinemaHall } = this.props;

    if (!_isEqual(cinemaHall, prevCinemaHall)) {
      this.setState({ cinemaHallData: cinemaHall }); // eslint-disable-line
    }
  }

  toggleIsEditing = isEditing => this.setState({ isEditing });

  redirect = () => {
    const { history } = this.props;

    history.push('/admin/cinema halls');
  };

  handleEditButtonClick = () => {
    this.toggleIsEditing(true);
  };

  handleCancelButtonClick = () => {
    if (this.isNewHall) {
      this.redirect();
    } else {
      this.toggleIsEditing(false);
    }
  };

  handleSaveButtonClick = () => {
    const { cinemaHallData } = this.state;
    const { changeCinemaHall, addCinemaHall } = this.props;

    if (this.isNewHall) {
      addCinemaHall(cinemaHallData);
      this.redirect();
    } else {
      changeCinemaHall(cinemaHallData);
      this.toggleIsEditing(false);
    }
  };

  handleDeleteButtonClick = () => {
    const { id, deleteCinemaHall } = this.props;

    deleteCinemaHall(id);
    this.redirect();
  };

  handleFieldChange = (field, value) => {
    const { cinemaHallData } = this.state;

    this.setState({
      cinemaHallData: {
        ...cinemaHallData,
        [field]: value,
      },
    });
  };

  render() {
    const { cinemaHallData, isEditing } = this.state;
    const { className } = this.props;
    const fields = Object
      .keys(cinemaHallData || {})
      .filter(field => field !== 'id' && field !== 'created_at' && field !== 'updated_at')
      // to be changed
      .map(field => ({
        label: [field.charAt(0).toUpperCase(), ...field.slice(1)].join(''),
        value: cinemaHallData[field],
      }));
    const textProps = {
      color: 'white',
      fontWeight: '500',
      textAlign: 'center',
      textTransform: 'uppercase',
    };

    return (
      <div styleName="root" className={className}>
        {cinemaHallData && (
          <EditForm
            fields={fields}
            isEditing={isEditing || this.isNewHall}
            onFieldChange={this.handleFieldChange}
          />
        )}
        {!isEditing && !this.isNewHall && (
          <Button
            styleName="button"
            backgroundColor="yellow"
            onClick={this.handleEditButtonClick}
          >
            <Text message="edit" {...textProps} />
          </Button>
        )}
        {(isEditing || this.isNewHall) && (
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
        {!this.isNewHall && (
          <Button
            styleName="button"
            backgroundColor="red"
            onClick={this.handleDeleteButtonClick}
          >
            <Text message="delete" {...textProps} />
          </Button>
        )}
      </div>
    );
  }
}

CinemaHallPage.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object,
  cinemaHall: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  addCinemaHall: PropTypes.func,
  fetchCinemaHall: PropTypes.func,
  changeCinemaHall: PropTypes.func,
  deleteCinemaHall: PropTypes.func,
};

export default CinemaHallPage;
