import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {        //props를 만들어서 값을 작성
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
}
class App extends Component {
  render() {
    return (
        <Customer         //전달 받은 props를 이용하여 구현
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
        />
    );
  }
}
export default App;
