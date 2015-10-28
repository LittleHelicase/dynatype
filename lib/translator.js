"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.from = from;
exports.to = to;

function create(from, to, fun) {
  return {
    from: from,
    to: to,
    fun: fun
  };
}

function from(translator) {
  return translator.from;
}

function to(translator) {
  return translator.to;
}