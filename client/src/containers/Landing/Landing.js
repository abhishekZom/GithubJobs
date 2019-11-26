import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import styles from './styles';
import { required } from '../../utils/validations';

const Landing = (props) => {
    const { classes, onLanguageSelect, handleSubmit } = props;

    const renderTextField = ({ input, label, meta: { touched, error }, ...custom}) => {
        return(<TextField
            hintText={label}
            label={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    )}
    return (
        <section className={ classes.container }>
            <span className={ classes.text }>Welcome to Github's job search portal!</span><br/>
            <span className={ classes.text }>Search any job by your favourite programming languages.</span><br/>
            <form onSubmit={handleSubmit}>
                <Field
                    component={ renderTextField }
                    name="language"
                    className={ classes.input }
                    placeholder="e.g. javascript"
                    type="text"
                    onChange={ onLanguageSelect }
                    validate={ [required] }
                >
                </Field>
                <br/>
                <Button type="submit" className={ `${classes.searchButton}` } variant="contained" color="primary">
                    {props.jobs.fetching ?
                    (<span>
                            ...loading
                    </span>):
                    (<span>
                        Submit
                    </span>)}
                </Button>
            </form>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: 'landingForm'
})(withStyles(styles)(Landing)));