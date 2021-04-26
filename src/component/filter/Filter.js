import React from 'react';
import { connect } from 'react-redux';
import contactAction from '../../redux/contact/contact-action';

import styles from './filter.module.css';
const Filter = ({ value, onChange }) => {
	return (
		<input
			className={styles.search}
			type="text"
			value={value}
			placeholder="Search"
			onChange={onChange}
		/>
	);
};
const mapStateToProps = state => ({
	value: state.contactList.filter,
});
const mapDispatchToProps = dispatch => ({
	onChange: e => dispatch(contactAction.changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
