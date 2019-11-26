import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import fetchJobsList from '../actions/listings';
import submitApplicationForm from '../actions/jobApplication';
import Header from '../components/Header';
import Landing from './Landing';
import Listings from './Listings';
import ListingsDetails from './ListingDetails';
import ApplicationForm from './ApplicationForm';
import ApplicationView from './ApplicationView';

import './App.scss';
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedLanguage: ''
		};
	}

	languageSelectionHandler = (e) => {
		this.setState({
			selectedLanguage: e.target.value
		});
	};

	actionOnLandingFormSuccess = () => {
		this.props.history.push('/listings');
	};

	landingFormSubmitHandler = (values) => {
        if (values && !this.props.jobsFetchStatus) {
            values.language && fetchJobsList(this.props.dispatch, values.language, this.actionOnLandingFormSuccess);
        } else return null;
	};

	resetSelectedLanguage = () => {
		this.setState({
			selectedLanguage: ''
		});
	};

	onApplicationFormSubmit = (values) => {
            submitApplicationForm(this.props.dispatch, values);
            this.props.history.push('/listings/apply/success');
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<Landing
								{...props}
								onLanguageSelect={this.languageSelectionHandler}
								onSubmit={this.landingFormSubmitHandler}
							/>
						)}
					/>
					<Route exact path="/listings" component={Listings} />
					<Route path="/listings/details" component={ListingsDetails} />
					<Route
						exact
						path="/listings/apply"
						render={(props) => <ApplicationForm {...props} onSubmit={this.onApplicationFormSubmit} />}
					/>
					<Route path="/listings/apply/success" component={ApplicationView} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        jobsFetchStatus: state.jobs.fetching
    }
}

App = connect(mapStateToProps)(App);
export default withRouter(App);
