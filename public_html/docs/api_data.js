define({ "api": [
  {
    "type": "get",
    "url": "/api/metric/:metric",
    "title": "get the summary for the specified metric",
    "group": "Metric",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>the name of the metric</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "mean",
            "description": "<p>the arithmetic mean</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "median",
            "description": "<p>the median</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "min",
            "description": "<p>the smallest value posted</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "max",
            "description": "<p>the largest value posted</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "values",
            "description": "<p>all the historical values, partially sorted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"mean\": 22,\n   \"median\": 22,\n   \"min\": 22,\n   \"max\": 22,\n   \"values\": [\n     22\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "unknown metric error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "metric not found ",
          "content": "HTTP/1.1 404 Metric Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Metric",
    "name": "GetApiMetricMetric"
  },
  {
    "type": "POST",
    "url": "/api/metric",
    "title": "post a value for a metric",
    "group": "Metric",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the metric</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>floating point value of the metric</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "unknown metric error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Metric",
    "name": "PostApiMetric"
  }
] });
