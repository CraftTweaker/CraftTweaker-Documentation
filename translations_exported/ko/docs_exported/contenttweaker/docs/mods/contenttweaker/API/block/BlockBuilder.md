# BlockBuilder

The blockbuilder is used to... build blocks (you totally didn't see that one coming, right... right?).<br> Once you created it you can set various properties which will be outlined by the separate methods. <p> You can also change the block's type to create a more specialized form of block (e.g. stairs or Blocks that can be rotated in the same way logs can). To tell CoT that you want the block to appear ingame you need to call [this](.)#build(String) and specify a valid resource location path.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.BlockBuilder;
```


## Implemented Interfaces
BlockBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in BlockBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
## Constructors

Creates a new BlockBuilder. Remember that this will _not_ create a new block in the game, you need to call [this](.)#build(String) for that.
```zenscript
new BlockBuilder(material as MCMaterial) as BlockBuilder
new BlockBuilder(<blockmaterial:earth>);
```
| Parameter | Type                                                 | Description                       | Optional | DefaultValue         |
| --------- | ---------------------------------------------------- | --------------------------------- | -------- | -------------------- |
| material  | [MCMaterial](/vanilla/api/block/material/MCMaterial) | The material this block will have | true     | <blockmaterial:iron> |

## Methods

### notSolid

Instructs CoT that this block is not solid. <p> This is required if your model is not a full block (16x16x16). It is also required if your model is see-through (like glass). Set this if your block creates some X-Ray effects when it's placed.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.notSolid() as BlockBuilder
myBlockBuilder.notSolid();
```
### withHardnessAndResistance

Sets the block's hardness and resistance levels. Unlike the other method, this one only accepts one parameter and will use that value for both properties.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withHardnessAndResistance(hardnessAndResistance as float) as BlockBuilder
myBlockBuilder.withHardnessAndResistance(0.5f);
```
| Parameter             | Type  | Description                                       |
| --------------------- | ----- | ------------------------------------------------- |
| hardnessAndResistance | float | The value to set for hardness and for resistance. |

Sets the block's hardness and resistance levels. Unlike the other method, this one allows you to set each property one to a separate value.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float) as BlockBuilder
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```
| Parameter    | Type  | Description                      |
| ------------ | ----- | -------------------------------- |
| hardnessIn   | float | The value to set for hardness    |
| resistanceIn | float | The value to set for resistance. |

### withHarvestLevel

Sets the mining level required to mine this block

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withHarvestLevel(harvestLevel as int) as BlockBuilder
myBlockBuilder.withHarvestLevel(3);
```
| Parameter    | Type | Description                |
| ------------ | ---- | -------------------------- |
| harvestLevel | int  | The harvest level requried |

### withHarvestTool

Sets the tool required to harvest this block

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withHarvestTool(harvestTool as MCToolType) as BlockBuilder
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```
| Parameter   | Type                                                   | Description   |
| ----------- | ------------------------------------------------------ | ------------- |
| harvestTool | [MCToolType](/mods/contenttweaker/API/item/MCToolType) | The tool type |

### withItemGroup

Sets the item group in which this block will appear

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withItemGroup(group as MCItemGroup) as BlockBuilder
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```
| Parameter | Type                                                     | Description      |
| --------- | -------------------------------------------------------- | ---------------- |
| group     | [MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | The group to set |

### withLightValue

Sets the block's light value.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withLightValue(lightValueIn as int) as BlockBuilder
myBlockBuilder.withLightValue(15);
```
| Parameter    | Type | Description            |
| ------------ | ---- | ---------------------- |
| lightValueIn | int  | The light level to set |

### withLootFrom

Will instruct CoT to override this block's loot table with the one of the block Provided. Currently this will still create a loot table entry, though it will be ignored by the game.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withLootFrom(blockIn as MCBlock) as BlockBuilder
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```
| Parameter | Type                                   | Description                                  |
| --------- | -------------------------------------- | -------------------------------------------- |
| blockIn   | [MCBlock](/vanilla/api/blocks/MCBlock) | The block whose loot table should be applied |

### withMaxStackSize

Sets the maximum Stack size that this block can have when in your inventory. Will be 64 if unchanged.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withMaxStackSize(size as int) as BlockBuilder
myBlockBuilder.withMaxStackSize(16);
```
| Parameter | Type | Description      |
| --------- | ---- | ---------------- |
| size      | int  | The size to set. |

### withRarity

Allows you to set the rarity of this block.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withRarity(rarity as string) as BlockBuilder
myBlockBuilder.withRarity("UNCOMMON");
```
| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| rarity    | string | The rarity  |

### withSlipperiness

Sets the slipperiness.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withSlipperiness(slipperinessIn as float) as BlockBuilder
myBlockBuilder.withSlipperiness(0.5f);
```
| Parameter      | Type  | Description      |
| -------------- | ----- | ---------------- |
| slipperinessIn | float | The value to set |

### withType

Sets the specific type of this block. After this method is called the builder's context will switch to the more provided type builder. That means that the methods of this builder will no longer be available, so any properties you wish to set should be set before you call this method.

Return Type: T

```zenscript
BlockBuilder.withType<T : BlockTypeBuilder>() as T
```
| Parameter | Type                                                                | Description                               |
| --------- | ------------------------------------------------------------------- | ----------------------------------------- |
| T         | [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) | The Type of block that this should become |

### withoutDrops

Will instruct CoT that this block will not have any loot entries. Currently this will still create a loot table entry, though it will be ignored by the game.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withoutDrops() as BlockBuilder
myBlockBuilder.withoutDrops();
```
### withoutMovementBlocking

Instructs CoT that this block will does not block movement. Will also set the block as [this](.)#notSolid()

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
BlockBuilder.withoutMovementBlocking() as BlockBuilder
myBlockBuilder.withoutMovementBlocking();
```

