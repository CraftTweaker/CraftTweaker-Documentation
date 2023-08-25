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

:::group{name=getArmorValue}

Return Type: int

```zenscript
// LivingEntity.getArmorValue() as int

livingEntity.getArmorValue();
```

:::

:::group{name=getArrowCount}

Return Type: int

```zenscript
// LivingEntity.getArrowCount() as int

livingEntity.getArrowCount();
```

:::

:::group{name=getDespawnDistance}

Return Type: int

```zenscript
// LivingEntity.getDespawnDistance() as int

livingEntity.getDespawnDistance();
```

:::

:::group{name=getMaxInstancesPerChunk}

Return Type: int

```zenscript
// LivingEntity.getMaxInstancesPerChunk() as int

livingEntity.getMaxInstancesPerChunk();
```

:::

:::group{name=getNoDespawnDistance}

Return Type: int

```zenscript
// LivingEntity.getNoDespawnDistance() as int

livingEntity.getNoDespawnDistance();
```

:::

:::group{name=getStructuresNameWhereEntity}

Returns a list of structures in which the entity is currently located.

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// LivingEntity.getStructuresNameWhereEntity() as stdlib.List<ResourceLocation>

livingEntity.getStructuresNameWhereEntity();
```

:::

:::group{name=getStructuresWhereEntity}

Returns a list of structures in which the entity is currently located.

Return Type: stdlib.List&lt;[Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)&gt;

```zenscript
// LivingEntity.getStructuresWhereEntity() as stdlib.List<Structure>

livingEntity.getStructuresWhereEntity();
```

:::

:::group{name=isFriendly}

Return Type: boolean

```zenscript
// LivingEntity.isFriendly() as boolean

livingEntity.isFriendly();
```

:::

:::group{name=isPersistent}

Return Type: boolean

```zenscript
// LivingEntity.isPersistent() as boolean

livingEntity.isPersistent();
```

:::

:::group{name=onStructure}

Checks. Whether the entity is in the structure or not.

Return Type: boolean

```zenscript
LivingEntity.onStructure(structure as ResourceLocation) as boolean
```

| Parameter |                            Type                            |  Description   |
|-----------|------------------------------------------------------------|----------------|
| structure | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | Structure name |


:::

:::group{name=onStructure}

Checks. Whether the entity is in the structure or not.

Return Type: boolean

```zenscript
LivingEntity.onStructure(structure as Structure) as boolean
```

| Parameter |                                  Type                                  |  Description   |
|-----------|------------------------------------------------------------------------|----------------|
| structure | [Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure) | Structure name |


:::

:::group{name=randomTeleport}

Teleports to random coordinates in the zone. If the creature cannot stand on the coordinates, it will not be teleported and will return false

Return Type: boolean

```zenscript
LivingEntity.randomTeleport(zone as int) as boolean
```

| Parameter | Type |                               Description                               |
|-----------|------|-------------------------------------------------------------------------|
| zone      | int  | the area around the creature in which the teleport will be carried out. |


:::

:::group{name=randomTeleport}

Teleports to random coordinates in the zone. If the creature cannot stand on the coordinates, it will not be teleported and will return false

Return Type: boolean

```zenscript
LivingEntity.randomTeleport(position as BlockPos, zone as int) as boolean
```

| Parameter |                    Type                     |                               Description                               |
|-----------|---------------------------------------------|-------------------------------------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |                                                                         |
| zone      | int                                         | the area around the creature in which the teleport will be carried out. |


:::

:::group{name=teleportWithCheck}

This method is equivalent to teleport, but still slightly different.
     It prevents the entity from getting into the blocks. He checks whether the entity can stand there in full growth.

```zenscript
LivingEntity.teleportWithCheck(position as BlockPos, isEvent as boolean)
```

| Parameter |                    Type                     |                     Description                      |
|-----------|---------------------------------------------|------------------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to which the entity will be teleported. |
| isEvent   | boolean                                     | Will it trigger an event ?                           |


:::

:::group{name=teleportWithCheck}

```zenscript
LivingEntity.teleportWithCheck(posX as double, posY as double, posZ as double, isEvent as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| posX      | double  |
| posY      | double  |
| posZ      | double  |
| isEvent   | boolean |


:::


## Properties

|         Name         |  Type   | Has Getter | Has Setter |
|----------------------|---------|------------|------------|
| armorValue           | int     | true       | false      |
| arrowCount           | int     | true       | false      |
| despawnDistance      | int     | true       | false      |
| isFriendly           | boolean | true       | false      |
| isPersistent         | boolean | true       | false      |
| maxInstancesPerChunk | int     | true       | false      |
| noDespawnDistance    | int     | true       | false      |

