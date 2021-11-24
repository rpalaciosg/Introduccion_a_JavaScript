#!/usr/bin/env node --experimental-modules --no-warnings

import 'colors';
import 'chili-js';
import program from 'commander';
import inquirer from 'inquirer';
import pkg from './package.json';
import fetch from 'node-fetch';
import { config } from './utils/config.mjs';
import { spin, rate, spacer, info } from './utils/utils.mjs';

const prompt = inquirer.prompt
const baseUrl = 'https://api.themoviedb.org/3/'
const fixedQueryParams = '?api_key=<apiKey>&language=<lang>'


program.version(pkg.version).description('Herramienta de línea de comandos para ver información sobre películas o series')
.option('-l, --lang <language>', 'Idioma en el que obtener los resultados')
.option('-k, --key <key>', 'API Key de The Movie DB')
.option('-s, --search', 'Búsqueda avanzada')


program.parse(process.argv);

if (program.lang) {
    if (program.lang.indexOf('-') > -1) {
        config.language = program.lang;
    }
}

// Explicar que si no tenemos api key deberíamos lanzar una excepción
if (program.key) {
        config.apiKey = program.key;  
} /*else {
    throw new Error('Es obligatorio el uso de API Key')
}*/

if (program.search) {
    prompt([
        {
          name: 'title',
          message: '¿Cuál es el título de la película?',
        }, {
          name: 'year',
          message: '¿En qué año se estrenó??'
        }, {
          name: 'adult',
          message: '¿Es para mayores de edad?',
          type: 'confirm'
        }, {
          name: 'lang',
          message: '¿En qué idioma lo quieres?',
          choices: [
              'es-ES',
              'en-US',
          ],
          default: 0
        }
      ]).then((ans) => {
          spin.text = 'Buscando coincidencias...';
          spin.start();
          fetch(`${baseUrl}search/movie${fixedQueryParams.replace('<lang>', config.language).replace('<apiKey>', config.apiKey)}
          &query=${encodeURIComponent(ans.title)}&page=1&include_adult=${ans.adult}&year=${ans.year}`).then(res => res.json())
          .then((response) => {
              spin.stop();
              let movies = [];
              response.results.forEach((movie) => {
                  movies.push(movie.title);
              })
              prompt([{
                name: 'movie',
                message: 'Selecciona la película que deseas: ',
                type: 'list',
                choices: movies,
                default: 0
              }]).then(answ => {
                  let movie = response.results.filter((movie) => movie.title === answ.movie);
                  spin.text = 'Cargando información de la película'
                  spin.start()
                  fetch(`${baseUrl}movie/${movie[0].id}${fixedQueryParams.replace('<lang>', config.language).replace('<apiKey>', config.apiKey)}`)
                  .then((detailResponse) => detailResponse.json()).then((detailJSON) => {
                      spin.stop();
                      info(detailJSON);
                  }).catch((err) => console.log(err));
              })
          })
      }).catch((err) => {
            console.log(err);
      });
} else {
    prompt([{
        name: 'movies',
        message: 'Selecciona un listado de películas: ',
        type: 'list',
        choices: [
          'Mejor Valoradas',
          'Próximos estrenos',
          'Más votadas',
          'Tendencias actuales'
        ],
        default: 0
      }]).then((res) => {
          let path = '';
          switch (res.movies) {
              case 'Mejor valoradas':
                  path = 'top_rated';
                  break;
              case 'Próximos estrenos':
                  path = 'upcoming';
                  break;
              case 'Más votadas':
                  path = 'popular';
                  break;
              case 'Tendencias actuales':
                  path = 'now_playing';
                  break;
              default:
                  path = 'top_rated';
          }
          const url = baseUrl + 'movie/' + path + fixedQueryParams.replace('<lang>', config.language).replace('<apiKey>', config.apiKey)
          spin.text = 'Cargando listado de películas...';
          spin.start();
          fetch(url).then((response) => response.json())
          .then((json) => {
            spin.stop();
            let movies = [];
            json.results.forEach((movie) => {
                movies.push(movie.title);
            })
            prompt([{
              name: 'movie',
              message: 'Selecciona la película que deseas: ',
              type: 'list',
              choices: movies,
              default: 0
            }]).then(answ => {
                let movie = json.results.filter((movie) => movie.title === answ.movie);
                spin.text = 'Cargando información de la película';
                spin.start();
                fetch(`${baseUrl}movie/${movie[0].id}${fixedQueryParams.replace('<lang>', config.language).replace('<apiKey>', config.apiKey)}`)
                .then((detailResponse) => detailResponse.json()).then((detailJSON) => {
                    spin.stop();
                    info(detailJSON);
                }).catch((err) => console.log(err));
            })
          })
      }).catch((err) => {
            console.log(err);
      })
}