# MCEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntity;
```


## Extending CapabilityProvider&lt;MCEntity&gt;

MCEntity extends [CapabilityProvider](/vanilla/api/capability/CapabilityProvider)&lt;[MCEntity](/vanilla/api/entity/MCEntity)&gt;. That means all methods available in [CapabilityProvider](/vanilla/api/capability/CapabilityProvider)&lt;[MCEntity](/vanilla/api/entity/MCEntity)&gt; are also available in MCEntity

## Methods

:::group{name=addTag}

Adds a new tag to the Entity.

 There is a limit of 1024 tags per Entity.

 These are **not** tags like MCTag<EntityType>, these are tags that are added by the /tag command.

 You can read more about how they can be used here:
 https://minecraft.wiki/w/Commands/tag

Returns: True if the tag could ba added, and it did not replace a preexisting tag. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.addTag(tag as string) as boolean

myMCEntity.addTag("foundMesa");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tag | string | The name of the tag to add. |


:::

:::group{name=addVelocity}

Adds velocity to this Entity.

Return Type: void

```zenscript
// MCEntity.addVelocity(x as double, y as double, z as double) as void

myMCEntity.addVelocity(5, 9, -1);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | The amount of X velocity to add. |
| y | double | The amount of Y velocity to add. |
| z | double | The amount of Z velocity to add. |


:::

:::group{name=applyEntityCollision}

Applies entity collision between this Entity and the other Entity, pushing them away from each other.

Return Type: void

```zenscript
// MCEntity.applyEntityCollision(other as MCEntity) as void

myMCEntity.applyEntityCollision(entity);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MCEntity](/vanilla/api/entity/MCEntity) | The Entity to collide with. |


:::

:::group{name=canSwim}

Checks if this Entity can swim.

Returns: True if this Entity can swim. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.canSwim() as boolean

myMCEntity.canSwim();
```

:::

:::group{name=changeDimension}

Teleports this Entity to the given world.

Return Type: void

```zenscript
// MCEntity.changeDimension(world as MCServerWorld) as void

myMCEntity.changeDimension(world);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCServerWorld](/vanilla/api/world/MCServerWorld) | The new world for the Entity. |


:::

:::group{name=dismount}

Return Type: void

```zenscript
// MCEntity.dismount() as void

myMCEntity.dismount();
```

:::

:::group{name=extinguish}

Extinguishes the Entity if it is on fire.

Return Type: void

```zenscript
// MCEntity.extinguish() as void

myMCEntity.extinguish();
```

:::

:::group{name=forceFireTicks}

Sets the Entity on fire for the given amount of **ticks**.

 This method can be used to override how long the Entity is on fire for.

Return Type: void

```zenscript
// MCEntity.forceFireTicks(ticks as int) as void

myMCEntity.forceFireTicks(25);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ticks | int | The amount of ticks the Entity should burn for. |


:::

:::group{name=forceSetPosition}

Forcefully sets this Entity to the new position.

Return Type: void

```zenscript
// MCEntity.forceSetPosition(x as double, y as double, z as double) as void

myMCEntity.forceSetPosition(5, 2, 9);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | The new X value. |
| y | double | The new Y value. |
| z | double | The new Z value. |


:::

:::group{name=getAir}

Gets the air value for the Entity.
 The air value is used to determine when the Entity will start drowning when swimming.

Returns: The air value of the Entity.  
Return Type: int

```zenscript
// MCEntity.getAir() as int

myMCEntity.getAir();
```

:::

:::group{name=getBrightness}

Gets how bright this Entity is.

Returns: How bright the Entity is.  
Return Type: float

```zenscript
// MCEntity.getBrightness() as float

myMCEntity.getBrightness();
```

:::

:::group{name=getData}

Gets the NBT data of this Entity.

Returns: The NBT data of this Entity.  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// MCEntity.getData() as MapData

myMCEntity.getData();
```

:::

:::group{name=getDistance}

Gets the distance between this Entity and the given Entity.

Returns: The distance between this Entity and the other Entity.  
Return Type: float

