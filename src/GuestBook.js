import React, { Component } from 'react';
import axios from "axios/index";

import GuestNames from './GuestNames'

import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 370,
        textAlign: 'center',
    },
    paper:{
        width: 370,
        textAlign: 'center',
    },
    card: {
        minWidth: 275,
    },

});



class GuestBook extends Component {

    // Constructor est appelé lors de l'instanciation d'un objet de la classe
    constructor(props) {
        super(props); // super permet d'utiliser this à la suite, sinon undefined
        this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
        this.handleMessageOfGuest = this.handleMessageOfGuest.bind(this);
        this.state = {
            SignatureOfGuest: "",
            MessageOfGuest: "",
        };
    }

    handleSignatureOfGuest(event) {
        this.setState({ SignatureOfGuest: event.target.value });
    }
    handleMessageOfGuest(event) {
        this.setState({ MessageOfGuest: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        let signatureOfGuest = this.state.SignatureOfGuest.trim();
        let messageOfGuest = this.state.MessageOfGuest.trim();
        if (!signatureOfGuest || !messageOfGuest) {
            return;
        }
        this.props.onMessagesSubmit({ signatureOfGuest: signatureOfGuest, messageOfGuest: messageOfGuest });
        this.setState({ SignatureOfGuest: '', MessageOfGuest: '' });

    };

    render() {

        const { classes } = this.props;

        return (
            <div className="userInputsPaper">
                <AppBar position="fixed" color="default" className="abcd">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Mrs and Mr Doe - Wedding Guest Book
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className="userInputs">
                    <Paper elevation={4}>
                        <div className="userInputTitle">
                            <Typography variant="headline" component="h3">
                                Leave your message !
                            </Typography>
                        </div>
                        <TextField
                            className={classes.textField}
                            id="name"
                            name="SignatureOfGuest"
                            label="Name"
                            value={this.state.SignatureOfGuest}
                            onChange={this.handleSignatureOfGuest}
                            margin="normal"
                        /><br/>
                        <TextField
                            id="message"
                            name="MessageOfGuest"
                            label="Message"
                            multiline
                            rowsMax="4"
                            className={classes.textField}
                            value={this.state.MessageOfGuest}
                            onChange={this.handleMessageOfGuest}
                            margin="normal"
                        /><br/>
                        <div className='button'>
                            <Button
                                variant="raised"
                                type="submit"
                                onClick={this.handleSubmit}>
                                Submit to Guest Book
                            </Button>
                        </div>
                    </Paper>
                    <div className="divider">
                        <Divider />
                    </div>
                </div>
                <GuestNames
                    onMessagesSubmit={ this.props.onMessagesSubmit }
                    onMessagesDelete={ this.props.onMessagesDelete }
                    data={ this.props.data }/>
            </div>)
    }

}


export default withStyles(styles)(GuestBook);