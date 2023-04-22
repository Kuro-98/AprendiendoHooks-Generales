import { useCounter, useFetch } from '../hooks';
import { CharacterInfo } from './CharacterInfo';
import { LoadingImg } from './LoadingImg';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter();

	const { data, isLoading, hasErrror } = useFetch(
		`https://rickandmortyapi.com/api/character/${counter}`
	);

	const onNext = () => {
		increment();
	};

	return (
		<>
			<h1 className="text-center">Rick And Morty Characters</h1>
			<hr />

			{isLoading ? <LoadingImg /> : <CharacterInfo data={data} />}
			<div className="text-center ">
				<button onClick={onNext} className="btn btn-primary">
					Siguiente Personaje
				</button>
			</div>
		</>
	);
};
