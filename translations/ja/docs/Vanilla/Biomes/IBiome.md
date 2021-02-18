# IBiome

IBiomeインターフェースを利用すると、登録されたBiomeについての情報を取得できます。

## パッケージをインポートする

何らかの問題が発生した場合([配列](/AdvancedFunctions/Arrays_and_Loops/)へのキャストなど)には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。  
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
| spawningChance               | float型                                         |
| baseHeight                   | float型                                         |
| heightVariation              | float型                                         |
| rainfall                     | float型                                         |
| waterColorMultiplier         | int型                                           |
| ignorePlayerSpawnSuitability | boolean型                                       |
| temperature                  | float型                                         |
| types                        | List<[IBiomeType](/Vanilla/Biomes/IBiomeType/) |