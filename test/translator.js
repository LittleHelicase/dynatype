/* global describe, it, beforeEach */

var expect = require('chai').expect

var descriptor = require('../src/dynatype.js')
var translator = require('../src/translator.js')

describe('Translator', function () {
  var t
  beforeEach(function () {
    var pointXY = descriptor.create('PointXY', {x: 0, y: 0})
    var pointRPhi = descriptor.create('PointRPhi', {r: 0, phi: 0})
    t = translator.create(pointXY, pointRPhi, {})
  })

  it('Can create a new translator between two types', function () {
    expect(translator.from(t)).to.equal('PointXY')
    expect(translator.to(t)).to.equal('PointRPhi')
  })
  it('Complains if a name clash occurs', function () {
    var t1 = descriptor.create('A', {})
    var t2 = descriptor.create('A', {different: 'bool'})
    expect(function () { translator.create(t1, t2) }).to.throw(Error)
  })
})
