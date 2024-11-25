import { ArrowButton } from 'components/arrow-button';
import { FormEvent, useRef, useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Text } from '../text';
import { Separator } from '../separator';
import { Button } from '../button';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';

type ArticleParamsFormProps = {
	currentArticleState: ArticleStateType;
	setCurrentArticleState: (articleState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	currentArticleState,
	setCurrentArticleState,
}: ArticleParamsFormProps) => {
	const refAside = useRef<HTMLElement>(null);

	const [fontFamilyOptionsState, setFontFamilyOptionsState] = useState(
		currentArticleState.fontFamilyOption
	);
	const fontFamilyOptionsStateChange = (optionData: OptionType) => {
		setFontFamilyOptionsState(optionData);
	};

	const [fontColorsState, setFontColors] = useState(
		currentArticleState.fontColor
	);
	const fontColorsStateChange = (optionData: OptionType) => {
		setFontColors(optionData);
	};

	const [backgroundColorsState, setBackgroundColorsState] = useState(
		currentArticleState.backgroundColor
	);
	const backgroundColorsStateChange = (optionData: OptionType) => {
		setBackgroundColorsState(optionData);
	};

	const [fontSizeOptionsState, setFontSizeOptionsState] = useState(
		currentArticleState.fontSizeOption
	);
	const fontSizeOptionsStateChange = (optionData: OptionType) => {
		setFontSizeOptionsState(optionData);
	};

	const [contentWidthArrState, setContentWidthArrState] = useState(
		currentArticleState.contentWidth
	);
	const contentWidthArrStateChange = (optionData: OptionType) => {
		setContentWidthArrState(optionData);
	};

	return (
		<>
			<ArrowButton ref={refAside} style={styles.container_open} />
			<aside className={styles.container} ref={refAside}>
				<form
					className={styles.form}
					onSubmit={(e: FormEvent) => {
						e.preventDefault();
						setCurrentArticleState({
							backgroundColor: backgroundColorsState,
							contentWidth: contentWidthArrState,
							fontColor: fontColorsState,
							fontFamilyOption: fontFamilyOptionsState,
							fontSizeOption: fontSizeOptionsState,
						});
					}}>
					<Text uppercase weight={800} size={25}>
						Задайте параметры
					</Text>
					<Select
						title='ШРИФТ'
						selected={fontFamilyOptionsState}
						options={fontFamilyOptions}
						onChange={(optionData: OptionType) => {
							fontFamilyOptionsStateChange(optionData);
						}}
					/>
					<RadioGroup
						title='РАЗМЕР ШРИФТА'
						options={fontSizeOptions}
						selected={fontSizeOptionsState}
						name='fontSize'
						onChange={(optionData: OptionType) => {
							fontSizeOptionsStateChange(optionData);
						}}
					/>
					<Select
						title='ЦВЕТ ШРИФТА'
						selected={fontColorsState}
						options={fontColors}
						onChange={(optionData: OptionType) => {
							fontColorsStateChange(optionData);
						}}
					/>
					<Separator />
					<Select
						title='ЦВЕТ ФОНА'
						selected={backgroundColorsState}
						options={backgroundColors}
						onChange={(optionData: OptionType) => {
							backgroundColorsStateChange(optionData);
						}}
					/>
					<Select
						title='ШИРИНА КОНТЕНТА'
						selected={contentWidthArrState}
						options={contentWidthArr}
						onChange={(optionData: OptionType) => {
							contentWidthArrStateChange(optionData);
						}}
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={() => {
								setFontFamilyOptionsState(defaultArticleState.fontFamilyOption);
								setFontColors(defaultArticleState.fontColor);
								setBackgroundColorsState(defaultArticleState.backgroundColor);
								setFontSizeOptionsState(defaultArticleState.fontSizeOption);
								setContentWidthArrState(defaultArticleState.contentWidth);

								setCurrentArticleState({
									backgroundColor: defaultArticleState.backgroundColor,
									contentWidth: defaultArticleState.contentWidth,
									fontColor: defaultArticleState.fontColor,
									fontFamilyOption: defaultArticleState.fontFamilyOption,
									fontSizeOption: defaultArticleState.fontSizeOption,
								});
							}}
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
