import { ArrowButton } from '../../ui/arrow-button/ArrowButton';
import { FormEvent, useRef, useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

import { Select } from '../../ui/select/Select';
import { RadioGroup } from '../../ui/radio-group/RadioGroup';
import { Text } from '../../ui/text/Text';
import { Separator } from '../../ui/separator/Separator';
import { Button } from '../../ui/button/Button';
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
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	currentArticleState: ArticleStateType;
	setCurrentArticleState: (articleState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	currentArticleState,
	setCurrentArticleState,
}: ArticleParamsFormProps) => {
	const asideRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	useOutsideClickClose({
		isOpen: isMenuOpen,
		rootRef: asideRef,
		onChange: setIsMenuOpen,
	});

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
			<ArrowButton
				isOpen={isMenuOpen}
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, isMenuOpen && styles.container_open)}
				ref={asideRef}>
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
							type='clear'
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
						<Button title='Применить' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
