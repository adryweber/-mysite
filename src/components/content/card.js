import React from 'react';
import { css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby'

import { NonStretchedImage } from '../NonStretchedImage';
import { Article } from '../article';


const gl = graphql`{

  card:file(relativePath:{eq:"card/card.png"}) {
		childImageSharp {
				fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
  }

  cardAuto:file(relativePath:{eq:"card/cardAutoo.png"}) {
		childImageSharp {
				fluid(maxWidth: 1200) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
  }

  carsVerticals:file(relativePath:{eq:"card/сarsVerticals.png"}) {
		childImageSharp {
				fluid(maxWidth: 1200) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
  }

  cardAll:file(relativePath:{eq:"card/cardAll.png"}) {
    childImageSharp {
      fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
          presentationWidth
      }
    }
  }

  fullFoto:file(relativePath:{eq:"card/fullFoto.png"}) {
    childImageSharp {
      fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
          presentationWidth
      }
    }
  } 

  grayCard:file(relativePath:{eq:"card/grayCard.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
          presentationWidth
      }
    }
  }   


  detail:file(relativePath:{eq:"card/detail.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
        presentationWidth
      }
    }
  }   

}`;

const atrLink = {
	target: '_blank',
	rel: 'noopener noreferrer'
};

const render = (data) => {
	return (
		<Article>
			<h2 id='card'>Карточка объявления Авито 2016</h2>
			<p>Задача. Обновить макет карточки предложения. Упорядочить блоки из которых состоит карточка, учесть новые потребности вывода данных разных категорий. Повысить акцент кнопок действий.</p>

			<p><span css={css`font-size: 2em; position: relative; top: 7px;`} role='img' aria-label='hand'>👉</span> Результат предcтавлен в виде <a href='http://test.adry.ru/avito-guides.lo/?q=poligon/card&type=simple' {...atrLink} >свёрстанного прототипа</a> с вариантами для разных категорий</p>

			<p>Карточка на примере авто:</p>
      <NonStretchedImage className='browser btn2' fadeIn fluid={data.card.childImageSharp.fluid} />

			<p>Макет имеет разную структуру для разных категорий:</p>
      <NonStretchedImage fadeIn fluid={data.carsVerticals.childImageSharp.fluid} />

			<p>Блоки карточки имеют сложное поведение:</p>
      <NonStretchedImage fadeIn fluid={data.detail.childImageSharp.fluid} />

			<p>Карточка состоит из множества блоков с множеством состояний:</p>
      <NonStretchedImage fadeIn fluid={data.cardAll.childImageSharp.fluid} />

			<p>Отдельно показаны варианты попапа с картинкой для разных размеров:</p>
      <NonStretchedImage fadeIn fluid={data.fullFoto.childImageSharp.fluid} />
		</Article>
	);
};


export default ({ data }) => (
	<StaticQuery query={gl} render={render} />
);
