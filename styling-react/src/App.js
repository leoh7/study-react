import React, { Component } from 'react';
// import classNames from 'classnames/bind';
// import styles from './App.scss';
// const cx = classNames.bind(styles);
// console.log(styles);
import Button from './components/Button';
import StyledButton from './components/StyledButton'

class App extends Component {
  render() {
		// const isBlue = true;

    return (
			// <div className={cx('box', {
			// 	blue: isBlue
			// })}>
			// 	<div className={cx('box-inside')}/>
			// </div>
			<div>
				<div>
					<Button>버튼</Button>
				</div>
				<div>
					<StyledButton big>버튼</StyledButton>
				</div>
			</div>
    );
  }
}

export default App;
