import React, {Component} from 'react';

import Heading from './Heading';
import UsersList from './UsersList';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: ['Adam', 'Olga', 'Kasia', 'Karol']
        }
    }

    addUser = (e) => {
        e.preventDefault();


        this.setState(prevState=>{
            return({users: [...prevState.users, this.userInput.value]})
        });

    }


    removeUser = (indexToDelete) => {

        let filteredArray = this.state.users.filter((elem, index)=>{
            return index !== indexToDelete;
        });
        
        this.setState({users: filteredArray});

    }

    render() {

   
        return (
            <div className="users">
                <Heading text="User's list" />
                
                <form onSubmit={this.addUser} className="add-user-form">
                    <input type="text" placeholder="Nazwa użytkownika" ref={input => this.userInput = input} />
                    <button>Add user</button>
                </form>

                <UsersList usersList={this.state.users} deleteUser={this.removeUser} />
            </div>
        );
    }
}

export default Users;