```zenscript
// MCEntity.getDistance(other as MCEntity) as float

myMCEntity.getDistance(entity);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MCEntity](/vanilla/api/entity/MCEntity) | The Entity to get the distance to. |


:::

:::group{name=getDistanceSq}

Gets the squared distance from this Entity to the given Entity.

Returns: The squared distance between this Entity and the other Entity.  
Return Type: double

```zenscript
// MCEntity.getDistanceSq(other as MCEntity) as double

myMCEntity.getDistanceSq(entity);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MCEntity](/vanilla/api/entity/MCEntity) | The other Entity to check the squared distance to. |


:::

:::group{name=getDistanceSq}

Gets the squared distance from this Entity's position to the given position.

Returns: The squared distance from this Entity to the given position.  
Return Type: double

```zenscript
// MCEntity.getDistanceSq(x as double, y as double, z as double) as double

myMCEntity.getDistanceSq(5, 6, 3);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | The X value of the position to check against. |
| y | double | The Y value of the position to check against. |
| z | double | The Z value of the position to check against. |


:::

:::group{name=getEntityId}

Gets this Entity's id that can be used to reference this Entity.

Returns: The id of this Entity.  
Return Type: int

```zenscript
// MCEntity.getEntityId() as int

myMCEntity.getEntityId();
```

:::

:::group{name=getFacingDirections}

Gets which directions the Entity is currently facing.

Returns: An array of direction that the Entity is currently facing  
Return Type: [Direction](/vanilla/api/util/Direction)[]

```zenscript
// MCEntity.getFacingDirections() as Direction[]

myMCEntity.getFacingDirections();
```

:::

:::group{name=getFireTimer}

Gets the amount of ticks the Entity will be on fire for.

Returns: The amount of ticks the Entity will be on fire for.  
Return Type: int

```zenscript
// MCEntity.getFireTimer() as int

myMCEntity.getFireTimer();
```

:::

:::group{name=getMaxInPortalTime}

Gets the maximum amount of time the Entity needs to be in the portal before they are teleported.

Returns: The amount of time required for the Entity to be in the nether portal before being teleported.  
Return Type: int

```zenscript
// MCEntity.getMaxInPortalTime() as int

myMCEntity.getMaxInPortalTime();
```

:::

:::group{name=getName}

Gets the name of the Entity.

Returns: The name of the Entity.  
Return Type: string

```zenscript
// MCEntity.getName() as string

myMCEntity.getName();
```

:::

:::group{name=getPersistentData}

Gets the persisted NBT tag.

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// MCEntity.getPersistentData() as MapData

myMCEntity.getPersistentData();
```

:::

:::group{name=getPosition}

Gets this Entity's position in the world.

Returns: This Entity's position in the world.  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// MCEntity.getPosition() as BlockPos

myMCEntity.getPosition();
```

:::

:::group{name=getPositionVec}

Return Type: [MCVector3d](/vanilla/api/util/MCVector3d)

```zenscript
// MCEntity.getPositionVec() as MCVector3d

myMCEntity.getPositionVec();
```

:::

:::group{name=getRotationPitch}

Return Type: float

```zenscript
// MCEntity.getRotationPitch() as float

myMCEntity.getRotationPitch();
```

:::

:::group{name=getRotationYaw}

Return Type: float

```zenscript
// MCEntity.getRotationYaw() as float

myMCEntity.getRotationYaw();
```

:::

:::group{name=getTags}

Gets all the tags that are attached to the entity.

 These are **not** tags like MCTag<EntityType>, these are tags that are added by the /tag command.

 You can read more about how they can be used here:
 https://minecraft.wiki/w/Commands/tag

Returns: A set of all the Tags that an Entity has.  
Return Type: Set&lt;string&gt;

```zenscript
// MCEntity.getTags() as Set<string>

myMCEntity.getTags();
```

:::

:::group{name=getType}

Gets this Entity's type.

Returns: The type of this Entity.  
Return Type: [MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
// MCEntity.getType() as MCEntityType

myMCEntity.getType();
```

:::

:::group{name=getUUID}

Gets the UUID of this Entity.

Returns: The UUID of this Entity.  
Return Type: string

