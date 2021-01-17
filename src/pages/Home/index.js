import { memo, useCallback, useEffect, useState } from 'react';

import Person from '../../components/Person';

import * as S from './styles';
import api from '../../utils/api'

const INITIAL_PEOPLE = {
	name: '',
	lastName: '',
	gender: 'male',
	birthYear: '',
	// hobbies: ['hobbie 1'],
	// skills: [''],
};

const Home = () => {
	const [people, setPeople] = useState(INITIAL_PEOPLE);
	const [peopleList, setPeopleList] = useState([]);
	// const [peopleHobbies, setPeopleHobbies] = useState(['hobbie 1'])

	useEffect(() => {
		api.get('/people').then(({ data }) => setPeopleList(data))
	}, [])

	const handleAddInput = useCallback((type) => {
		if(type === 'hobbie') {
			const hobbies = people.hobbies;
			hobbies.push(`hobbie ${hobbies.length + 1}`)
			// console.log('hobbies')
			// console.log(hobbies)
			setPeople((oldPeople) => ({ ...oldPeople, hobbies }))
		}
	}, [people.hobbies])

	const handleRemoveInput = useCallback((type, index) => {
		if(type === 'hobbie') {
			const hobbies = people.hobbies;
			hobbies.splice(index , 1);
			setPeople((oldPeople) => ({ ...oldPeople, hobbies }))
		}
	}, [people.hobbies])

	const handleChange = useCallback((event) => {
		const { name, value } = event.target;

		if(name.includes('hobbie')) {
			const [, inputIndex] = name.split('-');
			console.log('inputIndex')
			console.log(inputIndex)
			setPeople((oldPeople) => ({	
				...oldPeople, 
				hobbies: oldPeople.hobbies.map((hobbie, currentIndex) => currentIndex === Number(inputIndex) ? value : hobbie)
			}));
		}

		else {
			setPeople((oldPeople) => ({ ...oldPeople, [name]: value }));
		}

		// console.log(event);

	}, [])

	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		console.log('submit');
		api.post('/people', {
			...people
		})
	}, [people])

	return (
		<S.HomeSection>
			<S.HomeForm onSubmit={handleSubmit}>
				<fieldset>
					<label htmlFor="name">
						Nome:
						<input id="name" name="name" value={people.name} onChange={handleChange} />
					</label>

					<label htmlFor="lastName">
						Sobrenome:
						<input id="lastName" name="lastName" value={people.lastName} onChange={handleChange} />
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
						<input type="number" id="birthYear" name="birthYear" value={people.birthYear} onChange={handleChange} />
					</label>
				</fieldset>

				{/* <fieldset>
					<div>
						<button onClick={() => handleAddInput('hobbie')}>+</button>
						Hobbies: 
					</div>
					{people.hobbies.map((hobbie, index) => (
						<label key={hobbie} htmlFor={`hobbie-${index}`}>
							<button onClick={() => handleRemoveInput('hobbie', index)}>-</button>
							<input id={`hobbie-${index}`} name={`hobbie-${index}`} value={hobbie}  onChange={handleChange}/>
						</label>
					))}
				</fieldset> */}
					{/* onChange={({ target }) => setPeopleHobbies((oldPeopleHobbies) => oldPeopleHobbies.map((item, i) => (i === index ? item : target.value)))} */}

				{/* <fieldset>
					<label htmlFor="skills">
						Habilidades:
						<input id="skills" name="skills" value={people.skills} onChange={handleChange} />
					</label>
				</fieldset> */}
				<button type="submit">Criar</button>
			</S.HomeForm>

			<S.PeopleList>
				<input placeholder="Search for a person" />
				{console.log(people)}
				{peopleList.map(item => <Person key={item.id} infos={item} />)}
			</S.PeopleList>

		</S.HomeSection>
	)
}

export default memo(Home);

// name
// lastName
// gender
// birthYear
// hobbies
// skills