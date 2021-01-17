import { memo } from 'react';

import * as S from './styles';

const Filter = ({ filterPeople }) => (
	<>
		<S.FormTitle>Filtros de pesquisa:</S.FormTitle>
		<S.FilterForm>
			<label htmlFor={"name-filter"}>
				Nome: 
				<input id="name-filter" name="name-filter" onChange={filterPeople} />
			</label>
			<label htmlFor={"lastName-filter"}>
				Sobrenome: 
				<input id="lastName-filter" name="lastName-filter" onChange={filterPeople} />
			</label>
			<label htmlFor={"gender-filter"}>
				Gênero: 
				<select id="gender-filter" name="gender-filter"  onChange={filterPeople}>
						<option value="">Selecione</option>
						<option value="male">Masculino</option>
						<option value="female">Feminino</option>	
				</select>
			</label>
			<label htmlFor={"birthYear-filter"}>
				Ano nascimento: 
				<input id="birthYear-filter" name="birthYear-filter" onChange={filterPeople} />
			</label>
		</S.FilterForm>
	</>
)


export default memo(Filter);