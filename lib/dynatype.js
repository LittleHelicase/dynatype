'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.create = create;
exports.typename = typename;
exports.hasProperty = hasProperty;
exports.datatype = datatype;

function create(name, data) {
  return {
    name: name,
    data: data
  };
}

function typename(dynatype) {
  return dynatype.name;
}

function hasProperty(dynatype, property) {
  return typeof dynatype.data[property] !== 'undefined';
}

function datatype(dynatype, property) {
  return dynatype.data[property];
}