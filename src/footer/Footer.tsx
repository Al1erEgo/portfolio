import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Link} from "./link/Link";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.name}>Aleksey Piskus</div>
                <div className={s.socialNetworks}>
                    <Link/>
                    <Link/>
                    <Link/>
                    <Link/>
                    <Link/>
                </div>
                <div className={s.rights}>2023 All rights reserved</div>
            </div>
        </div>
    );
};
