import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { NonStretchedImage } from '../NonStretchedImage';
import { Article } from '../article';


const gl = graphql`{    
  main:file(relativePath:{eq:"phakt/main2.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }

  inner1:file(relativePath:{eq:"phakt/inner.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }
 
  inner2:file(relativePath:{eq:"phakt/inner2.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }

  all1:file(relativePath:{eq:"phakt/all1.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
    }
  }  

  all2:file(relativePath:{eq:"phakt/all2.png"}) {
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
			<h2 id='phakt'>Каталог компонент «Факт»</h2>

			<p>Задача. Сделать интерфейс каталога реакт-компонент. Система позволяет иметь доступ к компонентам нескольких пакетов. Компоненты имеют описание и плейграунд, где можно менять параметры. Логотип «Факта» придумал <a href='http://plashchynski.ru/' target='_blank' rel='noopener noreferrer' >Сергей Плащинский</a></p>
			<div className='picSign2'>
        <NonStretchedImage className='browser btn2' fadeIn fluid={data.main.childImageSharp.fluid} />
				<p>Главная страница. Представлен перечень имеющихся пакетов.</p>
			</div>

			{/* <p>Перечень компонент пакета</p> */}
			<div className='picSign2'>
        <NonStretchedImage className='browser btn2' fadeIn fluid={data.inner2.childImageSharp.fluid} />
				<p>Перечень компонент пакета.</p>
			</div>

			<p>Карточка компонента. Вкладка с примером кода и таблицей параметров. По каждому параметру указан его тип, возможные значения. Так же есть возможность изменить значение параметра.</p>
			<div className='picSign2'>
        <NonStretchedImage className='browser btn2' fadeIn fluid={data.inner1.childImageSharp.fluid} />
				<p>На карточке компонента есть возможность поиграться значениями параметров.</p>
			</div>


			<p>Общий вид страниц проекта:</p>
      <NonStretchedImage fadeIn fluid={data.all1.childImageSharp.fluid} />

			<p>Спецификация всех блоков:</p>
      <NonStretchedImage fadeIn fluid={data.all2.childImageSharp.fluid} />
		</Article>
	);
};


export default ({ data }) => (
	<StaticQuery query={gl} render={render} />
);
