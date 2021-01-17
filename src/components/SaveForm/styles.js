import styled from 'styled-components';

export const FormContainer = styled.form`
	flex: 1;
	padding: 1rem;
	
	fieldset {
		border: none;
	}

  	label {
		display: flex;
		margin-bottom: 0.8rem;
		
		input, select {
			margin-left: 1rem;
			font-size: 1rem;
		}
	}
	
	button {
		background-color: #00d815;
		color: #fff;
		font-weight: 700;
		font-size: 1.1rem;
		padding: 0.5rem 1rem;
		border-radius: 0.4rem;
		min-width: 5rem;

		&:hover {
			background-color: #00bf13;
		}
	}
`;