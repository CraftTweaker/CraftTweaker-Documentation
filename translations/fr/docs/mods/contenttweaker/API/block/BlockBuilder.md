# BlockBuilder

The blockbuilder is used to... build blocks (you totally didn't see that one coming, right... right?).<br> Once you created it you can set various properties which will be outlined by the separate methods. <p> You can also change the block's type to create a more specialized form of block (e.g. stairs or Blocks that can be rotated in the same way logs can). To tell CoT that you want the block to appear ingame you need to call [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) and specify a valid resource location path.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## Implemented Interfaces
BlockBuilder implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors
Creates a new BlockBuilder. Remember that this will _not_ create a new block in the game, you need to call [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) for that.
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Paramètre | Type de texte                                                                        | Libellé                           | IsOptional | Valeur par défaut            |
| --------- | ------------------------------------------------------------------------------------ | --------------------------------- | ---------- | ---------------------------- |
| Matériel  | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | The material this block will have | vrai       | `<blockmaterial:iron>` |



## Méthodes
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Paramètre        | Type de texte        | Libellé                              |
| ---------------- | -------------------- | ------------------------------------ |
| resourceLocation | Chaîne de caractères | The resource path to give this block |


### withHardnessAndResistance

Sets the block's hardness and resistance levels. Unlike the other method, this one only accepts one parameter and will use that value for both properties.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Paramètre             | Type de texte | Libellé                                           |
| --------------------- | ------------- | ------------------------------------------------- |
| hardnessAndResistance | flottant      | The value to set for hardness and for resistance. |



Sets the block's hardness and resistance levels. Unlike the other method, this one allows you to set each property one to a separate value.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Paramètre    | Type de texte | Libellé                          |
| ------------ | ------------- | -------------------------------- |
| hardnessIn   | flottant      | The value to set for hardness    |
| resistanceIn | flottant      | The value to set for resistance. |


### withHarvestLevel

Sets the mining level required to mine this block

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel as int);
myBlockBuilder.withHarvestLevel(3);
```

| Paramètre         | Type de texte | Libellé                    |
| ----------------- | ------------- | -------------------------- |
| Niveau de récolte | Indice        | The harvest level requried |


### withHarvestTool

Sets the tool required to harvest this block

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Paramètre        | Type de texte                                                                   | Libellé       |
| ---------------- | ------------------------------------------------------------------------------- | ------------- |
| Outil de récolte | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | The tool type |


### withItemGroup

Sets the item group in which this block will appear

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(group as mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Paramètre | Type de texte                                                                     | Libellé          |
| --------- | --------------------------------------------------------------------------------- | ---------------- |
| group     | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | The group to set |


### withLightValue

Sets the block's light value.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn as int);
myBlockBuilder.withLightValue(15);
```

| Paramètre    | Type de texte | Libellé                |
| ------------ | ------------- | ---------------------- |
| lightValueIn | Indice        | The light level to set |


### withLootFrom

Will instruct CoT to override this block's loot table with the one of the block Provided. Currently this will still create a loot table entry, though it will be ignored by the game.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn as crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Paramètre | Type de texte                                                 | Libellé                                      |
| --------- | ------------------------------------------------------------- | -------------------------------------------- |
| blockIn   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | The block whose loot table should be applied |


### withMaxStackSize

Sets the maximum Stack size that this block can have when in your inventory. Will be 64 if unchanged.

 Returns: `This builder, used for chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(size as int);
myBlockBuilder.withMaxStackSize(16);
```

| Paramètre | Type de texte | Libellé          |
| --------- | ------------- | ---------------- |
| taille    | Indice        | The size to set. |


### withRarity

Allows you to set the rarity of this block.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Paramètre | Type de texte        | Libellé    |
| --------- | -------------------- | ---------- |
| rareté    | Chaîne de caractères | The rarity |


### withSlipperiness

Sets the slipperiness.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn as float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Paramètre      | Type de texte | Libellé          |
| -------------- | ------------- | ---------------- |
| slipperinessIn | flottant      | The value to set |


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

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutDrops();
```

### withoutMovementBlocking

Instructs CoT that this block will does not block movement.

 Returns: `This builder, used for chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


