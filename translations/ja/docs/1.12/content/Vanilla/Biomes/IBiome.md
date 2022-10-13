# IBiome

IBiomeインターフェースを利用すると、登録されたBiomeについての情報を取得できます。

## パッケージのインポート
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.world.IBiome;`

## IBiomeを呼び出す
You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/)

## ZenGetters
IBiomeを使ってできることは、そこから情報を取得することだけです。

| ZenGetter                    | 戻り値                                            |
| ---------------------------- | ---------------------------------------------- |
| name                         | string                                         |
| canRain                      | boolean型                                       |
| isSnowyBiome                 | boolean型                                       |
| highHumidity                 | boolean型                                       |
| spawningChance               | float                                          |
| baseHeight                   | float                                          |
| heightVariation              | float                                          |
| rainfall                     | float                                          |
| waterColorMultiplier         | int                                            |
| ignorePlayerSpawnSuitability | boolean型                                       |
| temperature                  | float                                          |
| types                        | List<[IBiomeType](/Vanilla/Biomes/IBiomeType/) |

