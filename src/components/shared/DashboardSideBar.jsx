import React, { useState } from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import { texts } from '../../lib/constants/constants'

export default function DashboardSideBar() {
    return (
        <div>
            <ul className=" ">
                {DASHBOARD_SIDEBAR_LINKS.map((Menu, index) => (
                    <div key={index}>
                        <MenuItem menu={Menu} index={index} />
                    </div>
                ))}
            </ul>
        </div>
    )
}
const MenuItem = ({ menu, index }) => {
    const { pathname } = useLocation()
    const [subMenuOpen, setSubMenuOpen] = useState(texts.submenuOpenObject) // Ayrı alt menü durumlarını saklar
    const toggleSubMenu = (menuKey) => {
        setSubMenuOpen({
            ...subMenuOpen,
            [menuKey]: !subMenuOpen[menuKey] // İlgili menüyü açıp kapatır
        })
    }
    const toggleSidebar = () => {
        setOpen(!open)
    }
    return (
        <div className="">
            <Link
                to={menu?.path}
                key={`sidebar-${index}`}
                className={`${
                    pathname === menu.path ? 'text-white bg-sky-700' : 'text-neutral-400 '
                } hover:no-underline flex rounded-md p-2 cursor-pointer hover:bg-sky-700 text-white font-bold placeholder:text-sm items-center gap-x-4 active:bg-sky-600 ${
                    menu?.gap ? 'mt-9' : 'mt-2'
                }`}
            >
                {menu?.icon}
                <span className="flex-1"> {menu.label}</span>
                {menu?.subMenus && <BiDownArrow onClick={() => toggleSubMenu(menu.key)} />}
            </Link>
            {menu?.subMenus && subMenuOpen[menu.key] && open && (
                <ul>
                    {menu.subMenus.map((subMenuItem, idx) => (
                        <div key={`subMenu-div-${idx}`}>
                            <Link
                                to={subMenuItem.path}
                                key={`sub-${idx}`}
                                className={`${
                                    pathname === subMenuItem.path ? 'text-white bg-sky-700' : 'text-white '
                                } hover:no-underline hover:bg-sky-600 flex px-5 cursor-pointer items-center font-semibold rounded-md text-left p-2 text-sm text-gray-200 py-1`}
                            >
                                {subMenuItem?.icon}
                                <span className="flex-1 px-2"> {subMenuItem.label}</span>
                                {subMenuItem?.subMenus && (
                                    <BiDownArrow onClick={() => toggleSubMenu(subMenuItem.key)} />
                                )}
                            </Link>
                            {subMenuItem?.subMenus && subMenuOpen[subMenuItem.key] && open && (
                                <ul>
                                    {subMenuItem.subMenus.map((subMenu, index) => (
                                        <Link
                                            to={subMenu.path}
                                            key={`sub-menu-${index}`}
                                            className={`${
                                                pathname === subMenu.path ? 'text-white bg-sky-700' : 'text-white '
                                            } hover:no-underline hover:bg-sky-700 flex px-10 cursor-pointer items-center font-semibold  rounded-md text-left p-2 text-sm text-gray-200 py-1`}
                                        >
                                            {subMenu?.icon}
                                            <span className=" px-2"> {subMenu.label}</span>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}
