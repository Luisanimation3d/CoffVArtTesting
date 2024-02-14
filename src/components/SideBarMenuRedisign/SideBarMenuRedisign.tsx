import React, { useEffect, useRef, useState } from "react";
import styles from './SideBarMenuRedisign.module.css';

import userImage from '../../assets/userImage.jpg';
import {
    FiChevronDown,
    FiChevronLeft,
    FiHome,
    FiMoon,
    FiPackage,
    FiSearch,
    FiSettings,
    FiSun
} from "react-icons/fi";

interface SubMenuTypeProps {
    type: 'subMenu',
    title: string,
    icon: React.ReactNode,
    subItems: {
        title: string,
        link: string
    }[]
}

interface MenuTypeProps {
    type: 'menu',
    title: string,
    icon: React.ReactNode,
    link: string
}

export type MenuItemsProps = (SubMenuTypeProps | MenuTypeProps)[]

export const SideBarMenuRedisignDesktop = ({ darkMode, setDarkMode, menuItems }: {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    menuItems: MenuItemsProps
}) => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    let menuFilter: MenuItemsProps = []

    if (searchInput !== '') {
        menuFilter = menuItems.filter(item => {
            if (item.type === 'menu') {
                return item.title.toLowerCase().includes(searchInput.toLowerCase())
            } else {
                return item.subItems.some(subItem => subItem.title.toLowerCase().includes(searchInput.toLowerCase()))
            }
        });
    } else {
        menuFilter = menuItems;
    }

    useEffect(() => {
        const width = window.innerWidth;
        if (width > 768) {
            setToggleMenu(true);
        }
    }, []);
    useEffect(() => {
        window.addEventListener('resize', () => {
            const currentDeviceWidth = window.innerWidth;
            if (currentDeviceWidth > 768) {
                setToggleMenu(true);
            } else {
                setToggleMenu(false);
            }
        });
        return () => {
            window.removeEventListener('resize', () => {
                const currentDeviceWidth = window.innerWidth;
                if (currentDeviceWidth > 768) {
                    setToggleMenu(true);
                } else {
                    setToggleMenu(false);
                }
            });
        }
    }, []);

    return (
        <header
            className={`${darkMode ? styles.darkmode__header__container : styles.lightmode__header__container} ${styles.header__container} ${toggleMenu ? styles.header__open__container : styles.header__close__container}`}>
            <div className={`${styles.header__userInfo__container}`} onClick={() => setToggleMenu(prev => !prev)}>
                <div className={`${styles.header__userImage__container}`}>
                    <img src={userImage} alt="User Image" className={styles.header__userImage} />
                </div>
                <div className={`${styles.header__userInfo__data}`}>
                    <h4 className={`${styles.header__userInfo__name}`}>User Name</h4>
                    <p className={`${styles.header__userInfo__role}`}>User Role</p>
                </div>
                <button className={`${styles.header__toggler}`} onClick={(e) => {
                    e.stopPropagation()
                    setToggleMenu(prev => !prev)
                }}>
                    {<FiChevronLeft /> || '<'}
                </button>
            </div>
            <div className={`${styles.header__search__container}`}>
                <label htmlFor="searchInputHeader" className={`${styles.header__search__label}`} onClick={() => {
                    setToggleMenu(true)
                    inputRef.current?.focus()
                }}><FiSearch /></label>
                <input type="text" placeholder={'Search'} id='searchInputHeader'
                    className={`${styles.header__search__input}`} ref={inputRef} value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            </div>
            <ul className={`${styles.header__items__container}`}>
                {
                    menuFilter?.map((item, index) => {
                        if (item.type === 'menu') {
                            return (
                                <SideBarMenuRedisignItem title={item.title} icon={item.icon} link={item.link} key={index} />
                            )
                        } else {
                            return (
                                <SideBarMenuRedisignItemSubItem title={item.title} icon={item.icon} subItems={item.subItems} key={index} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                            )
                        }
                    })
                }
            </ul>
            <span className={`${styles.header__options} ${styles.header__options__action}`}
                onClick={() => setDarkMode(prev => !prev)}>
                {
                    darkMode ? (<>
                        <FiSun />
                        <span className={styles.header__options__title}>
                            Light Mode
                        </span>
                    </>) : (<>
                        <FiMoon />
                        <span className={styles.header__options__title}>
                            Dark Mode
                        </span>
                    </>
                    )
                }
            </span>
            <span className={styles.header__options}>
                <FiSettings />
                <span className={styles.header__options__title}>
                    Settings
                </span>
            </span>
        </header>
    )
}

