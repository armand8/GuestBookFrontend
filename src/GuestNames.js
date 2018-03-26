import React, { Component } from 'react';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


export default class GuestNames extends Component {

    constructor(props) {
        super(props);
        this.state = {messages: ""};
    }

    render() {

        var messages = this.props.data.map((msg) => {
            return (
                <Grid item xs={5} key={msg._id}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">
                                {msg.signatureOfGuest}
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {msg.messageOfGuest}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )
        });

        return(
            <div>
                <div className="userInputTitle">
                    <Typography variant="headline" component="h3">
                        Guest Book Messages
                    </Typography>
                </div>
                <div className="messageCardsFrame">
                    <Grid container spacing={24} justify="center">
                        {messages}
                    </Grid>
                </div>
            </div>
        )
    }
}

