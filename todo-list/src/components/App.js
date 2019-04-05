import React, { Component} from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input: ''
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  render() {
    const { input } = this.state; // 비구조화 할당
    const {
      handleChange
    } = this; // 비구조화 할당

    return(
      <PageTemplate>
        <TodoInput onChange={handleChange} value={input} />
        <TodoList />
      </PageTemplate>
    )
  }
}

export default App;