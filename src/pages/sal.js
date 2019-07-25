import React from 'react';
import Layout from '../components/layout';
import { Article } from '../components/article';
// import { MenuItems } from '../components/menu';

const atrLink = {
	target: '_blank',
	rel: 'noopener noreferrer'
  };

export default ({ data }) => {
	return (
		<Layout>
			<Article>
				<h2 id='links'>Работа в&nbsp;Студии Лебедева</h2>
				<p><a href='https://www.artlebedev.ru/tkachenko/' {...atrLink} >Работы на&nbsp;сайте Студии</a></p>
				<p><a href='http://old.adry.ru/portf/sal2/' {...atrLink} >Работы собранные отдельно&nbsp;1</a></p>
				<p><a href='http://old.adry.ru/portf/sal/' {...atrLink} >Работы собранные отдельно&nbsp;2</a></p>
			</Article>
		</Layout>
	);
};
