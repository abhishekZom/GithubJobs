import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const Listing = ({ classes }) => {
    return (
        <Card className={ classes.container }>
            <CardContent>
                <Typography>
                    skdfksd fjskdf
                </Typography>
                <Typography>
                    skdfksd fjskdf
                </Typography>
                <Typography>
                    skdfksd fjskdf
                </Typography>
            </CardContent>
            <CardActions>
                <Button>
                    view
                </Button>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(Listing);