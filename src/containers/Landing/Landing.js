import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Input, Button } from '@material-ui/core';

import styles from './styles';

class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <section className={ classes.container }>
                <span className={ classes.text }>Welcome to Github's job search portal!</span><br/>
                <span className={ classes.text }>Search any job by your favourite programming languages.</span><br/>
                <Input className={ classes.input } placeholder="e.g. javascript"></Input><br/><br/>
                <Button className={ `${classes.searchButton}` } variant="contained" color="primary">Search</Button>
            </section>
        )
    }
}

export default withStyles(styles)(Landing);