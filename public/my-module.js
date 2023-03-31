import {theShire, buckland} from './another-module.js'


let statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;


export {theShire, statement}