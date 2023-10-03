import {type MouseEventHandler, type JSX} from 'react';

type ButtonProps = {
	className?: string;
	value: string | number;
	onClick: MouseEventHandler;
};

export default function Button(
	{className, value, onClick}: ButtonProps,
): JSX.Element {
	return (
		<button className={className} onClick={onClick}>
			{value}
		</button>
	);
}
