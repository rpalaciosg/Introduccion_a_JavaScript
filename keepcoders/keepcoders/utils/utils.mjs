import terminalImage from 'terminal-image';
import ora from 'ora';
import { config } from './config.mjs';
import fetch from 'node-fetch';

export let spin = new ora('Creado por Keepcoders');

export let spacer = (counter = 3) => {
    for (let i=0; i < counter; i++) {
      console.log('');
    }
};

export let rate = (n) => {

    if (n < 1) {
      return '☆☆☆☆☆☆☆☆☆☆';
    } else if ( n >= 1 && n < 2 ) {
      return '★☆☆☆☆☆☆☆☆☆';
    } else if ( n >= 2 && n < 3) {
      return '★★☆☆☆☆☆☆☆☆';
    } else if ( n >= 3 && n < 4) {
      return '★★★☆☆☆☆☆☆☆';
    } else if ( n >= 4 && n < 5) {
      return '★★★★☆☆☆☆☆☆';
    } else if ( n >= 5 && n < 6) {
      return '★★★★★☆☆☆☆☆';
    } else if ( n >= 6 && n < 7) {
      return '★★★★★★☆☆☆☆';
    } else if ( n >= 7 && n < 8  ) {
      return '★★★★★★★☆☆☆';
    } else if ( n >= 8 && n < 9  ) {
        return '★★★★★★★★☆☆';
    } else if ( n >= 9 && n < 10 ) {
      return '★★★★★★★★★☆';
    } else if ( n == 10) {
      return '★★★★★★★★★★';
    }
};

let months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Deciembre'
  ]

export let info = async (body) => {
    let base = `http://image.tmdb.org/t/p/w500${body.backdrop_path}`;

    spacer(2)
    console.log('Título:' + ` ${body.title.toString().bold}`.yellow)
    console.log('Estreno:' + ` ${body.release_date.split('-')[2]} de ${ months[body.release_date.split('-')[1]] } de ${body.release_date.split('-')[0]}`)
    console.log('Rating:' + rate(body.vote_average).yellow)
    spacer(2)
    console.log(`Descripción[${config.language.split('-')[0]}] :\n${body.overview.toString()}`)
    spacer(2)
    console.log('Poster: ')
    spin.text = 'Cargando imagen...';
    spin.start();
    fetch(base).then((res) => res.buffer()).then((buff) => {
        spin.stop();
        terminalImage.buffer(buff).then((image) => {
            console.log(image);
            spacer(3);
        });
    });
}