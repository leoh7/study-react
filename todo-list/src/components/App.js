import React, { Component} from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input: '',
    todos: [
      { id:0, text: '리액트 공부하기', done: true },
      { id:1, text: '컴포넌트 스타일링 해보기', done: false }
    ]
  }

  // todo 아이템 토글하기
  handleToggle = (id) => {
    // id로 배열의 인덱스를 찾음
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // 찾은 데이터의 done 값을 반전시킴
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    }

    // slice를 사용하여 찾은 index 전후의 데이터를 복사,
    // 그 사이에는 변경된 todo 객체를 넣어줌
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  render() {
    const { input, todos } = this.state; // 비구조화 할당
    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove
    } = this; // 비구조화 할당

    return(
      <PageTemplate>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </PageTemplate>
    )
  }
}

export default App;