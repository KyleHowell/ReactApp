import PropTypes from 'prop-types';
import React from 'react';
import createClass from 'create-react-class';
import {connect} from 'react-redux';
import {setBackgroundColor, setCheck} from '../actions/actions';

const mapStateToProps = state => ({
  backgroundColor: state.app.backgroundColor,
  checked: state.app.check
});

export const App = createClass({
  handleCheckChange(event) {
    this.props.dispatch(setCheck(event.target.checked));
  },

  changeBackgroundColor() {
    const colors = ['pink', 'yellow', 'blue', 'green', 'orange'];
    const newColor = colors[Math.floor(Math.random() * 5)];
    this.props.dispatch(setBackgroundColor(newColor));
  },

  render() {
    const headerStyle = {
      color: 'black',
      backgroundColor: this.props.backgroundColor
    };

    return (
      <section>
        <h1 style={headerStyle} onClick={this.changeBackgroundColor}>
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
  backgroundColor: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
