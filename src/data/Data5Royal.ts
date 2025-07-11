import type { InheritElemsType } from "@/types/data";

export const rarePersonaeRoyal = [
    "Crystal Skull",
    "Koh-i-Noor",
    "Queen's Necklace",
    "Regent",
    "Stone of Scone",
    "Orlov",
    "Emperor's Amulet",
    "Hope Diamond",
    "Orichalcum"
];

export const rareCombosRoyal = {
    "Fool":       [+2, +1, +1, -1, -1, -1, -1, +1, +1],
    "Magician":   [+1, -1, -1, +1, +2, +1, +1, +1, -2],
    "Priestess":  [+1, +2, +1, -1, -1, +1, -1, +1, +1],
    "Empress":    [+1, +1, +2, -1, -1, +1, +1, -1, +1],
    "Emperor":    [-1, -1, -1, +2, +1, -1, +1, +1, -1],
    "Hierophant": [-1, -2, -1, +1, +1, -1, -1, -1, +2],
    "Lovers":     [+1, +1, +1, -1, -1, -1, -1, -2, -1],
    "Chariot":    [-1, -1, -1, +1, +1, +1, -2, -1, -1],
    "Justice":    [+1, +2, -1, +1, -1, -2, +1, -1, +1],
    "Hermit":     [-2, +1, -1, +2, -1, -1, +1, +1, -1],
    "Fortune":    [-1, -1, -1, +1, +2, +1, -1, +1, +1],
    "Strength":   [-1, +1, +1, -1, +1, +2, +1, -1, -1],
    "Hanged":     [-1, -1, +1, +1, -1, +1, +2, -1, +1],
    "Death":      [+1, +1, -1, +1, +1, -1, -1, +2, +1],
    "Temperance": [+2, -1, +1, -1, -1, +1, +1, -1, -1],
    "Devil":      [-1, +1, +1, -2, -1, -1, +2, -1, +1],
    "Tower":      [-1, +1, -2, -1, +1, -1, +1, -1, -1],
    "Star":       [+1, -1, -1, +1, +1, +2, -1, +1, +1],
    "Moon":       [-1, -1, +2, -1, -2, +1, -1, -1, -1],
    "Sun":        [+1, +1, -1, +1, -1, +1, -1, +2, +1],
    "Judgement":  [-1, -1, -1, -1, +1, -1, +1, -1, +1],
    "Faith":      [+1, +1, +1, -1, +1, -1, +1, +1, +2],
    "Councillor": [+1, +1, +1, +1, +1, -1, +1, +1, +1],
    "World":      [+1, +1, +1, +1, +1, +1, +1, +1, +1]
};

