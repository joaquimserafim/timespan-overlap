/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = overlap

function overlap (range, range2check) {

  return is2dArray(range2check)
    ? multipleOverlaps(range, range2check)
    : testOverlap(range[0], range[1], range2check[0], range2check[1])
}

function multipleOverlaps (range, ranges) {
  let res = {}

  for (let i = 0; i < ranges.length; i++) {
    let overlaps = testOverlap(range[0], range[1], ranges[i][0], ranges[i][1])

    res[ranges[i].join(',')] = overlaps
  }

  return res
}

//
// help functions
//

function testOverlap (tmp01, tmp02, tmp11, tmp12) {
  return Math.min(tmp01, tmp02) <= Math.max(tmp11, tmp12) &&
    Math.max(tmp01, tmp02) >= Math.min(tmp11, tmp12)
}

function is2dArray (arr) {
  if (!Array.isArray(arr)) {
    return false
  }

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      return false
    }
  }

  return true
}
