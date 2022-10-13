# IBiome

IBiome 인터페이스를 사용하여 등록되어 있는 바이옴에 대한 정보를 조회할 수 있습니다.

## 패키지 임포트하기
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.world.IBiome;`

## IBiome 호출
You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/)

## ZenGetters
IBiome 객체로 수행할 수 있는 작업은 정보를 가져오는 일입니다.

| ZenGetter                    | 반환 타입                                          |
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

