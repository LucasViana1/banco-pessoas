import styled from 'styled-components';

export const FilterForm = styled.form`
	margin-bottom: 2rem;
	display: flex;
	flex-wrap: wrap;

	label {
		display: flex;
		margin-bottom: 0.8rem;
		margin-left: 0.7rem;
		
		input, select {
			margin-left: 1rem;
			font-size: 1rem;
		}
	}
`;

export const FormTitle = styled.h4`
	margin-bottom: 1rem;
`;