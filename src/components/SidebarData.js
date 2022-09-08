import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io5'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        activeClassName: 'active'
    },
    {
        title: "Multi Date Picker",
        path: "/multi-date-picker",
        icon: <FaIcons.FaCalendarAlt />,
        cName: 'nav-text',
        activeClassName: 'active'
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <IoIcons.IoDocumentText />,
        cName: 'nav-text',
        activeClassName: 'active'
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <MdIcons.MdManageAccounts />,
        cName: 'nav-text',
        activeClassName: 'active'
    }
]