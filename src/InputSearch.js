import React from 'react';
import './App.css';
import { Layout, AutoComplete } from 'element-react';
import 'element-theme-default';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      textAdd : ''
    }
  }
  
  querySearch(queryString, cb) {
    const { todoList } = this.props;
    const results = queryString ? todoList.filter(this.createFilter(queryString)) : todoList;
    cb(results);
  }
  
  createFilter(queryString) {
    return (todoElement) => {
      return (todoElement.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
  }
  
  handleSelect(item) {
  
  }

  keyPress(e){
    if(e.keyCode == 13){
       console.log('value', e.target.value);
    }
 }

  
  render() {
    return (
      <Layout.Row className="inline-input border-grid">
        <Layout.Col span="24" className="tac">
          <AutoComplete
            placeholder="What needs to be done?"
            value={this.state.textAdd}
            fetchSuggestions={this.querySearch.bind(this)}
            onSelect={this.handleSelect.bind(this)}
            triggerOnFocus={false}
            onChange={(textSelection) => { this.state.textAdd = textSelection }}
            onKeyPress={ () => this.keyPress}
          ></AutoComplete>
        </Layout.Col>
      </Layout.Row>
    )
  }
  
}

export default InputSearch;
