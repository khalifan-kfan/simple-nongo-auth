import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


class App extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value

        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()
        const userobj = {
            username: this.state.username,
            password: this.state.password
        }
        //  after window.location='/Profile'
        axios.post('https://newuser-9f1a7ecf-505e-4566-808c.cranecloud.io/app/signup', userobj)
            .then(response => alert(response.data.username + " added"))
        this.setState({
            username: '',
            password: ''
        })


    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div classNamem='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                                placeholder='username'
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder='passwood'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className='form-control form-group'
                            />
                            <input type='submit' className='btn btn-danger btn-block' value='Submit' />

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;