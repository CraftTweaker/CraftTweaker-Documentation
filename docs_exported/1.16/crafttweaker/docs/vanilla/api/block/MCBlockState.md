# MCBlockState



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlockState;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [MCBlock](/vanilla/api/block/MCBlock) | true |
| string | false |

## Methods

:::group{name=canBeReplacedByLeaves}

Checks if this BlockState can be replaced by leaves in tree growth.

Return Type: boolean

```zenscript
// MCBlockState.canBeReplacedByLeaves(world as MCWorld, pos as BlockPos) as boolean

<blockstate:minecraft:grass>.canBeReplacedByLeaves(world, new BlockPos(1, 2, 3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState |


:::

:::group{name=canBeReplacedByLogs}

Checks if this BlockState can be replaced by logs in tree growth.

Return Type: boolean

```zenscript
// MCBlockState.canBeReplacedByLogs(world as MCWorld, pos as BlockPos) as boolean

<blockstate:minecraft:grass>.canBeReplacedByLogs(world, new BlockPos(1, 2, 3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState |


:::

:::group{name=canConnectRedstone}

Determines if Redstone can connect to this BlockState at the given position and (optional) side.

Returns: True if Redstone can connect to this BlockState. False otherwise.  
Return Type: boolean

```zenscript
MCBlockState.canConnectRedstone(world as MCWorld, pos as BlockPos, side as Direction) as boolean
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. | false |  |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. | false |  |
| side | [Direction](/vanilla/api/util/Direction) | The side to check for. | true |  |


:::

:::group{name=canCreatureSpawn}

Checks if a specific entity type can spawn on this BlockState at the position in the world.

Returns: True if the entity type can spawn. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.canCreatureSpawn(world as MCWorld, pos as BlockPos, type as PlacementType, entityType as MCEntityType) as boolean

<blockstate:minecraft:grass>.canCreatureSpawn(world, new BlockPos(1, 2, 3), PlacementType.IN_WATER, <entitytype:minecraft:pig>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position in the world. |
| type | [PlacementType](/vanilla/api/entity/PlacementType) | The PlaceMentType to check for. |
| entityType | [MCEntityType](/vanilla/api/entities/MCEntityType) | The EntityType to check for. |


:::

:::group{name=canDropFromExplosion}

Checks if the BlockState will drop from the given explosion at the given position.

Returns: True if this BlockState will drop. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.canDropFromExplosion(world as MCWorld, pos as BlockPos, explosion as Explosion) as boolean

<blockstate:minecraft:grass>.canDropFromExplosion(world, new BlockPos(1, 2, 3), Explosiotn.create(world, 1, 2, 3, 5, true, ExplosionMode.BREAK));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| explosion | [Explosion](/vanilla/api/world/Explosion) | The Explosion to check against. |


:::

:::group{name=canEntityDestroy}

Determines if this BlockState can be destroyed by the Entity at the specific position.

Returns: True if the entity can destroy the BlockState. False otherwise.  
Return Type: boolean

```zenscript
MCBlockState.canEntityDestroy(world as MCWorld, pos as BlockPos, entity as MCEntity) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| entity | [MCEntity](/vanilla/api/entity/MCEntity) | The Entity that is trying to destroy the BlockState. |


:::

:::group{name=canHarvestBlock}

Checks whether the player can harvest the BlockState.

Returns: True if the player can harvest the block. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.canHarvestBlock(world as MCWorld, pos as BlockPos, player as MCPlayerEntity) as boolean

<blockstate:minecraft:grass>.canHarvestBlock(world, new BlockPos(1, 2, 3), player);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. |
| player | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | The player that is trying to harvest the block. |


:::

:::group{name=canProvidePower}

Checks whether this BlockState can provide Redstone Power

Returns: True if this BlockState can provide Redstone Power. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.canProvidePower() as boolean

<blockstate:minecraft:grass>.canProvidePower();
```

:::

:::group{name=canStickTo}

Checks if this BlockState can stick to the other BlockState when pushed by a piston.

Returns: True if the BlockStatess stick when pushed by a piston. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.canStickTo(other as MCBlockState) as boolean

<blockstate:minecraft:grass>.canStickTo(<blockstate:minecraft:grass>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MCBlockState](/vanilla/api/block/MCBlockState) | The BlockState check if it will stick against. |


:::

:::group{name=getAllowedValuesForProperty}

Gets a list of allowed values for a given property.

Returns: a List of allowed values.  
Return Type: stdlib.List&lt;string&gt;

```zenscript
// MCBlockState.getAllowedValuesForProperty(name as string) as stdlib.List<string>

<blockstate:minecraft:grass>.getAllowedValuesForProperty("snowy");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the property to find the allowed values for. |


:::

:::group{name=getBedDirection}

Gets the direction of the bed. This can be called on any BlockState that has the `HORIZONTAL_FACING` property, not just beds.

 The game ***WILL*** crash if you call this on a blockstate that doesn't have the property, so make sure
 you check it before calling it!

Return Type: void

```zenscript
// MCBlockState.getBedDirection(world as MCWorld, pos as BlockPos) as void

<blockstate:minecraft:grass>.getBedDirection(world, new BlockPos(1, 2, 3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState |


:::

:::group{name=getCommandString}

Gets the blockstate bracket handler syntax for this BlockState.

 E.G.
 <code>
 <blockstate:minecraft:grass:snowy=true>
 </code>

Returns: The blockstate bracket handler syntax for this BlockState.  
Return Type: string

```zenscript
// MCBlockState.getCommandString() as string

<blockstate:minecraft:grass>.getCommandString();
```

:::

:::group{name=getExpDrop}

Returns how much Experience this BlockState will drop when broken.

Returns: The amount of Experience that will drop when this BlockState is broken.  
Return Type: int

```zenscript
// MCBlockState.getExpDrop(world as MCWorld, pos as BlockPos, fortune as int, silktouch as int) as int

<blockstate:minecraft:grass>.getExpDrop(world, new BlockPos(1, 2, 3), 1, 0);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| fortune | int | The fortune level of the tool being used to break the block. |
| silktouch | int | The silktouch level of the tool being used to break the block. This will most likely either be 0 or 1. |


:::

:::group{name=getExplosionResistance}

Gets the explosion resistance of the BlockState in the world for the given Explosion

Returns: The amount of the explosion that is absorbed.  
Return Type: float

```zenscript
// MCBlockState.getExplosionResistance(world as MCWorld, pos as BlockPos, explosion as Explosion) as float

<blockstate:minecraft:grass>.getExplosionResistance(world, new BlockPos(1, 2, 3), Explosiotn.create(world, 1, 2, 3, 5, true, ExplosionMode.BREAK));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState |
| explosion | [Explosion](/vanilla/api/world/Explosion) | The explosion object to check against. |


:::

:::group{name=getFireSpreadSpeed}

Determines how fast fire spreads from this block.
 The higher the number the faster that fire will spread around the BlockState.

Returns: The spread speed of the BlockState.  
Return Type: int

```zenscript
MCBlockState.getFireSpreadSpeed(world as MCWorld, pos as BlockPos, face as Direction) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| face | [Direction](/vanilla/api/util/Direction) | The face that the fire is coming from. |


:::

:::group{name=getFlammability}

Gets the chance that fire will spread and consume this BlockState.

 Values range from 0 - 300.

 A value of 300 is a 100% chance, and 0 is a 0% chance.

Returns: A number between 0 and 300 dictating how flammable this BlockState is.  
Return Type: int

```zenscript
// MCBlockState.getFlammability(world as MCWorld, pos as BlockPos, face as Direction) as int

<blockstate:minecraft:grass>.getFlammability(world, new BlockPos(1, 2, 3), Direction.south);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| face | [Direction](/vanilla/api/util/Direction) | The face that the fire is coming from. |


:::

:::group{name=getHardness}

Gets the hardness of this BlockState.

Returns: The hardness of this BlockState.  
Return Type: float

```zenscript
// MCBlockState.getHardness() as float

<blockstate:minecraft:grass>.getHardness();
```

:::

:::group{name=getHarvestLevel}

Gets the harvest level of this BlockState.

Returns: The harvest level of this BlockState.  
Return Type: int

```zenscript
// MCBlockState.getHarvestLevel() as int

<blockstate:minecraft:grass>.getHarvestLevel();
```

:::

:::group{name=getHarvestTool}

Gets the [ToolType](/vanilla/api/tool/ToolType) of this BlockState.

Returns: The [ToolType](/vanilla/api/tool/ToolType) of this BlockState.  
Return Type: [ToolType](/vanilla/api/tool/ToolType)?

```zenscript
// MCBlockState.getHarvestTool() as ToolType?

<blockstate:minecraft:grass>.getHarvestTool();
```

:::

:::group{name=getLightLevel}

Gets the light level of this BlockState

Returns: The light level of this BlockState.  
Return Type: int

```zenscript
// MCBlockState.getLightLevel() as int

<blockstate:minecraft:grass>.getLightLevel();
```

:::

:::group{name=getLightValue}

Gets the light value of the BlockState at the given position.

Returns: The light value of the BlockState at the position.  
Return Type: int

```zenscript
// MCBlockState.getLightValue(world as MCWorld, pos as BlockPos) as int

<blockstate:minecraft:grass>.getLightValue(world, new BlockPos(1, 2, 3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world Object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check the light value of. |


:::

:::group{name=getProperties}

Gets the properties of this BlockState.

Returns: a Map of the properties on this BlockState.  
Return Type: string[string]

```zenscript
// MCBlockState.getProperties() as string[string]

<blockstate:minecraft:grass>.getProperties();
```

:::

:::group{name=getPropertyNames}

Gets the names of the properties of this BlockState.

Returns: the List of the names of the BlockStates's properties.  
Return Type: stdlib.List&lt;string&gt;

```zenscript
// MCBlockState.getPropertyNames() as stdlib.List<string>

<blockstate:minecraft:grass>.getPropertyNames();
```

:::

:::group{name=getPropertyValue}

Gets the value of the given property.

Returns: The value of the property on this BlockState.  
Return Type: string

```zenscript
MCBlockState.getPropertyValue(name as string) as string
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | "snowy" |


:::

:::group{name=getSlipperiness}

Gets the slipperiness of the BlockState at the given location for the given entity (if one is given)

Returns: The slipperiness of the BlockState at the given BlockPos for the Entity.  
Return Type: float

```zenscript
// MCBlockState.getSlipperiness(world as MCWorld, pos as BlockPos, entity as MCEntity) as float

<blockstate:minecraft:grass>.getSlipperiness(world, new Blockpos(0,0,0);, entity);
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. | false |  |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. | false |  |
| entity | [MCEntity](/vanilla/api/entity/MCEntity) | The entity to work with. | true |  |


:::

:::group{name=hasProperty}

Checks whether this BlockState has the given property.

Returns: True if this BlockState has the property. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.hasProperty(name as string) as boolean

<blockstate:minecraft:grass>.hasProperty("snowy");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | the name of the property to check. |


:::

:::group{name=hasTileEntity}

Checks whether this BlockState has a [MCTileEntity](/vanilla/api/tileentity/MCTileEntity).

Returns: True if this BlockState has a [MCTileEntity](/vanilla/api/tileentity/MCTileEntity). False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.hasTileEntity() as boolean

<blockstate:minecraft:grass>.hasTileEntity();
```

:::

:::group{name=isBed}

Determines if the block can be used to sleep.

Returns: True if the block allows sleeping.  
Return Type: boolean

```zenscript
// MCBlockState.isBed(world as MCWorld, pos as BlockPos, sleeper as MCLivingEntity) as boolean

<blockstate:minecraft:grass>.isBed(world, new BlockPos(1, 2, 3), entity);
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. | false |  |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. | false |  |
| sleeper | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | The Living Entity that is trying to sleep. | true |  |


:::

:::group{name=isBurning}

Checks if the BlockState is burning at the given position.

Returns: True if the BlockState is burning a the given position.  
Return Type: boolean

```zenscript
// MCBlockState.isBurning(world as MCWorld, pos as BlockPos) as boolean

<blockstate:minecraft:grass>.isBurning(world, new BlockPos(1, 2, 3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |


:::

:::group{name=isConduitFrame}

Determines if this BlockState can be used as the frame of a Conduit.

Returns: True if this BlockState can be used as a Conduit frame.  
Return Type: boolean

```zenscript
// MCBlockState.isConduitFrame(world as MCWorld, pos as BlockPos, conduitPosition as BlockPos) as boolean

<blockstate:minecraft:grass>.isConduitFrame(world, new BlockPos(1, 2, 3), new BlockPos(1, 5, 3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| conduitPosition | [BlockPos](/vanilla/api/util/BlockPos) | The Position of the Conduit. |


:::

:::group{name=isFertile}

Checks if the BlockState is "fertile" at the given position.

 This will only ever return `true` if the BlockState is in the `<tag:blocks:minecraft:farmland>` tag and if it has the `moisture` state.

 The game ***WILL*** crash if you call this on a blockstate that doesn't have the property, so make sure
 you check it before calling it!

Returns: True if the BlockState is Fertile. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isFertile(world as MCWorld, pos as BlockPos) as boolean

<blockstate:minecraft:grass>.isFertile(world, new BlockPos(1, 2, 3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState |


:::

:::group{name=isFireSource}

Checks if this BlockState is a fire source at the given position with the fire coming from the given direciton.

Returns: True if this BlockState is a fire source. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isFireSource(world as MCWorld, pos as BlockPos, side as Direction) as boolean

<blockstate:minecraft:grass>.isFireSource(world, new BlockPos(1, 2, 3), Direction.east);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| side | [Direction](/vanilla/api/util/Direction) | The face that the fire is coming form. |


:::

:::group{name=isFlammable}

Checks if this BlockState is flammable at the given position with the fire coming from the given direciton.

Returns: True if the BlockState if flammable. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isFlammable(world as MCWorld, pos as BlockPos, face as Direction) as boolean

<blockstate:minecraft:grass>.isFlammable(world, new BlockPos(1, 2, 3), Direction.east);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| face | [Direction](/vanilla/api/util/Direction) | The face that the fire is coming from. |


:::

:::group{name=isLadder}

Checks if a Living Entity can use this block to climb like a ladder.

Returns: True if the entity can climb the block. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isLadder(world as MCWorld, pos as BlockPos, entity as MCLivingEntity) as boolean

<blockstate:minecraft:grass>.isLadder(world, new BlockPos(1, 2, 3), entity);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. |
| entity | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | The entity that wants to climb the block. |


:::

:::group{name=isPortalFrame}

Determins if this BlockState can be used as the frame of a Nether portal.

Returns: True if this BlockState can be used as a Nether portal frame. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isPortalFrame(world as MCWorld, pos as BlockPos) as boolean

<blockstate:minecraft:grass>.isPortalFrame(world, new BlockPos(1, 2, 3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the Blockstate. |


:::

:::group{name=isScaffolding}

Checks if the entity should handle movement on this BlockState like it handles movement on scaffolding.

Returns: True if this BlockState should act like scaffolding. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isScaffolding(entity as MCLivingEntity) as boolean

<blockstate:minecraft:grass>.isScaffolding(entity);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| entity | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | The entity that is being checked against. |


:::

:::group{name=isSlime}

Checks if this BlockState is a Slime Block.

Returns: True if this BlockState is Slime. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isSlime() as boolean

<blockstate:minecraft:grass>.isSlime();
```

:::

:::group{name=isSolid}

Checks whether this BlockState is solid.

Returns: True if this BlockState is solid. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isSolid() as boolean

<blockstate:minecraft:grass>.isSolid();
```

:::

:::group{name=isSticky}

Checks if this BlockState is sticky.

 This is used to determine if the block should pull or push adjacent blocks when pushed / pulled by a piston.
 For example, Slime Blocks are sticky blocks.

Returns: True if this BlockState is Sticky. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.isSticky() as boolean

<blockstate:minecraft:grass>.isSticky();
```

:::

:::group{name=isToolEffective}

Checks if the given ToolType is effective against this BlockState.

Returns: True if the ToolType is effective. False otherwise.  
Return Type: boolean

```zenscript
MCBlockState.isToolEffective(tool as ToolType) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tool | [ToolType](/vanilla/api/tool/ToolType) | The ToolType to check for. |


:::

:::group{name=setBedOccupied}

Marks the block as "occupied", this is only supported on blocks that have the "occupied" BlockState property.

 The game ***WILL*** crash if you call this on a blockstate that doesn't have the property, so make sure
 you check it before calling it!

Return Type: void

```zenscript
// MCBlockState.setBedOccupied(world as MCWorld, pos as BlockPos, sleeper as MCLivingEntity, occupied as boolean) as void

<blockstate:minecraft:grass>.setBedOccupied(world, new BlockPos(1, 2, 3), livingEntity, true);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position of the BlockState. |
| sleeper | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | The LivingEntity that is occupying the bed. |
| occupied | boolean | If the bed is occupied or not. |


:::

:::group{name=setHardness}

Sets the hardness of this BlockState.

Return Type: void

```zenscript
// MCBlockState.setHardness(hardness as float) as void

<blockstate:minecraft:grass>.setHardness(2.4f);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| hardness | float | the new hardness of this BlockState |


:::

:::group{name=ticksRandomly}

Checks whether this BlockState ticks randomly.

Returns: True if this BlockState ticks randomly. False otherwise.  
Return Type: boolean

```zenscript
// MCBlockState.ticksRandomly() as boolean

<blockstate:minecraft:grass>.ticksRandomly();
```

:::

:::group{name=withProperty}

Sets a block property based on it's name.

Returns: This BlockState with the new property value.  
Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// MCBlockState.withProperty(name as string, value as string) as MCBlockState

<blockstate:minecraft:grass>.withProperty("snowy", "true");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the property to set. |
| value | string | The new value of the property. |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| block | [MCBlock](/vanilla/api/block/MCBlock) | true | false | Gets the base [MCBlock](/vanilla/api/block/MCBlock) of this BlockState. <br />  <br />  The [MCBlock](/vanilla/api/block/MCBlock) will not contain any of the properties of this BlockState. |
| canProvidePower | boolean | true | false | Checks whether this BlockState can provide Redstone Power |
| commandString | string | true | false | Gets the blockstate bracket handler syntax for this BlockState. <br />  <br />  E.G. <br />  <code> <br />  <blockstate:minecraft:grass:snowy=true> <br />  </code> |
| hardness | float | true | true | Gets the hardness of this BlockState. |
| harvestLevel | int | true | false | Gets the harvest level of this BlockState. |
| harvestTool | [ToolType](/vanilla/api/tool/ToolType)? | true | false | Gets the [ToolType](/vanilla/api/tool/ToolType) of this BlockState. |
| hasTileEntity | boolean | true | false | Checks whether this BlockState has a [MCTileEntity](/vanilla/api/tileentity/MCTileEntity). |
| isSlime | boolean | true | false | Checks if this BlockState is a Slime Block. |
| isSolid | boolean | true | false | Checks whether this BlockState is solid. |
| isSticky | boolean | true | false | Checks if this BlockState is sticky. <br />  <br />  This is used to determine if the block should pull or push adjacent blocks when pushed / pulled by a piston. <br />  For example, Slime Blocks are sticky blocks. |
| lightLevel | int | true | false | Gets the light level of this BlockState |
| propertyNames | stdlib.List&lt;string&gt; | true | false | Gets the names of the properties of this BlockState. |
| ticksRandomly | boolean | true | false | Checks whether this BlockState ticks randomly. |

