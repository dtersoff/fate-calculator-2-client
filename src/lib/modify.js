'use strict'

import Sorter from './sorter.js'

const sorter = new Sorter()

const classList = ['saber', 'archer', 'lancer', 'rider', 'caster', 'assassin', 'berserker', 'ruler', 'avenger', 'alterego', 'mooncancer', 'shielder']

const modify = function (servant) {
  switch (sorter.normalString(servant.sclass)) {
  case classList[0]:
    servant.atk *= 1
    return servant
  case classList[1]:
    servant.atk *= 0.95
    return servant
  case classList[2]:
    servant.atk *= 1.05
    return servant
  case classList[3]:
    servant.atk *= 1
    return servant
  case classList[4]:
    servant.atk *= 0.9
    return servant
  case classList[5]:
    servant.atk *= 0.9
    return servant
  case classList[6]:
    servant.atk *= 1.1
    return servant
  case classList[7]:
    servant.atk *= 1.1
    return servant
  case classList[8]:
    servant.atk *= 1.1
    return servant
  case classList[9]:
    servant.atk *= 1
    return servant
  case classList[10]:
    servant.atk *= 1
    return servant
  case classList[11]:
    servant.atk *= 1
    return servant
  }
}

export default modify
