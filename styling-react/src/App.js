import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';

console.log(styles);
const cx = classNames.bind(styles);
class App extends Component {
  render() {
    return (
			<div className={cx('box', 'blue')}>

			</div>
    );
  }
}

export default App;
