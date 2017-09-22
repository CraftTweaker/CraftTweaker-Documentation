# IBiome

The IBiome interface allows you to retrieve information on a registered Biome.

## Calling an IBiome
You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame)
That is currently the only way

## ZenGetters
Atm, all you can do with an IBiome object is retrieving some information out of it:

| ZenGetter                    | Return Type |
|------------------------------|-------------|
| name                         | String      |
| canRain                      | boolean     |
| isSnowyBiome                 | boolean     |
| highHumidity                 | boolean     |
| spawningChance               | float       |
| baseHeight                   | float       |
| heightVariation              | float       |
| rainfall                     | float       |
| waterColorMultiplier         | int         |
| ignorePlayerSpawnSuitability | boolean     |
| temperature                  | float       |

