import {type JSX, useState, type SyntheticEvent} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues: Array<Array<string | number>> = [
	['C', '±', '%', '/'],
	[7, 8, 9, 'x'],
	[4, 5, 6, '-'],
	[1, 2, 3, '+'],
	[0, '.', '='],
];

const operators: Record<string, number> = {
	'-': 0,
	'+': 0,
	'/': 1,
	x: 1,
};

type TCalc = {
	sign: string;
	num: number;
	res: number;
};

function App(): JSX.Element {
	const [calc, setCalc] = useState<TCalc>({
		sign: '',
		num: 0,
		res: 0,
	});

	function doMath(newOperator: string): number {
		const previousSign = calc.sign;

		if (operators[newOperator] === operators[previousSign]) {
			// Same level operator then LHS operator func RHS

		} else if (operators[newOperator] < operators[previousSign]) {
			// Diff levels
		} else {
			// Operator > prevOperator then do operator and set sign to newOperator

		}

		// If()
	}

	function handleCalc(data: string | number): void {
		// Get value from e

		if (typeof data === 'number') {
			console.log('stuff', {num: calc.num, data: Number(data), res: Number(`${calc.num}${Number(data)}`)});
			const value = Number(`${calc.num}${Number(data)}`);
			setCalc(previous => ({...previous, num: Number(`${calc.num}${Number(data)}`), res: value}));
		} else {
			switch (data) {
				case 'C': {
					// Set num to zero
					setCalc(previous => ({...previous, num: 0}));
					break;
				}

				case '%': {
					// Div number on screen by 100
					setCalc(previous => ({...previous, num: previous.num / 100}));
					break;
				}

				case '±': {
					// Multiply num by -1
					setCalc(previous => ({...previous, num: previous.num * -1}));
					break;
				}

				case '+': {
					// Keep track of the sign, but do nothing -- order of operations
					setCalc(previous => ({...previous, sign: data, num: doMath('+')}));
					break;
				}

				case '-': {
					setCalc(previous => ({...previous, sign: data, num: doMath('-')}));
					// Keep track of the sign, but do nothing -- order of operations
					break;
				}

				case '/': {
					setCalc(previous => ({...previous, sign: data, num: doMath('/')}));
					// Keep track of the sign, but do nothing -- order of operations
					break;
				}

				case 'x': {
					setCalc(previous => ({...previous, sign: data, num: doMath('x')}));
					// Keep track of the sign, but do nothing -- order of operations
					break;
				}

        // No default
			}
		}
	}

	return (
		<Wrapper>
			<Screen value={calc.res || calc.num } />
			<ButtonBox className='grid grid-content-evenly'>
				{btnValues.map((btns, i) =>
					(<div key={i} className='flex-col flex-content-around'>
						{btns.map((btn, j) =>
							<Button
								key={j}
								className={classNames(`${btn === '=' ? 'px-19' : 'px-9'}`, 'font-mono', 'py-4 font-semibold rounded-lg shadow-md'.split(' '))}
								value={btn}
								onClick={() => {
									console.log(`${btn}::clicked`);
									handleCalc(btn);
								}}
							/>,
						)}
					</div>),
				)}

			</ButtonBox>
		</Wrapper>
	);
}

export default App;
