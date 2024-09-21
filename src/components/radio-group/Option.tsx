import { useRef } from 'react';
import { OptionType } from 'src/constants/articleProps';
import { Text } from 'components/text';
import { useEnterSubmit } from './hooks/useEnterSubmit';

import styles from './RadioGroup.module.scss';

type OptionProps = {
	value: OptionType['value'];
	title: OptionType['title'];
	selected: OptionType;
	groupName: string;
	onChange?: (option: OptionType) => void;
	option: OptionType;
	setContainerFontSize?: any;
	optionGroupRef?: any;
};

export const Option = (props: OptionProps) => {
	const {
		value,
		title,
		selected,
		groupName,
		onChange,
		option,
		setContainerFontSize,
		optionGroupRef,
	} = props;

	const optionRef = useRef<HTMLDivElement>(null);

	const handleChange = () => {
		onChange?.(option);
		setContainerFontSize(option.value);
		for (let i = 0; i < 3; i++) {
			optionGroupRef.current.children[i].setAttribute('data-checked', 'false');
		}
		optionRef.current?.setAttribute('data-checked', 'true');
	};

	useEnterSubmit({ onChange, option });

	const inputId = `${groupName}_radio_item_with_value__${value}`;
	const isChecked = value === selected.title;

	return (
		<div
			className={styles.item}
			key={value}
			data-checked={isChecked}
			data-testid={inputId}
			tabIndex={0}
			ref={optionRef}
			id={'div_' + inputId}>
			<input
				className={styles.input}
				type='radio'
				name={groupName}
				id={inputId}
				value={value}
				onClick={handleChange}
				tabIndex={-1}
			/>
			<label className={styles.label} htmlFor={inputId}>
				<Text size={18} uppercase>
					{title}
				</Text>
			</label>
		</div>
	);
};
