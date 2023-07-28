# LevelWriter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.LevelWriter;
```


## Methods

:::group{name=addFreshEntity}

add an entity to the world, return if the entity is added successfully.

Return Type: boolean

```zenscript
LevelWriter.addFreshEntity(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=destroyBlock}

Destroys a block within the world.

Returns: Whether the block was changed.  
Return Type: boolean

```zenscript
// LevelWriter.destroyBlock(pos as BlockPos, doDrops as boolean) as boolean

myLevelWriter.destroyBlock(new BlockPos(0, 1, 2), true);
```

| Parameter |                    Type                     |                  Description                  |
|-----------|---------------------------------------------|-----------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the block.                    |
| doDrops   | boolean                                     | Whether the block drops itself and it's loot. |


:::

:::group{name=destroyBlock}

Destroys a block within the world.

Returns: Whether the block was changed.  
Return Type: boolean

```zenscript
// LevelWriter.destroyBlock(pos as BlockPos, doDrops as boolean, breaker as Entity?) as boolean

myLevelWriter.destroyBlock(new BlockPos(0, 1, 2), true, player);
```

| Parameter |                    Type                     |                  Description                  |
|-----------|---------------------------------------------|-----------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the block.                    |
| doDrops   | boolean                                     | Whether the block drops itself and it's loot. |
| breaker   | [Entity](/vanilla/api/entity/Entity)?       | The entity to break the block.                |


:::


