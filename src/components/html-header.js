import React from 'react';
import { Helmet } from 'react-helmet';


export const HtmlHeader = ({ data }) => (
    <Helmet htmlAttributes={{lang: 'ru'}}>
        <meta charSet='utf-8' />
        <title>Андрей Ткаченко</title>
        <link rel='canonical' href='http://adry.ru' />
    </Helmet>
);
