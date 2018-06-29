import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../profile/reducers';
import PropTypes from 'prop-types';
class Home extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
  };

  
  render() {
    const { user } = this.props;

    return (
      <div>

      </div>
    );
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  null,
)(Home);

