# Expansion for LivingEntity

## Methods

:::group{name=changeDimension}

Allows you to move the entity to the desired dimension

Return Type: boolean

```zenscript
LivingEntity.changeDimension(dimension as ResourceLocation) as boolean
```

| Parameter |                            Type                            |                   Description                   |
|-----------|------------------------------------------------------------|-------------------------------------------------|
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The dimension to which the entity will be moved |


:::

:::group{name=changeDimension}

Allows you to move the entity to the desired dimension

Return Type: boolean

```zenscript
LivingEntity.changeDimension(level as ServerLevel) as boolean
```

| Parameter |                     Type                      |               Description                |
|-----------|-----------------------------------------------|------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) | A more effective option than the top one |


:::

:::group{name=randomTeleport}

This method is equivalent to teleport, but still slightly different.
     It prevents the entity from getting into the blocks. He checks whether the entity can stand there in full growth.

```zenscript
LivingEntity.randomTeleport(position as BlockPos, isEvent as boolean)
```

| Parameter |                    Type                     |                     Description                      |
|-----------|---------------------------------------------|------------------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to which the entity will be teleported. |
| isEvent   | boolean                                     | Will it trigger an event ?                           |


:::

:::group{name=randomTeleport}

```zenscript
LivingEntity.randomTeleport(posX as double, posY as double, posZ as double, isEvent as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| posX      | double  |
| posY      | double  |
| posZ      | double  |
| isEvent   | boolean |


:::


