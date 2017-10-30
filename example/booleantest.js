const bool = require('../src/searchbool.js')

const boolarr = bool('hola AND adios OR debian AND redhat OR pepe AND holas AND bu')
console.log(JSON.stringify(boolarr))

const boolarr1 = bool('hola AND adios')
console.log(JSON.stringify(boolarr1))

const boolarr2 = bool('hola OR adios')
console.log(JSON.stringify(boolarr2))

const boolarr3 = bool('hola AND adios AND hi AND buuu')
console.log(JSON.stringify(boolarr3))

const boolarr4 = bool('hola')
console.log(JSON.stringify(boolarr4))
