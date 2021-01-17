import styled from 'styled-components';

export const FormContainer = styled.form`
	flex: 1;
	
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
		background-color: #0700ed;
		color: #fff;
		font-weight: 700;
		font-size: 1.1rem;
		padding: 0.5rem 1rem;
		border-radius: 0.4rem;
		min-width: 5rem;

		&:hover {
			background-color: #0122c6;
		}
	}
`;