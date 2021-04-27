import { Component } from 'react';

import ContactForm from './component/form';
import ContactList from './component/ContactList';
import Filter from './component/filter';
import { connect } from 'react-redux';
import contactSelectors from './redux/contact/contact-selectors';

import contactOperation from './redux/contact/contact-operations';
class App extends Component {
	componentDidMount() {
		this.props.fetchContacts();
	}
	render() {
		return (
			<section>
				<h1>Phonebook</h1>
				<ContactForm />

				<h2>Contacts</h2>
				<Filter />
				<ContactList />
			</section>
		);
	}
}
const mapStateToProps = state => {
	isLoadingContacts: contactSelectors.getLoading(state);
};
const mapDispatchToProps = dispatch => {
	return {
		fetchContacts: () => dispatch(contactOperation.fetchContact()),
	};
};
export default connect(null, mapDispatchToProps)(App);
