# MCBiome

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.world.MCBiome
```

## Methods
### doesSnowFreeze

Return type: boolean

```zenscript
myMCBiome.doesSnowFreeze(world as crafttweaker.api.world.MCWorld, pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| world    | [crafttweaker.api.world.MCWorld](/vanilla/api/world/MCWorld) | Описание отсутствует |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### doesWaterFreeze

Return type: boolean

```zenscript
myMCBiome.doesWaterFreeze(world as crafttweaker.api.world.MCWorld, pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| world    | [crafttweaker.api.world.MCWorld](/vanilla/api/world/MCWorld) | Описание отсутствует |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |



Return type: boolean

```zenscript
myMCBiome.doesWaterFreeze(world as crafttweaker.api.world.MCWorld, pos as crafttweaker.api.util.BlockPos, mustBeAtEdge as boolean);
```

| Параметр     | Тип                                                          | Description          |
| ------------ | ------------------------------------------------------------ | -------------------- |
| world        | [crafttweaker.api.world.MCWorld](/vanilla/api/world/MCWorld) | Описание отсутствует |
| pos          | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |
| mustBeAtEdge | boolean                                                      | Описание отсутствует |


### getTemperature

Return type: float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |



## Свойства

| Название       | Тип     | Имеет Getter | Имеет Setter |
| -------------- | ------- | ------------ | ------------ |
| category       | String  | true         | false        |
| depth          | float   | true         | false        |
| doesRain       | boolean | true         | false        |
| doesSnow       | boolean | true         | false        |
| downfall       | float   | true         | false        |
| isHighHumidity | boolean | true         | false        |
| rainType       | String  | true         | false        |
| scale          | float   | true         | false        |
| waterColor     | int     | true         | false        |
| waterFogColor  | int     | true         | false        |

