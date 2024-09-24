import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useEffect } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [fontColorState, setfontColorState] = useState(
		defaultArticleState.fontColor.value
	);
	const [backgroundColorState, setBackgroundColorState] = useState(
		defaultArticleState.backgroundColor.value
	);
	const [containerWidthState, setContainerWidthState] = useState(
		defaultArticleState.contentWidth.value
	);
	const [containerFontFamilyState, setContainerFontFamilyState] = useState(
		defaultArticleState.fontFamilyOption.value
	);
	const [containerFontSizeState, setContainerFontSizeState] = useState(
		defaultArticleState.fontSizeOption.value
	);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': containerFontFamilyState,
					'--font-size': containerFontSizeState,
					'--font-color': fontColorState,
					'--container-width': containerWidthState,
					'--bg-color': backgroundColorState,
				} as CSSProperties
			}>
			<ArticleParamsForm
				setfontColorState={setfontColorState}
				setBackgroundColorState={setBackgroundColorState}
				setContainerWidthState={setContainerWidthState}
				setContainerFontFamilyState={setContainerFontFamilyState}
				setContainerFontSizeState={setContainerFontSizeState}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
