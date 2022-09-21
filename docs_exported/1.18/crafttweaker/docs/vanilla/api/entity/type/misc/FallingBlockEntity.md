# FallingBlockEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.misc.FallingBlockEntity;
```


## Extending Entity

FallingBlockEntity extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in FallingBlockEntity

## Static Methods

:::group{name=fall}

Spawns a new falling block entity at the given position with the given blockstate.

Returns: The entity that was spawned.  
Return Type: [FallingBlockEntity](/vanilla/api/entity/type/misc/FallingBlockEntity)

```zenscript
// FallingBlockEntity.fall(level as Level, pos as BlockPos, state as BlockState) as FallingBlockEntity

FallingBlockEntity.fall(level, new BlockPos(1, 2, 3), <blockstate:minecraft:dirt>);
```

| Parameter |                    Type                     |             Description              |
|-----------|---------------------------------------------|--------------------------------------|
| level     | [Level](/vanilla/api/world/Level)           | The level to spawn the entity in.    |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to spawn the entity at. |
| state     | [BlockState](/vanilla/api/block/BlockState) | The blockstate of the falling block. |


:::

## Methods

:::group{name=callOnBrokenAfterFall}

Triggers the given [Fallable](/vanilla/api/block/type/falling/Fallable)'s `onBrokenAfterFall` method using this entity.

```zenscript
// FallingBlockEntity.callOnBrokenAfterFall(fallableBlock as Block, position as BlockPos)

FallingBlockEntity.fall(level, new BlockPos(1, 2, 3), <blockstate:minecraft:dirt>).callOnBrokenAfterFall(<block:minecraft:sand>, new BlockPos(1, 2, 3));
```

|   Parameter   |                    Type                     |             Description              |
|---------------|---------------------------------------------|--------------------------------------|
| fallableBlock | [Block](/vanilla/api/block/Block)           | The fallable block.                  |
| position      | [BlockPos](/vanilla/api/util/math/BlockPos) | The position that the block fell at. |


:::

:::group{name=getBlockState}

Gets the BlockState of this falling entity.

Returns: The BlockState of this falling entity  
Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// FallingBlockEntity.getBlockState() as BlockState

FallingBlockEntity.fall(level, new BlockPos(1, 2, 3), <blockstate:minecraft:dirt>).getBlockState();
```

:::

:::group{name=getStartPos}

Gets the position that this entity was spawned at.

Returns: The position that the entity was spawned at.  
Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// FallingBlockEntity.getStartPos() as BlockPos

FallingBlockEntity.fall(level, new BlockPos(1, 2, 3), <blockstate:minecraft:dirt>).getStartPos();
```

:::

:::group{name=setBlockState}

Sets the BlockState of this falling entity.

```zenscript
FallingBlockEntity.setBlockState(state as BlockState)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=setHurtsEntities}

Sets that entities should be hurt by this block, as well as setting how much damage is done.

```zenscript
// FallingBlockEntity.setHurtsEntities(damagePerDistance as float, maxDamage as int)

FallingBlockEntity.fall(level, new BlockPos(1, 2, 3), <blockstate:minecraft:dirt>).setHurtsEntities(0.5, 5);
```

|     Parameter     | Type  |                         Description                         |
|-------------------|-------|-------------------------------------------------------------|
| damagePerDistance | float | The damage done per distance fell.                          |
| maxDamage         | int   | The max amount of damage that can be caused by this entity. |


:::

:::group{name=setStartPos}

Sets the position that this entity was spawned at.

 this is mainly used for the rendering of the entity

```zenscript
// FallingBlockEntity.setStartPos(pos as BlockPos)

FallingBlockEntity.fall(level, new BlockPos(1, 2, 3), <blockstate:minecraft:dirt>).setStartPos(new BlockPos(1, 2, 3));
```

| Parameter |                    Type                     |                 Description                  |
|-----------|---------------------------------------------|----------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | the position that the entity was spawned at. |


:::


## Properties

|    Name    |                    Type                     | Has Getter | Has Setter |                 Description                 |
|------------|---------------------------------------------|------------|------------|---------------------------------------------|
| blockstate | [BlockState](/vanilla/api/block/BlockState) | true       | true       | Gets the BlockState of this falling entity. |

