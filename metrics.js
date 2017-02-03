var quickselect = require('quickselect');

function median(nums) {
    var k = Math.floor(nums.length/2.0);
    // Floyd-Rivest 
    quickselect(nums, k);
    if (nums.length % 2 == 0) return (nums[k]+nums[k-1])/2.0;
    return nums[k];
 }

var metrics = function() {
    return {
        metrics: {},
        post: function(metricName, metricValue) {
            var metric = this.metrics[metricName];
            if (metric) {
                metric.values.push(metricValue);
                metric.mean = metric.mean + (metricValue - metric.mean)/(metric.values.length);
                metric.median = median(metric.values);
                metric.min = Math.min(metric.min, metricValue);
                metric.max = Math.max(metric.max, metricValue);
            } else {
                this.metrics[metricName] = {
                mean: metricValue,
                median: metricValue,
                min: metricValue, 
                max: metricValue,
                values: [metricValue]
                };
            }
        },
        get: function(metricName) {
            var metric = this.metrics[metricName];
            if (!metric) return null;
            // deep copy
            return JSON.parse(JSON.stringify(metric));
        }
    }
}
module.exports = new metrics();