# BlockBuilder

The blockbuilder is used to... build blocks (you totally didn't see that one coming, right... right?).<br> Once you created it you can set various properties which will be outlined by the separate methods. <p> You can also change the block's type to create a more specialized form of block (e.g. stairs or Blocks that can be rotated in the same way logs can). To tell CoT that you want the block to appear ingame you need to call [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) and specify a valid resource location path.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## Interfacce Implementate
BlockBuilder implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors
Creates a new BlockBuilder. Remember that this will _not_ create a new block in the game, you need to call [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) for that.
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Parametro | Tipo                                                                                 | Descrizione                       | IsOptional | Valore Predefinito           |
| --------- | ------------------------------------------------------------------------------------ | --------------------------------- | ---------- | ---------------------------- |
| materiale | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | The material this block will have | vero       | `<blockmaterial:iron>` |



## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |


### withHardnessAndResistance

Sets the block's hardness and resistance levels. Unlike the other method, this one only accepts one parameter and will use that value for both properties.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Parametro             | Tipo         | Descrizione                                       |
| --------------------- | ------------ | ------------------------------------------------- |
| hardnessAndResistance | galleggiante | The value to set for hardness and for resistance. |



Sets the block's hardness and resistance levels. Unlike the other method, this one allows you to set each property one to a separate value.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Parametro    | Tipo         | Descrizione                      |
| ------------ | ------------ | -------------------------------- |
| hardnessIn   | galleggiante | The value to set for hardness    |
| resistanceIn | galleggiante | The value to set for resistance. |


### withHarvestLevel

Sets the mining level required to mine this block

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel as int);
myBlockBuilder.withHarvestLevel(3);
```

| Parametro           | Tipo | Descrizione                |
| ------------------- | ---- | -------------------------- |
| livello di raccolta | int  | The harvest level requried |


### withHarvestTool

Sets the tool required to harvest this block

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Parametro   | Tipo                                                                            | Descrizione   |
| ----------- | ------------------------------------------------------------------------------- | ------------- |
| harvestTool | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | The tool type |


### withItemGroup

Sets the item group in which this block will appear

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(group as mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Parametro | Tipo                                                                              | Descrizione      |
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

| Parametro    | Tipo | Descrizione            |
| ------------ | ---- | ---------------------- |
| lightValueIn | int  | The light level to set |


### withLootFrom

Will instruct CoT to override this block's loot table with the one of the block Provided. Currently this will still create a loot table entry, though it will be ignored by the game.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn as crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Parametro | Tipo                                                          | Descrizione                                  |
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

| Parametro  | Tipo | Descrizione      |
| ---------- | ---- | ---------------- |
| dimensione | int  | The size to set. |


### withRarity

Allows you to set the rarity of this block.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Parametro | Tipo    | Descrizione |
| --------- | ------- | ----------- |
| rarità    | Stringa | The rarity  |


### withSlipperiness

Sets the slipperiness.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn as float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Parametro      | Tipo         | Descrizione      |
| -------------- | ------------ | ---------------- |
| slipperinessIn | galleggiante | The value to set |


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


