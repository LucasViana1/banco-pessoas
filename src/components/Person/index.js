import { memo, useCallback } from 'react';

import * as S from './styles';
import api from '../../utils/api'

const Person = ({ infos, searchPeople, edit }) => {
	const { id, name, lastName, gender, birthYear } = infos;

	const handleDeletePeople = useCallback(() => {
		api.delete(`/people/${id}`).then(() => searchPeople())
	}, [id, searchPeople])

	return (
		<S.PersonCard>
			<S.PersonInfos>
				<div>Nome completo: {`${name} ${lastName}`}</div>
				<div>Gênero: {gender}</div>
				<div>Ano nascimento: {birthYear}</div>
			</S.PersonInfos>

			<S.PersonActions>
				<button onClick={() => edit(infos)}>Editar</button>
				<button onClick={handleDeletePeople}>Excluir</button>
			</S.PersonActions>
		</S.PersonCard>
	)
}

export default memo(Person);