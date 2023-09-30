"use client";

import React from "react";
import { Layout } from "antd";
import Header from "./Header";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {

    // const base = "admin";
    return (
        <Content style={{ minHeight: "100vh", color: "black" }}>

            <Header></Header>
            {/* <UMBreadCrumb items={[
                {
                    label:`${base}`,
                    link:`/${base}`,
                },
                {
                    label:`student`,
                    link:`/${base}/student`,
                }
            ]}></UMBreadCrumb> */}
            {children}
        </Content>
    )
}

export default Contents;