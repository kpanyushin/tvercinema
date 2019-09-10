import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';

import { movieSelector } from '_controllers/movies/selectors';

import LinkTo from '_components/LinkTo';
import PreviewCard from '_components/PreviewCard';

import styles from './Movie.scss';

@connect((state, { id }) => ({
  movie: movieSelector(state, id),
}))
@CSSModules(styles)

class Movie extends PureComponent {
  render() {
    const { className, movie: { id, title } } = this.props;

    return (
      <LinkTo className={className} linkTo={`/admin/movies/${id}`}>
        <PreviewCard
          styleName="previewCard"
          title={title}
        />
      </LinkTo>
    );
  }
}

Movie.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.object,
};

export default Movie;