export const arcana2CombosRoyal = [
    {'source': ['Fool',       'Fool'        ], 'result': 'Fool'        },
    {'source': ['Fool',       'Magician'    ], 'result': 'Death'       },
    {'source': ['Fool',       'Priestess'   ], 'result': 'Moon'        },
    {'source': ['Fool',       'Empress'     ], 'result': 'Hanged'      },
    {'source': ['Fool',       'Emperor'     ], 'result': 'Temperance'  },
    {'source': ['Fool',       'Hierophant'  ], 'result': 'Hermit'      },
    {'source': ['Fool',       'Lovers'      ], 'result': 'Chariot'     },
    {'source': ['Fool',       'Chariot'     ], 'result': 'Moon'        },
    {'source': ['Fool',       'Justice'     ], 'result': 'Star'        },
    {'source': ['Fool',       'Hermit'      ], 'result': 'Priestess'   },
    {'source': ['Fool',       'Fortune'     ], 'result': 'Faith'       },
    {'source': ['Fool',       'Strength'    ], 'result': 'Death'       },
    {'source': ['Fool',       'Hanged'      ], 'result': 'Tower'       },
    {'source': ['Fool',       'Death'       ], 'result': 'Strength'    },
    {'source': ['Fool',       'Temperance'  ], 'result': 'Hierophant'  },
    {'source': ['Fool',       'Devil'       ], 'result': 'Temperance'  },
    {'source': ['Fool',       'Tower'       ], 'result': 'Empress'     },
    {'source': ['Fool',       'Star'        ], 'result': 'Magician'    },
    {'source': ['Fool',       'Moon'        ], 'result': 'Justice'     },
    {'source': ['Fool',       'Sun'         ], 'result': 'Justice'     },
    {'source': ['Fool',       'Judgement'   ], 'result': 'Sun'         },
    {'source': ['Fool',       'Faith'       ], 'result': 'Councillor'  },
    {'source': ['Fool',       'Councillor'  ], 'result': 'Hierophant'  },
    {'source': ['Magician',   'Magician'    ], 'result': 'Magician'    },
    {'source': ['Magician',   'Priestess'   ], 'result': 'Temperance'  },
    {'source': ['Magician',   'Empress'     ], 'result': 'Justice'     },
    {'source': ['Magician',   'Emperor'     ], 'result': 'Faith'       },
    {'source': ['Magician',   'Hierophant'  ], 'result': 'Death'       },
    {'source': ['Magician',   'Lovers'      ], 'result': 'Devil'       },
    {'source': ['Magician',   'Chariot'     ], 'result': 'Priestess'   },
    {'source': ['Magician',   'Justice'     ], 'result': 'Emperor'     },
    {'source': ['Magician',   'Hermit'      ], 'result': 'Lovers'      },
    {'source': ['Magician',   'Fortune'     ], 'result': 'Justice'     },
    {'source': ['Magician',   'Strength'    ], 'result': 'Fool'        },
    {'source': ['Magician',   'Hanged'      ], 'result': 'Empress'     },
    {'source': ['Magician',   'Death'       ], 'result': 'Hermit'      },
    {'source': ['Magician',   'Temperance'  ], 'result': 'Chariot'     },
    {'source': ['Magician',   'Devil'       ], 'result': 'Hierophant'  },
    {'source': ['Magician',   'Tower'       ], 'result': 'Temperance'  },
    {'source': ['Magician',   'Star'        ], 'result': 'Priestess'   },
    {'source': ['Magician',   'Moon'        ], 'result': 'Lovers'      },
    {'source': ['Magician',   'Sun'         ], 'result': 'Hierophant'  },
    {'source': ['Magician',   'Judgement'   ], 'result': 'Strength'    },
    {'source': ['Magician',   'Faith'       ], 'result': 'Strength'    },
    {'source': ['Magician',   'Councillor'  ], 'result': 'Moon'        },
    {'source': ['Priestess',  'Priestess'   ], 'result': 'Priestess'   },
    {'source': ['Priestess',  'Empress'     ], 'result': 'Emperor'     },
    {'source': ['Priestess',  'Emperor'     ], 'result': 'Empress'     },
    {'source': ['Priestess',  'Hierophant'  ], 'result': 'Magician'    },
    {'source': ['Priestess',  'Lovers'      ], 'result': 'Fortune'     },
    {'source': ['Priestess',  'Chariot'     ], 'result': 'Hierophant'  },
    {'source': ['Priestess',  'Justice'     ], 'result': 'Death'       },
    {'source': ['Priestess',  'Hermit'      ], 'result': 'Temperance'  },
    {'source': ['Priestess',  'Fortune'     ], 'result': 'Magician'    },
    {'source': ['Priestess',  'Strength'    ], 'result': 'Devil'       },
    {'source': ['Priestess',  'Hanged'      ], 'result': 'Death'       },
    {'source': ['Priestess',  'Death'       ], 'result': 'Magician'    },
    {'source': ['Priestess',  'Temperance'  ], 'result': 'Devil'       },
    {'source': ['Priestess',  'Devil'       ], 'result': 'Moon'        },
    {'source': ['Priestess',  'Tower'       ], 'result': 'Hanged'      },
    {'source': ['Priestess',  'Star'        ], 'result': 'Hermit'      },
    {'source': ['Priestess',  'Moon'        ], 'result': 'Hierophant'  },
    {'source': ['Priestess',  'Sun'         ], 'result': 'Chariot'     },
    {'source': ['Priestess',  'Judgement'   ], 'result': 'Justice'     },
    {'source': ['Priestess',  'Faith'       ], 'result': 'Justice'     },
    {'source': ['Priestess',  'Councillor'  ], 'result': 'Faith'       },
    {'source': ['Empress',    'Empress'     ], 'result': 'Empress'     },
    {'source': ['Empress',    'Emperor'     ], 'result': 'Justice'     },
    {'source': ['Empress',    'Hierophant'  ], 'result': 'Fool'        },
    {'source': ['Empress',    'Lovers'      ], 'result': 'Judgement'   },
    {'source': ['Empress',    'Chariot'     ], 'result': 'Star'        },
    {'source': ['Empress',    'Justice'     ], 'result': 'Lovers'      },
    {'source': ['Empress',    'Hermit'      ], 'result': 'Strength'    },
    {'source': ['Empress',    'Fortune'     ], 'result': 'Hermit'      },
    {'source': ['Empress',    'Strength'    ], 'result': 'Faith'       },
    {'source': ['Empress',    'Hanged'      ], 'result': 'Priestess'   },
    {'source': ['Empress',    'Death'       ], 'result': 'Fool'        },
    {'source': ['Empress',    'Temperance'  ], 'result': 'Faith'       },
    {'source': ['Empress',    'Devil'       ], 'result': 'Sun'         },
    {'source': ['Empress',    'Tower'       ], 'result': 'Emperor'     },
    {'source': ['Empress',    'Star'        ], 'result': 'Lovers'      },
    {'source': ['Empress',    'Moon'        ], 'result': 'Fortune'     },
    {'source': ['Empress',    'Sun'         ], 'result': 'Tower'       },
    {'source': ['Empress',    'Judgement'   ], 'result': 'Emperor'     },
    {'source': ['Empress',    'Faith'       ], 'result': 'Magician'    },
    {'source': ['Empress',    'Councillor'  ], 'result': 'Hanged'      },
    {'source': ['Emperor',    'Emperor'     ], 'result': 'Emperor'     },
    {'source': ['Emperor',    'Hierophant'  ], 'result': 'Fortune'     },
    {'source': ['Emperor',    'Lovers'      ], 'result': 'Fool'        },
    {'source': ['Emperor',    'Chariot'     ], 'result': 'Faith'       },
    {'source': ['Emperor',    'Justice'     ], 'result': 'Chariot'     },
    {'source': ['Emperor',    'Hermit'      ], 'result': 'Hierophant'  },
    {'source': ['Emperor',    'Fortune'     ], 'result': 'Sun'         },
    {'source': ['Emperor',    'Strength'    ], 'result': 'Tower'       },
    {'source': ['Emperor',    'Hanged'      ], 'result': 'Devil'       },
    {'source': ['Emperor',    'Death'       ], 'result': 'Hermit'      },
    {'source': ['Emperor',    'Temperance'  ], 'result': 'Devil'       },
    {'source': ['Emperor',    'Devil'       ], 'result': 'Justice'     },
    {'source': ['Emperor',    'Tower'       ], 'result': 'Star'        },
    {'source': ['Emperor',    'Star'        ], 'result': 'Lovers'      },
    {'source': ['Emperor',    'Moon'        ], 'result': 'Tower'       },
    {'source': ['Emperor',    'Sun'         ], 'result': 'Judgement'   },
    {'source': ['Emperor',    'Judgement'   ], 'result': 'Priestess'   },
    {'source': ['Emperor',    'Faith'       ], 'result': 'Priestess'   },
    {'source': ['Emperor',    'Councillor'  ], 'result': 'Lovers'      },
    {'source': ['Hierophant', 'Hierophant'  ], 'result': 'Hierophant'  },
    {'source': ['Hierophant', 'Lovers'      ], 'result': 'Strength'    },
    {'source': ['Hierophant', 'Chariot'     ], 'result': 'Star'        },
    {'source': ['Hierophant', 'Justice'     ], 'result': 'Hanged'      },
    {'source': ['Hierophant', 'Hermit'      ], 'result': 'Councillor'  },
    {'source': ['Hierophant', 'Fortune'     ], 'result': 'Justice'     },
    {'source': ['Hierophant', 'Strength'    ], 'result': 'Fool'        },
    {'source': ['Hierophant', 'Hanged'      ], 'result': 'Sun'         },
    {'source': ['Hierophant', 'Death'       ], 'result': 'Chariot'     },
    {'source': ['Hierophant', 'Temperance'  ], 'result': 'Death'       },
    {'source': ['Hierophant', 'Devil'       ], 'result': 'Hanged'      },
    {'source': ['Hierophant', 'Tower'       ], 'result': 'Judgement'   },
    {'source': ['Hierophant', 'Star'        ], 'result': 'Tower'       },
    {'source': ['Hierophant', 'Moon'        ], 'result': 'Priestess'   },
    {'source': ['Hierophant', 'Sun'         ], 'result': 'Lovers'      },
    {'source': ['Hierophant', 'Judgement'   ], 'result': 'Faith'       },
    {'source': ['Hierophant', 'Faith'       ], 'result': 'Empress'     },
    {'source': ['Hierophant', 'Councillor'  ], 'result': 'Justice'     },
    {'source': ['Lovers',     'Lovers'      ], 'result': 'Lovers'      },
    {'source': ['Lovers',     'Chariot'     ], 'result': 'Temperance'  },
    {'source': ['Lovers',     'Justice'     ], 'result': 'Judgement'   },
    {'source': ['Lovers',     'Hermit'      ], 'result': 'Chariot'     },
    {'source': ['Lovers',     'Fortune'     ], 'result': 'Strength'    },
    {'source': ['Lovers',     'Strength'    ], 'result': 'Death'       },
    {'source': ['Lovers',     'Hanged'      ], 'result': 'Councillor'  },
    {'source': ['Lovers',     'Death'       ], 'result': 'Temperance'  },
    {'source': ['Lovers',     'Temperance'  ], 'result': 'Strength'    },
    {'source': ['Lovers',     'Devil'       ], 'result': 'Moon'        },
    {'source': ['Lovers',     'Tower'       ], 'result': 'Empress'     },
    {'source': ['Lovers',     'Star'        ], 'result': 'Faith'       },
    {'source': ['Lovers',     'Moon'        ], 'result': 'Magician'    },
    {'source': ['Lovers',     'Sun'         ], 'result': 'Empress'     },
    {'source': ['Lovers',     'Judgement'   ], 'result': 'Hanged'      },
    {'source': ['Lovers',     'Faith'       ], 'result': 'Tower'       },
    {'source': ['Lovers',     'Councillor'  ], 'result': 'Tower'       },
    {'source': ['Chariot',    'Chariot'     ], 'result': 'Chariot'     },
    {'source': ['Chariot',    'Justice'     ], 'result': 'Moon'        },
    {'source': ['Chariot',    'Hermit'      ], 'result': 'Devil'       },
    {'source': ['Chariot',    'Fortune'     ], 'result': 'Councillor'  },
    {'source': ['Chariot',    'Strength'    ], 'result': 'Hermit'      },
    {'source': ['Chariot',    'Hanged'      ], 'result': 'Fool'        },
    {'source': ['Chariot',    'Death'       ], 'result': 'Devil'       },
    {'source': ['Chariot',    'Temperance'  ], 'result': 'Strength'    },
    {'source': ['Chariot',    'Devil'       ], 'result': 'Temperance'  },
    {'source': ['Chariot',    'Tower'       ], 'result': 'Fortune'     },
    {'source': ['Chariot',    'Star'        ], 'result': 'Moon'        },
    {'source': ['Chariot',    'Moon'        ], 'result': 'Lovers'      },
    {'source': ['Chariot',    'Sun'         ], 'result': 'Priestess'   },
    {'source': ['Chariot',    'Faith'       ], 'result': 'Lovers'      },
    {'source': ['Chariot',    'Councillor'  ], 'result': 'Sun'         },
    {'source': ['Justice',    'Justice'     ], 'result': 'Justice'     },
    {'source': ['Justice',    'Hermit'      ], 'result': 'Magician'    },
    {'source': ['Justice',    'Fortune'     ], 'result': 'Emperor'     },
    {'source': ['Justice',    'Strength'    ], 'result': 'Councillor'  },
    {'source': ['Justice',    'Hanged'      ], 'result': 'Lovers'      },
    {'source': ['Justice',    'Death'       ], 'result': 'Fool'        },
    {'source': ['Justice',    'Temperance'  ], 'result': 'Emperor'     },
    {'source': ['Justice',    'Devil'       ], 'result': 'Fool'        },
    {'source': ['Justice',    'Tower'       ], 'result': 'Sun'         },
    {'source': ['Justice',    'Star'        ], 'result': 'Empress'     },
    {'source': ['Justice',    'Moon'        ], 'result': 'Devil'       },
    {'source': ['Justice',    'Sun'         ], 'result': 'Hanged'      },
    {'source': ['Justice',    'Faith'       ], 'result': 'Hanged'      },
    {'source': ['Justice',    'Councillor'  ], 'result': 'Emperor'     },
    {'source': ['Hermit',     'Hermit'      ], 'result': 'Hermit'      },
    {'source': ['Hermit',     'Fortune'     ], 'result': 'Star'        },
    {'source': ['Hermit',     'Strength'    ], 'result': 'Hierophant'  },
    {'source': ['Hermit',     'Hanged'      ], 'result': 'Star'        },
    {'source': ['Hermit',     'Death'       ], 'result': 'Strength'    },
    {'source': ['Hermit',     'Temperance'  ], 'result': 'Strength'    },
    {'source': ['Hermit',     'Devil'       ], 'result': 'Priestess'   },
    {'source': ['Hermit',     'Tower'       ], 'result': 'Judgement'   },
    {'source': ['Hermit',     'Star'        ], 'result': 'Strength'    },
    {'source': ['Hermit',     'Moon'        ], 'result': 'Priestess'   },
    {'source': ['Hermit',     'Sun'         ], 'result': 'Devil'       },
    {'source': ['Hermit',     'Judgement'   ], 'result': 'Emperor'     },
    {'source': ['Hermit',     'Faith'       ], 'result': 'Judgement'   },
    {'source': ['Hermit',     'Councillor'  ], 'result': 'Faith'       },
    {'source': ['Fortune',    'Fortune'     ], 'result': 'Fortune'     },
    {'source': ['Fortune',    'Strength'    ], 'result': 'Faith'       },
    {'source': ['Fortune',    'Hanged'      ], 'result': 'Emperor'     },
    {'source': ['Fortune',    'Death'       ], 'result': 'Star'        },
    {'source': ['Fortune',    'Temperance'  ], 'result': 'Empress'     },
    {'source': ['Fortune',    'Devil'       ], 'result': 'Hierophant'  },
    {'source': ['Fortune',    'Tower'       ], 'result': 'Hanged'      },
    {'source': ['Fortune',    'Star'        ], 'result': 'Devil'       },
    {'source': ['Fortune',    'Moon'        ], 'result': 'Sun'         },
    {'source': ['Fortune',    'Sun'         ], 'result': 'Star'        },
    {'source': ['Fortune',    'Judgement'   ], 'result': 'Tower'       },
    {'source': ['Fortune',    'Faith'       ], 'result': 'Councillor'  },
    {'source': ['Fortune',    'Councillor'  ], 'result': 'Judgement'   },
    {'source': ['Strength',   'Strength'    ], 'result': 'Strength'    },
    {'source': ['Strength',   'Hanged'      ], 'result': 'Temperance'  },
    {'source': ['Strength',   'Death'       ], 'result': 'Hierophant'  },
    {'source': ['Strength',   'Temperance'  ], 'result': 'Chariot'     },
    {'source': ['Strength',   'Devil'       ], 'result': 'Death'       },
    {'source': ['Strength',   'Tower'       ], 'result': 'Faith'       },
    {'source': ['Strength',   'Star'        ], 'result': 'Moon'        },
    {'source': ['Strength',   'Moon'        ], 'result': 'Magician'    },
    {'source': ['Strength',   'Sun'         ], 'result': 'Moon'        },
    {'source': ['Strength',   'Faith'       ], 'result': 'Star'        },
    {'source': ['Strength',   'Councillor'  ], 'result': 'Empress'     },
    {'source': ['Hanged',     'Hanged'      ], 'result': 'Hanged'      },
    {'source': ['Hanged',     'Death'       ], 'result': 'Moon'        },
    {'source': ['Hanged',     'Temperance'  ], 'result': 'Death'       },
    {'source': ['Hanged',     'Devil'       ], 'result': 'Fortune'     },
    {'source': ['Hanged',     'Tower'       ], 'result': 'Hermit'      },
    {'source': ['Hanged',     'Star'        ], 'result': 'Justice'     },
    {'source': ['Hanged',     'Moon'        ], 'result': 'Councillor'  },
    {'source': ['Hanged',     'Sun'         ], 'result': 'Hierophant'  },
    {'source': ['Hanged',     'Judgement'   ], 'result': 'Star'        },
    {'source': ['Hanged',     'Faith'       ], 'result': 'Devil'       },
    {'source': ['Hanged',     'Councillor'  ], 'result': 'Star'        },
    {'source': ['Death',      'Death'       ], 'result': 'Death'       },
    {'source': ['Death',      'Temperance'  ], 'result': 'Hanged'      },
    {'source': ['Death',      'Devil'       ], 'result': 'Chariot'     },
    {'source': ['Death',      'Tower'       ], 'result': 'Sun'         },
    {'source': ['Death',      'Star'        ], 'result': 'Councillor'  },
    {'source': ['Death',      'Moon'        ], 'result': 'Hierophant'  },
    {'source': ['Death',      'Sun'         ], 'result': 'Priestess'   },
    {'source': ['Death',      'Faith'       ], 'result': 'Fool'        },
    {'source': ['Death',      'Councillor'  ], 'result': 'Magician'    },
    {'source': ['Temperance', 'Temperance'  ], 'result': 'Temperance'  },
    {'source': ['Temperance', 'Devil'       ], 'result': 'Fool'        },
    {'source': ['Temperance', 'Tower'       ], 'result': 'Fortune'     },
    {'source': ['Temperance', 'Star'        ], 'result': 'Sun'         },
    {'source': ['Temperance', 'Moon'        ], 'result': 'Councillor'  },
    {'source': ['Temperance', 'Sun'         ], 'result': 'Magician'    },
    {'source': ['Temperance', 'Judgement'   ], 'result': 'Hermit'      },
    {'source': ['Temperance', 'Faith'       ], 'result': 'Hermit'      },
    {'source': ['Temperance', 'Councillor'  ], 'result': 'Fool'        },
    {'source': ['Devil',      'Devil'       ], 'result': 'Devil'       },
    {'source': ['Devil',      'Tower'       ], 'result': 'Magician'    },
    {'source': ['Devil',      'Star'        ], 'result': 'Strength'    },
    {'source': ['Devil',      'Moon'        ], 'result': 'Chariot'     },
    {'source': ['Devil',      'Sun'         ], 'result': 'Hermit'      },
    {'source': ['Devil',      'Judgement'   ], 'result': 'Lovers'      },
    {'source': ['Devil',      'Faith'       ], 'result': 'Chariot'     },
    {'source': ['Devil',      'Councillor'  ], 'result': 'Chariot'     },
    {'source': ['Tower',      'Tower'       ], 'result': 'Tower'       },
    {'source': ['Tower',      'Star'        ], 'result': 'Councillor'  },
    {'source': ['Tower',      'Moon'        ], 'result': 'Hermit'      },
    {'source': ['Tower',      'Sun'         ], 'result': 'Emperor'     },
    {'source': ['Tower',      'Judgement'   ], 'result': 'Moon'        },
    {'source': ['Tower',      'Faith'       ], 'result': 'Death'       },
    {'source': ['Tower',      'Councillor'  ], 'result': 'Death'       },
    {'source': ['Star',       'Star'        ], 'result': 'Star'        },
    {'source': ['Star',       'Moon'        ], 'result': 'Temperance'  },
    {'source': ['Star',       'Sun'         ], 'result': 'Judgement'   },
    {'source': ['Star',       'Judgement'   ], 'result': 'Fortune'     },
    {'source': ['Star',       'Faith'       ], 'result': 'Temperance'  },
    {'source': ['Star',       'Councillor'  ], 'result': 'Sun'         },
    {'source': ['Moon',       'Moon'        ], 'result': 'Moon'        },
    {'source': ['Moon',       'Sun'         ], 'result': 'Empress'     },
    {'source': ['Moon',       'Judgement'   ], 'result': 'Fool'        },
    {'source': ['Moon',       'Faith'       ], 'result': 'Sun'         },
    {'source': ['Moon',       'Councillor'  ], 'result': 'Temperance'  },
    {'source': ['Sun',        'Sun'         ], 'result': 'Sun'         },
    {'source': ['Sun',        'Judgement'   ], 'result': 'Death'       },
    {'source': ['Sun',        'Faith'       ], 'result': 'Emperor'     },
    {'source': ['Sun',        'Councillor'  ], 'result': 'Fortune'     },
    {'source': ['Judgement',  'Judgement'   ], 'result': 'Judgement'   },
    {'source': ['Judgement',  'Faith'       ], 'result': 'Fortune'     },
    {'source': ['Judgement',  'Councillor'  ], 'result': 'Devil'       },
    {'source': ['Faith',      'Faith'       ], 'result': 'Faith'       },
    {'source': ['Faith',      'Councillor'  ], 'result': 'Priestess'   },
    {'source': ['Councillor', 'Councillor'  ], 'result': 'Councillor'  },
    {'source': ['World',      'World'       ], 'result': 'World'       },
];

