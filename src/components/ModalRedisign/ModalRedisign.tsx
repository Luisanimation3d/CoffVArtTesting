import styles from './ModalRedisign.module.css';
import {FiX} from "react-icons/fi";

export const ModalRedisignOverflow = ({
                                          children,
                                          setModalOpen
                                      }: {
    children: React.ReactNode,
    setModalOpen: (value: boolean) => void
}) => {
    return (
        <div className={`${styles.modal__overflow}`} onClick={() => setModalOpen(false)}>
            {children}
        </div>
    )
}

export const ModalRedisign = ({
                                  children,
                                  setModalOpen,
                                  darkMode
                              }: {
    children: React.ReactNode,
    setModalOpen: (value: boolean) => void,
    darkMode: boolean
}) => {
    return (
        <div className={`${styles.modal__container} ${darkMode ? styles.modal__container__darkMode : styles.modal__container__lightMode}`} onClick={e => e.stopPropagation()}>
            <button onClick={() => setModalOpen(false)} className={`${styles.modal__closeButton}`}>
                <FiX/>
            </button>
            {children}
        </div>
    )
}