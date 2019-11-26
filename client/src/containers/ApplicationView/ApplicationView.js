import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Card } from '@material-ui/core';

import styles from './styles';

const ApplicationForm = (props) => {

    useEffect(() => {
        !props.applicationFormStatus && props.history.push('/');
    })

	return (
		<section className={ props.classes.wrapper }>
			<Card className={ props.classes.container }>
				<CardContent>
					<div>
						<h2>
							<span className={ props.classes.headerLg }>Congratulations!</span>
						</h2>
						<h4>
                            <span className={props.classes.headerMd}>Your application has been submitted successfully!</span>
						</h4>
					</div>
					<hr />
					<div>
                        <p className={props.classes.nameContainer}><em>Name: </em><span>{ props.applicationForm.name }</span></p>
                        <p className={props.classes.emailContainer}><em>Email: </em><span>{ props.applicationForm.email }</span></p>
                        <div className={props.classes.coverLetterContainer}>
                            <p><b>Cover Letter</b></p>
                            <p>
                                { props.applicationForm.cover }
                            </p>
                        </div>
                        <div className={props.classes.coverLetterContainer}>
                            <span><b>Resume: </b></span>&nbsp;
                            <span>
                                {props.applicationFormFile.name }
                            </span>
                        </div>
                        <br/>
                        <p><Link to='/'>Search more jobs</Link></p>
                    </div>
				</CardContent>
			</Card>
		</section>
	);
};

const mapStateToProps = (state) => {
    return {
        applicationForm: state.applicationFormData.data,
        applicationFormStatus: state.applicationFormData.sumitted,
        applicationFormFile: state.applicationFormData.file
    }
}

export default withRouter(connect(
    mapStateToProps)(withStyles(styles)(ApplicationForm)
));