```zenscript
// MCEntity.getUUID() as string

myMCEntity.getUUID();
```

:::

:::group{name=getWorld}

Gets the World that this Entity is in.

Returns: The World this Entity is in.  
Return Type: [MCWorld](/vanilla/api/world/MCWorld)

```zenscript
// MCEntity.getWorld() as MCWorld

myMCEntity.getWorld();
```

:::

:::group{name=hasNoGravity}

Checks if this Entity has no gravity.

Returns: True if this Entity does not have gravity. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.hasNoGravity() as boolean

myMCEntity.hasNoGravity();
```

:::

:::group{name=isEntityInRange}

Checks if this Entity is in the given range (distance) of the other Entity.

Returns: True if this Entity is in range. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isEntityInRange(entity as MCEntity, distance as double) as boolean

myMCEntity.isEntityInRange(entity, 2.5);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| entity | [MCEntity](/vanilla/api/entity/MCEntity) | The Entity to check if it is in range. |
| distance | double | The distance to check for. |


:::

:::group{name=isImmuneToFire}

Checks if this Entity is immune to fire.

Returns: True if this Entity is immune to fire. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isImmuneToFire() as boolean

myMCEntity.isImmuneToFire();
```

:::

:::group{name=isInLava}

Checks if this Entity is in lava or not.

Returns: True if the this Entity is in lava.  
Return Type: boolean

```zenscript
// MCEntity.isInLava() as boolean

myMCEntity.isInLava();
```

:::

:::group{name=isInWater}

Checks if this Entity is in water.

Returns: True if this Entity is in water. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isInWater() as boolean

myMCEntity.isInWater();
```

:::

:::group{name=isInWaterOrBubbleColumn}

Checks if this Entity is in water or a bubble column.

Returns: True if this entity is in water or a bubble column. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isInWaterOrBubbleColumn() as boolean

myMCEntity.isInWaterOrBubbleColumn();
```

:::

:::group{name=isInWaterRainOrBubbleColumn}

Checks if this Entity is in rain or a bubble column.

Returns: True if this entity is in rain or a bubble column. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isInWaterRainOrBubbleColumn() as boolean

myMCEntity.isInWaterRainOrBubbleColumn();
```

:::

:::group{name=isOffsetPositionInLiquid}

Checks if the offset position from the Entity's current position is inside of a liquid.

Returns: True if the offset position is in a liquid. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isOffsetPositionInLiquid(x as double, y as double, z as double) as boolean

myMCEntity.isOffsetPositionInLiquid(5, 4, 5);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | The X offset. |
| y | double | The Y offset. |
| z | double | The Z offset. |


:::

:::group{name=isOnGround}

Checks whether the Entity is on the ground or not.

Returns: True if the Entity is on the ground. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isOnGround() as boolean

myMCEntity.isOnGround();
```

:::

:::group{name=isSilent}

Checks if this Entity is silent.

 Silent Entities do not play sounds.

Returns: True if this Entity is silent. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isSilent() as boolean

myMCEntity.isSilent();
```

:::

:::group{name=isSneaking}

Checks if this Entity is sneaking or not.

Returns: True if sneaking. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isSneaking() as boolean

myMCEntity.isSneaking();
```

:::

:::group{name=isSpectator}

Checks if this Entity is in spectator mode.

Returns: True if this Entity is in spectator mode. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isSpectator() as boolean

myMCEntity.isSpectator();
```

:::

:::group{name=isWet}

Checks if this Entity is wet.

Returns: True if this Entity is wet. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.isWet() as boolean

myMCEntity.isWet();
```

:::

:::group{name=moveForced}

Forcefully moves this Entity to the new position.

Return Type: void

```zenscript
// MCEntity.moveForced(x as double, y as double, z as double) as void

myMCEntity.moveForced(5, 2, 9);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | The new X value. |
| y | double | The new Y value. |
| z | double | The new Z value. |


:::

:::group{name=onCollideWithPlayer}

Triggers the collide effect between this Entity and the player.

 Some examples of collide effects are:
 Puffer fish damaging and applying poison.
 Experience orbs being collected.

Return Type: void

```zenscript
// MCEntity.onCollideWithPlayer(playerEntity as MCPlayerEntity) as void

