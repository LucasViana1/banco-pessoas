import styled from 'styled-components';

export const PersonCard = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	margin-left: 2rem;
	padding: 0.5rem 0.5rem 1rem 0.5rem;
	border-bottom: 1px solid;
	flex: 1;
	min-width: 40%;
	background-color: #eee;
	border-radius: 0.6rem;

	&:last-child {
		max-width: 45%;
	}
`;

export const PersonInfos = styled.div`
	flex: 1;
	margin-bottom: 0.5rem;
`;

export const PersonActions = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-left: 1.4rem;
`;

export const ActionButton = styled.button`
	background-color: ${(p) => p.isDanger ? '#f20000' : '#0700ed'};
	color: #fff;
	font-weight: 500;
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	min-width: 5rem;

	&:hover {
		background-color:  ${(p) => p.isDanger ? '#e00000' : '#0122c6'};
	}
`;

export const InfoTitle = styled.p`
	display: initial;
	font-weight: 600;
`;

export const InfoText = styled.p`
	display: initial;
	margin-left: 0.4rem;
`;