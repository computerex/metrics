### Metrics API

To install and run, please execute:

```
npm install
node index.js
```

Visit http://localhost:8080/docs to visit the API docs.

### Time and space complexity discussion

There are only 2 API calls defined. 

- posting to **/api/metric** creates a new metric if one doesn't exist, 
and then it aggregates the new value with the historial data.

A collection of partially sorted values is maintained in an array, which has a space
complexity of O(n). Computing the min/max/mean is done in constant time. The most 
time consuming operation is computing the median, which is done using:

https://en.wikipedia.org/wiki/Floyd%E2%80%93Rivest_algorithm

Which has an average performance of: n + min(k, n - k) + O(n ^(1/2))

- The API call to retrieve the statistics is just a
constant time hash table look up, assuming that's how JavaScript
implements it. We can store the statistics in a dictionary, which has
constant time look up and O(n) space complexity.

