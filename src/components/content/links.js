import React from 'react';
import { Article } from '../article';
import { atrLink } from '../../utils/helpers';


export default ({ data }) => (
  <Article>
    <h2 id='links'>Ссылки на прототипы</h2>
    <p><a href='http://test.adry.ru/autoru.lo/cars/main.html' {...atrLink} >Модель навигаци Автору 2014</a></p>
    <p><a href='http://test.adry.ru/avito-guides.lo/?q=poligon/card&type=simple' {...atrLink}>Модель карточки Авито 2016</a></p>
    <p><a href='http://test.adry.ru/avito-guides.lo/?q=poligon/support&mode=vert-tree' {...atrLink} >Прототип хелпцентра Авито</a></p>

    <p><a href='http://test.adry.ru/avito.adm-compare.lo' {...atrLink} >Прототип админки модераторов Авито</a></p>
    <p><a href='http://test.adry.ru/avito.adm.lo' {...atrLink} >Прототип админки модераторов Авито (другая версия)</a></p>

    {/* <p><a href='http://test.adry.ru/skin-market.lo/?q=main' {...atrLink} >Прототип проекта Скин-маркет</a></p> */}
  </Article>
);


