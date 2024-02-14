import styles from './ZoomImageViewer.module.css';
import {useEffect, useRef} from "react";

type ZoomImageViewerProps = {
    image: string,
    width: number,
    height: number,
    alt: string
}

export const ZoomImageViewer = ({image, width, height, alt}: ZoomImageViewerProps) => {
    const imageContainerRef = useRef<any>(null)
    const imageRef = useRef<any>(null)
    const cursorHoverRef = useRef<any>(null)

    useEffect(() => {
        imageContainerRef.current?.addEventListener('mouseenter', () => {
            imageContainerRef.current?.addEventListener('mousemove', (e: any) => {
                imageRef.current.style.transition = 'none';
                cursorHoverRef.current.style.opacity = '1';
                const axisX = e.clientX - e.currentTarget.offsetLeft;
                // Controle the scroll too
                const axisY = e.clientY - e.currentTarget.offsetTop + window.scrollY;
                // const axisY = e.clientY - e.currentTarget.offsetTop;

                imageRef.current.style.transformOrigin = `${axisX}px ${axisY}px`;
                imageRef.current.style.transform = 'scale(2)';
                cursorHoverRef.current.style.left = `${axisX}px`;
                cursorHoverRef.current.style.top = `${axisY}px`;
            });
        });
        imageContainerRef.current?.addEventListener('mouseleave', () => {
            imageRef.current.style.transition = 'all 0.5s ease';
            imageRef.current.style.transform = `translate(0, 0) scale(1)`;
            cursorHoverRef.current.style.opacity = '0';
        });
    }, []);

    return (
        <>
            <div className={styles.imageContainer} style={{
                width: `${width}px`,
                height: `${height}px`
            }}
                 ref={imageContainerRef}
            >
                <img src={image} alt={alt} ref={imageRef}/>
            <span className={styles.cursorHover} ref={cursorHoverRef}></span>
            </div>
        </>
    )
}