myMCEntity.onCollideWithPlayer(player);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| playerEntity | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | The player to collide with. |


:::

:::group{name=onKillCommand}

Can be used to simulate the `/kill` command being used on the Entity.

Return Type: void

```zenscript
// MCEntity.onKillCommand() as void

myMCEntity.onKillCommand();
```

:::

:::group{name=onLivingFall}

Can be used to simulate the Entity falling the given distance with the given damage multiplier.

Returns: True if the Entity took damage. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.onLivingFall(distance as float, damageMultiplier as float) as boolean

myMCEntity.onLivingFall(5, 5);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| distance | float | The distance the Entity has fallen. |
| damageMultiplier | float | The damage multiplier. |


:::

:::group{name=remove}

Removes the entity from the world.

Return Type: void

```zenscript
// MCEntity.remove() as void

myMCEntity.remove();
```

:::

:::group{name=removePassengers}

Return Type: void

```zenscript
// MCEntity.removePassengers() as void

myMCEntity.removePassengers();
```

:::

:::group{name=removeTag}

Removes a tag from the Entity.

 These are **not** tags like MCTag<EntityType>, these are tags that are added by the /tag command.

 You can read more about how they can be used here:
 https://minecraft.wiki/w/Commands/tag

Returns: True if the Entity had the tag and it was removed. False otherwise.  
Return Type: boolean

```zenscript
// MCEntity.removeTag(tag as string) as boolean

myMCEntity.removeTag("foundMesa");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tag | string | The name of the tag to remove. |


:::

:::group{name=setAir}

Sets the air value for the Entity

Return Type: void

```zenscript
// MCEntity.setAir(air as int) as void

myMCEntity.setAir(20);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| air | int | The new air value. |


:::

:::group{name=setEntityId}

This method is marked for removal next breaking change.

 It sets the ID of the entity, which is only used in networking code and should never have to be called by mods or scripts.

Return Type: void

```zenscript
// MCEntity.setEntityId(id as int) as void

myMCEntity.setEntityId(0);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| id | int | 0 |


:::

:::group{name=setFire}

Sets the Entity on fire for the given amount of **seconds**.

 This does not take ticks, it only takes full seconds, and you cannot lower the amount of fire ticks the entity has.

Return Type: void

```zenscript
// MCEntity.setFire(seconds as int) as void

myMCEntity.setFire(5);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| seconds | int | The amount of seconds the Entity should be on fire for. |


:::

:::group{name=setLocationAndAngles}

Sets the location and looking angles of the entity.

Return Type: void

```zenscript
// MCEntity.setLocationAndAngles(x as double, y as double, z as double, yaw as float, pitch as float) as void

myMCEntity.setLocationAndAngles(5, 1, 9, 90, 120);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | The new x position. |
| y | double | The new y position. |
| z | double | The new z position. |
| yaw | float | The new yaw value. |
| pitch | float | The new pitch value. |


:::

:::group{name=setNoGravity}

Sets this Entity to have no gravity.

Return Type: void

```zenscript
// MCEntity.setNoGravity(noGravity as boolean) as void

myMCEntity.setNoGravity(true);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| noGravity | boolean | The new gravity value. |


:::

:::group{name=setOnGround}

Sets if the Entity should be considered on the ground or not.

Return Type: void

```zenscript
MCEntity.setOnGround(grounded as boolean) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| grounded | boolean | If the Entity is on the ground or not. |


:::

:::group{name=setPosition}

Sets the position of this Entity.

Return Type: void

```zenscript
// MCEntity.setPosition(x as double, y as double, z as double) as void

myMCEntity.setPosition(5, 2, 59);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | The new X position of the Entity. |
| y | double | The new Y position of the Entity. |
| z | double | The new Z position of the Entity. |


:::

:::group{name=setPositionAndUpdate}

Return Type: void

