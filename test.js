/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const mocha   = require('mocha')
const expect  = require('chai').expect

const it        = mocha.it
const describe  = mocha.describe

const overlap = require('.')

describe('Timestamp Overlap', () => {

  it('should throw an exception when not pass the first timespan pair' +
  ' - primary range',
    (done) => {
      const fails1 = function () {
        overlap()
      }

      expect(fails1).to.throw(Error)
      done()
    }
  )

  it('should throw an exception when not pass the second timespan pair ' +
  '- range to check',
    (done) => {
      const fails1 = function () {
        overlap([1495381349828, 1495381355955])
      }

      expect(fails1).to.throw(Error)
      done()
    }
  )

  it('should return false when the first timespan range is an empty array',
    (done) => {
      let res = overlap(
        [],
        [1495381355956, 1495381355965]
      )
      expect(res).to.be.equal(false)
      done()
    }
  )

  it('should return false when comparing two timespan ranges do not overlap',
    (done) => {
      let res = overlap(
        [1495381349828, 1495381355955],
        [1495381355956, 1495381355965]
      )
      expect(res).to.be.equal(false)
      done()
    }
  )

  it('should return true when comparing two timespan ranges do overlap',
    (done) => {
      let res = overlap(
        [1495381349828, 1495381355955],
        [1495381349839, 1495381350563]
      )
      expect(res).to.be.equal(true)
      done()
    }
  )

  it('should return `{ \'\': false }` with empty arrays',
    (done) => {
      let res = overlap(
        [1495381349828, 1495381355955],
        [[], []]
      )
      expect(res).to.be.deep.equal({'': false})
      done()
    }
  )

  it('should return an object with the ranges as keys and with result false' +
  ' when missing the primary range',
    (done) => {
      let res = overlap(
        [],
        [[1495381349839, 1495381350563], [1495381350563, 1495381355955]]
      )
      expect(res).to.be.deep.equal(
        {
          '1495381349839,1495381350563': false,
          '1495381350563,1495381355955': false
        }
      )
      done()
    }
  )

  it('should return true with multiple timespan ranges that overlap a' +
  ' given timespan range',
    (done) => {
      let res = overlap(
        [1495381349828, 1495381355955],
        [[1495381349839, 1495381350563], [1495381350563, 1495381355955]]
      )
      expect(res).to.be.deep.equal(
        {
          '1495381349839,1495381350563': true,
          '1495381350563,1495381355955': true
        }
      )
      done()
    }
  )

  it('should work with multiple ranges and some dont not overlap ' +
  'with the given timespan range',
    (done) => {
      let res = overlap(
        [1495381349828, 1495381355955],
        [[1495381349839, 1495381350563], [1495381350563, 1495381355955]]
      )
      expect(res).to.be.deep.equal(
        {
          '1495381349839,1495381350563': true,
          '1495381350563,1495381355955': true
        }
      )
      done()
    }
  )
})
