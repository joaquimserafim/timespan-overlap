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

  it('should throw an exception when not pass the first time span' +
  ' - first time span',
    (done) => {
      const fails1 = function () {
        overlap()
      }

      expect(fails1).to.throw(Error)
      done()
    }
  )

  it('should throw an exception when not pass the second time span ' +
  '- time span to check',
    (done) => {
      const fails1 = function () {
        overlap([1495381349828, 1495381355955])
      }

      expect(fails1).to.throw(Error)
      done()
    }
  )

  it('should return false when the first time span is an empty array',
    (done) => {
      let res = overlap(
        [],
        [1495381355956, 1495381355965]
      )
      expect(res).to.be.equal(false)
      done()
    }
  )

  it('should return true when the first timestamp from the first time span ' +
  'start after the first timestamp from the check time span and the second ' +
  'timestamp from the first time span ends before the second timestamp from' +
  ' the check time span',
    (done) => {
      let res = overlap(
        [1495381349839, 1495381350563],
        [1495381349828, 1495381355955]
      )
      expect(res).to.be.equal(true)
      done()
    }
  )

  it('should return false when comparing two time span do not overlap',
    (done) => {
      let res = overlap(
        [1495381349828, 1495381355955],
        [1495381355956, 1495381355965]
      )
      expect(res).to.be.equal(false)
      done()
    }
  )

  it('should return true when comparing two time span do overlap',
    (done) => {
      let res = overlap(
        [1495381349828, 1495381355955],
        [1495381349839, 1495381350563]
      )
      expect(res).to.be.equal(true)
      done()
    }
  )

  it('should return `{ \'\': false }` with empty arrays on the check range',
    (done) => {
      let res = overlap(
        [1495381349828, 1495381355955],
        [[], []]
      )
      expect(res).to.be.deep.equal({'': false})
      done()
    }
  )

  it('should return an object with the time span as keys and with ' +
  'result false when missing the primary time span',
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

  it('should return true with multiple time span that overlap the' +
  ' given time span',
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

  it('should work with multiple time spans and overlap the first time span',
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
