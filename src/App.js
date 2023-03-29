import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";



const customers = [
  {        //props를 만들어서 값을 작성
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any/1',
    'name' : '홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {        //props를 만들어서 값을 작성
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/any/2',
    'name' : '이순신',
    'birthday' : '920102',
    'gender' : '남자',
    'job' : '직장인'
  },
  {        //props를 만들어서 값을 작성
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/any/3',
    'name' : '유관순',
    'birthday' : '861220',
    'gender' : '여자',
    'job' : '프로그래머'
  }
]
class App extends Component {
  render() {
    const { classes } = this.props;
    return (            //JSX는 반드시 하나의 태그로만 이루어짐(아래처럼 div로 모두 감싸면 됨)
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {    //map을 사용해서 여러 사용자의 정보를 간결하게 표현함.
                return (              //map을 이용하려면 구분할 수 있는 key 가 있어야함.
                  <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default App;
