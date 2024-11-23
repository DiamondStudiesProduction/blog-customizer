import { ArrowButton } from 'components/arrow-button';
import { forwardRef, useRef, useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Text } from '../text';
import { Separator } from '../separator';
import { Button } from '../button';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';

export const ArticleParamsForm = forwardRef((props: any, refParams: any) => {
	const refAside = useRef<HTMLElement>(null);

	const [fontFamilyOptionsState, setFontFamilyOptionsState] = useState(
		fontFamilyOptions[0]
	);
	const fontFamilyOptionsStateChange = (e: OptionType) => {
		setFontFamilyOptionsState({
			title: e.title,
			value: e.value,
			className: e.className,
		});
	};

	const [fontColorsState, setFontColors] = useState(fontColors[0]);
	const fontColorsStateChange = (e: OptionType) => {
		setFontColors({
			title: e.title,
			value: e.value,
			className: e.className,
			optionClassName: e.optionClassName,
		});
	};

	const [backgroundColorsState, setBackgroundColorsState] = useState(
		backgroundColors[0]
	);
	const backgroundColorsStateChange = (e: OptionType) => {
		setBackgroundColorsState({
			title: e.title,
			value: e.value,
			className: e.className,
			optionClassName: e.optionClassName,
		});
	};

	const [fontSizeOptionsState, setFontSizeOptionsState] = useState(
		fontSizeOptions[0]
	);
	const fontSizeOptionsStateChange = (e: OptionType) => {
		setFontSizeOptionsState({
			title: e.title,
			value: e.value,
			className: e.className,
		});
	};

	const [contentWidthArrState, setContentWidthArrState] = useState(
		contentWidthArr[0]
	);
	const contentWidthArrStateChange = (e: OptionType) => {
		setContentWidthArrState({
			title: e.title,
			value: e.value,
			className: e.className,
			optionClassName: e.optionClassName,
		});
	};

	return (
		<>
			<ArrowButton ref={refAside} style={styles.container_open} />
			<aside className={styles.container} ref={refAside}>
				<form className={styles.form}>
					<Text uppercase weight={800} size={25}>
						Задайте параметры
					</Text>
					<Select
						title='ШРИФТ'
						selected={fontFamilyOptionsState}
						options={fontFamilyOptions}
						onChange={(e: OptionType) => {
							fontFamilyOptionsStateChange(e);
						}}
					/>
					<RadioGroup
						title='РАЗМЕР ШРИФТА'
						options={fontSizeOptions}
						selected={fontSizeOptionsState}
						name='fontSize'
						onChange={(e: OptionType) => {
							fontSizeOptionsStateChange(e);
						}}
					/>
					<Select
						title='ЦВЕТ ШРИФТА'
						selected={fontColorsState}
						options={fontColors}
						onChange={(e: OptionType) => {
							fontColorsStateChange(e);
						}}
					/>
					<Separator />
					<Select
						title='ЦВЕТ ФОНА'
						selected={backgroundColorsState}
						options={backgroundColors}
						onChange={(e: OptionType) => {
							backgroundColorsStateChange(e);
						}}
					/>
					<Select
						title='ШИРИНА КОНТЕНТА'
						selected={contentWidthArrState}
						options={contentWidthArr}
						onChange={(e: OptionType) => {
							contentWidthArrStateChange(e);
						}}
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={() => {
								refParams.current.setAttribute(
									'style',
									`--font-family: ${defaultArticleState.fontFamilyOption.value};
									--font-size: ${defaultArticleState.fontSizeOption.value};
									--font-color: ${defaultArticleState.fontColor.value};
									--container-width: ${defaultArticleState.contentWidth.value};
									--bg-color: ${defaultArticleState.backgroundColor.value};`
								);
								setFontFamilyOptionsState(fontFamilyOptions[0]);
								setFontColors(fontColors[0]);
								setBackgroundColorsState(backgroundColors[0]);
								setFontSizeOptionsState(fontSizeOptions[0]);
								setContentWidthArrState(contentWidthArr[0]);
							}}
						/>
						<Button
							title='Применить'
							type='submit'
							onClick={(event) => {
								event.preventDefault();
								refParams.current.setAttribute(
									'style',
									`--font-family: ${fontFamilyOptionsState.value};
									--font-size: ${fontSizeOptionsState.value};
									--font-color: ${fontColorsState.value};
									--container-width: ${contentWidthArrState.value};
									--bg-color: ${backgroundColorsState.value};`
								);
							}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
});
