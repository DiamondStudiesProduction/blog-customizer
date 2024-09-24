import { Text } from 'components/text';

import styles from './Button.module.scss';
import { useRef } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';

type ButtonProps = {
	title: string;
	onClick?: (e: any) => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	setfontColorState?: any;
	fontColor?: any;
	setBackgroundColorState?: any;
	backgroundColor?: any;
	setContainerWidthState?: any;
	containerWidth?: any;
	setContainerFontFamiy?: any;
	containerFontFamiy?: any;
	setContainerFontSize?: any;
	containerFontSize?: any;
	asideRef?: any;
};
export const Button = ({
	title,
	onClick,
	type,
	setfontColorState,
	fontColor,
	setBackgroundColorState,
	backgroundColor,
	setContainerWidthState,
	containerWidth,
	setContainerFontFamiy,
	containerFontFamiy,
	setContainerFontSize,
	containerFontSize,
	asideRef,
}: ButtonProps) => {
	const buttonRef = useRef<any>(null);
	onClick = (e) => {
		e.preventDefault();
		if (e.target.textContent === 'Сбросить') {
			setfontColorState(defaultArticleState.fontColor.value);
			setBackgroundColorState(defaultArticleState.backgroundColor.value);
			setContainerWidthState(defaultArticleState.contentWidth.value);
			setContainerFontFamiy(defaultArticleState.fontFamilyOption.value);
			setContainerFontSize(defaultArticleState.fontSizeOption.value);
			for (let i = 0; i < 3; i++) {
				asideRef.current
					.querySelector('.RadioGroup-module__group__JMFhe')
					.children[i].setAttribute('data-checked', 'false');
			}
			asideRef.current
				.querySelector('#div__radio_item_with_value__18px')
				.setAttribute('data-checked', 'true');
			const parent = asideRef.current.querySelectorAll(
				'.Select-module__placeholder__bB0Jm'
			);
			parent[0].textContent = 'Open Sans';
			parent[1].setAttribute(
				'class',
				'Select-module__placeholder__bB0Jm Select-module__option-black__BbZZ3'
			);
			parent[1].textContent = 'Черный';
			parent[2].setAttribute(
				'class',
				'Select-module__placeholder__bB0Jm Select-module__option-white__KqgJc'
			);
			parent[2].textContent = 'Белый';
			parent[3].setAttribute(
				'class',
				'Select-module__placeholder__bB0Jm Select-module__option-wide__mXqiv'
			);
			parent[3].textContent = 'Широкий';
		} else {
			setfontColorState(fontColor);
			setBackgroundColorState(backgroundColor);
			setContainerWidthState(containerWidth);
			setContainerFontFamiy(containerFontFamiy);
			setContainerFontSize(containerFontSize);
		}
	};
	return (
		<button
			className={styles.button}
			type={type}
			ref={buttonRef}
			onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
