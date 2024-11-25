import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import stylesArticle from '../article/Article.module.scss';
import { forwardRef, useEffect, useRef, useState } from 'react';

const root = document.querySelector('#root');

export const ArrowButton = forwardRef((props: any, refAside: any) => {
	const refButton = useRef<HTMLDivElement>(null);
	const refImg = useRef<HTMLImageElement>(null);
	const [sideBar, setSideBar] = useState('isClose');
	useEffect(() => {
		if (sideBar === 'isOpened') {
			refImg.current?.classList.add(styles.arrow_open);
			refButton.current?.classList.add(styles.container_open);
			refAside.current.classList.add(props.style);
			root?.addEventListener('click', openAside);
		} else if (sideBar === 'isClose') {
			refImg.current?.classList.remove(styles.arrow_open);
			refButton.current?.classList.remove(styles.container_open);
			refAside.current.classList.remove(props.style);
		}
	}, [sideBar]);

	function openAside(event: Event) {
		const eventTargetElement = event.target as HTMLElement;
		if (
			eventTargetElement.closest(`.${stylesArticle.article}`) ||
			eventTargetElement.closest(`.${styles.container}`)
		) {
			setSideBar('isClose');
			root?.removeEventListener('click', openAside);
		}
	}

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}
			ref={refButton}
			onClick={() => {
				if (sideBar === 'isClose') {
					setSideBar('isOpened');
				} else if (sideBar === 'isOpened') {
					setSideBar('isClose');
				}
			}}>
			<img
				src={arrow}
				ref={refImg}
				alt='иконка стрелочки'
				className={styles.arrow}
			/>
		</div>
	);
});
