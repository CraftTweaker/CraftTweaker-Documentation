# MCWorld

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.world.MCWorld
```

## Methods
### getBiome

Return type: [crafttweaker.api.world.MCBiome](/vanilla/api/world/MCBiome)

```zenscript
myMCWorld.getBiome(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### getBlockState

Тип возврата: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCWorld.getBlockState(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### getRedstonePower

Return type: int

```zenscript
myMCWorld.getRedstonePower(pos as crafttweaker.api.util.BlockPos, direction as crafttweaker.api.util.Direction);
```

| Параметр  | Тип                                                            | Description          |
| --------- | -------------------------------------------------------------- | -------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)   | Описание отсутствует |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Описание отсутствует |


### getRedstonePowerFromNeighbors

Return type: int

```zenscript
myMCWorld.getRedstonePowerFromNeighbors(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### getStrongPower

Return type: int

```zenscript
myMCWorld.getStrongPower(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### getTileData

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMCWorld.getTileData(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### isBlockPowered

Return type: boolean

```zenscript
myMCWorld.isBlockPowered(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### isRainingAt

Return type: boolean

```zenscript
myMCWorld.isRainingAt(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Description          |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### isRemote

Return type: boolean

```zenscript
myMCWorld.isRemote();
```

### setBlockState

Return type: boolean

```zenscript
myMCWorld.setBlockState(pos as crafttweaker.api.util.BlockPos, state as crafttweaker.api.block.MCBlockState);
```

| Параметр | Тип                                                                     | Description          |
| -------- | ----------------------------------------------------------------------- | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Описание отсутствует |
| state    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |



## Свойства

| Название         | Тип     | Имеет Getter | Имеет Setter |
| ---------------- | ------- | ------------ | ------------ |
| dayTime          | boolean | true         | false        |
| difficulty       | String  | true         | false        |
| difficultyLocked | boolean | true         | false        |
| dimension        | String  | true         | false        |
| gameTime         | long    | true         | false        |
| hardcore         | boolean | true         | false        |
| nightTime        | boolean | true         | false        |
| raining          | boolean | true         | false        |
| remote           | boolean | true         | false        |
| seaLevel         | int     | true         | false        |
| thundering       | boolean | true         | false        |