export const specialCombosRoyal = [
    {result: 'Alice', sources: ["Belial", "Nebiros"]},
    {result: 'Ardha', sources: ["Shiva", "Parvati"]},
    {result: 'Asura', sources: ["Jikokuten", "Zouchouten", "Koumokuten", "Bishamonten"]},
    {result: 'Black Frost', sources: ["Jack-o'-Lantern", "Jack Frost", "King Frost"]},
    {result: 'Bugs', sources: ["Pixie", "Pisaca", "Hariti"]},
    {result: 'Chi You', sources: ["White Rider", "Hecatoncheires", "Thor", "Cu Chulainn", "Yoshitsune"]},
    {result: 'Flauros', sources: ["Berith", "Eligor", "Orobas"]},
    {result: 'Hell Biker', sources: ["Archangel", "Matador", "Decarabia"]},
    {result: 'Izanagi-no-Okami', sources: ["Yamata-no-Orochi", "Throne", "Inugami", "Raja Naga", "Barong", "Norn"]},
    {result: 'Izanagi-no-Okami Picaro', sources: ["Okuninushi", "Orthrus", "Kali", "Mithras", "Cu Chulainn", "Lucifer"]},
    {result: 'Kohryu', sources: ["Seiryu", "Byakko", "Suzaku", "Genbu"]},
    {result: 'Lucifer', sources: ["Anubis", "Ananta", "Trumpeter", "Michael", "Metatron", "Satan"]},
    {result: 'Metatron', sources: ["Principality", "Power", "Dominion", "Melchizedek", "Sandalphon", "Michael"]},
    {result: 'Michael', sources: ["Gabriel", "Raphael", "Uriel"]},
    {result: 'Neko Shogun', sources: ["Kodama", "Sudama", "Anzu"]},
    {result: 'Ongyo-Ki', sources: ["Kin-Ki", "Sui-Ki", "Fuu-Ki"]},
    {result: 'Satanael', sources: ["Arsène", "Anzu", "Ishtar", "Satan", "Lucifer", "Michael"]},
    {result: 'Seth', sources: ["Isis", "Anubis", "Thoth", "Horus"]},
    {result: 'Shiva', sources: ["Barong", "Rangda"]},
    {result: 'Sraosha', sources: ["Mitra", "Mithras", "Melchizedek", "Lilith", "Gabriel"]},
    {result: 'Tam Lin', sources: ["Cait Sith", "High Pixie", "Leanan Sidhe"]},
    {result: 'Trumpeter', sources: ["White Rider", "Red Rider", "Black Rider", "Pale Rider"]},
    {result: 'Vasuki', sources: ["Naga", "Ananta", "Raja Naga"]},
    {result: 'Yoshitsune', sources: ["Shiki-Ouji", "Arahabaki", "Okuninushi", "Yatagarasu", "Futsunushi"]},
];

