# Block

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.Block;
```


## Implemented Interfaces
Block implements the following interfaces. That means all methods defined in these interfaces are also available in Block

- [ItemLike](/vanilla/api/world/ItemLike)

## Casters

|                      Result Type                      | Is Implicit |
|-------------------------------------------------------|-------------|
| [BlockIngredient](/vanilla/api/block/BlockIngredient) | true        |
| [ItemDefinition](/vanilla/api/item/ItemDefinition)    | false       |
| string                                                | false       |

## Methods

:::group{name=asItem}

Gets the Item representation of this Block.

 ***NOTE:*** Not all Blocks have Items, for instance, a Lit Redstone Lamp does not have an Item.

Returns: The Item representation of this Block.  
Return Type: [ItemDefinition](/vanilla/api/item/ItemDefinition)

```zenscript
// Block.asItem() as ItemDefinition

<block:minecraft:grass_block>.asItem();
```

:::

:::group{name=getCommandString}

Gets the block bracket handler syntax for this Block.

 E.G.
 `<block:minecraft:dirt>`

Returns: The block bracket handler syntax for this Block.  
Return Type: string

```zenscript
// Block.getCommandString() as string

<block:minecraft:grass_block>.getCommandString();
```

:::

:::group{name=getDefaultState}

Gets the default [BlockState](/vanilla/api/block/BlockState) of this Block.

Returns: The default [BlockState](/vanilla/api/block/BlockState) of this Block.  
Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// Block.getDefaultState() as BlockState

<block:minecraft:grass_block>.getDefaultState();
```

:::

:::group{name=getDescriptionId}

Gets the translation key that is used to localize this Block.

Returns: The unlocalized name of this block.  
Return Type: string

```zenscript
// Block.getDescriptionId() as string

<block:minecraft:grass_block>.getDescriptionId();
```

:::

:::group{name=getExplosionResistance}

Gets the blast resistance of this Block.

Returns: The blast resistance of this Block.  
Return Type: float

```zenscript
// Block.getExplosionResistance() as float

<block:minecraft:grass_block>.getExplosionResistance();
```

:::

:::group{name=getFriction}

Gets the friction of this Block.

Returns: The friction of this Block.  
Return Type: float

```zenscript
// Block.getFriction() as float

<block:minecraft:grass_block>.getFriction();
```

:::

:::group{name=getJumpFactor}

Gets the jump factor of this Block.

Returns: The jump factor of this Block.  
Return Type: float

```zenscript
// Block.getJumpFactor() as float

<block:minecraft:grass_block>.getJumpFactor();
```

:::

:::group{name=getLootTable}

Gets the loot table id for this Block.

Returns: The loot table id for this Block.  
Return Type: string

```zenscript
// Block.getLootTable() as string

<block:minecraft:grass_block>.getLootTable();
```

:::

:::group{name=getName}

Gets the name of this Block

Returns: The name of this block.  
Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
// Block.getName() as MutableComponent

<block:minecraft:grass_block>.getName();
```

:::

:::group{name=getPossibleStates}

Gets a list of valid [BlockState](/vanilla/api/block/BlockState)s for this Block.

Returns: A list of valid [BlockState](/vanilla/api/block/BlockState)s for this Block.  
Return Type: stdlib.List&lt;[BlockState](/vanilla/api/block/BlockState)&gt;

```zenscript
// Block.getPossibleStates() as stdlib.List<BlockState>

<block:minecraft:grass_block>.getPossibleStates();
```

:::

:::group{name=getRegistryName}

Gets the registry name of this block.

Returns: A ResourceLocation of the registry name of this block.  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Block.getRegistryName() as ResourceLocation

<block:minecraft:grass_block>.getRegistryName();
```

:::

:::group{name=getSpeedFactor}

Gets the speed factor of this Block.

Returns: The speed factor of this Block.  
Return Type: float

```zenscript
// Block.getSpeedFactor() as float

<block:minecraft:grass_block>.getSpeedFactor();
```

:::

:::group{name=hasCollision}

Checks if entities can collide with this Block.

Returns: True if entities will collide with this Block. False otherwise.  
Return Type: boolean

```zenscript
// Block.hasCollision() as boolean

<block:minecraft:grass_block>.hasCollision();
```

:::

:::group{name=hasDynamicShape}

Checks if the opacity of this block is different in different areas of the Block.

Returns: True if this Block has variable opacity. False otherwise.  
Return Type: boolean

