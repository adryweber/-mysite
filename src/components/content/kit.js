import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Article } from '../article';
import { NonStretchedImage } from '../NonStretchedImage';
import { atrLink } from '../../utils/helpers';

const gl = graphql`{
	cover:file(relativePath:{eq:"kit/cover.png"}) {
		childImageSharp {
				fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
	}

	kitControlsSizes:file(relativePath:{eq:"kit/kit-controls-sizes.png"}) {
		childImageSharp {
			fluid(maxWidth: 1200) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
	} 
	
	kitControlsStates:file(relativePath:{eq:"kit/kit-controls-states.png"}) {
		childImageSharp {
			fluid(maxWidth: 800) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
	}

	kitSymbols1:file(relativePath:{eq:"kit/kit-symbols-1.png"}) {
		childImageSharp {
			fluid(maxWidth: 1200, maxHeight: 280) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
	}

	form:file(relativePath:{eq:"kit/form.png"}) {
		childImageSharp {
			fluid(maxWidth: 743) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
	} 

	kitAll:file(relativePath:{eq:"kit/all-kit.png"}) {
		childImageSharp {
			fluid(maxWidth: 600) {
				...GatsbyImageSharpFluid
				presentationWidth
			}
		}
	}

	demoRender: allFile(filter: { name: { eq: "demo-render" } }) {
		edges {
			node {
				publicURL 
			}
		}
	}

	typography: allFile(filter: { relativePath: { eq: "kit/kit-typography.gif" } }) {
		edges {
			node {
				publicURL 
			}
		}
	}

	trafaret1: allFile(filter: { name: { eq: "trafaret1" } }) {
		edges {
			node {
				publicURL 
			}
		}
	}

	trafaret2: allFile(filter: { name: { eq: "trafaret2" } }) {
		edges {
			node {
				publicURL 
			}
		}
	}

	tabs: allFile(filter: { name: { eq: "tabs" } }) {
		edges {
			node {
				publicURL 
			}
		}
	}
}`;

// kitText1:file(relativePath:{eq:"kit/kit-text-1.png"}) {
//     childImageSharp {
//         fixed(width: 800) {
//         ...GatsbyImageSharpFixed
//       }
//     }
// } 

// grid: allFile(filter: { name: { eq: "grid" } }) {
// 	edges {
// 		node {
// 		publicURL 
// 		}
// 	}
// }

const render = (data) => {
	return (
		<Article>
			<h2 id='kit'>Генеративный UI-кит</h2>
			<p>Задача: создать ui-кит, который будет генерироваться из js-кода. Использована библиотека <a href='https://github.com/airbnb/react-sketchapp' {...atrLink}>react-sketchapp</a>.</p>
			<NonStretchedImage fadeIn fluid={data.cover.childImageSharp.fluid} />

			<p>Получился управляемый через скрипт макет. Исправил в одном месте — везде обновилось. При изменении высоты элементов, макет перестраивается автоматически по модели флекс-бокс, исключая нахлесты блоков друг на друга.</p>

			<div className='picSign2'>
				<img alt='' width='800' src={data.demoRender.edges[0].node.publicURL} />
				<p>Волшебство: код при сохранении рендерится в Скетч.</p>
			</div>

			<p>Реализована модель дизайн-системы. Для задания параметров используются значения синхронизированные с компонентами для прода.</p>

			<h3>Типографика</h3>
			<p>Типографика представлена компонентами и поддержана текстовыми стилями. Типографические компоненты имеют свои габариты и учитывают отступы.</p>
			{/* <Image fadeIn fixed={data.kitText1.childImageSharp.fixed} /> */}
			<div className='picSign2'>
				<img alt='' width='800' src={data.typography.edges[0].node.publicURL} />
				<p className='picSign'>Заголовки и параграфы — это компоненты, которые стыкуются на макете.</p>
			</div>

			<h3>Трафареты</h3>
			<p>Трафареты позволяют пользователю ui-кита, легко разместить элемент по правилам позиционирования. Трафареты включается/выключается по шорткату с помощью плагина <a href='https://github.com/preciousforever/sketch-bounding-boxer'>Sketch bounding boxer</a>.</p>

			<div className='picSign2'>
				<img alt='' width='800' src={data.tabs.edges[0].node.publicURL} />
				<p>Трафарет подсвечивает гарабритные размеры элементов и внутренние отступы.</p>
			</div>


			<h3>Контролы и символы</h3>
			<p>Контролы показаны во всех нужных состояниях и всех нужных размерах. Все контролы максимально символизированы.</p>

			<p>Три размера контролов:</p>
			<NonStretchedImage fadeIn fluid={data.kitControlsSizes.childImageSharp.fluid} />
			<p>Все состояния одного размера на примере компонента чекбокса:</p>
			<NonStretchedImage fadeIn fluid={data.kitControlsStates.childImageSharp.fluid} />

			<p>Количество автоматически созданных символов более 300:</p>
			<NonStretchedImage fadeIn fluid={data.kitSymbols1.childImageSharp.fluid} />

			<h3>Составные структры</h3>
			<p>Кит четко прописывает механику построения большого из малого. Все формы строятся из типовых блоков — филдсетов. На каждый тип филдсета есть свой трафарет.</p>
			<NonStretchedImage fadeIn fluid={data.form.childImageSharp.fluid} />

			<p>Общий вид всего кита:</p>
			<NonStretchedImage fadeIn fluid={data.kitAll.childImageSharp.fluid} />
		</Article>
	);
};


export default ({ data }) => (
	<StaticQuery query={gl} render={render} />
);
