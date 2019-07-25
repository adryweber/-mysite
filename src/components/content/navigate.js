import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { NonStretchedImage } from '../NonStretchedImage';
import { Article } from '../article';
import { atrLink } from '../../utils/helpers';

const gl = graphql`{
  common:file(relativePath:{eq:"navigate/common.png"}) {
    childImageSharp {
      fluid(maxWidth: 1200) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }

  cardMan:file(relativePath:{eq:"navigate/cardMan.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }


  catalogCardNamed:file(relativePath:{eq:"navigate/catalogCardNamed.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }

  caseInputSearch:file(relativePath:{eq:"navigate/caseInputSearch.png"}) {
    childImageSharp {
      fluid(maxWidth: 1200) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }

  mouse:file(relativePath:{eq:"navigate/mouse2.png"}) {
    childImageSharp {
      fluid(maxWidth: 470) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }  
  
}`;


const render = (data) => {
	return (
		<Article>
		<h2 id='navigate'>3D-навигация по офису</h2>
		<p>Компания имеет большой офис на нескольких этажах. <a href='https://www.facebook.com/gc.s9k' {...atrLink}>Саша Амосов</a> создал реализацию навигатора по офису. Моя задача: спроектировать и оформить интерфейс.</p>

		<p>Основная функция системы — найти место сотрудника по его имени. Вбил в поиск, получил метку на карте и карточку с описанием.</p>

		<div className='picSign2'>
      <NonStretchedImage className='browser btn2' fadeIn fluid={data.cardMan.childImageSharp.fluid} />
			<p>Поиск рабочего места сотрудника.</p>
		</div>

		<div className='picSign2'>
      <NonStretchedImage className='browser btn2' fadeIn fluid={data.catalogCardNamed.childImageSharp.fluid} />
			<p>Так же удобно осуществляется поиск переговорок.</p>
		</div>

		<p>Схема вращается в пространстве с помощью мыши:</p>
    <NonStretchedImage fadeIn fluid={data.mouse.childImageSharp.fluid} />

		<p>Подробно описана механика поиска:</p>
    <NonStretchedImage fadeIn fluid={data.caseInputSearch.childImageSharp.fluid} />

		<p>Общий вид эскизов проекта:</p>
    <NonStretchedImage fadeIn fluid={data.common.childImageSharp.fluid} />

	</Article>
	);
};


export default ({ data }) => (
	<StaticQuery query={gl} render={render} />
);
