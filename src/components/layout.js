import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { HtmlHeader } from './html-header';

// Slow scroll to ancors
// if (typeof window !== 'undefined') {
//     // eslint-disable-next-line global-require
//     require('smooth-scroll')('a[href*='#']')
// }

const Header = ( ) => {
    const headerStyle = css`
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        padding-left: 2em;
        padding-right: 2em;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: #004DEF;
    `;
 
    return (
        <div css={headerStyle} className='white'>
            <Link to='/'>Андрей Ткаченко</Link>
        </div>
    )
}

const Menu = ({ items }) => {
    const menuStyle = css`
        position: fixed;
        top: 0;
        left: 0;
        width: 20vw;
        padding: 36px;
        margin-top: 40px;
       
        /* For middle screen */
        @media screen and (max-width: 850px) {
            & {
                width: 30vw;
            }        
        
            /* For narrow screen */
        @media screen and (max-width: 650px) {
            & {
                position: relative;
                width: 100%;
                padding: 36px 0 36px 0;
            }
    `;

    return (
        <div css={menuStyle}>
            {items}
        </div>
    )
}

export default ({ data, menuItems, children }) => {

    const bgStyle = css`
        background-color: #DEDAD6;
        padding: 0 2em;
    `;

    const contentStyle = (menuItems) => css`
        margin-top: 40px;
        margin-left: ${menuItems ? `20vw` : `0` };

        /* Compensation for first article */
        & > .article:first-of-type {
            margin-top: -40px;
        }

        /* For middle screen */
        @media screen and (max-width: 850px) {
            & {
                margin-left: ${menuItems ? `30vw` : `0` };
            }           

        /* For narrow screen */
        @media screen and (max-width: 650px) {
            & {
                margin-top: 0;
                margin-left: 0;
            }
    `;

    return (
        <div css={bgStyle}>
            <HtmlHeader />
            <Header />            
            {menuItems && <Menu items={menuItems}/>}
            <div css={contentStyle(menuItems)}>
                {children}
            </div>
        </div>
    );
} 