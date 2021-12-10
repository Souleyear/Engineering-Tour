var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.25548269003617463,
        "pitch": -0.009679056381987294,
        "fov": 1.9425094732719923
      },
      "linkHotspots": [
        {
          "yaw": -1.9167867707740598,
          "pitch": -0.1839929020569535,
          "rotation": 3.9269908169872414,
          "target": "2-along-engineering-drive-1"
        },
        {
          "yaw": 0.2660934967065458,
          "pitch": 0.15733706578868478,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.46823076310824696,
          "pitch": -0.5518316623805717,
          "title": "Engineering Auditorium",
          "text": "Coffee shop inside, lecture location and study area"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.28877491789772236,
        "pitch": 0.256819334180328,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0994652062409767,
          "pitch": -0.03239481187506854,
          "rotation": 3.9269908169872414,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9431274345069376,
          "pitch": -0.19213494989040214,
          "title": "Engineering Auditorium Atrium",
          "text": "Place to study and get coffee"
        }
      ]
    },
    {
      "id": "2-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.185735094496291,
        "pitch": 0.006213592989844585,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004741400152187936,
          "pitch": -0.24899761128051168,
          "rotation": 13.351768777756625,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7103103444698835,
          "pitch": -0.019062096003668927,
          "title": "Faculty of Engineering",
          "text": "Welcome to Faculty of Engineering :D"
        }
      ]
    }
  ],
  "name": "Engineering Faculty",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
