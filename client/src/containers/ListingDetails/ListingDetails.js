import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link, withRouter  } from 'react-router-dom';

import styles from './styles';

const ListingDetails = (props) => {

    useEffect(() => {
        !props.selectedJobFetchStatus && props.history.push('/');
    })

    return (
        <section className={ props.classes.wrapper }>
            <Card className={ props.classes.container }>
                <CardContent>
                    <div>
                        <p>
                            <span>{ props.job.type }</span>&nbsp;/&nbsp;
                            <span>{ props.job.location }</span>
                        </p>
                        <h2>
                            <span>{ props.job.title }</span>
                            <Button className={ props.classes.applyButton } color="primary" variant="contained">
                                <Link to="/listings/apply" className={ props.classes.applyLink}>Apply</Link>
                            </Button>
                        </h2>
                    </div>
                    <hr/>
                    <div>
                        <p> { props.job.title } </p>
                        <p> { props.job.company } </p>
                        <p> { props.job.location } </p>
                    </div>
                    <div>
                        <p className= { props.classes.description }> { props.job.description } </p>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

const mapStatesToProps = (state) => ({
    job: state.selectedJob.data || [{ dfdf: 'hfsjdf' }],
    selectedJobFetchStatus: state.selectedJob.fetched
});

export default withRouter(connect(mapStatesToProps)(withStyles(styles)(ListingDetails)));