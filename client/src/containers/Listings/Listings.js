import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Listing from '../../components/Listing';
import styles from './styles';

const Listings =(props) => {
        const { classes } = props;

    useEffect(() => {
        !props.jobsFetchStatus && props.history.push('/');
    });

    return (
        <section className={ classes.parent }>
            <div className={ classes.container }>
                { props.jobsList && props.jobsList.map((ele) => {
                    return <Listing jobData={ele}></Listing>
                }) }
            </div>
        </section>
    )
}

const mapStatesToProps = (state) => ({
    jobsList: state.jobs.data || [{dfdf: 'hfsjdf'}],
    jobsFetchStatus: state.jobs.fetched
});

export default withRouter(connect(mapStatesToProps)(withStyles(styles)(Listings)));