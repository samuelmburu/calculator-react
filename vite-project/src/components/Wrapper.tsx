import {type ReactNode, type JSX} from 'react';

type AppProps = {
	children: ReactNode;
};

function Wrapper({children}: AppProps): JSX.Element {
	return (
		<div className='wrapper'>
			{children}
		</div>
	);
}

export default Wrapper;
