import React from 'react';
import { Link } from 'gatsby';


const items = [
	{
		title: 'Генеративный UI-кит',
		url: '/avito/#kit'
	},
	{
		title: 'Ревизия снипетов',
		url: '/avito/#snip'
	},
	{
		title: 'Карточка объявления Авито 2016',
		url: '/avito/#card'
	},	
	{
		title: 'Каталог компонент',
		url: '/avito/#phakt'
	},	
	{
		title: '3D-навигация по этажам',
		url: '/avito/#navigate'
	},
	{
		title: 'Админка модерации обращений',
		url: '/avito/#admin'
	},
	{
		title: 'Ссылки на прототипы',
		url: '/avito/#links'
	}	
];

export class MenuItems extends React.Component {

	constructor(props) {
        super(props);
        this.state = { activeElement: false };
        this.handleScroll = this.handleScroll.bind(this);
    }

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		this.handleScroll();
	};
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll() {
		items.forEach( value => {
			let element = document.getElementById(value.url.substring(8));
			
			if (getPosition(element).y <= 0) {
				this.setState({ activeElement: value.url });
			}
		});
	};
	
	render() {
		return (
			<div className='nav'>
				{
					items.map((item, i) => {
						return(
						<p key={i}>
							<Link className={this.state.activeElement === item.url ? 'activeItem': ''} activeClassName='activeItem' to={item.url}>{item.title}</Link>
						</p>);
					})
				}
			</div>
		);
	}
};



/**
 * Helper function to get an element's exact position
 * @param  {element}  element
 * @return {x,y}
 */
export function getPosition(el) {
	var xPos = 0;
	var yPos = 0;

	while (el) {
		if (el.tagName === "BODY") {
			// deal with browser quirks with body/window/document and page scroll
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;

			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
			// for all other non-BODY elements
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}

		el = el.offsetParent;
	}
	return {
		x: xPos,
		y: yPos
	};
};