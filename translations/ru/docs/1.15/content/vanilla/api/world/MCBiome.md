# MCBiome

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.world.MCBiome
```

## Методы
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| Параметр       | Тип                                                                                            | Описание             |
| -------------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | Описание отсутствует |


### getTempCategory

Returns String

```zenscript
myMCBiome.getTempCategory();
```

### getTemperature

Returns float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Описание             |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |



## Свойства

| Название           | Тип     | Имеет Getter | Имеет Setter |
| ------------------ | ------- | ------------ | ------------ |
| category           | String  | true         | false        |
| defaultTemperature | float   | true         | false        |
| depth              | float   | true         | false        |
| doesRain           | boolean | true         | false        |
| doesSnow           | boolean | true         | false        |
| downfall           | float   | true         | false        |
| isHighHumidity     | boolean | true         | false        |
| isMutation         | boolean | true         | false        |
| isTempCold         | boolean | true         | false        |
| isTempMedium       | boolean | true         | false        |
| isTempOcean        | boolean | true         | false        |
| isTempWarm         | boolean | true         | false        |
| parent             | String  | true         | false        |
| rainType           | String  | true         | false        |
| scale              | float   | true         | false        |
| spawningChange     | float   | true         | false        |
| translationKey     | String  | true         | false        |
| waterColor         | int     | true         | false        |
| waterFogColor      | int     | true         | false        |

