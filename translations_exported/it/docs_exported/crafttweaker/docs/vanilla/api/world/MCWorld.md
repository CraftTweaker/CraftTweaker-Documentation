# MCWorld

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.world.MCWorld
```

## Methods
### getBiome

Return type: [crafttweaker.api.world.MCBiome](/vanilla/api/world/MCBiome)

```zenscript
myMCWorld.getBiome(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### getBlockState

Tipo di restituzione: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCWorld.getBlockState(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### getRedstonePower

Return type: int

```zenscript
myMCWorld.getRedstonePower(pos as crafttweaker.api.util.BlockPos, direction as crafttweaker.api.util.Direction);
```

| Parameter | Type                                                           | Description                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)   | Nessuna descrizione fornita |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Nessuna descrizione fornita |


### getRedstonePowerFromNeighbors

Return type: int

```zenscript
myMCWorld.getRedstonePowerFromNeighbors(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### getStrongPower

Return type: int

```zenscript
myMCWorld.getStrongPower(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### getTileData

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMCWorld.getTileData(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### isBlockPowered

Return type: boolean

```zenscript
myMCWorld.isBlockPowered(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### isRainingAt

Return type: boolean

```zenscript
myMCWorld.isRainingAt(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


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

| Parameter | Type                                                                    | Description                 |
| --------- | ----------------------------------------------------------------------- | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Nessuna descrizione fornita |
| state     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |



## Properties

| Name             | Type    | Ha Getter | Ha Setter |
| ---------------- | ------- | --------- | --------- |
| dayTime          | boolean | true      | false     |
| difficulty       | String  | true      | false     |
| difficultyLocked | boolean | true      | false     |
| dimension        | String  | true      | false     |
| gameTime         | long    | true      | false     |
| hardcore         | boolean | true      | false     |
| nightTime        | boolean | true      | false     |
| raining          | boolean | true      | false     |
| remote           | boolean | true      | false     |
| seaLevel         | int     | true      | false     |
| thundering       | boolean | true      | false     |

