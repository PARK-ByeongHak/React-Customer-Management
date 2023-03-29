import React from "react";

class Customer extends React.Component {//React컴포넌트가 있으니 this키워드를 사용하여 출력
    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;