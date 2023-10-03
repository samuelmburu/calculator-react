// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

type ScreenProps = {
	value: number | string;
};

export default function Screen({value}: ScreenProps) {
	return (
		<div className={classNames('screen')} >{value}</div>
	);
}
