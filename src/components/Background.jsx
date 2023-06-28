const Background = ({index}) => {

    const images = ['url(/fortuna-1/fondo1.jpg)', 'url(/fortuna-1/fondo2.jpg)', 'url(/fortuna-1/fondo3.jpg)', 'url(/fortuna-1/fondo4.jpg)', 'url(/fortuna-1/fondo1.jpg)', 'url(/fortuna-1/fondo2.jpg)', 'url(/fortuna-1/fondo3.jpg)', 'url(/fortuna-1/fondo4.jpg)', 'url(/fortuna-1/fondo1.jpg)', 'url(/fortuna-1/fondo2.jpg)', 'url(/fortuna-1/fondo3.jpg)', 'url(/fortuna-1/fondo4.jpg)', 'url(/fortuna-1/fondo1.jpg)', 'url(/fortuna-1/fondo2.jpg)', 'url(/fortuna-1/fondo3.jpg)', 'url(/fortuna-1/fondo4.jpg)'];

    document.body.style = `background-image: ${images[index]}`
}

export default Background