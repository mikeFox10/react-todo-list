import React from 'react';
import './App.css';
import 'element-theme-default';
import InputSearch from './InputSearch';
import Table from './Table';


class App extends React.Component {
  state = {
    toDoList: [
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
          todoList={this.state.toDoList}
        />
        <Table toDoList = {this.state.toDoList}/>
      </header>
    </div>
    )
  };
}

export default App;
