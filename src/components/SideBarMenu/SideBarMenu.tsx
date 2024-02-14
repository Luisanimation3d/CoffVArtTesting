import {FC, useEffect, useState, useRef, JSX} from "react";

import {FiLogOut, FiMenu} from "react-icons/fi";
import {NavLink} from "react-router-dom";
type SideBarMenuItemProps = {
    icon: JSX.Element;
    title: string;
    link: string;
    onMouseEnter?: (index: number) => void;
    index?: number;
}

export type SideBarMenuProps = {
    items: SideBarMenuItemProps[];
    userImage?: string;
    userName?: string;
    userRole?: string;
    logo?: string;
}

import styles from './SideBarMenu.module.css';
// import './SideBarMenu.module.css';
export const SideBarMenu: FC<SideBarMenuProps> = ({
                                                      items,
                                                      userImage,
                                                      userName,
                                                      userRole,
                                                      logo
                                                  }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    const refHoverTooltip = useRef<HTMLDivElement>(null)
    const refHoverMenu = useRef<HTMLDivElement>(null)

    useEffect(() => {

        refHoverMenu.current?.querySelectorAll(`.${styles.sideBarMenu__menuItem}`).forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                refHoverTooltip.current?.querySelectorAll(`.${styles['sideBarMenu__menuItem-tooltip']}`)[index].classList.add(`${styles['sideBarMenu__menuItem-tooltip--active']}`);
            });
            item.addEventListener('mouseleave', () => {
                refHoverTooltip.current?.querySelectorAll(`.${styles['sideBarMenu__menuItem-tooltip']}`)[index].classList.remove(`${styles['sideBarMenu__menuItem-tooltip--active']}`);
            })
        })


        refHoverMenu.current?.addEventListener('scroll', (e: any) => {
            const currentScroll = e.target.scrollTop;
            refHoverTooltip.current?.scrollTo(0, currentScroll)
        })

        return () => {
            refHoverMenu.current?.querySelectorAll('.sideBarMenu__menuItem').forEach((item, index) => {
                item.removeEventListener('mouseenter', () => {
                    refHoverTooltip.current?.querySelectorAll('.sideBarMenu__menuItem-tooltip')[index].classList.add('sideBarMenu__menuItem-tooltip--active');
                });
                item.removeEventListener('mouseleave', () => {
                    refHoverTooltip.current?.querySelectorAll('.sideBarMenu__menuItem-tooltip')[index].classList.remove('sideBarMenu__menuItem-tooltip--active');
                })
            })
            refHoverMenu.current?.removeEventListener('scroll', (e: any) => {
                const currentScroll = e.target.scrollTop;
                refHoverTooltip.current?.scrollTo(0, currentScroll)
            })
        }

    }, []);

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
        <div className={`${styles.sideBarMenu__container} ${toggleMenu ? styles['sideBarMenu__container--active'] : ''}`}>
            <div className={`${styles.sideBarMenu__top}`}>
                <div className={`${styles.sideBarMenu__logo}`}>
                    <img src={logo ? logo : 'https://placehold.co/500/png'} alt=""/>
                </div>
                <button className={`${styles.sideBarMenu__toggleMenu}`} onClick={handleToggleMenu}>
                    <FiMenu/>
                </button>
            </div>
            <div className={`${styles.sideBarMenu__user}`}>
                <img src={userImage ? userImage : 'https://placehold.co/500/png'} alt=""
                     className={`${styles['sideBarMenu__user-image']}`}/>
                <div className={`${styles['sideBarMenu__user-info']}`}>
                    <h4 className={`${styles['sideBarMenu__user-name']}`}>{userName ? userName : 'Name Here'}</h4>
                    <p className={`${styles['sideBarMenu__user-role']}`}>{userRole ? userRole : 'Role here'}</p>
                </div>
            </div>
            <div className={`${styles.sideBarMenu__menu}`}>
                <div className={`${styles['sideBarMenu__menu-items']}`} ref={refHoverMenu}>
                    {
                        items?.map((item, index) => {
                            return (
                                <SideBarMenuItem
                                    icon={item.icon}
                                    title={item.title}
                                    link={item.link}
                                    key={index}
                                    index={index}
                                />
                            )
                        })
                    }
                </div>
                <div className={`${styles['sideBarMenu__menu-tooltips']}`} ref={refHoverTooltip}>
                    {
                        items?.map((item, index) => {
                            return (
                                <SideBarMenuItemTooltip
                                    title={item.title}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className={`${styles.sideBarMenu__logout}`}>
                <button className={`${styles['sideBarMenu__logout-button']}`}>
                    <FiLogOut/>
                    <span className={`${styles['sideBarMenu__logout-name']}`}>
                        Logout
                    </span>
                </button>
                <span className={`${styles['sideBarMenu__logout-tooltip']}`}>Logout</span>
            </div>

        </div>
    )
}

const SideBarMenuItem: FC<SideBarMenuItemProps> = ({
                                                       title,
                                                       link,
                                                       icon,
                                                   }) => {
    return (
        <li className={`${styles.sideBarMenu__menuItem}`}>
            <NavLink to={link} className={`${styles['sideBarMenu__menuItem-link']}`}>
                {icon}
                <span className={`${styles['sideBarMenu__menuItem-name']}`}>{title}</span>
            </NavLink>
        </li>
    )
}

const SideBarMenuItemTooltip: FC<{ title: string }> = ({title}) => {
    return (
        <div className={`${styles['sideBarMenu__menuItem-tooltip']}`}>
            {title}
        </div>
    )
}