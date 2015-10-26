/* global describe, it, beforeEach */

var expect = require('chai').expect

var dtype = require('../lib/datatype')
var translator = require('../lib/translator')

describe('Translator', function () {
  var t
  beforeEach(function () {
    var pointXY = dtype.descriptor('PointXY', {x: 0, y: 0})
    var pointRPhi = dtype.descriptor('PointRPhi', {r: 0, phi: 0})
    t = translator.create(pointXY, pointRPhi)
  })

  it('Can create a new translator between two types', function () {
    expect(translator.from(t)).to.equal('PointXY')
    expect(translator.to(t)).to.equal('PointRPhi')
  })
  it('Complains if a name clash occurs', function () {
    var t1 = dtype.descriptors('A', {})
    var t2 = dtype.descriptors('A', {different: 'bool'})
    expect(function () { dtype.translators(t1, t2) }).to.throw.an(Error)
  })
})
