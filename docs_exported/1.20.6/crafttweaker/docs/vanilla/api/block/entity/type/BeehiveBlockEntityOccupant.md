# BeehiveBlockEntityOccupant

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.type.BeehiveBlockEntityOccupant;
```


## Extending Record

BeehiveBlockEntityOccupant extends Record. That means all methods available in Record are also available in BeehiveBlockEntityOccupant

## Static Methods

:::group{name=create}

Return Type: [BeehiveBlockEntityOccupant](/vanilla/api/block/entity/type/BeehiveBlockEntityOccupant)

```zenscript
BeehiveBlockEntityOccupant.create(ticksInHive as int) as BeehiveBlockEntityOccupant
```

|  Parameter  | Type |
|-------------|------|
| ticksInHive | int  |


:::

:::group{name=of}

Return Type: [BeehiveBlockEntityOccupant](/vanilla/api/block/entity/type/BeehiveBlockEntityOccupant)

```zenscript
BeehiveBlockEntityOccupant.of(entity as Entity) as BeehiveBlockEntityOccupant
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

## Methods

:::group{name=createEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
BeehiveBlockEntityOccupant.createEntity(level as Level, pos as BlockPos) as Entity?
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


## Properties

|      Name      |                         Type                         | Has Getter | Has Setter |
|----------------|------------------------------------------------------|------------|------------|
| entityData     | [CustomData](/vanilla/api/item/component/CustomData) | true       | false      |
| minTicksInHive | int                                                  | true       | false      |
| ticksInHive    | int                                                  | true       | false      |

