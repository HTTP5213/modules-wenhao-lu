import {theShire, buckland} from './another-module.js'


var statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;


export {theShire, statement}