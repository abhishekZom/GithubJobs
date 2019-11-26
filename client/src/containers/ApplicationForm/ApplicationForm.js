import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter  } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Card, Button , TextField} from '@material-ui/core';

import styles from './styles';
import { saveFileDetails } from '../../actions/jobApplication';

const ApplicationForm = (props) => {

    useEffect(() => {
        !props.selectedJobFetchStatus && props.history.push('/');
    })

    const renderTextField = ({ input, label, meta: { touched, error }, ...custom}) => {
        return(<TextField
            label={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    )}

    const handleFileChange = (e) => {
        saveFileDetails(props.dispatch, e.target.files[0])
    }

    return (
        <section className={ props.classes.wrapper }>
            <Card className={ props.classes.container }>
                <CardContent>
                    <div>
                        <h2>
                            <span>Application Form</span>
                        </h2>
                    </div>
                    <hr/>
                    <div>
                        <form onSubmit={ props.handleSubmit }>
                            <div>
                                <Field
                                    name="name"
                                    placeholder="e.g. Dave Buxter"
                                    label="name"
                                    component={ renderTextField }
                                    className={ props.classes.name }
                                >
                                </Field>
                            </div>
                            <div>
                                <Field
                                    name="email"
                                    label="email"
                                    placeholder="e.g. abc@xyz.com"
                                    component={ renderTextField }
                                    className={ props.classes.email }
                                >
                                </Field>
                            </div>
                            <div>
                                <Field
                                    name="cover"
                                    label="cover letter"
                                    placeholder="tell us about yourself ..."
                                    component={ renderTextField }
                                    className={ props.classes.email }
                                >
                                </Field>
                            </div>
                            <br/>
                            <div>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                    onChange={ handleFileChange }
                                />
                                <label htmlFor="raised-button-file">
                                    <b>resume: </b>&nbsp;
                                    <Button variant="contained" size="small" component="span" >
                                        Upload
                                    </Button>&nbsp;{props.applicationFormFile.name && <span>
                                        {props.applicationFormFile.name}
                                    </span>}
                                </label> 
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={props.classes.submitBtn}
                                    type="submit"
                                > Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedJobFetchStatus: state.selectedJob.fetched,
        applicationFormFile: state.applicationFormData.file
    }
}
export default withRouter(connect(mapStateToProps)(
    reduxForm({
        form: 'applicationForm',
    })(withStyles(styles)(ApplicationForm))
));

