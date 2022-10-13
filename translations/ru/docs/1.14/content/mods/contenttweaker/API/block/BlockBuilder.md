# BlockBuilder

The blockbuilder is used to... build blocks (you totally didn't see that one coming, right... right?).<br> Once you created it you can set various properties which will be outlined by the separate methods. <p> You can also change the block's type to create a more specialized form of block (e.g. stairs or Blocks that can be rotated in the same way logs can). Чтобы сообщить CoT, что блок появится в игре, вам нужно вызвать [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) и указать правильный путь доступа к ресурсу.

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## Implemented Interfaces
BlockBuilder implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors
Creates a new BlockBuilder. Помните, что это _не_ создаст новый блок в игре, вам нужно вызвать [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) для этого.
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Параметр | Тип                                                                                  | Описание                          | IsOptional | Default Value                |
| -------- | ------------------------------------------------------------------------------------ | --------------------------------- | ---------- | ---------------------------- |
| material | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | The material this block will have | true       | `<blockmaterial:iron>` |



## Методы
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Параметр         | Тип    | Описание                             |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | String | The resource path to give this block |


### withHardnessAndResistance

Sets the block's hardness and resistance levels. Unlike the other method, this one only accepts one parameter and will use that value for both properties.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Параметр              | Тип   | Описание                                          |
| --------------------- | ----- | ------------------------------------------------- |
| hardnessAndResistance | float | The value to set for hardness and for resistance. |



Sets the block's hardness and resistance levels. Unlike the other method, this one allows you to set each property one to a separate value.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Параметр     | Тип   | Описание                         |
| ------------ | ----- | -------------------------------- |
| hardnessIn   | float | The value to set for hardness    |
| resistanceIn | float | The value to set for resistance. |


### withHarvestLevel

Sets the mining level required to mine this block

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel as int);
myBlockBuilder.withHarvestLevel(3);
```

| Параметр     | Тип | Описание                   |
| ------------ | --- | -------------------------- |
| harvestLevel | int | The harvest level requried |


### withHarvestTool

Sets the tool required to harvest this block

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Параметр    | Тип                                                                             | Описание      |
| ----------- | ------------------------------------------------------------------------------- | ------------- |
| harvestTool | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | The tool type |


### withItemGroup

Sets the item group in which this block will appear

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(group as mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Параметр | Тип                                                                               | Описание         |
| -------- | --------------------------------------------------------------------------------- | ---------------- |
| group    | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | The group to set |


### withLightValue

Sets the block's light value.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn as int);
myBlockBuilder.withLightValue(15);
```

| Параметр     | Тип | Описание               |
| ------------ | --- | ---------------------- |
| lightValueIn | int | The light level to set |


### withLootFrom

Will instruct CoT to override this block's loot table with the one of the block Provided. Currently this will still create a loot table entry, though it will be ignored by the game.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn as crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Параметр | Тип                                                           | Описание                                     |
| -------- | ------------------------------------------------------------- | -------------------------------------------- |
| blockIn  | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | The block whose loot table should be applied |


### withMaxStackSize

Sets the maximum Stack size that this block can have when in your inventory. Will be 64 if unchanged.

 Returns: `This builder, used for chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(size as int);
myBlockBuilder.withMaxStackSize(16);
```

| Параметр | Тип | Описание         |
| -------- | --- | ---------------- |
| size     | int | The size to set. |


### withRarity

Allows you to set the rarity of this block.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Параметр | Тип    | Описание   |
| -------- | ------ | ---------- |
| rarity   | String | The rarity |


### withSlipperiness

Sets the slipperiness.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn as float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Параметр       | Тип   | Описание         |
| -------------- | ----- | ---------------- |
| slipperinessIn | float | The value to set |


### withType

Sets the specific type of this block. After this method is called the builder's context will switch to the more provided type builder. That means that the methods of this builder will no longer be available, so any properties you wish to set should be set before you call this method.

 Returns: `A builder with the given block.`

Return type: T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| ParameterName | Bounds                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------- |
| T             | [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### withoutDrops

Will instruct CoT that this block will not have any loot entries. Currently this will still create a loot table entry, though it will be ignored by the game.

 Returns: `This builder, used for method chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutDrops();
```

### withoutMovementBlocking

Instructs CoT that this block will does not block movement.

 Returns: `This builder, used for chaining`

Тип возврата: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


