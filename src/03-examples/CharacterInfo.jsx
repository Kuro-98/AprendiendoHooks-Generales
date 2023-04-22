import { useLayoutEffect, useRef, useState } from 'react';

export const CharacterInfo = ({ data }) => {
	const pRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		const { height, width } = pRef.current.getBoundingClientRect();
		setBoxSize({ height, width });
	}, [data.image]);

	return (
		<>
			<div className="card-grid  ">
				<div className="card">
					<img ref={pRef} src={data.image} alt="personaje" />
					<h1 className="mb-1 text-center">{data.name}</h1>
					<p className=" text-center">Species: {data.species}</p>
				</div>
			</div>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
