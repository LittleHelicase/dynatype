/* global describe, it */

var expect = require('chai').expect

var dtype = require('../lib/dynatype.js')

describe('Dynamic type', function () {
  it('Can create a new type', function () {
    var t = dtype.create({})
    expect(dtype.isDynamicType(t)).to.be.true
  })
  it('Can query simple properties', function () {
    var t = dtype.create({a: 1})
    expect(dtype.query(t, 'a')).to.be.equal(1)
  })
  it('Have a descriptor creator', function () {
    var d = dtype.descriptor({a: 'number'})
    expect(dtype.datatype(d, 'a')).to.be.equal('number')
  })
  it('Checks whether data fits a descriptor', function () {
    var d = dtype.descriptor({a: 'number'})
    var t = dtype.create({a: 1})
    expect(dtype.matches(t, d)).to.be.true
  })
  it('Fails if a type does not match a descriptor', function () {
    var d = dtype.descriptor({a: 'number'})
    var t = dtype.create({a: '1'})
    expect(dtype.matches(t, d)).to.be.false
  })
})
