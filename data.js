var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.018275018967259,
        "pitch": -0.23323288027146205,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 3.0046468207872845,
          "pitch": -0.07920252962173535,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.6333391020713321,
        "pitch": 0.048208367763438176,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.3228579114795753,
          "pitch": 0.8925246650043981,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": 1.707952144366498,
          "pitch": 0.25302753559228996,
          "rotation": 0.7853981633974483,
          "target": "2-g-floor"
        },
        {
          "yaw": 1.715735222036332,
          "pitch": 0.5234874236145455,
          "rotation": 1.5707963267948966,
          "target": "3-bedroom-1"
        },
        {
          "yaw": 1.6083487906508642,
          "pitch": 0.04819335317339224,
          "rotation": 0,
          "target": "14-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-g-floor",
      "name": "G Floor",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9641181665578138,
          "pitch": 0.7491593109817529,
          "rotation": 0,
          "target": "12-bedroom-2"
        },
        {
          "yaw": 0.6633148114049483,
          "pitch": 0.39961808857382763,
          "rotation": 0,
          "target": "4-g-floor"
        },
        {
          "yaw": -2.292044841983266,
          "pitch": 0.43538647285324217,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": 0.21677137573853678,
          "pitch": -0.07452028867023586,
          "rotation": 0,
          "target": "14-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-1",
      "name": "Bedroom 1",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.116279945339322,
        "pitch": 0.09256562250146061,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.8484126182852769,
          "pitch": 0.5896961222050354,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-g-floor",
      "name": "G Floor",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.648030581512284,
        "pitch": 0.7129971392579524,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.2812652543512124,
          "pitch": 1.178142902205698,
          "rotation": 4.71238898038469,
          "target": "5-basement"
        },
        {
          "yaw": -2.928029788027004,
          "pitch": 1.0598929062613642,
          "rotation": 18.84955592153877,
          "target": "13-bedroom-3"
        },
        {
          "yaw": 0.6658621143470711,
          "pitch": 0.39836266026213885,
          "rotation": 6.283185307179586,
          "target": "2-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-basement",
      "name": "Basement",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.0254127999666096,
        "pitch": 0.31997365231261377,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.2741531259661816,
          "pitch": 0.5224428925941869,
          "rotation": 0,
          "target": "10-to-utility-area"
        },
        {
          "yaw": 0.8651981561170654,
          "pitch": 0.7646392795583346,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": 2.243274831676376,
          "pitch": 0.76754931115277,
          "rotation": 0,
          "target": "7-living-area"
        },
        {
          "yaw": -3.1245249283578307,
          "pitch": 0.809160579468374,
          "rotation": 0,
          "target": "6-bathroom-1"
        },
        {
          "yaw": -0.06392791420723043,
          "pitch": -0.05388514884322504,
          "rotation": 0.7853981633974483,
          "target": "4-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom-1",
      "name": "Bathroom 1",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.497573261564064,
        "pitch": 1.188383254614946,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.5757675672810558,
          "pitch": 1.0005447250692256,
          "rotation": 0,
          "target": "5-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living-area",
      "name": "Living Area",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.5614044636620239,
        "pitch": 0.310364795350873,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.815942168822124,
          "pitch": 0.5344421820510075,
          "rotation": 5.497787143782138,
          "target": "5-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5732873080535423,
        "pitch": 0.43923855206899987,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.039052520138183,
          "pitch": 0.408741302172249,
          "rotation": 0,
          "target": "9-backyard"
        },
        {
          "yaw": -0.8316655843969674,
          "pitch": 0.5980986801391346,
          "rotation": 0,
          "target": "5-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-backyard",
      "name": "Backyard",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.980639692727154,
        "pitch": 0.07427989073288366,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.6128919011641436,
          "pitch": 0.6806851564569563,
          "rotation": 0,
          "target": "8-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-to-utility-area",
      "name": "To Utility Area",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7104371934319964,
        "pitch": 0.15308345555524028,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.6528911462712212,
          "pitch": 0.5358587904284615,
          "rotation": 0,
          "target": "11-utility-area"
        },
        {
          "yaw": -1.4839764579277883,
          "pitch": 0.6179764887355059,
          "rotation": 0,
          "target": "5-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-utility-area",
      "name": "Utility Area",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.715997377918269,
        "pitch": 0.9430823047588497,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.4559226312750386,
          "pitch": 0.47275530448589365,
          "rotation": 0,
          "target": "10-to-utility-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-2",
      "name": "Bedroom 2",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.0880552010985536,
        "pitch": 0.18034532179187757,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.479039921540398,
          "pitch": 0.766599389909608,
          "rotation": 0.7853981633974483,
          "target": "2-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-3",
      "name": "Bedroom 3",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.0901302494551803,
        "pitch": 0.3152988582421692,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.5906799326317067,
          "pitch": 0.5960148144939588,
          "rotation": 0,
          "target": "4-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-landing",
      "name": "Landing",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.4008145789544422,
        "pitch": 1.3882871379255555,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.7699409419861976,
          "pitch": 0.6222466090887124,
          "rotation": 0,
          "target": "16-bathroom-3"
        },
        {
          "yaw": -1.6764231732054995,
          "pitch": 0.9168333099675543,
          "rotation": 0,
          "target": "15-bathroom-2"
        },
        {
          "yaw": 0.2193170870100687,
          "pitch": 0.7759977107187801,
          "rotation": 4.71238898038469,
          "target": "2-g-floor"
        },
        {
          "yaw": -0.14964372398260828,
          "pitch": 0.5207144038961911,
          "rotation": 0.7853981633974483,
          "target": "17-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bathroom-2",
      "name": "Bathroom 2",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.4437100296791083,
        "pitch": 1.012506536699462,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.1333629530122487,
          "pitch": 0.6808508553999744,
          "rotation": 0,
          "target": "14-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bathroom-3",
      "name": "Bathroom 3",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.106493092120852,
        "pitch": 1.1212001539722092,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.3912970942950853,
          "pitch": 0.4939938728133324,
          "rotation": 0,
          "target": "14-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-i-floor",
      "name": "I Floor",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.0310894668649837,
        "pitch": 1.121805420679637,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.1819358367455557,
          "pitch": 0.9488291500576604,
          "rotation": 0.7853981633974483,
          "target": "18-bedroom-4"
        },
        {
          "yaw": -1.3100704265305296,
          "pitch": 0.9261982918749005,
          "rotation": 6.283185307179586,
          "target": "19-bedroom-5"
        },
        {
          "yaw": -2.7738176988390393,
          "pitch": -0.20943873916091071,
          "rotation": 0.7853981633974483,
          "target": "20-landing"
        },
        {
          "yaw": -2.3335378554072506,
          "pitch": 0.5911011604628271,
          "rotation": 5.497787143782138,
          "target": "14-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-4",
      "name": "Bedroom 4",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6706960027853839,
        "pitch": 0.20526859146676202,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.0017626222198057,
          "pitch": 0.4501619349783166,
          "rotation": 0,
          "target": "17-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-5",
      "name": "Bedroom 5",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.521058464436468,
        "pitch": 0.5275516962191045,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.8254658998820936,
          "pitch": 0.6669057684260924,
          "rotation": 0.7853981633974483,
          "target": "17-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-landing",
      "name": "Landing",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.4820850763904883,
        "pitch": 0.27418863905303503,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.3446198090495578,
          "pitch": 0.126618410677942,
          "rotation": 0,
          "target": "21-ii-floor"
        },
        {
          "yaw": 1.5975606765928934,
          "pitch": 0.7921029298339679,
          "rotation": 0,
          "target": "17-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ii-floor",
      "name": "II Floor",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.748094919657925,
        "pitch": 0.5002817351556583,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.1443157900367709,
          "pitch": 0.5658137987195975,
          "rotation": 0,
          "target": "23-bedroom-6"
        },
        {
          "yaw": 0.18703354983026088,
          "pitch": 0.6112721809069903,
          "rotation": 0,
          "target": "22-bedroom-7"
        },
        {
          "yaw": -1.3863364105936409,
          "pitch": 0.7717110342063158,
          "rotation": 0,
          "target": "20-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-7",
      "name": "Bedroom 7",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.1282527920363226,
        "pitch": 0.3190286610714992,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.5140105071767884,
          "pitch": 0.6038648745613635,
          "rotation": 0,
          "target": "21-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bedroom-6",
      "name": "Bedroom 6",
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
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.5225021966442336,
        "pitch": 0.03369329389184195,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.2019066743644373,
          "pitch": 0.3863939335564659,
          "rotation": 0,
          "target": "21-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "91 Brudenell Road",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
