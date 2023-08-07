# Expansion for Entity

## Methods

:::group{name=getBlocksAround}

Allows you to get a list of all the blocks in the area around the entity.

Return Type: [BlockState](/vanilla/api/block/BlockState)[[BlockPos](/vanilla/api/util/math/BlockPos)]

```zenscript
Entity.getBlocksAround(size as int) as BlockState[BlockPos]
```

| Parameter | Type |      Description      |
|-----------|------|-----------------------|
| size      | int  | The size of the zone. |


:::

:::group{name=getLeftBlocksToUp}



Returns: The remaining number of beams to the upper limit of the world  
Return Type: int

```zenscript
// Entity.getLeftBlocksToUp() as int

entity.getLeftBlocksToUp();
```

:::


