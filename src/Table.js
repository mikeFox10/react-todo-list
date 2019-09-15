import React, { Component } from 'react';
import { Table } from 'element-react';


class TableList extends React.Component {
    
    constructor(props) {
        super(props);
      
        this.state = {
          columns: [
            {
              prop: 'value',
            },
            {
                type: 'selection'
            },
          ],
        }
      }
      
      render() {
        return (
          <Table
            style={{width: '60%'}}
            columns={this.state.columns}
            data={this.props.toDoList}
            border={true}
            //height={300}
            onSelectChange={(selection) => { console.log(selection) }}
            onSelectAll={(selection) => { console.log(selection) }}
          />
        )
      }
}

export default TableList;