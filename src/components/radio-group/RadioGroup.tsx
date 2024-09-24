import { OptionType } from 'src/constants/articleProps';
import { Text } from 'components/text';
import { Option } from './Option';

import styles from './RadioGroup.module.scss';
import { useRef } from 'react';

type RadioGroupProps = {
	name: string;
	options: OptionType[];
	selected: OptionType;
	onChange?: (value: OptionType) => void;
	title: string;
	setContainerFontSize?: any;
};

export const RadioGroup = (props: RadioGroupProps) => {
	const { name, options, selected, onChange, title, setContainerFontSize } =
		props;
	const optionGroupRef = useRef<any>(null);
	const handleChange = (option: OptionType) => {
		onChange?.(option);
	};

	return (
		<div className={styles.container}>
			{title && (
				<>
					<Text weight={800} size={12} uppercase>
						{title}
					</Text>
				</>
			)}
			<div className={styles.group} ref={optionGroupRef}>
				{options.map((option) => (
					<Option
						key={option.value}
						groupName={name}
						value={option.value}
						title={option.title}
						selected={selected}
						onChange={() => handleChange(option)}
						option={option}
						setContainerFontSize={setContainerFontSize}
						optionGroupRef={optionGroupRef}
					/>
				))}
			</div>
		</div>
	);
};