```zenscript
MCEntity.setPositionAndUpdate(x as double, y as double, z as double) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | No Description Provided |
| y | double | No Description Provided |
| z | double | No Description Provided |


:::

:::group{name=setRotationPitch}

Return Type: void

```zenscript
MCEntity.setRotationPitch(newPitch as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| newPitch | float | No Description Provided |


:::

:::group{name=setRotationYaw}

Return Type: void

```zenscript
MCEntity.setRotationYaw(newYaw as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| newYaw | float | No Description Provided |


:::

:::group{name=setSilent}

Sets if this Entity is silent or not.

 silent Entities do not play sounds.

Return Type: void

```zenscript
// MCEntity.setSilent(isSilent as boolean) as void

myMCEntity.setSilent(true);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| isSilent | boolean | If the Entity should be silent or not. |


:::

:::group{name=setSneaking}

Sets the sneaking value of this Entity.

Return Type: void

```zenscript
// MCEntity.setSneaking(value as boolean) as void

myMCEntity.setSneaking(true);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | boolean | The new sneaking value |


:::

:::group{name=startRiding}

Return Type: boolean

```zenscript
MCEntity.startRiding(other as MCEntity, forced as boolean) as boolean
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| other | [MCEntity](/vanilla/api/entity/MCEntity) | No Description Provided | false |  |
| forced | boolean | No Description Provided | true | false |


:::

:::group{name=teleportKeepLoaded}

Teleports the entity, forcing the destination to stay loaded for a short time

Return Type: void

```zenscript
// MCEntity.teleportKeepLoaded(x as double, y as double, z as double) as void

myMCEntity.teleportKeepLoaded(20, 40, 60);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | No Description Provided |
| y | double | No Description Provided |
| z | double | No Description Provided |


:::

:::group{name=updateData}

Updates the NBT data of this Entity.

Return Type: void

```zenscript
// MCEntity.updateData(data as MapData) as void

myMCEntity.updateData({key: "value"});
```

| Parameter | Type | Description |
|-----------|------|-------------|
| data | [MapData](/vanilla/api/data/MapData) | The new Data for this Entity |


:::

:::group{name=updatePersistentData}

Updates the persisted data.

Return Type: void

```zenscript
MCEntity.updatePersistentData(data as MapData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| data | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| air | int | true | true | Gets the air value for the Entity. <br />  The air value is used to determine when the Entity will start drowning when swimming. |
| canSwim | boolean | true | false | Checks if this Entity can swim. |
| data | [MapData](/vanilla/api/data/MapData) | true | false | Gets the NBT data of this Entity. |
| facingDirections | [Direction](/vanilla/api/util/Direction)[] | true | false | Gets which directions the Entity is currently facing. |
| id | int | true | false | Gets this Entity's id that can be used to reference this Entity. |
| inLava | boolean | true | false | Checks if this Entity is in lava or not. |
| inWater | boolean | true | false | Checks if this Entity is in water. |
| isWet | boolean | true | false | Checks if this Entity is wet. |
| name | string | true | false | Gets the name of the Entity. |
| onGround | [MCEntity](/vanilla/api/entity/MCEntity) | true | true | Sets if the Entity should be considered on the ground or not. |
| persistedData | [MapData](/vanilla/api/data/MapData) | true | false | Gets the persisted NBT tag. |
| position | [BlockPos](/vanilla/api/util/BlockPos) | true | false | Gets this Entity's position in the world. |
| positionVec | [MCVector3d](/vanilla/api/util/MCVector3d) | true | false | No Description Provided |
| rotationPitch | float | true | true | No Description Provided |
| rotationYaw | float | true | true | No Description Provided |
| silent | boolean | true | true | Checks if this Entity is silent. <br />  <br />  Silent Entities do not play sounds. |
| sneaking | boolean | true | true | Checks if this Entity is sneaking or not. |
| spectator | boolean | true | false | Checks if this Entity is in spectator mode. |
| type | [MCEntityType](/vanilla/api/entities/MCEntityType) | true | false | Gets this Entity's type. |
| uuid | string | true | false | Gets the UUID of this Entity. |
| world | [MCWorld](/vanilla/api/world/MCWorld) | true | false | Gets the World that this Entity is in. |

