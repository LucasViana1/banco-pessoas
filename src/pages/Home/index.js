import { memo, useCallback, useEffect, useState } from 'react';

import Person from '../../components/Person';
import SaveForm from '../../components/SaveForm';
import Filter from '../../components/Filter';

import * as S from './styles';
import api from '../../utils/api';
import useDebounce from '../../utils/useDebounce';

const INITIAL_FILTERS = {
	name: '',
	lastName: '',
	gender: '',
	birthYear: '',
}

const Home = () => {
	const [peopleList, setPeopleList] = useState([]);
	const [peoplefilters, setPeopleFilters] = useState(INITIAL_FILTERS);
	const [peopleDataEdit, setPeopleDataEdit] = useState();
	const debouncedSearchTerm = useDebounce(peoplefilters, 500);

	const formattedFilters = useCallback((filters) => {
		let currentFilters = {};

		if(filters.name){
			currentFilters = {...currentFilters, name: filters.name};
		}

		if(filters.lastName){
			currentFilters = {...currentFilters, lastName: filters.lastName};
		}

		if(filters.gender){
			currentFilters = {...currentFilters, gender: filters.gender};
		}

		if(filters.birthYear){
			currentFilters = {...currentFilters, birthYear: filters.birthYear};
		}

		return new URLSearchParams(currentFilters).toString();
	}, []);

	const searchPeople = useCallback((filters = {}) => {
		api.get(`/people?${formattedFilters(filters)}`).then(({ data }) => setPeopleList(data));
	}, [formattedFilters]);

	useEffect(() => {
		if(debouncedSearchTerm){
			searchPeople(debouncedSearchTerm);
		}
	}, [debouncedSearchTerm, searchPeople]);

	const handleFilterPeople = useCallback((event) => {
		const { name, value } = event.target;
		const [ key ] = name.split('-');

		setPeopleFilters((oldFilters) => ({ ...oldFilters, [key]: value }));
	}, [])

	const handleEditPeople = useCallback((peopleData) => {
		setPeopleDataEdit(peopleData);
		window.scroll(0,0);
	}, [])

	return (
		<S.HomeSection>
			<SaveForm searchPeople={searchPeople} people={peopleDataEdit} />

			<S.PeopleContent>
				<Filter filterPeople={handleFilterPeople} />
				
				<S.PeopleList>
					{peopleList.map(item => <Person key={item.id} infos={item} searchPeople={searchPeople} edit={handleEditPeople} />)}
				</S.PeopleList>
			</S.PeopleContent>
		</S.HomeSection>
	)
}

export default memo(Home);