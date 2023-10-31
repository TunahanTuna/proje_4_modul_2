import React, { useState } from 'react'
export default subSidebarComponent = (Menu) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    return (
        Menu?.subMenus &&
        subMenuOpen && (
            <ul>
                {Menu.subMenus.map((subMenuItem, idx) => (
                    <Link
                        to={subMenuItem.path}
                        key={`sub-${subMenuItem.key}`}
                        className="flex px-5 cursor-pointer items-center  text-left p-2 text-sm text-gray-200 py-1"
                    >
                        {subMenuItem?.icon}
                        <span className=" px-2"> {subMenuItem.label}</span>
                    </Link>
                ))}
            </ul>
        )
    )
}
