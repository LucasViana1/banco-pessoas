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
				<div>
					<S.InfoTitle>Nome completo: </S.InfoTitle>
					<S.InfoText>{`${name} ${lastName}`}</S.InfoText>
				</div>

				<div>
					<S.InfoTitle>Gênero: </S.InfoTitle>
					<S.InfoText>{gender}</S.InfoText>
				</div>
				
				<div>
					<S.InfoTitle>Ano nascimento:</S.InfoTitle>
					<S.InfoText>{birthYear}</S.InfoText>
				</div>
			</S.PersonInfos>

			<S.PersonActions>
				<S.ActionButton onClick={() => edit(infos)}>Editar</S.ActionButton>
				<S.ActionButton isDanger onClick={handleDeletePeople}>Excluir</S.ActionButton>
			</S.PersonActions>
		</S.PersonCard>
	)
}

export default memo(Person);