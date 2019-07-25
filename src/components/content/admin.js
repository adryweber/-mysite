import React from 'react';
import { css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';

import { NonStretchedImage } from '../NonStretchedImage';
import { Article } from '../article';
import { atrLink } from '../../utils/helpers';

const gl = graphql`{
  list:file(relativePath:{eq:"admin/list.png"}) {
    childImageSharp {
			fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }

  ticket:file(relativePath:{eq:"admin/ticket.png"}) {
    childImageSharp {
			fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }

}`;

const render = (data) => {
	return (
		<Article>
			<h2 id='admin'>Админка для модерации обращений</h2>

			<p>Задача. Сделать интерфейс админки для модерации обращений в службу поддержки. Все обращения попадают в единый бесконечный список. Список можно фильтровать по параметрам или по специальной очереди. Модераторы выбирают из списка обращение для работы с ним.</p>
			<p><span css={css`font-size: 2em; position: relative; top: 7px;`} role='img' aria-label='hand'>👉</span> Результат представлен в виде свёрстанного <a href='http://test.adry.ru/avito.adm-compare.lo' {...atrLink} >прототипа</a></p>

			<div className='picSign2'>
				<NonStretchedImage className='browser btn2' fadeIn fluid={data.list.childImageSharp.fluid} />
				<p>Список тикектов.</p>
			</div>

			<p>Страница обращения. Вся переписка по обращению идет на этой странице. Обращение переходит по жизненному циклу через несколько статусов.</p>
			<div className='picSign2'>
				<NonStretchedImage className='browser btn2' fadeIn fluid={data.ticket.childImageSharp.fluid} />
				<p>Карточка обращения с перепиской по тикету.</p>
			</div>
		</Article>
	);
};


export default ({ data }) => (
	<StaticQuery query={gl} render={render} />
);
