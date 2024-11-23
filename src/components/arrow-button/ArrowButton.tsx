import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { forwardRef, useRef } from 'react';

const root = document.querySelector('#root');
function openAside(refButton: any, refImg: any, ref: any, style: any) {
	root?.addEventListener('click', handleOpenAside);
	function handleOpenAside(event: any) {
		const eventTargetElement = event.target as  HTMLElement;
		if (
			eventTargetElement.closest('.Article-module__article__mC2Yg') ||
			eventTargetElement.closest(`.${styles.container}`)
		) {
			refImg.current.classList.remove(styles.arrow_open);
			refButton.current.classList.remove(styles.container_open);
			ref.current.classList.remove(style);
			root?.removeEventListener('click', handleOpenAside);
		}
	}
}

export const ArrowButton = forwardRef((props: any, ref: any) => {
	const refButton = useRef<any>(null);
	const refImg = useRef<any>(null);
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}
			ref={refButton}
			onClick={() => {
				if (!ref.current.classList.contains(props.style)) {
					refImg.current.classList.add(styles.arrow_open);
					refButton.current.classList.add(styles.container_open);
					ref.current.classList.add(props.style);
					openAside(refButton, refImg, ref, props.style);
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
