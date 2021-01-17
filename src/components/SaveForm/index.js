import { memo, useCallback, useEffect, useState } from 'react';

import * as S from './styles';
import api from '../../utils/api'

const INITIAL_PEOPLE = {
	name: '',
	lastName: '',
	gender: 'male',
	birthYear: '',
};

const SaveForm = ({ searchPeople, people: peopleData }) => {
  const [people, setPeople] = useState(INITIAL_PEOPLE);
  
  useEffect(() => {
    if(peopleData){
      setPeople(peopleData)
    }
  }, [peopleData])

	const handleChange = useCallback((event) => {
		const { name, value } = event.target;

		setPeople((oldPeople) => ({ ...oldPeople, [name]: value }));
	}, [])

	const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if(people.id){
      api.put(`/people/${people.id}`, {
        ...people
      });
    }

    else {
      api.post('/people', {
        ...people
      });
    }
		searchPeople();
		setPeople(INITIAL_PEOPLE);
	}, [people, searchPeople])

	return (
		<S.FormContainer onSubmit={handleSubmit}>
		<fieldset>
			<label htmlFor="name">
				Nome:
				<input required id="name" name="name" value={people.name} onChange={handleChange} />
			</label>

			<label htmlFor="lastName">
				Sobrenome:
				<input required id="lastName" name="lastName" value={people.lastName} onChange={handleChange} />
			</label>

			<label htmlFor="gender">
				Gênero:
				<select id="gender" name="gender" value={people.gender} onChange={handleChange}>
					<option value="male">Masculino</option>
					<option value="female">Feminino</option>	
				</select>
			</label>

			<label htmlFor="birthYear">
				Ano nascimento:
				<input required type="number" id="birthYear" name="birthYear" value={people.birthYear} onChange={handleChange} />
			</label>
		</fieldset>
		<button type="submit">{people.id ? 'Editar' : 'Criar'}</button>
	</S.FormContainer>
	)
}

export default memo(SaveForm);