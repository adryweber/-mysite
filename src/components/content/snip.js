import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Article } from '../article';
import { NonStretchedImage } from '../NonStretchedImage';


const gl = graphql`{

  revision1:file(relativePath:{eq:"snippet/revision1.png"}) {
		childImageSharp {
				fluid(maxWidth: 1200) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
  }

  revision2:file(relativePath:{eq:"snippet/revision2.png"}) {
		childImageSharp {
				fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
  }

  generated2:file(relativePath:{eq:"snippet/generated2.png"}) {
		childImageSharp {
				fluid(maxWidth: 1200) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
  }
}`;


const render = (data) => {
  return (
    <Article>
      <h2 id='snip'>Ревизия снипетов объявлений</h2>
      <p>На Авито в разных категориях у объявлений разные описания. Есть разные форматы и контексты отображения: список, плитка, vip, XL и т.п.. В сочетании существует больше 30 вариантов снипетов. Большинство из них сложились исторически и выглядят разнородно. Задача состояла в анализе и систематизации имеющихся вариантов.</p>

      <p>Целью было создание на <a href='https://github.com/airbnb/react-sketchapp'>генераторе графики</a> модели выделенных шаблонов сниппетов, а так же построение тестовых списков с реалистичными данными. Эксперементируя с шаблоном, мы видим как снипеты в списках перестраиваются автоматически.</p>
      <p>Поиск системы в дебрях вариантов:</p>
      <NonStretchedImage fadeIn fluid={data.revision1.childImageSharp.fluid} />
      <NonStretchedImage fadeIn fluid={data.revision2.childImageSharp.fluid} />
      <p>Реализованые шаблоны as-is. Реалистичные данные вынесены в json. Вывод строится автоматически:</p>
      <NonStretchedImage fadeIn fluid={data.generated2.childImageSharp.fluid} />
    </Article>
  );
};


export default ({ data }) => (
  <StaticQuery query={gl} render={render} />
);
