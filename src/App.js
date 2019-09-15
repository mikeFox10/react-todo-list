import React from 'react';
import './App.css';
import 'element-theme-default';
import InputSearch from './InputSearch';


class App extends React.Component {
  state = {
    todoList: [
      { "value": "vue", "address": "https://github.com/vuejs/vue" },
      { "value": "element", "address": "https://github.com/ElemeFE/element" },
      { "value": "cooking", "address": "https://github.com/ElemeFE/cooking" },
      { "value": "mint-ui", "address": "https://github.com/ElemeFE/mint-ui" },
      { "value": "vuex", "address": "https://github.com/vuejs/vuex" },
      { "value": "vue-router", "address": "https://github.com/vuejs/vue-router" },
      { "value": "angular", "address": "https://github.com/angular" }
    ],
  };

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
        <InputSearch 
          todoList={this.state.todoList}
        />
      </header>
    </div>
    )
  };
}

export default App;
