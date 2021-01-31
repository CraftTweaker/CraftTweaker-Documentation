# IBiome

Интерфейс IBiome позволяет вам получать информацию про зарегистрированные биомы.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.world.IBiome;`

## Вызов IBiome

You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/)

## Геттеры

Эмм, все что вы можете сделать с объектом IBiome &mdash; получить некоторую информацию из него:

| Геттер                       | Возвращаемый тип                               |
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