```zenscript
// Block.hasDynamicShape() as boolean

<block:minecraft:grass_block>.hasDynamicShape();
```

:::

:::group{name=isPossibleToRespawnInThis}

Checks if an entity can be spawned inside this Block.

 This is used to find valid spawn locations for players.

Returns: True if an entity can be spawned in this Block. False Otherwise.  
Return Type: boolean

```zenscript
Block.isPossibleToRespawnInThis(state as BlockState) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=matches}

Checks whether this Block matches another Block.

Returns: True if this Block matches the other Block. False otherwise.  
Return Type: boolean

```zenscript
Block.matches(other as Block) as boolean
```

| Parameter |               Type                |                   Description                   |
|-----------|-----------------------------------|-------------------------------------------------|
| other     | [Block](/vanilla/api/block/Block) | The other Block to check if this Block matches. |


:::

:::group{name=setExplosionResistance}

Sets the blast resistance of this Block.

```zenscript
// Block.setExplosionResistance(resistance as float)

<block:minecraft:grass_block>.setExplosionResistance(2);
```

| Parameter  | Type  |               Description               |
|------------|-------|-----------------------------------------|
| resistance | float | The new blast resistance of this Block. |


:::

:::group{name=setFriction}

Sets the friction of this Block.

```zenscript
// Block.setFriction(friction as float)

<block:minecraft:grass_block>.setFriction(2);
```

| Parameter | Type  |           Description           |
|-----------|-------|---------------------------------|
| friction  | float | The new friction of this Block. |


:::

:::group{name=setHasCollision}

Sets whether entities can collide with this Block.

```zenscript
// Block.setHasCollision(canCollide as boolean)

<block:minecraft:grass_block>.setHasCollision(true);
```

| Parameter  |  Type   |              Description              |
|------------|---------|---------------------------------------|
| canCollide | boolean | Can entities collide with this Block. |


:::

:::group{name=setJumpFactor}

Sets the jump factor of this Block.

```zenscript
// Block.setJumpFactor(jumpFactor as float)

<block:minecraft:grass_block>.setJumpFactor(2);
```

| Parameter  | Type  |            Description             |
|------------|-------|------------------------------------|
| jumpFactor | float | The new jump factor of this Block. |


:::

:::group{name=setSpeedFactor}

Sets the speed factor of this Block.

```zenscript
// Block.setSpeedFactor(speedFactor as float)

<block:minecraft:grass_block>.setSpeedFactor(2);
```

|  Parameter  | Type  |             Description             |
|-------------|-------|-------------------------------------|
| speedFactor | float | The new speed factor of this Block. |


:::


## Properties

|        Name         |                              Type                              | Has Getter | Has Setter |                                                 Description                                                 |
|---------------------|----------------------------------------------------------------|------------|------------|-------------------------------------------------------------------------------------------------------------|
| commandString       | string                                                         | true       | false      | Gets the block bracket handler syntax for this Block. <br />  <br />  E.G. <br />  `<block:minecraft:dirt>` |
| defaultState        | [BlockState](/vanilla/api/block/BlockState)                    | true       | false      | Gets the default [BlockState](/vanilla/api/block/BlockState) of this Block.                                 |
| descriptionId       | string                                                         | true       | false      | Gets the translation key that is used to localize this Block.                                               |
| dynamicShape        | boolean                                                        | true       | false      | Checks if the opacity of this block is different in different areas of the Block.                           |
| explosionResistance | float                                                          | true       | true       | Gets the blast resistance of this Block.                                                                    |
| friction            | float                                                          | true       | true       | Gets the friction of this Block.                                                                            |
| hasCollision        | boolean                                                        | true       | true       | Checks if entities can collide with this Block.                                                             |
| jumpFactor          | float                                                          | true       | true       | Gets the jump factor of this Block.                                                                         |
| lootTable           | string                                                         | true       | false      | Gets the loot table id for this Block.                                                                      |
| name                | [MutableComponent](/vanilla/api/text/MutableComponent)         | true       | false      | Gets the name of this Block                                                                                 |
| possibleStates      | stdlib.List&lt;[BlockState](/vanilla/api/block/BlockState)&gt; | true       | false      | Gets a list of valid [BlockState](/vanilla/api/block/BlockState)s for this Block.                           |
| registryName        | [ResourceLocation](/vanilla/api/resource/ResourceLocation)     | true       | false      | Gets the registry name of this block.                                                                       |
| speedFactor         | float                                                          | true       | true       | Gets the speed factor of this Block.                                                                        |

