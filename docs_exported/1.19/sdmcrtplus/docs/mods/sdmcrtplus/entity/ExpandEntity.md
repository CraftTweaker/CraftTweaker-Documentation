# Expansion for Entity

## Methods

:::group{name=getBlocksAround}

Returns all the blocks that are around the entity in the zone

Return Type: [BlockState](/vanilla/api/block/BlockState)[[BlockPos](/vanilla/api/util/math/BlockPos)]

```zenscript
Entity.getBlocksAround(size as int) as BlockState[BlockPos]
```

| Parameter | Type |        Description         |
|-----------|------|----------------------------|
| size      | int  | The area around the entity |


:::

:::group{name=getLeftBlocksToUp}

The number of blocks remaining to the entity to the upper limit of the world

Return Type: int

```zenscript
// Entity.getLeftBlocksToUp() as int

entity.getLeftBlocksToUp();
```

:::

:::group{name=playSound}

```zenscript
Entity.playSound(sound as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| sound     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=playSound}

```zenscript
Entity.playSound(sound as ResourceLocation, volume as float, pitch as float)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| sound     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| volume    | float                                                      |
| pitch     | float                                                      |


:::


## Properties

|     Name      | Type | Has Getter | Has Setter |                                 Description                                  |
|---------------|------|------------|------------|------------------------------------------------------------------------------|
| leftBlockToUp | int  | true       | false      | The number of blocks remaining to the entity to the upper limit of the world |

