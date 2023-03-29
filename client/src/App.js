import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const responce = await fetch('/api/customers');
    const body = await responce.json();
    return body;
  }

  render() {
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
            {this.state.customers ? this.state.customers.map(c => {    //map을 사용해서 여러 사용자의 정보를 간결하게 표현함.
                return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );
              }) : "" }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default App;
