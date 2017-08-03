import PropTypes from 'prop-types';
import React from 'react';
import createClass from 'create-react-class';
import {connect} from 'react-redux';
import {setCheck} from '../actions/check';

const mapStateToProps = state => ({
  checked: state.check
});

export const App = createClass({
  handleCheckChange(event) {
    this.props.dispatch(setCheck(event.target.checked));
  },

  render() {
    return (
      <section>
        <h1>
          {this.props.name}
        </h1>
        <label>
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={this.handleCheckChange}
          />
          Click this
        </label>
      </section>
    );
  }
});

App.PropTypes = {
  checked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