export const dlcPersonaRoyal = [
    ["Izanagi", "Izanagi Picaro"],
    ["Orpheus", "Orpheus Picaro"],
    ["Ariadne", "Ariadne Picaro"],
    ["Asterius", "Asterius Picaro"],
    ["Thanatos", "Thanatos Picaro"],
    ["Kaguya", "Kaguya Picaro"],
    ["Magatsu-Izanagi", "Magatsu-Izanagi Picaro"],
    ["Tsukiyomi", "Tsukiyomi Picaro"],
    ["Messiah", "Messiah Picaro"],
    ["Orpheus F", "Orpheus F Picaro"],
    ["Athena", "Athena Picaro"],
    ["Izanagi-no-Okami", "Izanagi-no-Okami Picaro"],
    ["Raoul"]
];

export const inheritanceChartRoyal: Record<InheritElemsType, string[]> = {
    "Physical": ["✓", "✓", "✘", "✘", "✘", "✘", "✘", "✘", "✘", "✘", "✓", "✓"],
    "Fire":     ["✓", "✓", "✓", "✘", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"],
    "Ice":      ["✓", "✓", "✘", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"],
    "Electric": ["✓", "✓", "✓", "✓", "✓", "✘", "✓", "✓", "✓", "✓", "✓", "✓"],
    "Wind":     ["✓", "✓", "✓", "✓", "✘", "✓", "✓", "✓", "✓", "✓", "✓", "✓"],
    "Psy":      ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✘", "✓", "✓", "✓", "✓"],
    "Nuclear":  ["✓", "✓", "✓", "✓", "✓", "✓", "✘", "✓", "✓", "✓", "✓", "✓"],
    "Bless":    ["✘", "✘", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✘", "✓", "✘"],
    "Curse":    ["✘", "✘", "✓", "✓", "✓", "✓", "✓", "✓", "✘", "✓", "✘", "✓"],
    "Healing":  ["✘", "✘", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✘", "✓", "✓"],
    "Ailment":  ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✘", "✓", "✘", "✓"],
    "Almighty": ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"]
};
