import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useImage from './hooks/useImage';

const Dalle = () => {
	const { id } = useParams();
	const [image, loading] = useImage(id);
	const { success, data } = image;

	if (loading) {
		return (
			<OuterBase>
				<h1>Loading...</h1>
			</OuterBase>
		);
	}

	if (!success && !data) {
		return (
			<OuterBase>
				<h1>Unkown Image</h1>
			</OuterBase>
		);
	}

	return (
		<OuterBase>
			<h1>"{data.prompt}"</h1>
			<h2>By {data.username}</h2>
			<ImageBase>
				{data.imageBase64.map((image, key) => {
					return <img src={image} alt={`dalle ` + key} />;
				})}
			</ImageBase>
		</OuterBase>
	);
};

const OuterBase = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ImageBase = styled.div`
	display: flex;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(9, 1fr);
	}

	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 5px;
	}
`;

export default Dalle;
