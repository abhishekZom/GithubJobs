import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Header = ({ classes }) => {
    return (
        <header className={classes.container}>
            <span className={classes.text}>GitHub</span>
        </header>
    )
}

export default withStyles(styles)(Header);

