import FeatherIcon from 'feather-icons-react';

export const ButtonCircle = ({
	type,
	onClickFunction,
	icon = '',
	size = 15,
}) => {
	return (
		<button className={type} onClick={onClickFunction}>
			{icon && (
				<FeatherIcon
					icon={icon}
					size={size}
					style={{ strokeWidth: 2.5 }}
				/>
			)}
		</button>
	);
};
