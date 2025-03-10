import { ReactNode, type FC } from "react";

import Styles from './appLayout.module.scss';

type appLayoutProps={
    children:ReactNode
}

const AppLayout:FC<appLayoutProps> =({children}):ReactNode=>{
    return(
        <main className={Styles.app_layout}>
            {children}
        </main>
    )
}

export default AppLayout;