export const SideBarMenuRedisignMobile = ({ darkMode, setDarkMode, menuItems }: {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    menuItems: MenuItemsProps
}) => {

    return (
        <>
            <header className={`${styles.header__container__mobile} ${darkMode ? styles.header__container__mobile__darkMode : styles.header__container__mobile__lightMode}`}>
                <div className={`${styles.header__userInfo__container__mobile}`}>
                    <div className={`${styles.header__userImage__container__mobile}`}>
                        <img src={userImage} alt="User Image" className={styles.header__userImage} />
                    </div>
                    <div className={`${styles.header__userInfo__data__mobile}`}>
                        <h4 className={`${styles.header__userInfo__name}`}>User Name</h4>
                        <p className={`${styles.header__userInfo__role}`}>User Role</p>
                    </div>
                </div>
                <div className={`${styles.header__search__container}`}>
                    <label htmlFor="searchInputHeader" className={`${styles.header__search__label}`}><FiSearch /></label>
                    <input type="text" placeholder={'Search'} id='searchInputHeader'
                        className={`${styles.header__search__input}`} value={''} />
                </div>
                <ul className={`${styles.header__items__container}`}>
                    <SideBarMenuRedisignItem title={'Home'} icon={<FiHome/>} link={'#'}/>
                    <SideBarMenuRedisignItem title={'Products'} icon={<FiPackage/>} link={'#'}/>
                </ul>
            </header>
        </>
    )
}

const SideBarMenuRedisignItem = ({
    title,
    icon,
    link
}: {
    title: string,
    icon: React.ReactNode,
    link: string
}) => {

    return (
        <li className={`${styles.header__item__menu} ${title === 'Home' ? styles.header__item__menu__active : ''}`}>
            <a href={link} className={`${styles.header__item__link}`}>
                <span className={`${styles.header__item__icon}`}>
                    {icon}
                </span>
                <span className={`${styles.header__item__title}`}>
                    {title}
                </span>
            </a>
        </li>
    )

}

const SideBarMenuRedisignItemSubItem = ({
    title,
    icon,
    subItems,
    toggleMenu,
    setToggleMenu
}: {
    title: string,
    icon: React.ReactNode,
    subItems: {
        title: string,
        link: string
    }[],
    toggleMenu?: boolean,
    setToggleMenu?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [showSubmenu, setShowSubmenu] = useState(false);

    useEffect(() => {

        if (!toggleMenu) {
            setShowSubmenu(false);
        }

    }, [toggleMenu]);

    return (
        <>
            <li className={`${styles.header__item__submenu__container}`}>
                <div
                    className={`${styles.header__submenu__text__container} ${showSubmenu ? styles.header__submenu__text__container__active : ''}`}
                    onClick={() => {
                        setToggleMenu && setToggleMenu(true)
                        setShowSubmenu(prev => !prev)
                    }}>
                    <span className={`${styles.header__item__icon}`}>
                        {icon}
                    </span>
                    <span className={`${styles.header__item__title}`}>
                        {title}
                    </span>
                    <button className={`${styles.header__submenu__toggler}`}>
                        {
                            <FiChevronDown />
                            ||
                            '<'
                        }

                    </button>
                </div>
                <ul className={`${styles.header__submenu__container} ${showSubmenu ? styles.header__submenu__container__active : ''}`}>
                    {
                        subItems.map((item, index) => (
                            <li className={`${styles.header__submenu__item}`} key={index}>
                                <a href={item.link}
                                    className={`${styles.header__submenu__link} ${item.title === 'Payments' ? styles.header__submenu__link__active : ''}`}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
        </>
    )
}