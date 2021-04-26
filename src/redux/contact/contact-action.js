import { createAction } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';
const handleForm = createAction('contacts/handleForm', ({ name, number }) => {
	return {
		payload: {
			id: uuidv4(),
			name,
			number,
		},
	};
});

const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/changeFilter');

export default { handleForm, deleteContact, changeFilter };
