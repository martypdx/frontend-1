import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.scss';
export default class Nav extends Component {

  render() {

    return (
      <footer>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}
