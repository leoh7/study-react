import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';

// 13가지 색상 중 랜덤으로 선택하는 함수
export function getRandomColor() {
  const colors = [
    '#495057',
    '#f03e3e',
    '#d6336c',
    '#ae3ec9',
    '#7048e8',
    '#4263eb',
    '#1c7cd6',
    '#1098ad',
    '#0ca678',
    '#37b24d',
    '#74b816',
    '#f59f00',
    '#f76707'
  ];
  // 0부터 12까지 랜덤 숫자
  const random = Math.floor(Math.random() * 13);
  // 랜덤한 색상 반환
  return colors[random];
}

// store 안의 state 값을 props로 연결
const mapStateToProps = (state) => ({counters: state.counters});
const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch(actions.setColor({index, color}));
  }
})

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;