# IBiome

Интерфейс IBiome позволяет вам получать информацию про зарегистрированные биомы.

## Импорт пакета
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.world.IBiome;`

## Вызов IBiome
You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/)

## ZenGetters
Эмм, все что вы можете сделать с объектом IBiome &mdash; получить некоторую информацию из него:

| ZenGetter                    | Возвращаемый тип                               |
| ---------------------------- | ---------------------------------------------- |
| name                         | string                                         |
| canRain                      | boolean                                        |
| isSnowyBiome                 | boolean                                        |
| highHumidity                 | boolean                                        |
| spawningChance               | float                                          |
| baseHeight                   | float                                          |
| heightVariation              | float                                          |
| rainfall                     | float                                          |
| waterColorMultiplier         | int                                            |
| ignorePlayerSpawnSuitability | boolean                                        |
| temperature                  | float                                          |
| types                        | List<[IBiomeType](/Vanilla/Biomes/IBiomeType/) |

