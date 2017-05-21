/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = overlap

function overlap (tmp, tmp2check) {

  return is2dArray(tmp2check)
    ? multipleOverlaps(tmp, tmp2check)
    : testOverlap(tmp[0], tmp[1], tmp2check[0], tmp2check[1])
}

function multipleOverlaps (tmp, tmps) {
  let res = {}

  for (let i = 0; i < tmps.length; i++) {
    let overlaps = testOverlap(tmp[0], tmp[1], tmps[i][0], tmps[i][1])

    res[tmps[i].join(',')] = overlaps
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
