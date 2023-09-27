import type { MenuProps } from 'antd';
import {

    UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';


export const sidebarItems = (role: string) => {
    const defaultSidebarItems: MenuProps["items"] = [
        {
            label: "Profile",
            key: "Profile",
            icon: <UserOutlined />,
            children: [
                {
                    label: "Account Profile",
                    key: "profile",
                },
                {
                    label: "Change Password",
                    key: "change-password",
                },
            ],
        }
    ];

    const commonAdminSidebarItems:MenuProps["items"] = [
        {
            label:<Link href={`/${role}/manage-student`}>Manage Students</Link>,
            key:"manage-students",
        }

    ];
    if (role === "student" ) return defaultSidebarItems ;
    else if (role==="admin") return commonAdminSidebarItems;
}

export default sidebarItems