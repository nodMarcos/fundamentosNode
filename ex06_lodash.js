const _ = require('lodash');

const alunos = [{
    nome: 'jão',
    nota: 7.6
}, {
    nome: 'maia',
    nota: 8.6
}, {
    nome: 'predo',
    nota: 8.1
}
]

const media = _.sumBy(alunos, 'nota') / alunos.length;

console.log(media);