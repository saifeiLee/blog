{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "id": 515,
  "iteration": 1573700018860,
  "links": [],
  "panels": [
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "C-APM<生产环境>",
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 0,
        "y": 0
      },
      "id": 45,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "metrics": [
            {
              "field": "select field",
              "id": "1",
              "type": "count"
            }
          ],
          "query": "+tag:performance +group_by.category5:waiting_time",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Panel Title",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "content": "\n# FCP\n\n首次内容绘制\n\n\n\n",
      "gridPos": {
        "h": 3,
        "w": 3,
        "x": 15,
        "y": 0
      },
      "id": 35,
      "links": [],
      "mode": "markdown",
      "options": {},
      "timeFrom": null,
      "timeShift": null,
      "title": "",
      "type": "text"
    },
    {
      "cacheTimeout": null,
      "datasource": "$datasource",
      "description": "",
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 18,
        "y": 0
      },
      "id": 27,
      "links": [],
      "options": {
        "fieldOptions": {
          "calcs": [
            "mean"
          ],
          "defaults": {
            "mappings": [],
            "max": 600,
            "min": 0,
            "thresholds": [
              {
                "color": "semi-dark-green",
                "value": null
              },
              {
                "color": "semi-dark-red",
                "value": 300
              }
            ],
            "unit": "ms"
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.4.0-pre",
      "targets": [
        {
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "percentiles.50",
              "id": "1",
              "inlineScript": "_value",
              "meta": {},
              "settings": {
                "missing": null,
                "script": {
                  "inline": "_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:fcp",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "FCP (50线)",
      "type": "gauge"
    },
    {
      "cacheTimeout": null,
      "datasource": "$datasource",
      "description": "",
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 20,
        "y": 0
      },
      "id": 28,
      "links": [],
      "options": {
        "fieldOptions": {
          "calcs": [
            "mean"
          ],
          "defaults": {
            "mappings": [],
            "max": 1000,
            "min": 0,
            "thresholds": [
              {
                "color": "semi-dark-green",
                "value": null
              },
              {
                "color": "semi-dark-red",
                "value": 500
              }
            ],
            "unit": "ms"
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.4.0-pre",
      "targets": [
        {
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "percentiles.90",
              "id": "1",
              "inlineScript": null,
              "meta": {},
              "settings": {
                "missing": null
              },
              "type": "avg"
            }
          ],
          "query": "+tag:fcp",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "FCP (90线)",
      "type": "gauge"
    },
    {
      "cacheTimeout": null,
      "datasource": "$datasource",
      "description": "",
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 22,
        "y": 0
      },
      "id": 29,
      "links": [],
      "options": {
        "fieldOptions": {
          "calcs": [
            "mean"
          ],
          "defaults": {
            "mappings": [],
            "max": 2000,
            "min": 0,
            "thresholds": [
              {
                "color": "semi-dark-green",
                "value": null
              },
              {
                "color": "semi-dark-red",
                "value": 1000
              }
            ],
            "unit": "ms"
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.4.0-pre",
      "targets": [
        {
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "percentiles.99",
              "id": "1",
              "inlineScript": null,
              "meta": {},
              "settings": {
                "missing": null
              },
              "type": "avg"
            }
          ],
          "query": "+tag:fcp",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "FCP (99线)",
      "type": "gauge"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "$datasource",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 6,
        "w": 9,
        "x": 15,
        "y": 3
      },
      "id": 30,
      "interval": "1d",
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 4,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 4,
      "points": true,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "会话去重数",
          "color": "rgb(0, 124, 214)",
          "fill": 2,
          "linewidth": 1,
          "points": false,
          "yaxis": 2
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "alias": "会话去重数",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "us_count",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "avg"
            }
          ],
          "query": "+tag:traffic",
          "refId": "B",
          "timeField": "datetime"
        },
        {
          "alias": "50线",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "percentiles.50",
              "id": "1",
              "inlineScript": "_value/1000",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value/1000"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:fcp",
          "refId": "A",
          "timeField": "datetime"
        },
        {
          "alias": "90线",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "percentiles.90",
              "id": "1",
              "inlineScript": "_value/1000",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value/1000"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:fcp",
          "refId": "C",
          "timeField": "datetime"
        },
        {
          "alias": "99线",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "percentiles.99",
              "id": "1",
              "inlineScript": "_value/1000",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value/1000"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:fcp",
          "refId": "D",
          "timeField": "datetime"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "FCP",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 2,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "decimals": null,
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "content": "\n# 异常率\n\n页面脚本未捕获异常\n\n异常率 = 异常会话数 / 总会话数\n\n\n\n",
      "gridPos": {
        "h": 4,
        "w": 3,
        "x": 0,
        "y": 8
      },
      "id": 33,
      "links": [],
      "mode": "markdown",
      "options": {},
      "timeFrom": null,
      "timeShift": null,
      "title": "",
      "type": "text"
    },
    {
      "cacheTimeout": null,
      "datasource": "$datasource",
      "description": "",
      "gridPos": {
        "h": 4,
        "w": 3,
        "x": 3,
        "y": 8
      },
      "id": 14,
      "links": [],
      "options": {
        "fieldOptions": {
          "calcs": [
            "mean"
          ],
          "defaults": {
            "decimals": 2,
            "mappings": [],
            "max": 3,
            "min": 0,
            "thresholds": [
              {
                "color": "semi-dark-green",
                "value": null
              },
              {
                "color": "semi-dark-red",
                "value": 1
              }
            ],
            "title": "",
            "unit": "none"
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.4.0-pre",
      "targets": [
        {
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "value",
              "id": "1",
              "inlineScript": "_value*100",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value*100"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:unknown_exception.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "异常率",
      "type": "gauge"
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": "$datasource",
      "decimals": null,
      "description": "",
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 6,
        "y": 8
      },
      "id": 18,
      "interval": "",
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "pluginVersion": "6.2.0-pre",
      "postfix": " 异常/日",
      "postfixFontSize": "30%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(196, 22, 42, 0.33)",
        "full": false,
        "lineColor": "#C4162A",
        "show": true
      },
      "tableColumn": "",
      "targets": [
        {
          "alias": "用户去重数（日均）",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "um_count",
              "id": "1",
              "inlineScript": "_value",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:unknown_exception.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "浏览器去重数",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        }
      ],
      "valueName": "avg"
    },
    {
      "content": "\n# WEI（WEB体验指数）\n\nWEI = 100 - 异常率\\*50 - 卡顿率\\*100 - FCP\\*5\n\n\n注：公式中 FCP 指 FCP 50 线，单位秒\n",
      "gridPos": {
        "h": 3,
        "w": 7,
        "x": 8,
        "y": 8
      },
      "id": 38,
      "links": [],
      "mode": "markdown",
      "options": {},
      "timeFrom": null,
      "timeShift": null,
      "title": "",
      "type": "text"
    },
    {
      "content": "\n# 卡顿率\n\n卡顿定义：页面无响应时间超过 1 秒\n\n卡顿率 = 卡顿会话数 / 总会话数\n\n\n\n",
      "gridPos": {
        "h": 4,
        "w": 4,
        "x": 15,
        "y": 9
      },
      "id": 34,
      "links": [],
      "mode": "markdown",
      "options": {},
      "timeFrom": null,
      "timeShift": null,
      "title": "",
      "type": "text"
    },
    {
      "cacheTimeout": null,
      "datasource": "$datasource",
      "description": "",
      "gridPos": {
        "h": 4,
        "w": 3,
        "x": 19,
        "y": 9
      },
      "id": 20,
      "links": [],
      "options": {
        "fieldOptions": {
          "calcs": [
            "mean"
          ],
          "defaults": {
            "decimals": 2,
            "mappings": [],
            "max": 3,
            "min": 0,
            "thresholds": [
              {
                "color": "semi-dark-green",
                "value": null
              },
              {
                "color": "semi-dark-red",
                "value": 1
              }
            ],
            "title": "",
            "unit": "none"
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.4.0-pre",
      "targets": [
        {
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "value",
              "id": "1",
              "inlineScript": "_value*100",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value*100"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:longtask.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "卡顿率",
      "type": "gauge"
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": "$datasource",
      "decimals": null,
      "description": "",
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 22,
        "y": 9
      },
      "id": 23,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "pluginVersion": "6.2.0-pre",
      "postfix": " 卡顿/日",
      "postfixFontSize": "30%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(196, 22, 42, 0.33)",
        "full": false,
        "lineColor": "#C4162A",
        "show": true
      },
      "tableColumn": "",
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "us_count",
              "id": "1",
              "inlineScript": "_value",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:longtask.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "会话去重数",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        }
      ],
      "valueName": "avg"
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": "$datasource",
      "decimals": null,
      "description": "",
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 6,
        "y": 11
      },
      "id": 17,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "pluginVersion": "6.2.0-pre",
      "postfix": " 异常/日",
      "postfixFontSize": "30%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(196, 22, 42, 0.33)",
        "full": false,
        "lineColor": "#C4162A",
        "show": true
      },
      "tableColumn": "",
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "us_count",
              "id": "1",
              "inlineScript": "_value",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:unknown_exception.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "会话去重数",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        }
      ],
      "valueName": "avg"
    },
    {
      "cacheTimeout": null,
      "datasource": "$datasource",
      "description": "",
      "gridPos": {
        "h": 10,
        "w": 7,
        "x": 8,
        "y": 11
      },
      "id": 37,
      "links": [],
      "options": {
        "fieldOptions": {
          "calcs": [
            "mean"
          ],
          "defaults": {
            "decimals": 2,
            "mappings": [],
            "max": 100,
            "min": 0,
            "thresholds": [
              {
                "color": "semi-dark-red",
                "value": null
              },
              {
                "color": "semi-dark-green",
                "value": 90
              }
            ],
            "title": "",
            "unit": "none"
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.4.0-pre",
      "targets": [
        {
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "value",
              "id": "1",
              "inlineScript": "100-_value",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "100-_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:error_index",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "WEI",
      "type": "gauge"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "$datasource",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 6,
        "x": 0,
        "y": 12
      },
      "id": 15,
      "interval": "1d",
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 4,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 4,
      "points": true,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "会话去重数",
          "color": "#3274D9",
          "fill": 1,
          "linewidth": 1,
          "points": false,
          "yaxis": 2
        },
        {
          "alias": "异常率",
          "color": "#C4162A"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "alias": "会话去重数",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "us_count",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "avg"
            }
          ],
          "query": "+tag:unknown_exception.rate",
          "refId": "B",
          "timeField": "datetime"
        },
        {
          "alias": "异常率",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "value",
              "id": "1",
              "inlineScript": "_value*100",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value*100"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:unknown_exception.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "异常率",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "decimals": null,
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": "$datasource",
      "decimals": null,
      "description": "",
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 22,
        "y": 12
      },
      "id": 21,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "pluginVersion": "6.2.0-pre",
      "postfix": " 卡顿/日",
      "postfixFontSize": "30%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(196, 22, 42, 0.33)",
        "full": false,
        "lineColor": "#C4162A",
        "show": true
      },
      "tableColumn": "",
      "targets": [
        {
          "alias": "用户去重数（日均）",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "uu_count",
              "id": "1",
              "inlineScript": "_value",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:longtask.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "用户去重数",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        }
      ],
      "valueName": "avg"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "$datasource",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 7,
        "x": 15,
        "y": 13
      },
      "id": 25,
      "interval": "1d",
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 4,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 4,
      "points": true,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "会话去重数",
          "color": "rgb(0, 124, 214)",
          "fill": 2,
          "linewidth": 1,
          "points": false,
          "yaxis": 2
        },
        {
          "alias": "异常率",
          "color": "#C4162A"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "alias": "会话去重数",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "us_count",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "avg"
            }
          ],
          "query": "+tag:longtask.rate",
          "refId": "B",
          "timeField": "datetime"
        },
        {
          "alias": "异常率",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "value",
              "id": "1",
              "inlineScript": "_value*100",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value*100"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:longtask.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "卡顿率",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "decimals": null,
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": "$datasource",
      "decimals": null,
      "description": "",
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 6,
        "y": 14
      },
      "id": 16,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "pluginVersion": "6.2.0-pre",
      "postfix": " 异常/日",
      "postfixFontSize": "30%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(196, 22, 42, 0.33)",
        "full": false,
        "lineColor": "#C4162A",
        "show": true
      },
      "tableColumn": "",
      "targets": [
        {
          "alias": "用户去重数（日均）",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "uu_count",
              "id": "1",
              "inlineScript": "_value",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:unknown_exception.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "用户去重数",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        }
      ],
      "valueName": "avg"
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": "$datasource",
      "decimals": null,
      "description": "",
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 22,
        "y": 15
      },
      "id": 24,
      "interval": "",
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "pluginVersion": "6.2.0-pre",
      "postfix": " 卡顿/日",
      "postfixFontSize": "30%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(196, 22, 42, 0.33)",
        "full": false,
        "lineColor": "#C4162A",
        "show": true
      },
      "tableColumn": "",
      "targets": [
        {
          "alias": "用户去重数（日均）",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "um_count",
              "id": "1",
              "inlineScript": "_value",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:longtask.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "浏览器去重数",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        },
        {
          "op": "=",
          "text": "",
          "value": ""
        }
      ],
      "valueName": "avg"
    },
    {
      "aliasColors": {},
      "breakPoint": "50%",
      "cacheTimeout": null,
      "combine": {
        "label": "Others",
        "threshold": ""
      },
      "datasource": "$datasource",
      "decimals": null,
      "fontSize": "80%",
      "format": "short",
      "gridPos": {
        "h": 9,
        "w": 3,
        "x": 0,
        "y": 17
      },
      "id": 4,
      "interval": null,
      "legend": {
        "header": "",
        "percentage": true,
        "percentageDecimals": null,
        "show": false,
        "sort": "total",
        "sortDesc": true,
        "values": true
      },
      "legendType": "Right side",
      "links": [],
      "maxDataPoints": 3,
      "nullPointMode": "connected",
      "options": {},
      "pieType": "pie",
      "strokeWidth": 1,
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "fake": true,
              "field": "group_by.stacktrace_digest.keyword",
              "id": "6",
              "settings": {
                "min_doc_count": 1,
                "order": "desc",
                "orderBy": "1",
                "size": "0"
              },
              "type": "terms"
            },
            {
              "fake": true,
              "field": "datetime",
              "id": "5",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "count",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "sum"
            }
          ],
          "query": "+tag:unknown_exception.stacktrace",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "异常堆栈",
      "type": "grafana-piechart-panel",
      "valueName": "total"
    },
    {
      "aliasColors": {},
      "bars": false,
      "cacheTimeout": null,
      "dashLength": 10,
      "dashes": false,
      "datasource": "$datasource",
      "fill": 8,
      "fillGradient": 0,
      "gridPos": {
        "h": 9,
        "w": 5,
        "x": 3,
        "y": 17
      },
      "id": 19,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": true,
      "steppedLine": false,
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "fake": true,
              "field": "group_by.stacktrace_digest.keyword",
              "id": "6",
              "settings": {
                "min_doc_count": 1,
                "order": "desc",
                "orderBy": "1",
                "size": "20"
              },
              "type": "terms"
            },
            {
              "fake": true,
              "field": "datetime",
              "id": "5",
              "settings": {
                "interval": "1d",
                "min_doc_count": 0,
                "trimEdges": null
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "count",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "sum"
            }
          ],
          "query": "+tag:unknown_exception.stacktrace",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "异常堆栈 (TOP20)",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "cacheTimeout": null,
      "columns": [],
      "datasource": "$datasource",
      "fontSize": "80%",
      "gridPos": {
        "h": 7,
        "w": 9,
        "x": 15,
        "y": 18
      },
      "id": 41,
      "links": [],
      "options": {},
      "pageSize": null,
      "scroll": true,
      "showHeader": true,
      "sort": {
        "col": 2,
        "desc": true
      },
      "styles": [
        {
          "alias": "Time",
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "pattern": "Time",
          "type": "date"
        },
        {
          "alias": "卡顿总数",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "decimals": 0,
          "pattern": "Sum",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "卡顿率",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "Average",
          "thresholds": [],
          "type": "number",
          "unit": "percentunit"
        },
        {
          "alias": "URL",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "group_by.category2.keyword",
          "thresholds": [],
          "type": "string",
          "unit": "short"
        }
      ],
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "fake": true,
              "field": "group_by.category2.keyword",
              "id": "6",
              "settings": {
                "min_doc_count": 1,
                "order": "desc",
                "orderBy": "_term",
                "size": "0"
              },
              "type": "terms"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "count",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "sum"
            },
            {
              "field": "value",
              "id": "7",
              "meta": {},
              "settings": {},
              "type": "avg"
            }
          ],
          "query": "+tag:page.longtask.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "卡顿页面",
      "transform": "table",
      "type": "table"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "$datasource",
      "description": "",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 7,
        "x": 8,
        "y": 21
      },
      "id": 36,
      "interval": "1d",
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 4,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 4,
      "points": true,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "会话去重数",
          "color": "#3274D9",
          "fill": 1,
          "linewidth": 1,
          "points": false,
          "yaxis": 2,
          "zindex": -3
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "alias": "WEI",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "value",
              "id": "1",
              "inlineScript": "100-_value",
              "meta": {},
              "settings": {
                "script": {
                  "inline": "100-_value"
                }
              },
              "type": "avg"
            }
          ],
          "query": "+tag:error_index",
          "refId": "A",
          "timeField": "datetime"
        },
        {
          "alias": "会话去重数",
          "bucketAggs": [
            {
              "field": "datetime",
              "id": "2",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "us_total",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "max"
            }
          ],
          "query": "+tag:traffic",
          "refId": "B",
          "timeField": "datetime"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "WEI",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "decimals": null,
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "cacheTimeout": null,
      "columns": [],
      "datasource": "$datasource",
      "fontSize": "80%",
      "gridPos": {
        "h": 7,
        "w": 11,
        "x": 0,
        "y": 26
      },
      "id": 39,
      "links": [],
      "options": {},
      "pageSize": null,
      "scroll": true,
      "showHeader": true,
      "sort": {
        "col": 1,
        "desc": true
      },
      "styles": [
        {
          "alias": "Time",
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "pattern": "Time",
          "type": "date"
        },
        {
          "alias": "异常堆栈",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "decimals": 2,
          "pattern": "group_by.stacktrace_digest.keyword",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "异常总数",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 0,
          "mappingType": 1,
          "pattern": "Sum",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "异常率",
          "thresholds": [],
          "type": "number",
          "unit": "percentunit"
        },
        {
          "alias": "异常率",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "Average",
          "thresholds": [],
          "type": "number",
          "unit": "percentunit"
        }
      ],
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "fake": true,
              "field": "group_by.stacktrace_digest.keyword",
              "id": "6",
              "settings": {
                "min_doc_count": 1,
                "order": "desc",
                "orderBy": "1",
                "size": "0"
              },
              "type": "terms"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "count",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "sum"
            },
            {
              "field": "value",
              "id": "7",
              "inlineScript": null,
              "meta": {},
              "settings": {},
              "type": "avg"
            }
          ],
          "query": "+tag:unknown_exception.stacktrace",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "异常堆栈",
      "transform": "table",
      "type": "table"
    },
    {
      "aliasColors": {},
      "breakPoint": "50%",
      "cacheTimeout": null,
      "combine": {
        "label": "Others",
        "threshold": ""
      },
      "datasource": "$datasource",
      "decimals": null,
      "fontSize": "80%",
      "format": "short",
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 11,
        "y": 26
      },
      "id": 43,
      "interval": null,
      "legend": {
        "header": "",
        "percentage": true,
        "percentageDecimals": null,
        "show": false,
        "sort": "total",
        "sortDesc": true,
        "values": true
      },
      "legendType": "Right side",
      "links": [],
      "maxDataPoints": 3,
      "nullPointMode": "connected",
      "options": {},
      "pieType": "pie",
      "strokeWidth": 1,
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "fake": true,
              "field": "group_by.category2.keyword",
              "id": "6",
              "settings": {
                "min_doc_count": 1,
                "order": "desc",
                "orderBy": "_term",
                "size": "0"
              },
              "type": "terms"
            },
            {
              "fake": true,
              "field": "datetime",
              "id": "5",
              "settings": {
                "interval": "auto",
                "min_doc_count": 0,
                "trimEdges": 0
              },
              "type": "date_histogram"
            }
          ],
          "hide": false,
          "metrics": [
            {
              "field": "count",
              "id": "1",
              "meta": {},
              "settings": {},
              "type": "sum"
            }
          ],
          "query": "+tag:page.longtask.rate",
          "refId": "A",
          "timeField": "datetime"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "卡顿页面",
      "type": "grafana-piechart-panel",
      "valueName": "total"
    }
  ],
  "refresh": false,
  "schemaVersion": 19,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": [
      {
        "current": {
          "tags": [],
          "text": "C-APM<生产环境>",
          "value": "C-APM<生产环境>"
        },
        "hide": 0,
        "includeAll": false,
        "label": "环境",
        "multi": false,
        "name": "datasource",
        "options": [],
        "query": "elasticsearch",
        "refresh": 1,
        "regex": "C-APM.*",
        "skipUrlSync": false,
        "type": "datasource"
      },
      {
        "current": {
          "text": "eef797a5902e217a0a8b51d51a8a2d0f536b60a4",
          "value": "eef797a5902e217a0a8b51d51a8a2d0f536b60a4"
        },
        "hide": 0,
        "label": "鲸云应用ID",
        "name": "ccloud_app_id",
        "options": [
          {
            "text": "eef797a5902e217a0a8b51d51a8a2d0f536b60a4",
            "value": "eef797a5902e217a0a8b51d51a8a2d0f536b60a4"
          }
        ],
        "query": "eef797a5902e217a0a8b51d51a8a2d0f536b60a4",
        "skipUrlSync": false,
        "type": "textbox"
      },
      {
        "allValue": null,
        "current": {
          "selected": true,
          "text": "day",
          "value": "day"
        },
        "hide": 2,
        "includeAll": false,
        "label": null,
        "multi": false,
        "name": "interval",
        "options": [
          {
            "selected": true,
            "text": "day",
            "value": "day"
          }
        ],
        "query": "day",
        "skipUrlSync": false,
        "type": "custom"
      },
      {
        "datasource": "$datasource",
        "filters": [
          {
            "condition": "AND",
            "key": "appkey.keyword",
            "operator": "=",
            "value": "$ccloud_app_id"
          },
          {
            "key": "interval.keyword",
            "operator": "=",
            "value": "$interval"
          }
        ],
        "hide": 0,
        "label": null,
        "name": "filter",
        "skipUrlSync": false,
        "type": "adhoc"
      }
    ]
  },
  "time": {
    "from": "now-7d",
    "to": "now"
  },
  "timepicker": {
    "refresh_intervals": [
      "5s",
      "10s",
      "30s",
      "1m",
      "5m",
      "15m",
      "30m",
      "1h",
      "2h",
      "1d"
    ],
    "time_options": [
      "5m",
      "15m",
      "1h",
      "6h",
      "12h",
      "24h",
      "2d",
      "7d",
      "30d"
    ]
  },
  "timezone": "",
  "title": "#单项目前端应用 - 模板 - V2.2",
  "uid": "tcxRSFKZz",
  "version": 11
}