import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment';
import { withRouter  } from 'react-router-dom';

import fetchJobDetails from '../../actions/job';
import appConstants from  '../../constants/appConstants';
import styles from './styles';

const Listing = (props) => {

    const daysCalculator = () => {
        const today = moment();
        let jobPostedOn = props.jobData.created_at;
        const subArr = jobPostedOn.split(' ');
        const month = subArr[1];
        const formatted = subArr[5] + '-' + subArr[2] + '-' + appConstants.MONTH_MAPPINGS[month] + ' ' + subArr[3] + 'Z';
        jobPostedOn = moment(formatted);
        return today.diff(jobPostedOn, 'day');
    }

    const onJobTitleClick = async (e, job) => {
        e.preventDefault();
        await fetchJobDetails(props.dispatch, job.id)
        props.history.push('/listings/details');
    }

    return (
        <Card className={ props.classes.container }>
            <CardContent>
                <a href="#" className={ props.classes.jobTitle } onClick={ (e) => { onJobTitleClick(e, props.jobData) } }>
                    { props.jobData.title }
                </a>
                <span className={ props.classes.companyName }>
                    { props.jobData.company }
                </span>&nbsp;-&nbsp;
                <span className={ props.classes.jobType }>
                    { props.jobData.type }
                </span>
                <span className={ props.classes.jobLocation }>
                    { props.jobData.location }
                </span>
                <span className={ props.classes.createdAt }>
                    { `${daysCalculator()} days ago` }
                </span>
            </CardContent>
        </Card>
    )
}

export default withRouter(connect()(withStyles(styles)(Listing)));