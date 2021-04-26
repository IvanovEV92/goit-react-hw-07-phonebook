import React from 'react';

import ContactForm from './component/form';
import ContactList from './component/ContactList';
import Filter from './component/filter';

const App = () => {
	return (
		<section>
			<h1>Phonebook</h1>
			<ContactForm />

			<h2>Contacts</h2>
			<Filter />
			<ContactList />
		</section>
	);
};

export default App;
