import React from 'react';
import style from './contactList.module.css';
import { connect } from 'react-redux';
import contactAction from '../../redux/contact/contact-action';
const ContactList = ({ contacts, delContact }) => {
	return (
		<ul className={style.contactList}>
			{contacts.map(item => (
				<li key={item.id} className={style.contactList__item}>
					<span>{item.name}</span>
					<span>{item.number}</span>
					<button
						className={style.contactList__button}
						onClick={() => delContact(item.id)}
					>
						X
					</button>
				</li>
			))}
		</ul>
	);
};
const mapStateToProps = state => {
	const { items, filter } = state.contactList;
	const normalizedFilter = filter.toLowerCase();
	const visibleContacts = items.filter(contact =>
		contact.name.toLowerCase().includes(normalizedFilter),
	);

	return {
		contacts: visibleContacts,
	};
};
const mapDispatchToProps = dispatch => ({
	delContact: id => dispatch(contactAction.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
