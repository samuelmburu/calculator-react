import {type ReactNode} from 'react';

type ButtonBoxProps = {
	className?: string;
	children?: React.ReactNode;
};

export default function ButtonBox({className, children}: ButtonBoxProps): ReactNode {
	return (
		<div className={className}>{children}</div>
	);
}
