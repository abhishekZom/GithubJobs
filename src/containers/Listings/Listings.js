import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Listing from '../../components/Listing';
import styles from './styles';
import fetchJobsList from '../../actions/listings';

class Listings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetchJobsList(this.props.dispatch);
    }

    render() {
        const { classes } = this.props;
        return (
            <section className={ classes.parent }>
                <div className={ classes.container }>
                    {/* { this.props.jobsList && this.props.jobsList.map((ele) => {
                        return <Listing></Listing>
                    }) } */}
                </div>
            </section>
        )
    }
}

const mapStatesToProps = (state) => ({
    jobsList: state.jobs || []
});

Listings = withStyles(styles)(Listings);

export default connect(mapStatesToProps)(Listings);