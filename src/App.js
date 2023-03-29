import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {        //props를 만들어서 값을 작성
    'id' : 1,
    'image' : 'https://placeimg.com/128/128/any/1',
    'name' : '홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {        //props를 만들어서 값을 작성
    'id' : 2,
    'image' : 'https://placeimg.com/128/128/any/2',
    'name' : '이순신',
    'birthday' : '920102',
    'gender' : '남자',
    'job' : '직장인'
  },
  {        //props를 만들어서 값을 작성
    'id' : 3,
    'image' : 'https://placeimg.com/128/128/any/3',
    'name' : '유관순',
    'birthday' : '861220',
    'gender' : '여자',
    'job' : '프로그래머'
  }
]
class App extends Component {
  render() {
    return (            //JSX는 반드시 하나의 태그로만 이루어짐(아래처럼 div로 모두 감싸면 됨)
      <div>
        {
          customers.map(c => {    //map을 사용해서 여러 사용자의 정보를 간결하게 표현함.
            return (              //map을 이용하려면 구분할 수 있는 key 가 있어야함.
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}
export default App;
