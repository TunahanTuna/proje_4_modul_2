import React, { useState } from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import { texts } from '../../lib/constants/constants'
import ApplyLogo from '../../assets/ApplyLogo'
import SideBarTabs from './SideBarTabs'
import ApplyLogoWhite from '../../assets/ApplyLogoWhite'
import { FiAlignJustify } from 'react-icons/fi'

export default function Test() {
    const [open, setOpen] = useState(true)

    return (
        <div className="h-screen flex flex-col items-end justify-end ">
            <button className="z-30 md:invisible visible absolute right-0 my-12 mx-5 h-14 w-14 rounded-full peer bg-sky-900 hover:bg-sky-800 focus:bg-sky-800 active:bg-sky-700 transition">
                <span className="text-white items-center flex w-full justify-center">
                    <FiAlignJustify size={24} />
                </span>
            </button>

            <div
                className={`z-20 md:z-1 fixed md:relative md:left-0 w-72 top-0 -left-96 peer-focus:left-0 peer:transition duration-200 ease-out delay-150 lg:w-64 md:w-48   shadow-2xl bg-sky-900 h-screen overflow-y-scroll `}
            >
                <div className="justify-center">
                    <h1
                        className={`text-white font-bold text-2xl text-center duration-200 pt-3 p-5 ${
                            !open && 'invisible'
                        }`}
                    >
                        <ApplyLogoWhite />
                    </h1>
                </div>
                <div>
                    <SideBarTabs />
                </div>
            </div>
        </div>
    )
}
