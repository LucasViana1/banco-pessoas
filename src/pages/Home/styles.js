import styled from 'styled-components';

export const HomeSection = styled.section`
	display: flex;
	justify-content: space-evenly;
	padding: 2rem 4rem;
`;

export const HomeForm = styled.form`
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

export const PeopleList = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;