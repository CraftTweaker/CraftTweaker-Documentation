# MCBlockState

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlockState;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [MCBlock](/vanilla/api/blocks/MCBlock) | true |
| string | false |

## Methods

:::group{name=canHarvestBlock}

Checks whether the player can harvest the BlockState.

Return Type: boolean

```zenscript
// MCBlockState.canHarvestBlock(world as MCWorld, pos as BlockPos, player as MCPlayerEntity) as boolean

myMCBlockState.canHarvestBlock(world, new BlockPos(1,2,3), player);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. |
| player | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | The player that is trying to harvest the block. |


:::

:::group{name=canProvidePower}

Checks whether this BlockState can provide Redstone Power

Return Type: boolean

```zenscript
// MCBlockState.canProvidePower() as boolean

myMCBlockState.canProvidePower();
```

:::

:::group{name=getAllowedValuesForProperty}

Gets a list of allowed values for a given property.

Return Type: stdlib.List&lt;string&gt;

```zenscript
// MCBlockState.getAllowedValuesForProperty(name as string) as stdlib.List<string>

myMCBlockState.getAllowedValuesForProperty("snowy");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the property to find the allowed values for. |


:::

:::group{name=getCommandString}

Gets the blockstate bracket handler syntax for this BlockState.

 E.G.
 <code>
 <blockstate:minecraft:grass:snowy=true>
 </code>

Return Type: string

```zenscript
// MCBlockState.getCommandString() as string

myMCBlockState.getCommandString();
```

:::

:::group{name=getHarvestLevel}

Gets the harvest level of this BlockState.

Return Type: int

```zenscript
// MCBlockState.getHarvestLevel() as int

myMCBlockState.getHarvestLevel();
```

:::

:::group{name=getHarvestTool}

Gets the [ToolType](/vanilla/api/tool/ToolType) of this BlockState.

Return Type: [ToolType](/vanilla/api/tool/ToolType)

```zenscript
// MCBlockState.getHarvestTool() as ToolType

myMCBlockState.getHarvestTool();
```

:::

:::group{name=getLightLevel}

Gets the light level of this BlockState

Return Type: int

```zenscript
// MCBlockState.getLightLevel() as int

myMCBlockState.getLightLevel();
```

:::

:::group{name=getLightValue}

Gets the light value of the BlockState at the given position.

Return Type: int

```zenscript
// MCBlockState.getLightValue(world as MCWorld, pos as BlockPos) as int

myMCBlockState.getLightValue(world, new BlockPos(1,2,3));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world Object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check the light value of. |


:::

:::group{name=getProperties}

Gets the properties of this BlockState.

Return Type: string[string]

```zenscript
// MCBlockState.getProperties() as string[string]

myMCBlockState.getProperties();
```

:::

:::group{name=getPropertyNames}

Gets the names of the properties of this BlockState.

Return Type: stdlib.List&lt;string&gt;

```zenscript
// MCBlockState.getPropertyNames() as stdlib.List<string>

myMCBlockState.getPropertyNames();
```

:::

:::group{name=getPropertyValue}

Gets the value of the given property.

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

Return Type: float

```zenscript
// MCBlockState.getSlipperiness(world as MCWorld, pos as BlockPos, entity as MCEntity) as float

myMCBlockState.getSlipperiness(world, new Blockpos(0,0,0);, entity);
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. | false |  |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. | false |  |
| entity | [MCEntity](/vanilla/api/entity/MCEntity) | The entity to work with. | true |  |

:::

:::group{name=hasProperty}

Checks whether this BlockState has the given property.

Return Type: boolean

```zenscript
// MCBlockState.hasProperty(name as string) as boolean

myMCBlockState.hasProperty("snowy");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | the name of the property to check. |


:::

:::group{name=hasTileEntity}

Checks whether this BlockState has a [MCTileEntity](/vanilla/api/tileentity/MCTileEntity).

Return Type: boolean

```zenscript
// MCBlockState.hasTileEntity() as boolean

myMCBlockState.hasTileEntity();
```

:::

:::group{name=isBed}

Determines if the block can be used to sleep.

Return Type: boolean

```zenscript
// MCBlockState.isBed(world as MCWorld, pos as BlockPos, sleeper as MCLivingEntity) as boolean

myMCBlockState.isBed(world, new BlockPos(1,2,3), entity);
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. | false |  |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. | false |  |
| sleeper | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | The Living Entity that is trying to sleep. | true |  |

:::

:::group{name=isLadder}

Checks if a Living Entity can use this block to climb like a ladder.

Return Type: boolean

```zenscript
// MCBlockState.isLadder(world as MCWorld, pos as BlockPos, entity as MCLivingEntity) as boolean

myMCBlockState.isLadder(world, new BlockPos(1,2,3), entity);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A world object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. |
| entity | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | The entity that wants to climb the block. |


:::

:::group{name=isSolid}

Checks whether this BlockState is solid.

Return Type: boolean

```zenscript
// MCBlockState.isSolid() as boolean

myMCBlockState.isSolid();
```

:::

:::group{name=isSticky}

Checks if this BlockState is sticky.

 This is used to determine if the block should pull or push adjacent blocks when pushed / pulled by a piston.
 For example, Slime Blocks are sticky blocks.

Return Type: boolean

```zenscript
// MCBlockState.isSticky() as boolean

myMCBlockState.isSticky();
```

:::

:::group{name=ticksRandomly}

Checks whether this BlockState ticks randomly.

Return Type: boolean

```zenscript
// MCBlockState.ticksRandomly() as boolean

myMCBlockState.ticksRandomly();
```

:::

:::group{name=withProperty}

Sets a block property based on it's name.

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
// MCBlockState.withProperty(name as string, value as string) as MCBlockState

myMCBlockState.withProperty("snowy", "true");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the property to set. |
| value | string | The new value of the property. |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| block | [MCBlock](/vanilla/api/blocks/MCBlock) | true | false | Gets the base [MCBlock](/vanilla/api/blocks/MCBlock) of this BlockState. <br />  <br />  The [MCBlock](/vanilla/api/blocks/MCBlock) will not contain any of the properties of this BlockState. |
| canProvidePower | boolean | true | false | Checks whether this BlockState can provide Redstone Power |
| commandString | string | true | false | Gets the blockstate bracket handler syntax for this BlockState. <br />  <br />  E.G. <br />  <code> <br />  <blockstate:minecraft:grass:snowy=true> <br />  </code> |
| harvestLevel | int | true | false | Gets the harvest level of this BlockState. |
| harvestTool | [ToolType](/vanilla/api/tool/ToolType) | true | false | Gets the [ToolType](/vanilla/api/tool/ToolType) of this BlockState. |
| hasTileEntity | boolean | true | false | Checks whether this BlockState has a [MCTileEntity](/vanilla/api/tileentity/MCTileEntity). |
| isSolid | boolean | true | false | Checks whether this BlockState is solid. |
| isSticky | boolean | true | false | Checks if this BlockState is sticky. <br />  <br />  This is used to determine if the block should pull or push adjacent blocks when pushed / pulled by a piston. <br />  For example, Slime Blocks are sticky blocks. |
| lightLevel | int | true | false | Gets the light level of this BlockState |
| propertyNames | stdlib.List&lt;string&gt; | true | false | Gets the names of the properties of this BlockState. |
| ticksRandomly | boolean | true | false | Checks whether this BlockState ticks randomly. |

