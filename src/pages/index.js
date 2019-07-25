import React from "react";
import { css } from "@emotion/core"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from 'gatsby-image';
import { HtmlHeader } from "../components/html-header"
import { atrLink } from '../utils/helpers';

const gl = graphql`{    
  me1:file(relativePath:{eq:"me-1.png"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_tracedSVG
        presentationWidth
      }
    }
  }

  me2:file(relativePath:{eq:"me-2.png"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_tracedSVG
        presentationWidth
      }
    }
  }
}`

const widthScreen = '850px';

const CopyRightPhoto = ({ className }) => {
    return(
        <div className={className} css={css`font-size: 12px;`}>
            Спасибо за фото <a href='https://www.instagram.com/mischaeliseev/' {...atrLink}>Мише Елисееву</a>
        </div>
    );
};

class Photo extends React.Component {
    render() {
        const wrapperStyle = css`
            position: fixed !important;
            height: 100vh;
            width: 45vw;
            @media screen and (max-width: ${widthScreen}) {
                & {
                    position: relative !important;
                    height: 30vh;
                    width: 100%;
                }
        `;

        const textCopyStyle = css`
            position: absolute !important;
            bottom: 2em;
            left: 2em;
            z-index: 10;

            @media screen and (max-width: ${widthScreen}) {
                & {
                    display: none
                }
            }
        `;        

        const innerStyle = `
            height: 100vh;
            width: 45vw;

            padding: 2em;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;

            @media screen and (max-width: ${widthScreen}) {
                & {
                    height: 30vh;
                    width: 100vw;
                } 
        `;

        // Два изображения с абослютным позиционированием друг над другом, 
        // для того что бы можно было бы переключать "кадр" по ховеру над верхним
        const i1 = css`
            position: absolute !important;
            z-index: 2;
            opacity: 1; 
            -webkit-transition: opacity 0.4s linear;
            & :hover {
                opacity: 0 !important; 
            }         
            ${innerStyle}   
        `;

        const i2 = css`
            position: absolute !important;
            z-index: 1;
            opacity: 1;
            ${innerStyle}            
        `;


        return (
            <div css={wrapperStyle}>
                <div css={textCopyStyle}>
                    <CopyRightPhoto className='white'/>
                </div>
                <Image css={i1} fadeIn='soft' fluid={this.props.data.me1.childImageSharp.fluid}/>
                <Image css={i2} fadeIn='soft' fluid={this.props.data.me2.childImageSharp.fluid }/>
            </div>
        );
    }
}


const TextAbout = () => {
    const textSideStyle = css` 
        height: 100vh;
        width: 55%;
        margin-left: 45%;
        padding: 2em;
        padding-top: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-y: scroll;

        @media screen and (max-width: ${widthScreen}) {
            & {
                margin-left: 0;
                width: 100%;
                height: auto;
                padding-top: 30px;
            }         
    `;

    const textCopyStyle2 = css`
        margin-top: 2em;

        @media screen and (min-width: ${widthScreen}) {
            display: none;
        }
    `; 

    return (
        <div css={textSideStyle}>
            <div className='big'>
                <h1>Андрей Ткаченко</h1>
                <p className='subTitle'>дизайнер интерфейсов</p>
                <p>Инженерное образование, системный подход, прототипирование в коде, 10+ лет экспертизы.</p>
                <p><b>Портфель:</b> <Link to='/avito/'>Авито</Link>, Авто.ру, <Link to='/sal/'>Студия Лебедева</Link>, Юзабилитилаб, Армада, Группа Махаон, Интерфакс.</p>
            </div>
            <ContactLine />
            <div css={textCopyStyle2}>
                <CopyRightPhoto />
            </div>
        </div>
    );
};

const ContactLine = () => {
    const contactStyle = css`
        margin-bottom: 0;
        & a {
            margin-right: 8%;
        }
    `;

    return(
        <p css={contactStyle} className='big'>
            <a href='mailto:adry@adry.ru'>adry@adry.ru</a>
            <a href='https://www.facebook.com/andrew.tkachenko.718' {...atrLink}>fb</a>
            <a href='https://www.linkedin.com/in/adrytaylor/' {...atrLink}>ln</a>
        </p>
    );
};


const render = (data) => {
    const bgStyle = css`
        background-color: #D8D8D8;
    `;

    return (
        <div css={bgStyle}>
            <HtmlHeader />
            <Photo data={data} />
            <TextAbout />
        </div>
    );
};

export default ({ data }) => (
    <StaticQuery query={gl} render={render} />
);
