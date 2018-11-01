import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import { REQUESTED_USER } from '../actions';
import UsersTable from './UsersTable';


class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users.length > 0 ? <UsersTable users={users} /> : <Loader active />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch({ type: REQUESTED_USER }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
