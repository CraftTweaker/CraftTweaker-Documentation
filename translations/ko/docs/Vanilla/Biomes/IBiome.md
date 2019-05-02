# IBiome

IBiome 인터페이스를 사용하여 등록되어 있는 바이옴에 대한 정보를 조회할 수 있습니다.

## 패키지 임포트하기

예를 들어 [Array](/AdvancedFunctions/Arrays_and_Loops/)의 캐스팅하려면 관련된 패키지를 임포트해야만 합니다. 안전을 위해서도 말입니다.   
`import crafttweaker.world.IBiome;`

## IBiome 호출

You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/) That is currently the only way

## ZenGetters

Atm, all you can do with an IBiome object is retrieving some information out of it:

| ZenGetter                    | Return Type |
| ---------------------------- | ----------- |
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