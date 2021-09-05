# BlockBuilder

The blockbuilder is used to... build blocks (you totally didn't see that one coming, right... right?).<br> Once you created it you can set various properties which will be outlined by the separate methods. <p> You can also change the block's type to create a more specialized form of block (e.g. stairs or Blocks that can be rotated in the same way logs can). To tell CoT that you want the block to appear ingame you need to call [this](.)#build(String) and specify a valid resource location path.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.BlockBuilder;
```


## 已实现的接口
BlockBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in BlockBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructor #构造函数

Creates a new BlockBuilder. <br />  Remember that this will _not_ create a new block in the game, you need to call [this](.)#build(String) for that.
```zenscript
new BlockBuilder(material as MCMaterial) as BlockBuilder
new BlockBuilder(<blockmaterial:earth>);
```

| 参数       | 类型                                                         | 描述                                | 可选   | DefaultValue         |
| -------- | ---------------------------------------------------------- | --------------------------------- | ---- | -------------------- |
| material | [MCMaterial #MC材料](/vanilla/api/block/material/MCMaterial) | The material this block will have | true | <blockmaterial:iron> |


## 方法

:::group{name=notSolid}

Instructs CoT that this block is not solid. <p> This is required if your model is not a full block (16x16x16). It is also required if your model is see-through (like glass). Set this if your block creates some X-Ray effects when it's placed.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.notSolid() as BlockBuilder

myBlockBuilder.notSolid();
```

:::

:::group{name=setRequiresTool}

Sets that the block needs a tool to harvest.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.setRequiresTool() as BlockBuilder

myBlockBuilder.setRequiresTool();
```

:::

:::group{name=withHardnessAndResistance}

Sets the block's hardness and resistance levels. Unlike the other method, this one only accepts one parameter and will use that value for both properties.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withHardnessAndResistance(hardnessAndResistance as float) as BlockBuilder

myBlockBuilder.withHardnessAndResistance(0.5f);
```

| 参数                    | 类型    | 描述                                                |
| --------------------- | ----- | ------------------------------------------------- |
| hardnessAndResistance | float | The value to set for hardness and for resistance. |


:::

:::group{name=withHardnessAndResistance}

Sets the block's hardness and resistance levels. Unlike the other method, this one allows you to set each property one to a separate value.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float) as BlockBuilder

myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| 参数           | 类型    | 描述                               |
| ------------ | ----- | -------------------------------- |
| hardnessIn   | float | The value to set for hardness    |
| resistanceIn | float | The value to set for resistance. |


:::

:::group{name=withHarvestLevel}

Sets the mining level required to mine this block

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withHarvestLevel(harvestLevel as int) as BlockBuilder

myBlockBuilder.withHarvestLevel(3);
```

| 参数           | 类型  | 描述                         |
| ------------ | --- | -------------------------- |
| harvestLevel | int | The harvest level requried |


:::

:::group{name=withHarvestTool}

Sets the tool required to harvest this block

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withHarvestTool(harvestTool as ToolType) as BlockBuilder

myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| 参数          | 类型                                     | 描述            |
| ----------- | -------------------------------------- | ------------- |
| harvestTool | [ToolType](/vanilla/api/tool/ToolType) | The tool type |


:::

:::group{name=withItemGroup}

Sets the item group in which this block will appear

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withItemGroup(group as MCItemGroup) as BlockBuilder

myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| 参数    | 类型                                                       | 描述               |
| ----- | -------------------------------------------------------- | ---------------- |
| group | [MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | The group to set |


:::

:::group{name=withLightValue}

Sets the block's light value.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withLightValue(lightValueIn as int) as BlockBuilder

myBlockBuilder.withLightValue(15);
```

| 参数           | 类型  | 描述                     |
| ------------ | --- | ---------------------- |
| lightValueIn | int | The light level to set |


:::

:::group{name=withLootFrom}

Will instruct CoT to override this block's loot table with the one of the block Provided. Currently this will still create a loot table entry, though it will be ignored by the game.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withLootFrom(blockIn as MCBlock) as BlockBuilder

myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| 参数      | 类型                                          | 描述                                           |
| ------- | ------------------------------------------- | -------------------------------------------- |
| blockIn | [MCBlock #MC方块](/vanilla/api/block/MCBlock) | The block whose loot table should be applied |


:::

:::group{name=withMaxStackSize}

Sets the maximum Stack size that this block can have when in your inventory. Will be 64 if unchanged.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withMaxStackSize(size as int) as BlockBuilder

myBlockBuilder.withMaxStackSize(16);
```

| 参数   | 类型  | 描述               |
| ---- | --- | ---------------- |
| size | int | The size to set. |


:::

:::group{name=withRarity}

Allows you to set the rarity of this block.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withRarity(rarity as string) as BlockBuilder

myBlockBuilder.withRarity("UNCOMMON");
```

| 参数     | 类型     | 描述         |
| ------ | ------ | ---------- |
| rarity | string | The rarity |


:::

:::group{name=withRenderType}

Sets the block's render type. Will also set the block as [this](.)#notSolid() if the argument is not solid

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withRenderType(renderType as BlockRenderType) as BlockBuilder

myBlockBuilder.withRenderType(BlockRenderType.TRANSLUCENT);
```

| 参数         | 类型                                                                | 描述                      |
| ---------- | ----------------------------------------------------------------- | ----------------------- |
| renderType | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | No Description Provided |


:::

:::group{name=withSlipperiness}

Sets the slipperiness.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withSlipperiness(slipperinessIn as float) as BlockBuilder

myBlockBuilder.withSlipperiness(0.5f);
```

| 参数             | 类型    | 描述               |
| -------------- | ----- | ---------------- |
| slipperinessIn | float | The value to set |


:::

:::group{name=withTickRandomly}

Sets that the block should be ticked randomly.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withTickRandomly() as BlockBuilder

myBlockBuilder.withTickRandomly();
```

:::

:::group{name=withType}

Sets the specific type of this block. After this method is called the builder's context will switch to the more provided type builder. That means that the methods of this builder will no longer be available, so any properties you wish to set should be set before you call this method.

Return Type: T

```zenscript
BlockBuilder.withType<T : BlockTypeBuilder>() as T
```

| 参数 | 类型                                                                  | 描述                                        |
| -- | ------------------------------------------------------------------- | ----------------------------------------- |
| T  | [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) | The Type of block that this should become |


:::

:::group{name=withoutDrops}

Will instruct CoT that this block will not have any loot entries. Currently this will still create a loot table entry, though it will be ignored by the game.

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withoutDrops() as BlockBuilder

myBlockBuilder.withoutDrops();
```

:::

:::group{name=withoutMovementBlocking}

Instructs CoT that this block will does not block movement. Will also set the block as [this](.)#notSolid()

Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withoutMovementBlocking() as BlockBuilder

myBlockBuilder.withoutMovementBlocking();
```

:::


