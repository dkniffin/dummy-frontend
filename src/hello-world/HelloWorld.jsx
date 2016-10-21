import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Greeting from './Greeting';

import { getName } from './helloWorldActions';

const propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const App = ({ name, onSubmit }) => {
  return (
    <div>
      <Greeting name={name} />
      <button
        id="name-button"
        onClick={onSubmit}
      >
        Get Name
      </button>
    </div>
  );
};

App.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    ...state.helloWorld
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(getName());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
