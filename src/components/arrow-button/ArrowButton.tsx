import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import { useEffect, useRef, useState } from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

const handleOnClick: OnClick = () => {};

export const ArrowButton = (props:any) => {
	const imgRef = useRef<HTMLImageElement | null>(null);
	const buttonRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (props.openOrClose === 'close') {
			imgRef.current?.setAttribute('style', 'transform:none');
			buttonRef.current?.setAttribute('style','transform:translate(612px)')
		} else if (props.openOrClose === 'open') {
			imgRef.current?.removeAttribute('style');
			buttonRef.current?.removeAttribute('style')
		}

	}, [props.openOrClose]);
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}
			ref={buttonRef}
			onClick={() => {
				if (props.openOrClose === 'close') {
					props.setOpenOrClose('open');
				} else {
					props.setOpenOrClose('close');
				}
			}}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={styles.arrow}
				ref={imgRef}
			/>
		</div>
	);
};
