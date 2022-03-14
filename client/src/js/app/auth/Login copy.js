import React from "react";
import AccountStore from "../../stores/AccountStore";
import { Link } from 'react-router-dom';
import LoginStore from "../../stores/LoginStore";

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            isManager: LoginStore.getAuth(),
        };
    }

    componentWillMount(){
        LoginStore.on("change", () => {
            this.setState({
                isManager: LoginStore.isManager,
            });
            console.log("isManager3: " + this.state.isManager);
        })
    }

    render(){
        console.log("isManager2: " + this.state.isManager);
        if(this.state.isManager){
            return (
                <div>
                    <h3>Your UserID: {AccountStore.getUserId()}</h3>
                    <Link to="/search2/" style={{color:'black'}}>
                        <button type="button">Go to Search</button>
                    </Link>
                    <br/>
                    <Link to="/logManagement/" style={{color:'black'}}>
                        <button type="button">Go to Log Management</button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Your UserID: {AccountStore.getUserId()}</h3>
                    <Link to="/search2/" style={{color:'black'}}>
                        <button type="button">Go to Search</button>
                    </Link>
                </div>
            );
        }
    }
}