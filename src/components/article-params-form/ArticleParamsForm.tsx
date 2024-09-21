import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from 'components/select';

import styles from './ArticleParamsForm.module.scss';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import { useEffect, useRef, useState } from 'react';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

export const ArticleParamsForm = (props: any) => {
	const [openOrClose, setOpenOrClose] = useState('close');
	const handleSetOpenOrClose = (value: string) => setOpenOrClose(value);
	const asideRef = useRef<HTMLElement | null>(null);
	const formRef = useRef<any>(null);

	const [fontColor, setFontColor] = useState(null);
	const [backgroundColor, setBackgroundColor] = useState(null);
	const [containerWidth, setContainerWidth] = useState(null);
	const [containerFontFamiy, setContainerFontFamiy] = useState(null);
	const [containerFontSize, setContainerFontSize] = useState(null);

	useEffect(() => {
		openOrClose === 'close'
			? asideRef.current?.setAttribute('style', 'transform:none')
			: asideRef.current?.removeAttribute('style');
	}, [openOrClose]);
	return (
		<>
			<ArrowButton
				openOrClose={openOrClose}
				setOpenOrClose={handleSetOpenOrClose}
			/>
			<aside className={styles.container} ref={asideRef}>
				<form className={styles.form} ref={formRef}>
					<h3 className={styles.mainTitle}>Задайте параметры</h3>
					<div>
						<p className={styles.title}>шрифт</p>
						<Select
							selected={fontFamilyOptions[0]}
							options={fontFamilyOptions}
							setContainerFontFamiy={setContainerFontFamiy}
							id='font-family'
						/>
					</div>
					<div>
						<p className={styles.title}>размер шрифта</p>
						<div className={styles.radioGroup}>
							<RadioGroup
								name=''
								title=''
								options={fontSizeOptions}
								selected={fontSizeOptions[0]}
								setContainerFontSize={setContainerFontSize}
							/>
						</div>
					</div>
					<div>
						<p className={styles.title}>Цвет шрифта</p>
						<Select
							selected={fontColors[0]}
							options={fontColors}
							setFontColor={setFontColor}
						/>
					</div>
					<div>
						<Separator />
					</div>
					<div>
						<p className={styles.title}>Цвет фона</p>
						<Select
							selected={backgroundColors[0]}
							options={backgroundColors}
							setBackgroundColor={setBackgroundColor}
						/>
					</div>
					<div>
						<p className={styles.title}>Ширина контента</p>
						<Select
							selected={contentWidthArr[0]}
							options={contentWidthArr}
							setContainerWidth={setContainerWidth}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							setfontColorState={props.setfontColorState}
							fontColor={fontColor}
							setBackgroundColorState={props.setBackgroundColorState}
							backgroundColor={backgroundColor}
							setContainerWidthState={props.setContainerWidthState}
							containerWidth={containerWidth}
							setContainerFontFamiy={props.setContainerFontFamilyState}
							containerFontFamiy={containerFontFamiy}
							setContainerFontSize={props.setContainerFontSizeState}
							containerFontSize={containerFontSize}
							asideRef={asideRef}
						/>
						<Button
							title='Применить'
							type='submit'
							setfontColorState={props.setfontColorState}
							fontColor={fontColor}
							setBackgroundColorState={props.setBackgroundColorState}
							backgroundColor={backgroundColor}
							setContainerWidthState={props.setContainerWidthState}
							containerWidth={containerWidth}
							setContainerFontFamiy={props.setContainerFontFamilyState}
							containerFontFamiy={containerFontFamiy}
							setContainerFontSize={props.setContainerFontSizeState}
							containerFontSize={containerFontSize}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
