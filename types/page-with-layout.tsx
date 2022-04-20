import { NextPage } from "next"
import type { ReactElement } from "react"
import MainLayout from "../components/main-layout/main-layout";
import PanelLayout from "../components/panel-layout/panel-layout";


export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }
export type PageWithAdminLayoutType = NextPage & { layout: typeof PanelLayout }
export type PageWithLayoutType =
 | PageWithMainLayoutType
 | PageWithAdminLayoutType
export type LayoutProps = ({
 children,
}: {
 children: ReactElement
}) => ReactElement
export default PageWithLayoutType