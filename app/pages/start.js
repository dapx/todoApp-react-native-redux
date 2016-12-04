import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ListView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action-creators/index';
let nextTodoId = 0;


class Start extends Component {

  constructor(props){
    super(props);
  }

  getTodos(text){
     this.props.dispatch(actionCreators.addTodo(text));
  }

  toggleTodo(id){
    this.props.dispatch(actionCreators.toggleTodo(id));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <Text onPress={() => this.getTodos('Teste')}>
      Add Todo
      </Text>
      { this.props.todos.map((todo) => {
          return (<Text key={todo.id} onPress={() => this.toggleTodo(todo.id)}>{todo.text}</Text>);
        })
      }
      </ScrollView>
    );
  }
}


function mapStateToProps(state) {
  return { todos: state.todos };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps)(Start);
