var assert = require('assert')
var metrics = require('./metrics')


// arrange
// act
metrics.post('test', 5)
var metric = metrics.get('test')
// assert
assert.equal(metric.mean, 5)
assert.equal(metric.median, 5)
assert.equal(metric.min, 5)
assert.equal(metric.max, 5)
assert.deepEqual(metric.values, [5])

metrics.post('test2', 6)

// 'test' metric values should not have changed as a result of posting new metric
assert.equal(metric.mean, 5)
assert.equal(metric.median, 5)
assert.equal(metric.min, 5)
assert.equal(metric.max, 5)
assert.deepEqual(metric.values, [5])

metric = metrics.get('test2')
assert.equal(metric.mean, 6)
assert.equal(metric.median, 6)
assert.equal(metric.min, 6)
assert.equal(metric.max, 6)
assert.deepEqual(metric.values, [6])

metrics.post('test', 1)
metric = metrics.get('test')
assert.equal(metric.min, 1)
assert.equal(metric.median, 3)