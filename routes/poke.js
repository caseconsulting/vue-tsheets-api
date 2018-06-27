var express = require('express');
var router = express.Router();
var _ = require('lodash');
var axios = require('axios');
const POKEMON_NUM = 802;
const DATA_SIZE = 1;
const url = 'https://pokeapi.co/api/v2/pokemon'
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('Requires a name parameter');
});


let genPokemon = () => {
  let pokeList = [];
  for (i = 0; i < DATA_SIZE; i++) {
    let randPoke = Math.floor((Math.random() * POKEMON_NUM) + 1);
    console.log(randPoke);
    let response = axios.get(`${url}/${randPoke}`);
    console.log(response);
    pokeList.push(response);
  }
  return Promise.all(pokeList)
}
*/

let temp = {
  "forms": [{
    "url": "https://pokeapi.co/api/v2/pokemon-form/287/",
    "name": "slakoth"
  }],
  "abilities": [{
    "slot": 1,
    "is_hidden": false,
    "ability": {
      "url": "https://pokeapi.co/api/v2/ability/54/",
      "name": "truant"
    }
  }],
  "stats": [{
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/6/",
        "name": "speed"
      },
      "effort": 0,
      "base_stat": 30
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/5/",
        "name": "special-defense"
      },
      "effort": 0,
      "base_stat": 35
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/4/",
        "name": "special-attack"
      },
      "effort": 0,
      "base_stat": 35
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/3/",
        "name": "defense"
      },
      "effort": 0,
      "base_stat": 60
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/2/",
        "name": "attack"
      },
      "effort": 0,
      "base_stat": 60
    },
    {
      "stat": {
        "url": "https://pokeapi.co/api/v2/stat/1/",
        "name": "hp"
      },
      "effort": 1,
      "base_stat": 60
    }
  ],
  "name": "slakoth",
  "weight": 240,
  "moves": [{
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/5/",
        "name": "mega-punch"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/7/",
        "name": "fire-punch"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/8/",
        "name": "ice-punch"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/9/",
        "name": "thunder-punch"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/10/",
        "name": "scratch"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/15/",
        "name": "cut"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/25/",
        "name": "mega-kick"
      }
    },
    {
      "version_group_details": [{
        "move_learn_method": {
          "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
          "name": "tutor"
        },
        "level_learned_at": 0,
        "version_group": {
          "url": "https://pokeapi.co/api/v2/version-group/10/",
          "name": "heartgold-soulsilver"
        }
      }],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/29/",
        "name": "headbutt"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/34/",
        "name": "body-slam"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/38/",
        "name": "double-edge"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/53/",
        "name": "flamethrower"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/58/",
        "name": "ice-beam"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/59/",
        "name": "blizzard"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 30,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 30,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/68/",
        "name": "counter"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/69/",
        "name": "seismic-toss"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/70/",
        "name": "strength"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/76/",
        "name": "solar-beam"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/85/",
        "name": "thunderbolt"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/87/",
        "name": "thunder"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/92/",
        "name": "toxic"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/102/",
        "name": "mimic"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/104/",
        "name": "double-team"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/126/",
        "name": "fire-blast"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 17,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 17,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/133/",
        "name": "amnesia"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/156/",
        "name": "rest"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/157/",
        "name": "rock-slide"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/163/",
        "name": "slash"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/164/",
        "name": "substitute"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/173/",
        "name": "snore"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/174/",
        "name": "curse"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 33,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 33,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 49,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 49,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 49,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 43,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/175/",
        "name": "flail"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/182/",
        "name": "protect"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 14,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 14,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 19,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/185/",
        "name": "feint-attack"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/189/",
        "name": "mud-slap"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/196/",
        "name": "icy-wind"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/203/",
        "name": "endure"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/207/",
        "name": "swagger"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/210/",
        "name": "fury-cutter"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/213/",
        "name": "attract"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/214/",
        "name": "sleep-talk"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/216/",
        "name": "return"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/218/",
        "name": "frustration"
      }
    },
    {
      "version_group_details": [{
        "move_learn_method": {
          "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
          "name": "tutor"
        },
        "level_learned_at": 0,
        "version_group": {
          "url": "https://pokeapi.co/api/v2/version-group/6/",
          "name": "emerald"
        }
      }],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/223/",
        "name": "dynamic-punch"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 6,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 6,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 7,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/227/",
        "name": "encore"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/228/",
        "name": "pursuit"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/237/",
        "name": "hidden-power"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/240/",
        "name": "rain-dance"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/241/",
        "name": "sunny-day"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/247/",
        "name": "shadow-ball"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/249/",
        "name": "rock-smash"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/263/",
        "name": "facade"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/264/",
        "name": "focus-punch"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/280/",
        "name": "brick-break"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 1,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/281/",
        "name": "yawn"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/290/",
        "name": "secret-power"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 9,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 9,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 13,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/303/",
        "name": "slack-off"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/306/",
        "name": "crush-claw"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/317/",
        "name": "rock-tomb"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/321/",
        "name": "tickle"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/332/",
        "name": "aerial-ace"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/339/",
        "name": "bulk-up"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 22,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 22,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 31,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/343/",
        "name": "covet"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/351/",
        "name": "shock-wave"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "name": "colosseum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "name": "firered-leafgreen"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "name": "emerald"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "name": "xd"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "name": "ruby-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/352/",
        "name": "water-pulse"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/359/",
        "name": "hammer-arm"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/363/",
        "name": "natural-gift"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/374/",
        "name": "fling"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/389/",
        "name": "sucker-punch"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/400/",
        "name": "night-slash"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/421/",
        "name": "shadow-claw"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/441/",
        "name": "gunk-shot"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "name": "heartgold-soulsilver"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "name": "platinum"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "name": "diamond-pearl"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/445/",
        "name": "captivate"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/468/",
        "name": "hone-claws"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
            "name": "tutor"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
            "name": "egg"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/495/",
        "name": "after-you"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/496/",
        "name": "round"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 25,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 37,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/498/",
        "name": "chip-away"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/510/",
        "name": "incinerate"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/514/",
        "name": "retaliate"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "name": "black-2-white-2"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "name": "black-white"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/526/",
        "name": "work-up"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 38,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
            "name": "level-up"
          },
          "level_learned_at": 38,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/583/",
        "name": "play-rough"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "name": "sun-moon"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/590/",
        "name": "confide"
      }
    },
    {
      "version_group_details": [{
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "name": "omega-ruby-alpha-sapphire"
          }
        },
        {
          "move_learn_method": {
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
            "name": "machine"
          },
          "level_learned_at": 0,
          "version_group": {
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "name": "x-y"
          }
        }
      ],
      "move": {
        "url": "https://pokeapi.co/api/v2/move/612/",
        "name": "power-up-punch"
      }
    }
  ],
  "sprites": {
    "back_female": null,
    "back_shiny_female": null,
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/287.png",
    "front_female": null,
    "front_shiny_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/287.png",
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/287.png"
  },
  "held_items": [],
  "location_area_encounters": "/api/v2/pokemon/287/encounters",
  "height": 8,
  "is_default": true,
  "species": {
    "url": "https://pokeapi.co/api/v2/pokemon-species/287/",
    "name": "slakoth"
  },
  "id": 287,
  "order": 364,
  "game_indices": [{
      "version": {
        "url": "https://pokeapi.co/api/v2/version/22/",
        "name": "white-2"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/21/",
        "name": "black-2"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/18/",
        "name": "white"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/17/",
        "name": "black"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/16/",
        "name": "soulsilver"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/15/",
        "name": "heartgold"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/14/",
        "name": "platinum"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/13/",
        "name": "pearl"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/12/",
        "name": "diamond"
      },
      "game_index": 287
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/11/",
        "name": "leafgreen"
      },
      "game_index": 364
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/10/",
        "name": "firered"
      },
      "game_index": 364
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/9/",
        "name": "emerald"
      },
      "game_index": 364
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/8/",
        "name": "sapphire"
      },
      "game_index": 364
    },
    {
      "version": {
        "url": "https://pokeapi.co/api/v2/version/7/",
        "name": "ruby"
      },
      "game_index": 364
    }
  ],
  "base_experience": 56,
  "types": [{
    "slot": 1,
    "type": {
      "url": "https://pokeapi.co/api/v2/type/1/",
      "name": "normal"
    }
  }]
}

router.get('/', (req, res, next) => {
  let randPoke = Math.floor((Math.random() * POKEMON_NUM) + 1);
  console.log(randPoke);
  var cache = [];
  let response = axios.get(`${url}/${randPoke}`).then((values) => {
    console.log(`${url}/${randPoke}`)
    // Enable garbage collection
    //console.log(values);
    //console.log(res);
    res.send(temp);
  });
  /*
  let data = genPokemon().then((values) => {
    console.log(typeof values);
    res.json(values);
  });
  */
});

module.exports = router;