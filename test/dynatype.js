/* global describe, it */

var expect = require('chai').expect

var dtype = require('../lib/dynatype.js')

describe('Dynamic type', function () {
  it('Have a descriptor creator', function () {
    var d = dtype.descriptor('typename', {})
    expect(dtype.typename(d)).to.be.equal('typename')
  })
  it('Can query if a descriptor defines a property', function () {
    var d = dtype.descriptor('typename', {b: 'string'})
    expect(dtype.hasProperty(d, 'b')).to.be.true
    expect(dtype.hasProperty(d, 'a')).to.be.false
  })
  it('Can query the type of a field', function () {
    var d = dtype.descriptor('typename', {a: 'number'})
    expect(dtype.typename(d)).to.be.equal('typename')
    expect(dtype.datatype(d, 'a')).to.be.equal('number')
  })
})
