import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuery } from '../nav/reducers';
import { withRouter } from 'react-router';
import FormControl from './FormControl';
import styles from './SearchBar.scss';

class SearchBar extends PureComponent {

  static propTypes = {
    search: PropTypes.string,
    history: PropTypes.object.isRequired,
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    // this.props.newSearch(this.state.search);
    this.props.history.push(`/search?q=${this.state.search}`);
  }

  render() {
    const { search } = this.props;

    return (
      <form className={styles.search} onSubmit={e => this.handleSearch(e)}>
        <FormControl>
          <input type="search" placeholder="Search here..." value={search} onChange={this.handleChange} required/>
          <button type="submit" className="searchButton"> Search </button>
        </FormControl> 
      </form>
    );
  }
}

export default withRouter(connect(
  state => ({ search: getQuery(state) }),
  null
)(SearchBar));

