import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import GuestBook from './GuestBook';

const backURL = "https://guestbookexample.herokuapp.com/api/signatures"


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadMessagesFromServer = this.loadMessagesFromServer.bind(this);
        this.handleMessagesSubmit = this.handleMessagesSubmit.bind(this);
        this.handleMessagesDelete = this.handleMessagesDelete.bind(this);
    }
    loadMessagesFromServer() {
        axios.get(backURL)
            .then(res => {
                this.setState({ data: res.data });
            })
    }
    handleMessagesSubmit(comment) {

        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        axios.post(backURL, comment)
            .catch(err => {
                console.error(err);
                this.setState({ data: comments });
            });
    }
    handleMessagesDelete(id) {

    }
    componentDidMount() {
        this.loadMessagesFromServer();
    }

    render() {
        return (
            <div className="App">
                <GuestBook
                    onMessagesSubmit={ this.handleMessagesSubmit }
                    onMessagesDelete={ this.handleMessagesDelete }
                    data={ this.state.data }/>
            </div>
        );
    }
}

export default App







